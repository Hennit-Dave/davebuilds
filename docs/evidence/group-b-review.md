# Group B review

- Three featured cards in the required order; shared pure renderer in project-card.js, content in data.js.
- Static build renders both indexes from the same data/functions. Browser rendering is a fallback and does not replace existing built cards.
- Older stories appear only in DaveBuilds. Portfolio placeholder links removed.
- Rota and Matinee contain names/status only, with no images or links.
- Jobs wording: at-least-once with an idempotency guard; explicit email-before-sentAt limitation.
- Phunmix is labeled a family business site and AI-assisted, with both supplied screenshots.
- API case study uses the six requested headings and source notes. Checks 2–5 stay TODO. Recorded results are labeled as project notes, not fresh portfolio validation.
- Original images remain in png/. JPEG copies in assets/projects/ have two sizes, srcset/sizes, dimensions and lazy loading. Actual size data is in image-optimization.json.
- Python HTMLParser inspection passed across six built pages: one h1 each, unique IDs, nonempty image alt, local href/src targets exist, no fake # links. Also verified featured ordering, legacy separation, one availability line, both in-progress names and all four TODOs.
- Chrome accessibility tree confirmed the three cards, supplied roles/status, captions and destinations. Full visual/mobile checks and screenshots follow in Group C.
- Build/lint/diff output is in group-b-checks.txt. External project/PR requests through the web tool were inaccessible, so this group uses the supplied contribution details without claiming independent verification.
