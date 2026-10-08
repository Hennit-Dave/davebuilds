// ---------------------------------------------------------------------------
// index.html-specific behavior. Shared behavior (theme, mobile menu, footer,
// scroll-reveal) lives in common.js. Project data lives in data.js.
// ---------------------------------------------------------------------------

function renderProjects() {
  const grid = document.getElementById("project-grid");
  const progress = document.getElementById("progress-grid");
  if (grid && !grid.querySelector(".project-card")) grid.innerHTML = PROJECTS.filter(p => p.featured && !p.inProgress).map(renderProjectCard).join("");
  if (progress && !progress.querySelector(".progress-card")) progress.innerHTML = PROJECTS.filter(p => p.featured && p.inProgress).map(renderProjectCard).join("");
}

// ---------------------------------------------------------------------------
// Active nav link on scroll
// ---------------------------------------------------------------------------
function initActiveNav() {
  const links = document.querySelectorAll("[data-nav]");
  const sections = ["home", "projects", "about", "contact"]
    .map(id => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `index.html#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });

  sections.forEach(s => io.observe(s));
}

// ---------------------------------------------------------------------------
// Hero scroll cue — hide after user starts scrolling
// ---------------------------------------------------------------------------
function initScrollCue() {
  const cue = document.getElementById("scroll-cue");
  if (!cue) return;
  const onScroll = () => {
    cue.classList.toggle("hide", window.scrollY > 60);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  cue.addEventListener("click", () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
}

// ---------------------------------------------------------------------------
// Magnetic buttons — subtle pull toward cursor, skipped on touch / reduced motion
// ---------------------------------------------------------------------------
function initMagnetic() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (reduced || coarse) return;

  document.querySelectorAll("[data-magnetic]").forEach(el => {
    el.style.transition = "transform 250ms cubic-bezier(0.16,1,0.3,1)";
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

// ---------------------------------------------------------------------------
// Reactive node-graph drift — cursor-linked, gated on reduced-motion + fine pointer
// ---------------------------------------------------------------------------
function initReactiveGraph() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const graph = document.querySelector(".node-graph");
  if (reduced || !fine || !graph) return;

  let mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener("pointermove", e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  (function frame() {
    tx += (mx - tx) * 0.06;
    ty += (my - ty) * 0.06;
    graph.style.transform = `translateY(-50%) translate3d(${tx * 12}px, ${ty * 10}px, 0)`;
    requestAnimationFrame(frame);
  })();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initActiveNav();
  initReveal();
  initScrollCue();
  initMagnetic();
  initReactiveGraph();
});
