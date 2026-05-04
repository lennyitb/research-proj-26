const NAV_LINKS = [
  { href: "/pages/home.html",                label: "00 / HOME" },
  { href: "/pages/phreakers.html",           label: "01 / PHREAKERS" },
  { href: "/pages/the-system.html",          label: '02 / "THE SYSTEM"' },
  { href: "/pages/hiding-in-the-walls.html", label: "03 / HIDING IN THE WALLS" },
  { href: "/pages/pranking.html",            label: "04 / PRANKING" },
  { href: "/pages/mainstream-invasion.html", label: "05 / MAINSTREAM INVASION" },
  { href: "/pages/legacy.html",              label: "06 / DO WHAT TO THE POLICE?" },
  { href: "/pages/works-cited.html",         label: "07 / WORKS CITED" },
];

function currentPath() {
  let p = window.location.pathname;
  if (p.endsWith("/")) p += "index.html";
  return p;
}

function renderHeader() {
  const here = currentPath();
  const items = NAV_LINKS.map((l) => {
    const active = here.endsWith(l.href.replace(/^\//, ""));
    return `<li><a href="${l.href}"${active ? ' aria-current="page"' : ""}>${l.label}</a></li>`;
  }).join("");

  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-header__brand" href="/pages/home.html">PHREAKERS<span>//</span>Leonard H Phelan IV</a>
        <button class="hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" aria-label="Primary">
          <ul>${items}</ul>
        </nav>
      </div>
    </header>
    <div class="sidebar-overlay" aria-hidden="true"></div>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <p>
        Leonard H Phelan IV &middot; Culture of the Internet &middot; Prof. Russell Mills &middot; Spring 2026
      </p>
      <p>
        <a href="/pages/works-cited.html">Works Cited</a>
      </p>
    </footer>`;
}

function initSidebar() {
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav");
  const overlay = document.querySelector(".sidebar-overlay");
  if (!btn || !nav) return;

  function open() {
    nav.classList.add("open");
    overlay.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }

  function close() {
    nav.classList.remove("open");
    overlay.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => {
    nav.classList.contains("open") ? close() : open();
  });
  overlay.addEventListener("click", close);
}

function renderPagination() {
  const here = currentPath();
  const idx = NAV_LINKS.findIndex(
    (l) => here.endsWith(l.href.replace(/^\//, ""))
  );
  if (idx < 1) return "";

  const prev = NAV_LINKS[idx - 1];
  const next = NAV_LINKS[idx + 1];

  return `
    <nav class="page-pagination" aria-label="Page navigation">
      ${prev ? `<a class="page-pagination__link page-pagination__prev" href="${prev.href}">&larr; ${prev.label}</a>` : '<span></span>'}
      ${next ? `<a class="page-pagination__link page-pagination__next" href="${next.href}">${next.label} &rarr;</a>` : '<span></span>'}
    </nav>`;
}

function renderChrome() {
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = renderHeader();
  if (footerSlot) footerSlot.outerHTML = renderFooter();

  const main = document.querySelector("main");
  if (main) main.insertAdjacentHTML("beforeend", renderPagination());

  initSidebar();
}

function initLightbox() {
  function close(overlay) {
    overlay.remove();
  }

  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("zoomable")) return;
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    const img = document.createElement("img");
    img.src = e.target.src;
    img.alt = e.target.alt;
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => close(overlay));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const lb = document.querySelector(".lightbox");
      if (lb) close(lb);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  initLightbox();
});
