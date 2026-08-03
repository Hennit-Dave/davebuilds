// ---------------------------------------------------------------------------
// index.html-specific behavior. Shared behavior (theme, mobile menu, footer,
// scroll-reveal) lives in common.js. Project data lives in data.js.
// ---------------------------------------------------------------------------

const icons = {
  live: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  code: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => {
    const liveLink = p.liveDemo
      ? `<a href="${p.liveDemo}" target="_blank" rel="noopener">${icons.live} Live Demo</a>`
      : `<span class="disabled">${icons.live} Live Demo</span>`;

    const codeLink = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener">${icons.code} GitHub</a>`
      : "";

    const cover = p.thumbnail
      ? `<div class="project-cover"><img src="${p.thumbnail}" alt="${p.name} screenshot" loading="lazy"></div>`
      : `<div class="project-cover" style="--cover-a:${p.cover[0]};--cover-b:${p.cover[1]}"></div>`;

    return `
      <article class="project-card scrub-reveal" style="animation-delay:${i * 90}ms">
        <div class="window-chrome">
          <div class="window-chrome-dots">
            <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
          </div>
          <span class="window-title">${p.name.toLowerCase().replace(/\s+/g, "-")}.app</span>
        </div>
        ${cover}
        <div class="project-body">
          <h3 class="project-title">${p.name}</h3>
          <p class="project-blurb">${p.description}</p>
          <div class="project-tags">${p.stack.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="project-links">${liveLink}${codeLink}</div>
          <a class="story-link" href="${p.storyUrl}">Behind the Build <span class="story-arrow">→</span></a>
        </div>
      </article>
    `;
  }).join("");
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
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
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
