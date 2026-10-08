// Pure rendering functions shared by the browser and static build.
/* exported renderProjectCard, renderProjectImage, escapeMarkup, heroicon */
function escapeMarkup(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderProjectImage(image, sizes = "(max-width: 600px) calc(100vw - 48px), (max-width: 1100px) 45vw, 380px") {
  return `<figure class="project-figure${image.portrait ? " portrait" : ""}">
    <a href="${escapeMarkup(image.srcset.split(", ").at(-1).split(" ")[0])}" aria-label="View full screenshot: ${escapeMarkup(image.alt)}">
      <img src="${escapeMarkup(image.src)}" srcset="${escapeMarkup(image.srcset)}"
        sizes="${sizes}" width="${image.width}" height="${image.height}"
        alt="${escapeMarkup(image.alt)}" loading="lazy" decoding="async">
    </a>
    <figcaption>${escapeMarkup(image.caption)}</figcaption>
  </figure>`;
}

// Heroicons v2 outline arrows (MIT), inlined so cards need no icon font or request.
const HEROICON_PATHS = {
  "arrow-right": "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
  "arrow-up-right": "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
};
function heroicon(name, extraClass = "") {
  return `<svg class="icon${extraClass ? ` ${extraClass}` : ""}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="${HEROICON_PATHS[name]}"/></svg>`;
}

function renderProjectCard(project) {
  const p = project;
  if (p.inProgress) {
    return `<article class="progress-card"><h4>${escapeMarkup(p.name)}</h4><span class="status-badge">In progress</span></article>`;
  }
  const links = [
    p.liveDemo && `<a href="${escapeMarkup(p.liveDemo)}">Live site ${heroicon("arrow-up-right")}</a>`,
    p.github && `<a href="${escapeMarkup(p.github)}">GitHub ${heroicon("arrow-up-right")}</a>`
  ].filter(Boolean).join("");
  return `<article class="project-card" aria-labelledby="project-${p.slug}">
    <div class="window-chrome">
      <div class="window-chrome-dots" aria-hidden="true"><span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span></div>
      <span class="window-title">${escapeMarkup(p.slug)}.app</span>
    </div>
    <div class="project-media${p.images.length > 1 ? " paired" : ""}">${p.images.map(image => renderProjectImage(image, p.images.length > 1 ? "(max-width: 600px) 40vw, 190px" : undefined)).join("")}</div>
    <div class="project-body">
      <div class="project-status">${p.badges.map(badge => `<span class="status-badge">${escapeMarkup(badge)}</span>`).join("")}</div>
      <h3 class="project-title" id="project-${p.slug}">${escapeMarkup(p.name)}</h3>
      <p class="project-blurb">${escapeMarkup(p.description)}</p>
      <p class="project-role"><strong>My role</strong><br>${escapeMarkup(p.role)}</p>
      ${p.note ? `<p class="project-note">${escapeMarkup(p.note)}</p>` : ""}
      <ul class="project-tags" aria-label="Technologies">${p.stack.map(tech => `<li>${escapeMarkup(tech)}</li>`).join("")}</ul>
      <div class="project-links">${links}</div>
      ${p.storyUrl ? `<a class="story-link" href="${escapeMarkup(p.storyUrl)}">Read case study ${heroicon("arrow-right", "story-arrow")}</a>` : ""}
    </div>
  </article>`;
}
