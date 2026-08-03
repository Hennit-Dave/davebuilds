// ---------------------------------------------------------------------------
// davebuilds.html-specific behavior. Renders one card per finished project
// from the shared PROJECTS array in data.js — add a project there and it
// appears here automatically, no changes needed on this page.
// ---------------------------------------------------------------------------

function renderStoryGrid() {
  const grid = document.getElementById("story-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => {
    const thumb = p.thumbnail
      ? `<div class="story-card-thumb"><img src="${p.thumbnail}" alt="${p.name} screenshot" loading="lazy"></div>`
      : `<div class="story-card-thumb" style="--cover-a:${p.cover[0]};--cover-b:${p.cover[1]}"></div>`;

    return `
    <article class="story-card glass scrub-reveal" style="animation-delay:${i * 90}ms">
      ${thumb}
      <div class="story-card-body">
        <h2 class="story-card-title">${p.name}</h2>
        <p class="story-card-desc">${p.storyTeaser}</p>
        <div class="project-tags">${p.stack.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="story-card-meta">
          <span>${p.readingTime}</span>
          <span class="meta-sep">·</span>
          <span>Completed ${p.dateCompleted}</span>
        </div>
        <a class="story-card-cta" href="${p.storyUrl}">Explore Project <span class="story-arrow">→</span></a>
      </div>
    </article>
  `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderStoryGrid();
  initReveal();
});
