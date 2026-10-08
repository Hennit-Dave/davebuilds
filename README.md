# Dave Hennit's portfolio

Static HTML, CSS and browser JavaScript. Dave Hennit is the brand; David Enitan
is the real name. Built with AI-assisted development and human direction/review.

## Local development

Use Node.js 24 or later and run `npm ci`. All npm dependencies are development-only.

- `npm run build` packages public HTML, CSS, JavaScript and assets into `dist/`.
  It renders the homepage availability line from `site.js`, so built content also
  contains it without JavaScript. Do not edit generated files.
- `npm run lint` checks browser JavaScript, inline HTML scripts and Node tooling
  using ESLint's recommended rules. This does not constitute a CSS or accessibility audit.
- `python3 -m http.server 4173 --directory dist` serves the build for review.

Vercel uses `vercel.json` to build and publish `dist/`. Source notes, raw `png/`
screenshots, tooling, and evidence are not included in that output. The original
portfolio screenshots are retained in the repository but excluded from publication
because they contain outdated identity and availability text.

## Content and design

- `site.js`: the single availability setting.
- `data.js`: project/story content shared by the two indexes.
- `index.html`: homepage copy and structure.
- `davebuilds-*.html`: individual stories.
- `portfolio-tokens.css`: existing color/type tokens; `styles.css`: existing
  layout, spacing and motion tokens plus component styling.

Keep the terminal identity, AI attribution, factual project roles, and supplied
screenshots. Evidence and per-group command output live in `docs/evidence/`.
