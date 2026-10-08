# Portfolio refresh evidence

Measured on 2026-10-08 against the local production build served at
`http://127.0.0.1:4173/`. These are not deployed-site measurements.

## Screenshots

- [Home, 360px](home-360.png) — viewport 360 × 800.
- [Home, 768px](home-768.png) — viewport 768 × 900.
- [Home, 1280px](home-1280.png) — viewport 1280 × 900.
- [One complete project card](project-card.png) — crop of the 360px home capture.
- [API case study, 1280px](case-study.png).
- [API case study, 360px](case-study-360.png).
- [Home, 360px dark theme](home-360-dark.png).

All are full-page captures except the card crop. Layout JSON files record actual
viewport/document/body widths, loaded images, headings and fixed elements.
All captured page widths match their viewport; no horizontal overflow was found.
The 360px home inspection measures a 65px fixed nav, a 3px decorative progress
strip, and 88px scroll margins on anchored sections/headings. There are no fixed
bottom buttons covering contact or card content.

## Lighthouse

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home | 97 | 100 | 100 | 100 |
| API case study | 99 | 100 | 100 | 100 |

- [Home report](lighthouse-mobile.report.html), [raw JSON](lighthouse-mobile.report.json).
- [Case-study report](lighthouse-case-mobile.report.html), [raw JSON](lighthouse-case-mobile.report.json).
- [Initial home audit](lighthouse-mobile-initial.report.json): 98 / 96 / 100 / 100.
  Its contrast failures were fixed with existing light-theme text-on-container tokens.

Scores use **unmodified Lighthouse 13.5.0**, simulated mobile throttling, 360 × 800
screen emulation and deviceScaleFactor 1. Reports contain exact timing, Chrome
version and configuration. Both final runs have no run warnings. Performance
insights still identify render-blocking resources/network dependencies; the case
study also has an LCP discovery opportunity. No perfect-performance claim is made.
Automated accessibility scores do not establish complete screen-reader compliance.

Screenshot runs are separate from scoring runs. `tooling/screenshot-gatherer.mjs`
extends only Lighthouse's screenshot gatherer: it loads lazy images, restores the
original viewport and captures beyond it. This avoids Lighthouse's usual tall
viewport inflating the existing `100svh` hero. It also records read-only layout
measurements. It does not alter the scored reports. The custom capture config
audits accessibility only; those incidental scores are not the table above.

`capture-commands.txt` records capture/scoring commands and exits. The first
360px screenshot was captured separately with the same screenshot configuration.
Its card crop uses x=24, y=1113, width=312, height=895. The final 360px layout
inspection additionally records computed navigation visibility and anchor margins.
`tooling/capture-evidence.py` now includes all full-page screenshots for a rerun;
set `PORTFOLIO_LIGHTHOUSE_ROOT` to the installed Lighthouse package directory.
Lighthouse was run from a temporary npm cache, not added as a runtime dependency.

## Functional and content checks

- Actual build/lint output: [A](group-a-checks.txt), [B](group-b-checks.txt),
  [C](group-c-checks.txt). All final build/lint commands exit 0.
- All six built HTML pages pass: one h1, unique IDs, focusable main/skip target,
  metadata, meaningful nonempty image alt, dimensions and valid local destinations.
- C's HTML validation initially found missing dimensions on older story images;
  measured dimensions were added. A validator assumption about `#main` was then
  corrected to accept the existing `#story-main` target. Both failures are retained
  in the command log alongside the final passing run.
- The actual shared menu handlers pass a minimal DOM/event regression harness:
  open/ARIA state, Escape/focus return, closing on desktop resize, focus transfer,
  remaining closed after mobile return, link selection and outside dismissal.
- Native Chrome reading confirmed the rendered title uses `&`, not literal
  `&amp;`; valid HTML escaping was retained. The reported title issue could not
  be reproduced locally.
- Native Chrome accessibility-tree/content review confirmed the new cards,
  identity, roles, captions, links and footer. Final interactive clicking/keyboard
  retesting was blocked: native controls stopped responding and the tool returned
  `noWindowsAvailable` / ScreenCaptureKit invalid-parameter errors. The menu harness
  is not represented as an actual browser interaction or screen-reader test.
- Reduced motion is handled in CSS and scroll handlers; inspected in source.
  No native reduced-motion interaction test is claimed.
- [External link responses](link-checks.json): supplied GitHub/X/project/PR URLs
  returned 200. LinkedIn returned 999 to automated requests; its destination remains
  the exact supplied URL. Its old-name URL slug is preserved while displayed names
  are David Enitan / Dave Hennit.
- [PR metadata](open-source-pr.json) confirms the Time-Tracker contribution merged.
  The 96-test statement is the contribution's recorded result, not a fresh test run.
- API case-study checks 2–5 stay TODO. The notes' seven tests and rate-limit checks
  are explicitly described as recorded project results, not fresh portfolio tests.

No deployment or push was performed. Original `png/` files remain untouched;
optimized copies and size comparisons are recorded in `image-optimization.json`.
