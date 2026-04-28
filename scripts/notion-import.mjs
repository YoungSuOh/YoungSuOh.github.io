/**
 * Notion → GitHub Blog 자동 임포트
 * 단일: node scripts/notion-import.mjs <url> --tag "DB" [--slug ncc-jdbc] [--build]
 * 배치: node scripts/notion-import.mjs --batch scripts/notion-batch.json [--build]
 */

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// ── .env ────────────────────────────────────────────────────────────────────
function loadEnv() {
  const p = path.join(root, ".env");
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

// ── Notion API ───────────────────────────────────────────────────────────────
function notionGet(endpoint, apiKey) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.notion.com",
        path: `/v1/${endpoint}`,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Notion-Version": "2022-06-28",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try { resolve(JSON.parse(data)); }
          catch { reject(new Error("JSON parse error: " + data.slice(0, 300))); }
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function fetchAllBlocks(blockId, apiKey) {
  const blocks = [];
  let cursor;
  do {
    const qs = cursor ? `?page_size=100&start_cursor=${cursor}` : "?page_size=100";
    const res = await notionGet(`blocks/${blockId}/children${qs}`, apiKey);
    if (res.object === "error") throw new Error(res.message);
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
    if (cursor) await sleep(350);
  } while (cursor);
  return blocks;
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ── 이미지 다운로드 ──────────────────────────────────────────────────────────
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const file = fs.createWriteStream(destPath);
    function get(u) {
      const mod = u.startsWith("https") ? https : http;
      mod.get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location);
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
        file.on("error", reject);
      }).on("error", reject);
    }
    get(url);
  });
}

// ── 리치텍스트 → HTML ─────────────────────────────────────────────────────────
function rt(richTexts) {
  if (!richTexts?.length) return "";
  return richTexts.map((r) => {
    let t = r.plain_text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (r.href) t = `<a href="${r.href}" target="_blank" rel="noopener">${t}</a>`;
    const a = r.annotations || {};
    if (a.code)          t = `<code>${t}</code>`;
    if (a.bold)          t = `<strong>${t}</strong>`;
    if (a.italic)        t = `<em>${t}</em>`;
    if (a.strikethrough) t = `<del>${t}</del>`;
    if (a.underline)     t = `<u>${t}</u>`;
    return t;
  }).join("");
}

// ── 블록 → HTML ──────────────────────────────────────────────────────────────
async function blocksToHtml(blocks, apiKey, imageDir, imgPrefix) {
  const out = [];
  let imgIdx = 1;
  let i = 0;

  while (i < blocks.length) {
    const b = blocks[i];
    const t = b.type;
    const d = b[t];

    if (t === "bulleted_list_item") {
      out.push("<ul>");
      while (i < blocks.length && blocks[i].type === "bulleted_list_item") {
        const bd = blocks[i].bulleted_list_item;
        const children = blocks[i].has_children
          ? "\n" + await blocksToHtml(await fetchAllBlocks(blocks[i].id, apiKey), apiKey, imageDir, imgPrefix)
          : "";
        out.push(`  <li>${rt(bd.rich_text)}${children}</li>`);
        i++;
      }
      out.push("</ul>");
      continue;
    }

    if (t === "numbered_list_item") {
      out.push("<ol>");
      while (i < blocks.length && blocks[i].type === "numbered_list_item") {
        const nd = blocks[i].numbered_list_item;
        const children = blocks[i].has_children
          ? "\n" + await blocksToHtml(await fetchAllBlocks(blocks[i].id, apiKey), apiKey, imageDir, imgPrefix)
          : "";
        out.push(`  <li>${rt(nd.rich_text)}${children}</li>`);
        i++;
      }
      out.push("</ol>");
      continue;
    }

    switch (t) {
      case "paragraph": {
        const text = rt(d.rich_text);
        if (text) out.push(`<p>${text}</p>`);
        break;
      }
      case "heading_1": out.push(`<h2>${rt(d.rich_text)}</h2>`); break;
      case "heading_2": out.push(`<h3>${rt(d.rich_text)}</h3>`); break;
      case "heading_3": out.push(`<h4>${rt(d.rich_text)}</h4>`); break;
      case "code": {
        const lang = d.language || "";
        const code = (d.rich_text || []).map((r) => r.plain_text).join("")
          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        out.push(`<pre><code${lang ? ` class="language-${lang}"` : ""}>${code}</code></pre>`);
        break;
      }
      case "quote":
        out.push(`<blockquote>${rt(d.rich_text)}</blockquote>`);
        break;
      case "callout": {
        const icon = d.icon?.emoji ? `${d.icon.emoji} ` : "";
        const text = rt(d.rich_text);
        out.push(`<blockquote><strong>${icon}${text}</strong></blockquote>`);
        break;
      }
      case "divider":
        out.push("<hr>");
        break;
      case "image": {
        const url = d.type === "external" ? d.external?.url : d.file?.url;
        if (url) {
          const ext = url.split("?")[0].match(/\.(\w+)$/)?.[1] || "png";
          const fname = `img_${String(imgIdx).padStart(3, "0")}.${ext}`;
          const dest = path.join(imageDir, fname);
          const cap = rt(d.caption);
          try {
            await downloadFile(url, dest);
            out.push(`<figure>\n  <img src="${imgPrefix}${fname}" alt="${cap || fname}">\n${cap ? `  <figcaption>${cap}</figcaption>\n` : ""}</figure>`);
            imgIdx++;
          } catch (e) {
            console.warn(`    ⚠ 이미지 실패: ${fname} (${e.message})`);
          }
        }
        break;
      }
      case "table": {
        const rows = await fetchAllBlocks(b.id, apiKey);
        out.push("<table>");
        rows.forEach((row, ri) => {
          const cells = row.table_row?.cells || [];
          const tag = ri === 0 && d.has_column_header ? "th" : "td";
          out.push(`  <tr>${cells.map((c) => `<${tag}>${rt(c)}</${tag}>`).join("")}</tr>`);
        });
        out.push("</table>");
        break;
      }
      case "toggle": {
        const summary = rt(d.rich_text);
        const children = b.has_children
          ? await blocksToHtml(await fetchAllBlocks(b.id, apiKey), apiKey, imageDir, imgPrefix)
          : "";
        out.push(`<details>\n  <summary>${summary}</summary>\n${children}\n</details>`);
        break;
      }
      case "child_page":
        out.push(`<p>📄 <a href="https://www.notion.so/${b.id.replace(/-/g,"")}" target="_blank" rel="noopener">${d.title}</a></p>`);
        break;
      case "bookmark":
      case "link_preview": {
        const href = d.url || "";
        out.push(`<p><a href="${href}" target="_blank" rel="noopener">${href}</a></p>`);
        break;
      }
      default: break;
    }

    if (b.has_children && !["toggle","table","bulleted_list_item","numbered_list_item"].includes(t)) {
      const ch = await blocksToHtml(await fetchAllBlocks(b.id, apiKey), apiKey, imageDir, imgPrefix);
      if (ch) out.push(`<div class="block-children">\n${ch}\n</div>`);
    }

    i++;
  }
  return out.join("\n");
}

// ── 유틸 ─────────────────────────────────────────────────────────────────────
function extractPageId(url) {
  const m = url.match(/([a-f0-9]{32})(?:[?#]|$)/i);
  if (!m) throw new Error("페이지 ID 추출 실패: " + url);
  const id = m[1];
  return [id.slice(0,8),id.slice(8,12),id.slice(12,16),id.slice(16,20),id.slice(20)].join("-");
}

function getTitle(page) {
  for (const key of ["title","Title","이름","Name"]) {
    const p = page.properties?.[key];
    if (p?.title?.length) return p.title.map((t) => t.plain_text).join("");
  }
  return "Untitled";
}

function categoryToDir(cat) {
  return String(cat).trim().replace(/\s*\/\s*/g,"-").replace(/\s+/g,"-");
}

function parseArgs(argv) {
  const flags = {}, pos = [];
  let i = 0;
  while (i < argv.length) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      flags[key] = (argv[i+1] && !argv[i+1].startsWith("--")) ? argv[++i] : true;
    } else pos.push(argv[i]);
    i++;
  }
  return { flags, pos };
}

// ── 1페이지 임포트 ────────────────────────────────────────────────────────────
async function importPage(url, opts, apiKey) {
  const { tag, date, slug: customSlug, category = "Naver Cloud Camp" } = opts;

  const pageId = extractPageId(url);
  const page = await notionGet(`pages/${pageId}`, apiKey);
  if (page.object === "error") throw new Error(page.message);

  const title = getTitle(page);
  const pageDate = date || page.created_time?.slice(0,10) || new Date().toISOString().slice(0,10);
  const slug = customSlug || `ncc-${pageId.slice(0,8)}`;
  const catDir = categoryToDir(category);

  console.log(`  📄 [${category}] ${title} → ${slug}`);

  const imageDir = path.join(root, "photo", "posts", catDir, slug);
  const imgPrefix = `../../photo/posts/${catDir}/${slug}/`;

  const blocks = await fetchAllBlocks(pageId, apiKey);
  const bodyHtml = await blocksToHtml(blocks, apiKey, imageDir, imgPrefix);

  // body 파일 저장
  const bodyRel = `body/${catDir.toLowerCase().replace(/\s+/g,"-")}/${slug}.html`;
  const bodyAbs = path.join(root, "data", bodyRel);
  fs.mkdirSync(path.dirname(bodyAbs), { recursive: true });
  fs.writeFileSync(bodyAbs, bodyHtml, "utf8");

  // posts.json 업데이트
  const postsPath = path.join(root, "data", "posts.json");
  const posts = JSON.parse(fs.readFileSync(postsPath, "utf8"));
  const idx = posts.findIndex((p) => p.slug === slug);

  const maxId = Math.max(0, ...posts.map((p) => {
    const m = p.id?.match(/post-0*(\d+)/); return m ? parseInt(m[1]) : 0;
  }));

  const entry = {
    id: idx >= 0 ? posts[idx].id : `post-${String(maxId + 1).padStart(3,"0")}`,
    slug, title, category,
    summary: `${title} — Naver Cloud Camp 정리 노트.`,
    date: pageDate,
    tags: [tag, "Naver Cloud Camp"].filter(Boolean),
    bodyFile: bodyRel,
  };

  if (idx >= 0) posts[idx] = entry;
  else posts.unshift(entry);

  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), "utf8");
  return entry;
}

// ── 진입점 ──────────────────────────────────────────────────────────────────
async function main() {
  loadEnv();
  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) { console.error("❌ NOTION_API_KEY 없음"); process.exit(1); }

  const { flags, pos } = parseArgs(process.argv.slice(2));

  if (flags.batch) {
    const batchPath = path.resolve(root, flags.batch);
    const batch = JSON.parse(fs.readFileSync(batchPath, "utf8"));
    console.log(`\n🚀 배치 임포트 — ${batch.posts.length}개\n`);
    let ok = 0, fail = 0;
    for (const item of batch.posts) {
      try {
        await importPage(item.url, {
          tag: item.tag,
          date: item.date,
          slug: item.slug,
          category: batch.category || "Naver Cloud Camp",
        }, apiKey);
        ok++;
        await sleep(400);
      } catch (e) {
        console.error(`  ❌ 실패: ${item.url}\n     ${e.message}`);
        fail++;
      }
    }
    console.log(`\n완료: 성공 ${ok}개, 실패 ${fail}개`);
  } else if (pos[0]) {
    await importPage(pos[0], {
      tag: flags.tag, date: flags.date, slug: flags.slug,
      category: flags.category || "Naver Cloud Camp",
    }, apiKey);
  } else {
    console.log("사용법:\n  단일: node scripts/notion-import.mjs <url> --tag DB\n  배치: node scripts/notion-import.mjs --batch scripts/notion-batch.json");
  }

  if (flags.build) {
    console.log("\n🔨 빌드 중...");
    const { execSync } = await import("child_process");
    execSync("npm run build", { cwd: root, stdio: "inherit" });
  }
}

main().catch((e) => { console.error("❌", e.message); process.exit(1); });
