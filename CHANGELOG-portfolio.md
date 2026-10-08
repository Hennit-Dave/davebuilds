# Portfolio refresh checklist

Groups A, B and C implemented locally on `feat/portfolio-refresh`; not deployed. Names follow the approved correction: David Enitan / Dave Hennit.

| Item | Status | Outcome or remaining work |
| --- | --- | --- |
| 1. Hero | Done | Requested headline, subtitle and tagline; existing visual style retained. |
| 2. Availability | Done | One line from `site.js`; internship wording removed from published content. |
| 3. Contact | Done | Heading retained; one roles/freelance sentence and supplied email. |
| 4. Identity | Done | David Enitan throughout display copy; old identity screenshots excluded from build. Existing LinkedIn URL retained. |
| 5. How I work | Done | Four steps covering briefs/prompts/AGENTS.md, planning, review and proof. |
| 5b. Tools | Done | Exactly Antigravity, Claude, Codex, Figma, Git, GitHub and Vercel, linked. |
| 6. Voice | Done | Direct homepage copy and explicit AI attribution in original portfolio/TaskFlow stories. New B content preserves supplied roles and factual limits. |
| 7. Project cards | Done | Three data-driven cards, optimized images, roles/status/links, and two link-free in-progress entries. Older projects remain on DaveBuilds only. |
| 8. API case study | Done with requested TODOs | Six requested headings from supplied notes; checks 2–5 explicitly marked TODO. |
| 9. Open source | Done | Supplied merged contribution and PR link added. |
| 10. Title escaping | Done — not reproduced locally | Chrome displays `&` correctly. Retained valid `&amp;`; updated role wording. Deployed behavior unverified. |
| 11. Navigation exposure | Done | Separate responsive menus were the source of duplicate markup. Hidden/display rules expose the applicable menu; desktop resize closes mobile state. Handler regression checks pass; native interactive retest was blocked by the UI tool (see evidence). |
| 12. Antigravity link | Done | `https://antigravity.google`. |
| 13. Copyright year | Done — existing code verified | Chrome displays 2026 via `new Date().getFullYear()`. |
| 14. Metadata | Done | Matching description, canonical, Open Graph and Twitter metadata on all six pages. |
| 15. Social links | Done with verification limit | Exact supplied GitHub, LinkedIn and X destinations retained. GitHub/X returned 200; LinkedIn returned 999 to automated requests, so its live destination was not fully verified. |
| 16. Anchor offsets | Done | Anchored sections/headings have scroll-margin-top. Rendered at 360px: 88px offset versus 65px nav. Actual tap-through retest has the native-tool limitation recorded in evidence. |
| 17. Fixed-element overlap | Done | At 360px only the top nav and decorative progress strip are fixed. Hero spacing clears the nav; contact/footer/card content remains visible. Full-page captures show no horizontal overflow. |

## Validation and evidence

- A: build and lint passed; actual output in `docs/evidence/group-a-checks.txt`.
- A: desktop Chrome content review recorded in `docs/evidence/group-a-review.md`.
- B: build and lint passed; actual output in `docs/evidence/group-b-checks.txt`.
- C: build/lint and structural checks passed; actual output, initial failures and corrections in `docs/evidence/group-c-checks.txt`.
- Required home 360/768/1280px, project card and case-study screenshots saved. Extra 360px dark-theme and case-study captures included.
- Stock Lighthouse 13.5.0 mobile, local build: home **97 / 100 / 100 / 100**, case study **99 / 100 / 100 / 100** (Performance / Accessibility / Best Practices / SEO). Accessibility 95+ target met in these measured runs.
- Initial home audit was **98 / 96 / 100 / 100**; low-contrast links corrected using existing tokens. Initial report retained.
- Existing stack and tokens retained; lint packages are dev-only. Reduced-motion CSS/scroll behavior retained and strengthened; skip links and one h1 per page verified.
- `.DS_Store` ignored; original `png/` images untouched and untracked. Optimized publishing copies live in `assets/projects/`.
- Evidence methods and limitations: [`docs/evidence/README.md`](docs/evidence/README.md).
- API checks 2–5 remain explicitly TODO as requested; no unrecorded results added.
