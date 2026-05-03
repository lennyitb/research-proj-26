const NAV_LINKS = [
  { href: "/pages/home.html",                label: "00 / HOME" },
  { href: "/pages/phreakers.html",           label: "01 / PHREAKERS" },
  { href: "/pages/the-system.html",          label: '02 / "THE SYSTEM"' },
  { href: "/pages/hiding-in-the-walls.html", label: "03 / HIDING IN THE WALLS" },
  { href: "/pages/pranking.html",            label: "04 / PRANKING" },
  { href: "/pages/mainstream-invasion.html", label: "05 / MAINSTREAM INVASION" },
  { href: "/pages/legacy.html",              label: "06 / FUCK THE POLICE" },
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
        <a class="site-header__brand" href="/pages/home.html">PHREAKERS<span>::</span>WIRE</a>
        <nav class="site-nav" aria-label="Primary">
          <ul>${items}</ul>
        </nav>
      </div>
    </header>`;
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

function renderChrome() {
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = renderHeader();
  if (footerSlot) footerSlot.outerHTML = renderFooter();
}

document.addEventListener("DOMContentLoaded", renderChrome);
