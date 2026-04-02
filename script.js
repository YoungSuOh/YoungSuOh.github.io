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
      button.addEventListener("click", () => renderPosts(button.dataset.category));
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

  function renderPosts(category = "All") {
    const root = document.getElementById("post-list");
    if (!root) return;

    const filtered =
      category === "All"
        ? data.posts
        : data.posts.filter((post) => post.category === category);

    root.innerHTML = filtered.length
      ? filtered.map(postCard).join("")
      : `<div class="card muted">선택한 카테고리에 글이 없습니다.</div>`;

    renderCategories(category);
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
    renderPosts();
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

  // 프로젝트 페이지 스크린샷 확대 보기
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const img = target.closest(".screenshot-item img");
    if (!(img instanceof HTMLImageElement)) return;
    e.preventDefault();
    openLightbox(img);
  });
})();
