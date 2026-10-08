// The story index includes only entries with a real case-study route.
/* exported renderStoryCards */
function renderStoryCards() {
  return PROJECTS.filter(p => p.storyUrl).map(p => {
    const image = p.images?.[0];
    const thumb = image ? renderProjectImage(image) : p.thumbnail
      ? `<div class="story-card-thumb"><img src="${escapeMarkup(p.thumbnail)}" alt="${escapeMarkup(p.thumbnailAlt)}" width="${p.thumbnailWidth}" height="${p.thumbnailHeight}" loading="lazy" decoding="async"></div>`
      : "";
    return `<article class="story-card glass">
      ${thumb}
      <div class="story-card-body">
        <h2 class="story-card-title">${escapeMarkup(p.name)}</h2>
        <p class="story-card-desc">${escapeMarkup(p.storyTeaser)}</p>
        ${p.badges?.length ? `<div class="project-status">${p.badges.map(b => `<span class="status-badge">${escapeMarkup(b)}</span>`).join("")}</div>` : ""}
        <div class="project-tags">${p.stack.map(t => `<span>${escapeMarkup(t)}</span>`).join("")}</div>
        ${p.dateCompleted ? `<p class="story-card-meta">${escapeMarkup(p.readingTime)} · Completed ${escapeMarkup(p.dateCompleted)}</p>` : ""}
        <a class="story-card-cta" href="${escapeMarkup(p.storyUrl)}">Read story ${heroicon("arrow-right", "story-arrow")}</a>
      </div>
    </article>`;
  }).join("");
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("story-grid");
    if (grid && !grid.querySelector(".story-card")) grid.innerHTML = renderStoryCards();
    initReveal();
  });
}
