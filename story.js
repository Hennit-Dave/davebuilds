// ---------------------------------------------------------------------------
// Shared behavior for every davebuilds-*.html story page:
// table-of-contents scrollspy, mobile TOC toggle, copy-to-clipboard on code
// blocks. Reading progress is pure CSS (.scroll-progress, no JS needed).
// ---------------------------------------------------------------------------

function initTocScrollspy() {
  const links = document.querySelectorAll("[data-toc]");
  const sections = Array.from(links)
    .map(l => document.getElementById(l.getAttribute("href").slice(1)))
    .filter(Boolean);
  if (!sections.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-15% 0px -70% 0px" });

  sections.forEach(s => io.observe(s));
}

function initTocToggle() {
  const toc = document.querySelector(".story-toc");
  const toggle = document.querySelector(".toc-toggle");
  if (!toc || !toggle) return;

  toggle.addEventListener("click", () => {
    const open = toc.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  toc.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    toc.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function initCopyCode() {
  document.querySelectorAll(".code-block").forEach(block => {
    const btn = block.querySelector(".copy-btn");
    const code = block.querySelector("code");
    if (!btn || !code) return;

    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        const original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = original; }, 1800);
      } catch {
        btn.textContent = "Press Ctrl+C";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTocScrollspy();
  initTocToggle();
  initCopyCode();
  initReveal();
});
