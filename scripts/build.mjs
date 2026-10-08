import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "dist");
const site = runInNewContext(`${await readFile(join(root, "site.js"), "utf8")}; SITE`);
const rendering = runInNewContext(`${await readFile(join(root, "data.js"), "utf8")};
  ${await readFile(join(root, "project-card.js"), "utf8")};
  ${await readFile(join(root, "davebuilds.js"), "utf8")};
  ({ PROJECTS, renderProjectCard, renderStoryCards, renderProjectImage })`);
const escapeHtml = value => value.replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

// Only generated output is replaced. Source files and original images stay intact.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const files = (await readdir(root)).filter(name =>
  /\.(html|css|js)$/.test(name) && name !== "convert-tokens-to-css.js"
);
for (const name of files) {
  let source = await readFile(join(root, name), "utf8");
  if (name.endsWith(".html")) {
    source = source.replace(/(<span id="year">)[^<]*(<\/span>)/g, `$1${new Date().getFullYear()}$2`);
    source = source
      .replace("<!-- PROJECT_CARDS -->", rendering.PROJECTS.filter(p => p.featured && !p.inProgress).map(rendering.renderProjectCard).join(""))
      .replace("<!-- PROGRESS_CARDS -->", rendering.PROJECTS.filter(p => p.featured && p.inProgress).map(rendering.renderProjectCard).join(""))
      .replace("<!-- STORY_CARDS -->", rendering.renderStoryCards())
      .replace("<!-- API_SCREENSHOT -->", rendering.renderProjectImage(rendering.PROJECTS[0].images[0], "(max-width: 848px) calc(100vw - 48px), 800px"));
    // Render from the same config for visitors with JavaScript disabled.
    source = source.replace(/(<p\b[^>]*\bdata-availability[^>]*>)[\s\S]*?(<\/p>)/g,
      (_, open, close) => `${open}${escapeHtml(site.availability)}${close}`);
  }
  await writeFile(join(output, name), source);
}
await cp(join(root, "assets"), join(output, "assets"), {
  recursive: true,
  // Retain old identity screenshots in source history, but do not publish them.
  filter: source => !source.endsWith(".DS_Store") &&
    !source.startsWith(join(root, "assets", "portfolio"))
});
console.log(`Built ${files.filter(name => name.endsWith(".html")).length} HTML pages and ${files.filter(name => !name.endsWith(".html")).length} CSS/JS files into dist/.`);
console.log("Copied publishable assets; excluded original portfolio screenshots containing outdated identity/copy.");
console.log("Rendered availability from site.js. No runtime dependencies.");
