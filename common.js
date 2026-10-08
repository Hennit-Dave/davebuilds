// ---------------------------------------------------------------------------
// Shared across every page (index.html, davebuilds.html, davebuilds-*.html):
// theme toggle, mobile menu, scroll-reveal, footer back-to-top, footer year.
// Page-specific behavior (project rendering, TOC scrollspy, etc.) lives in
// that page's own script.
// ---------------------------------------------------------------------------

// Initial data-theme is already set by the inline anti-flash script in
// <head> (reads localStorage, falls back to prefers-color-scheme) — this
// only wires up the toggle button and keeps the page live-synced to the
// OS/browser theme afterward.
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "light"));
  };

  applyTheme(root.getAttribute("data-theme") || "dark");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch { /* Theme still works without storage. */ }
      applyTheme(next);
    });
  }

  // Live-follow the device/browser theme in real time, in both directions.
  // The toggle button still lets you flip it instantly for the current view,
  // but the next real OS/browser theme change always takes over again —
  // it's treated as the user's latest, most deliberate signal.
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkQuery.addEventListener("change", (e) => {
    const next = e.matches ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch { /* Theme still works without storage. */ }
    applyTheme(next);
  });
}

function initMobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const desktop = window.matchMedia("(min-width: 761px)");
  if (!btn || !menu) return;

  const close = (restoreFocus = false) => {
    menu.hidden = true;
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
    if (restoreFocus) btn.focus();
  };
  const open = () => {
    if (desktop.matches) return;
    menu.hidden = false;
    menu.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
  };
  btn.addEventListener("click", () => menu.hidden ? open() : close());
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => close()));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !menu.hidden) close(true);
  });
  document.addEventListener("click", e => {
    if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) close();
  });
  desktop.addEventListener("change", () => {
    const focusWasInMenu = menu.contains(document.activeElement) || document.activeElement === btn;
    close();
    if (desktop.matches && focusWasInMenu) document.querySelector(".nav-links a")?.focus();
  });
  close();
}

// Drives any .scrub-reveal / .enter element present on the page, including
// ones rendered dynamically — call this AFTER any data-driven render() call.
/* exported initReveal */
function initReveal() {
  const targets = document.querySelectorAll(".scrub-reveal, .enter");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(t => io.observe(t));
}

function initFooter() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const topBtn = document.querySelector(".footer-top");
  if (topBtn) {
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-availability]").forEach(el => {
    el.textContent = SITE.availability;
  });
  initTheme();
  initMobileMenu();
  initFooter();
});
