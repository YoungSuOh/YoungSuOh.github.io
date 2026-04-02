import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPostPage(post, siteTitle) {
  const title = escapeHtml(post.title);
  const summary = escapeHtml(post.summary);
  const date = escapeHtml(post.date);
  const category = escapeHtml(post.category);
  const tags = (post.tags || [])
    .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
    .join("");

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${summary}" />
    <title>${title} · ${escapeHtml(siteTitle)}</title>
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="../index.html">${escapeHtml(siteTitle)}</a>
        <nav>
          <ul class="nav-list">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../index.html#blog">Blog</a></li>
            <li><a href="../index.html#archive">Archive</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="container article-page">
      <article class="card article-shell">
        <p class="article-meta">${date} · ${category}</p>
        <h1 class="article-title">${title}</h1>
        <p class="article-lead muted">${summary}</p>
        <div class="tags article-tags">${tags}</div>
        <div class="article-body post-body">
${post.bodyHtml}
        </div>
        <p class="article-back">
          <a class="text-link" href="../index.html#blog">← 목록으로</a>
        </p>
      </article>
    </main>

    <footer class="footer">
      <div class="container">
        <small>© ${new Date().getFullYear()} ${escapeHtml(siteTitle)}</small>
      </div>
    </footer>
  </body>
</html>
`;
}

function buildSiteDataJs(config, postsMeta) {
  const payload = {
    site: config.site,
    navigation: config.navigation,
    blogCategories: config.blogCategories,
    posts: postsMeta,
    projects: config.projects,
    contacts: config.contacts
  };
  return `window.BLOG_DATA = ${JSON.stringify(payload, null, 2)};
`;
}

function main() {
  const configPath = path.join(root, "site-config.json");
  const postsPath = path.join(root, "data", "posts.json");
  const outDir = path.join(root, "posts");

  if (!fs.existsSync(configPath)) {
    console.error("Missing site-config.json");
    process.exit(1);
  }
  if (!fs.existsSync(postsPath)) {
    console.error("Missing data/posts.json");
    process.exit(1);
  }

  const config = readJson(configPath);
  const postsRaw = readJson(postsPath);
  if (!Array.isArray(postsRaw)) {
    console.error("data/posts.json must be an array");
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const siteTitle = config.site?.title || "Blog";

  const postsMeta = postsRaw.map((post) => {
    if (!post.slug || !post.id) {
      console.error("Each post needs id and slug:", post);
      process.exit(1);
    }
    const link = `posts/${post.slug}.html`;
    return {
      id: post.id,
      title: post.title,
      category: post.category,
      summary: post.summary,
      date: post.date,
      tags: post.tags || [],
      link
    };
  });

  for (const post of postsRaw) {
    const html = buildPostPage(post, siteTitle);
    const filePath = path.join(outDir, `${post.slug}.html`);
    fs.writeFileSync(filePath, html, "utf8");
    console.log("Wrote", path.relative(root, filePath));
  }

  const siteDataPath = path.join(root, "site-data.js");
  fs.writeFileSync(siteDataPath, buildSiteDataJs(config, postsMeta), "utf8");
  console.log("Wrote", path.relative(root, siteDataPath));
}

main();
