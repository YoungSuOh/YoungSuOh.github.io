(function () {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** 항상 `site-data.js` 기준. 예전 template 저장본(localStorage)이 목록을 덮어쓰지 않도록 함 */
  function getData() {
    return window.BLOG_DATA || null;
  }

  const data = getData();

  const POSTS_PER_PAGE = 6;
  const blogState = { category: "All", page: 1, search: "" };

  function normalize(str) {
    return String(str || "").toLowerCase().trim();
  }

  function matchesSearch(post, query) {
    if (!query) return true;
    const q = normalize(query);
    if (normalize(post.title).includes(q)) return true;
    if (normalize(post.summary).includes(q)) return true;
    if ((post.tags || []).some((t) => normalize(t).includes(q))) return true;
    if (normalize(post.category).includes(q)) return true;
    return false;
  }

  function sortPostsByDateDesc(posts) {
    return posts.slice().sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
      return 0;
    });
  }

  function renderNav() {
    const nav = document.getElementById("main-nav");
    if (!nav) return;
    nav.innerHTML = data.navigation
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
  }

  function renderHero() {
    const title = document.getElementById("site-title");
    const desc = document.getElementById("site-description");
    if (title) title.textContent = data.site.title;
    if (desc) desc.textContent = data.site.description;
  }

  function renderCategories(selected) {
    const root = document.getElementById("category-list");
    if (!root) return;

    const categories = ["All", ...data.blogCategories];
    root.innerHTML = categories
      .map((category) => {
        const active = category === selected ? "active" : "";
        return `<li><button class="${active}" data-category="${category}">${category}</button></li>`;
      })
      .join("");

    root.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => renderPosts(button.dataset.category, 1));
    });
  }

  function postCard(post) {
    const tags = (post.tags || [])
      .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
      .join("");
    const title = escapeHtml(post.title);
    const summary = escapeHtml(post.summary);
    const hasLink = post.link && post.link !== "#";
    const titleBlock = hasLink
      ? `<h3 class="post-card-title"><a class="post-title-link" href="${escapeHtml(post.link)}">${title}</a></h3>`
      : `<h3 class="post-card-title">${title}</h3>`;
    return `
      <article class="card post-card">
        <div class="post-meta">${escapeHtml(post.date)} · ${escapeHtml(post.category)}</div>
        ${titleBlock}
        <p class="muted">${summary}</p>
        <div class="tags">${tags}</div>
      </article>
    `;
  }

  function renderPager(totalPages, currentPage, itemCount) {
    const pager = document.getElementById("blog-pager");
    if (!pager) return;
    if (itemCount === 0) {
      pager.innerHTML = "";
      return;
    }
    const prevDisabled = currentPage <= 1;
    const nextDisabled = currentPage >= totalPages;
    pager.innerHTML = `
      <button type="button" class="blog-pager__btn" data-blog-page="${currentPage - 1}" ${prevDisabled ? "disabled" : ""} aria-label="이전 페이지">이전</button>
      <span class="blog-pager__info">${currentPage} / ${totalPages}</span>
      <button type="button" class="blog-pager__btn" data-blog-page="${currentPage + 1}" ${nextDisabled ? "disabled" : ""} aria-label="다음 페이지">다음</button>
    `;
    pager.querySelectorAll("[data-blog-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = Number(btn.getAttribute("data-blog-page"));
        if (p >= 1 && p <= totalPages) renderPosts(undefined, p);
      });
    });
  }

  function renderPosts(category, page) {
    const root = document.getElementById("post-list");
    if (!root) return;

    if (category !== undefined && category !== null) blogState.category = category;
    if (typeof page === "number" && page >= 1) blogState.page = page;

    const { category: cat, search } = blogState;

    const byCategory =
      cat === "All" ? data.posts : data.posts.filter((post) => post.category === cat);
    const filtered = search ? byCategory.filter((p) => matchesSearch(p, search)) : byCategory;

    const sorted = sortPostsByDateDesc(filtered);
    const totalPages = Math.max(1, Math.ceil(sorted.length / POSTS_PER_PAGE));
    let currentPage = Math.min(Math.max(1, blogState.page), totalPages);
    blogState.page = currentPage;

    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const slice = sorted.slice(start, start + POSTS_PER_PAGE);

    const emptyMsg = search
      ? `<div class="card muted">"${escapeHtml(search)}" 검색 결과가 없습니다.</div>`
      : `<div class="card muted">선택한 카테고리에 글이 없습니다.</div>`;
    root.innerHTML = slice.length ? slice.map(postCard).join("") : emptyMsg;

    renderPager(totalPages, currentPage, sorted.length);
    renderCategories(cat);
    renderSearchStatus(search, sorted.length);
  }

  function renderSearchStatus(query, total) {
    const status = document.getElementById("blog-search-status");
    if (!status) return;
    if (!query) {
      status.hidden = true;
      status.innerHTML = "";
      return;
    }
    status.hidden = false;
    status.innerHTML = `<strong>"${escapeHtml(query)}"</strong> 검색 결과: <strong>${total}건</strong>`;
  }

  function setupSearch() {
    const input = document.getElementById("blog-search-input");
    const clearBtn = document.getElementById("blog-search-clear");
    if (!input) return;

    let debounceTimer;
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      clearBtn.hidden = !value;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        blogState.search = value;
        renderPosts(undefined, 1);
      }, 150);
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        input.value = "";
        clearBtn.hidden = true;
        blogState.search = "";
        renderPosts(undefined, 1);
        input.focus();
      });
    }
  }

  function renderProjects() {
    const root = document.getElementById("project-list");
    if (!root) return;
    root.innerHTML = data.projects
      .map((project) => {
        const name = escapeHtml(project.name);
        const desc = escapeHtml(project.description);
        const stack = project.stack
          .map(
            (item, idx) =>
              `<li class="project-tag project-tag--${idx % 6}">${escapeHtml(item)}</li>`
          )
          .join("");
        const periodBlock =
          project.period && String(project.period).trim()
            ? `<p class="project-card-period">${escapeHtml(project.period)}</p>`
            : "";
        const thumbSrc = project.thumbnail ? escapeHtml(project.thumbnail) : "";
        const thumbBlock =
          thumbSrc && project.link && project.link !== "#"
            ? `<a class="project-card-thumb" href="${escapeHtml(project.link)}" aria-label="${name} 썸네일"><img src="${thumbSrc}" alt="" width="400" height="250" loading="lazy" decoding="async" /></a>`
            : thumbSrc
              ? `<div class="project-card-thumb"><img src="${thumbSrc}" alt="" width="400" height="250" loading="lazy" decoding="async" /></div>`
              : "";
        const titleBlock =
          project.link && project.link !== "#"
            ? `<h3 class="project-card-title"><a class="project-card-title-link" href="${escapeHtml(project.link)}">${name}</a></h3>`
            : `<h3 class="project-card-title">${name}</h3>`;
        return `
      <article class="card project-card">
        ${thumbBlock}
        <div class="project-card-body">
        <div class="project-card-title-row">
          <span class="project-card-doc" aria-hidden="true"></span>
          ${titleBlock}
        </div>
        <p class="project-card-desc muted">${desc}</p>
        <ul class="project-card-tags">${stack}</ul>
        ${periodBlock}
        </div>
      </article>
    `;
      })
      .join("");
  }

  function renderArchive() {
    const root = document.getElementById("archive-body");
    if (!root) return;
    root.innerHTML = data.posts
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 5)
      .map((post) => {
        const titleCell =
          post.link && post.link !== "#"
            ? `<a class="text-link" href="${escapeHtml(post.link)}">${escapeHtml(post.title)}</a>`
            : escapeHtml(post.title);
        return `
      <tr>
        <td>${escapeHtml(post.date)}</td>
        <td>${escapeHtml(post.category)}</td>
        <td>${titleCell}</td>
      </tr>
    `;
      })
      .join("");
  }

  function renderContacts() {
    const root = document.getElementById("contact-list");
    if (!root) return;
    root.innerHTML = data.contacts
      .map(
        (item) => `
      <article class="card">
        <h3>${item.type}</h3>
        <a class="muted" href="${item.href}" target="_blank" rel="noreferrer">${item.value}</a>
      </article>
    `
      )
      .join("");
  }

  if (data) {
    renderNav();
    renderHero();
    setupSearch();
    renderPosts("All", 1);
    renderProjects();
    renderArchive();
    renderContacts();
  }

  function ensureLightbox() {
    if (document.getElementById("lightbox")) return;

    const root = document.createElement("div");
    root.className = "lightbox";
    root.id = "lightbox";
    root.innerHTML = `
      <div class="lightbox__backdrop" data-close="1"></div>
      <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-label="이미지 확대 보기">
        <div class="lightbox__content">
          <button type="button" class="lightbox__x" data-close="1" aria-label="닫기">×</button>
          <img class="lightbox__img" alt="" />
        </div>
      </div>
    `;

    document.body.appendChild(root);

    function close() {
      root.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    root.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.dataset.close) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && root.classList.contains("is-open")) close();
    });

  }

  function openLightbox(img) {
    ensureLightbox();
    const root = document.getElementById("lightbox");
    const modalImg = root.querySelector(".lightbox__img");

    modalImg.src = img.currentSrc || img.src;
    modalImg.alt = img.alt || "";

    root.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  // 프로젝트 스크린샷 + 블로그 포스트 본문 이미지 확대 보기
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const img =
      target.closest(".screenshot-item img") ||
      target.closest(".post-body img");
    if (!(img instanceof HTMLImageElement)) return;
    e.preventDefault();
    openLightbox(img);
  });
})();
