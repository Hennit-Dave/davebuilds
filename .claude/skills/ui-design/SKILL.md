---
name: ui-design
description: >
  World-class front-end design philosophy plus a senior-designer reasoning stack. Load FIRST
  for any UI work: landing pages, dashboards, SPAs, components, navbars, checkout. Triggers:
  'design a page', 'build a UI', 'landing page', 'make this look good', 'build a dashboard',
  'design system', 'modern design', 'polish', 'make it pop', 'elevate', plus motion
  ('animate', 'microinteractions', 'scroll animation', 'parallax'). Also covers, via bundled
  modules: usability/heuristic audits ('what's wrong with this UI'), journey mapping ('map the
  experience', 'where do users drop off'), UX metrics/KPIs ('measure success', 'HEART'), UI
  state modeling ('state machine', 'loading/error/success', 'impossible states'), error-
  handling UX ('error state', 'empty state', 'validation'), and design rationale ('why did we
  choose', 'document this decision'). If it has a UI, use this skill.
metadata:
  version: "1.0.0"
_agensi: "5912be21-d684-434c-864e-7465ac389661"
---



# Design Philosophy: Best-in-Class Contemporary Design

Load this context before writing any front-end code. The quality bar is **award-winning** — every output should feel like it belongs on Awwwards, not just "clean enough."

## Design Studio — Extended Reasoning Modules

This skill bundles six specialist methodologies in `references/`. When the task calls for one, read that module in full and apply it:

| When the task is... | Load |
|---|---|
| Auditing usability, "what's wrong with this UI", expert/pre-launch review | `references/heuristic-evaluation.md` |
| Mapping the full experience, onboarding, touchpoints, drop-off points | `references/journey-map.md` |
| Defining success metrics, KPIs, or measuring design impact | `references/ux-metrics.md` |
| Modeling complex component behavior — loading/error/success, impossible states | `references/state-machine.md` |
| Designing error states, empty states, validation, or recovery flows | `references/error-handling-ux.md` |
| Documenting or defending a design decision for review | `references/design-rationale.md` |

Each module is a complete, standalone methodology — load it only when relevant, then apply it end to end.


## Phase 0: Experience First — Decide the UX Before Any Visual or Code

Before the vibe, before the domain aesthetic, before a single line of code: decide the *experience*. Beautiful visuals on the wrong experience are lipstick on a retrofit — and bolting UX on after the UI is built is the most expensive mistake this skill can make. Resolve, in writing, first:

1. **Who is the user and what is their goal?** The one job they came to get done — the outcome they want, not a feature list.
2. **What are the primary flows?** The 1–3 key paths to that outcome — name the entry point, the steps, and the success state. Everything else is secondary.
3. **What must the first screen make obvious in one glance?** What this is, what to do next, and why it's worth it.
4. **What content/data hierarchy serves the goal?** What the user needs first, second, and not at all. Layout follows this — never the reverse.
5. **What's the context of use?** Device, environment, frequency, expertise, and accessibility needs (keyboard, contrast, reduced motion, screen reader). These are experience decisions, not afterthoughts.
6. **What does "it worked" look like?** The moment the user feels the job is done — design backward from it.

**Hard rule: no visual identity and no component code until 1–6 are answered.** The aesthetic, the type, and the motion all exist to serve this experience, never the reverse. If you catch yourself choosing fonts or building a hero before the flows are decided, stop and return here. Only then proceed to the domain and vibe work below, which *dress* the experience you've defined.

## The #1 Rule: Design for the Domain

The most important thing about great design is that it *feels like it belongs to its subject*. A photography portfolio, a crypto app, and an analytics dashboard should look nothing alike — they serve different purposes, different audiences, and different emotional registers.

Before reaching for any technique or trend, ask: **What world does this project live in?** The answer should drive every visual choice — color, type, layout, motion, mood. Techniques like glassmorphism or kinetic typography are tools in a toolbox. The domain tells you which tools to pick up.

**This means you should actively resist applying a uniform "modern dark UI" to everything.** A photography portfolio might be high-contrast black and white with massive images and barely any UI chrome. A crypto wallet might be dark and techy with neon accents. A children's education app should be bright and playful. A law firm's site should feel authoritative and restrained. Each should be *unmistakably itself*.

## Domain-First Design Process

Before writing any code, define the project's visual identity in ~30 seconds of thought:

1. **What's the emotional register?** (Playful? Serious? Luxurious? Trustworthy? Edgy? Calm?)
2. **What's the industry's visual language?** (Finance = structured and muted. Fashion = editorial and bold. Tech = clean and functional. Art = expressive and rule-breaking.)
3. **What's the content hierarchy?** (Image-first? Data-first? Copy-first? Product-first?)
4. **What's the color mood?** (Not "dark mode vs light mode" — what palette tells this story? A nature brand wants greens and earth. A nightclub wants dark with neon. A medical app wants clean whites and trustworthy blues.)
5. **Who's the audience?** (Developers expect density and function. Consumers expect polish and delight. Executives expect clarity and restraint.)

Only after answering these should you reach for specific techniques.

## Examples of Domain-Driven Differentiation

These should look and feel *completely different* from each other:

**Photography / Art Portfolio:**
- The photos ARE the design. UI chrome should nearly disappear.
- Monochromatic or very restrained palette (black/white, or a single accent from the work itself)
- Editorial typography: elegant serifs, dramatic size contrast, generous whitespace
- Full-bleed images, asymmetric masonry grids, images at varying scales
- Minimal navigation — let the work speak
- Motion: slow, considered reveals. Images fading in on scroll, not bouncing.
- **2026 techniques**: CSS `animation-timeline: view()` for image reveals with blur-to-sharp, custom cursor that grows over images, clip-path wipe reveals on section titles, scroll-snap between full-bleed sections, parallax depth on hero imagery

**Crypto / Fintech:**
- Dark backgrounds with high-tech energy — neon accents, glow effects, data visualizations
- Monospace or geometric sans-serif type with sharp angles
- Glassmorphism for cards and overlays (fits the "transparent ledger" metaphor)
- Animated gradients, particle effects, or subtle grid patterns in backgrounds
- Trust signals: security badges, real-time data, precision in numbers
- Motion: snappy, precise, confidence-inspiring
- **2026 techniques**: Elements assembling on scroll (features fly in with stagger), magnetic buttons with glow, GSAP-pinned scroll sections for product storytelling, animated number counters, scroll progress bar, mesh gradient backgrounds with subtle animation

**SaaS Dashboard / Admin Panel:**
- Light or dark, but focused on *readability* over atmosphere
- Clean, highly legible sans optimized for scanning data — picked fresh from the live catalog (see Step 0 and Typography), never the default roster
- Card-based layout with clear hierarchy: KPIs → charts → tables
- Muted palette with semantic color (green=good, red=bad, blue=informational)
- Minimal decoration — the data is the visual interest
- Motion: functional micro-interactions only (hover states, transitions, loaders)
- **Data visualization rules — non-negotiable:**
  - KPI cards get sparklines (small inline SVG trend lines, no axes)
  - Trend/time-series sections get **real bar or area charts** — full SVG with labeled x/y axes, gridlines, gradient fills, and data point labels. A "bug count over 8 weeks" section needs a proper bar chart, not a sparkline. This is the difference between a dashboard that communicates and one that just looks clean.
  - Bar charts: `<rect>` elements with gradient fills, axis lines, tick labels, a subtle hover state that highlights the bar
  - Area charts: `<path>` with `fill` + `fill-opacity` gradient underneath the line
  - Never use a sparkline where a labeled chart would communicate better
- **2026 techniques**: Staggered card reveals on scroll (CSS `animation-timeline: view()`), skeleton loading shimmers, smooth view transitions between dashboard views, container queries for responsive cards, subtle hover lift with multi-layer shadow expansion

**E-commerce / Product:**
- Product imagery is king — high-quality, consistent lighting, white or lifestyle backgrounds
- Clean layout that frames the product — not competing with it
- Strong CTA hierarchy (Add to Cart dominates)
- Warm, inviting palette that matches brand identity
- Motion: smooth product image transitions, cart animations, scroll-to-reveal for features
- **2026 techniques**: GSAP-pinned product showcase (scroll to rotate/reveal product details), view transitions between product list and detail, horizontal scroll for product gallery, assembly animations for feature breakdowns, magnetic Add-to-Cart button

**Editorial / Magazine:**
- Typography-driven — dramatic headlines, pull quotes, varied column widths
- Mix of serif and sans-serif creating rhythm
- Asymmetric layouts that guide the eye through content
- Generous whitespace creating luxury and breathing room
- Full-width images breaking up text sections
- Light backgrounds often work better for long-form reading
- **2026 techniques**: Line-by-line text reveals (clip-path wipe), parallax on full-bleed images, scroll-snap for article sections, knockout/gradient text on headlines, variable font weight shifting on scroll

**Community / Social Apps:**
- Warm, approachable, human. Soft gradients (blue-to-purple, peach-to-mint), frosted glass elements
- Floating pop-out cards with slight rotation around a central phone mockup
- Rounded pill-shaped nav. Photos of real people
- Typography: a warm humanist or gently rounded sans — chosen fresh from the live catalog, not a default
- The page should feel alive — elements gently floating, testimonials at organic angles
- **2026 techniques**: Scatter-to-spread assembly for team/user photos, sticky stacking testimonial cards, gentle float animations on pop-out elements, concentric circle backgrounds as visual gravity

**Children's / Education:**
- Bright, playful, bouncy. Rounded everything — buttons, cards, containers
- Large, friendly, rounded type (see the Typography library's Rounded category — vary the face per project). Candy-colored palette with high saturation
- Illustrations over photos. Hover animations with overshoot (spring physics)
- Parents should feel warmth and trust; kids should feel delight
- **2026 techniques**: Spring-based hover animations, bouncy entrance animations with overshoot, floating decorative elements (stars, clouds, shapes), playful scroll-triggered reveals

**Playful & Personable (Adult Audiences):**

This is a distinct aesthetic from children's design — it's quirky and fun but for adults. Think coding bootcamps, language schools, creative agencies, startups that don't take themselves too seriously. The vibe is "we're human, we're approachable, and we want you to smile." Sites like Nod Coding, Duck School, and Akadian nail this.

- **Warm off-white base** — never pure white. Use `#F5F0EB`, `#FAF8F5`, or `#EDEBE8` as the page background. This immediately feels cozier and more inviting than sterile white.
- **Custom geometric illustration system** — instead of stock photos or generic icons, build a visual language from overlapping geometric shapes (circles, semicircles, rectangles, triangles) in bold flat colors. Compose them into letterforms, characters, or abstract vignettes. Use 4-6 saturated colors (pink, yellow, blue, orange, teal, red) on the warm background. These illustrations should feel like they were designed specifically for this brand — the overlapping shapes create depth and playfulness without being childish.
- **Single bold accent color as personality marker** — pick one unexpected, high-energy color (chartreuse/lime `#C8F20D`, coral, electric blue) and use it *everywhere* interactive: buttons, pill badges, highlights, hover states. Against a warm neutral background, this creates instant personality.
- **Typography as character** — oversized, bold, confident headlines in a friendly but not childish typeface — a characterful grotesque or display face pulled fresh from Step 0's live catalog, not a default. Mix serif and sans-serif playfully. Use hand-drawn style SVG annotations (circles, underlines, arrows) overlaid on clean typography to create a "human touch" feeling.
- **Floating pill badges** — small rounded-full pill shapes with keyword text ("START NOW", "NO FEAR", "YES YOU CAN") scattered at organic angles around hero text. Each pill has the accent color background, slight rotation (`rotate(-5deg)` to `rotate(8deg)`), and a gentle floating animation. These add personality and energy to what would otherwise be a standard headline.
- **Color-blocked content sections** — feature grids where each cell has its own distinct, saturated background color (yellow, pink, blue, teal) creating a patchwork/quilt effect. Not subtle tints — bold, confident blocks of color. Text stays dark/readable against each.
- **Mascot or character motif** — a simple recurring character (could be as minimal as googly eyes on a circle) that appears throughout the site, peeking from behind sections, reacting to scroll, or serving as a visual anchor. CSS-only mascots work great: a `border-radius: 50%` div with two smaller dots for eyes.
- **SVG path connector animations** — dashed or dotted SVG paths that curve between sections, creating visual continuity. On scroll, the path "draws itself" using `stroke-dashoffset` animation. Gives the feeling of a journey or story connecting the page sections.
- **Speech-bubble testimonial cards** — testimonials in colored bubble shapes (rounded rectangle with a tail) connected by thin lines with dot endpoints, like a diagram or mind-map. Different testimonials get different pastel background colors. The connector lines create visual rhythm.
- **Oversized geometric CTA compositions** — instead of a standard button, make the CTA section a visual event. Place the CTA text on a giant half-circle, pie-chart shape, or overlapping geometric form. The CTA becomes an illustration in itself.
- **Generous scroll spacers** — intentional blank zones between sections (100vh or more) where nothing is visible, creating anticipation before the next section animates in. Content reveals feel earned when the user scrolls through a moment of emptiness first.
- **2026 techniques**: GSAP/CSS scroll-triggered section reveals with generous spacers between, SVG stroke-dashoffset path drawing on scroll, floating pill badges with gentle bobbing animation, color-blocked bento grids, Lottie animations for custom illustrations, scattered card layouts with depth (cards at different z-indices and rotations creating a "desk" feeling)

## Pre-Code Ritual: Derive the Vibe

Before writing a single line of code, spend 60 seconds answering: **What does this thing feel like?** Then write a one-sentence visual prompt — your personal creative brief — that captures the full aesthetic DNA. Every design decision you make should pass the test: *does this serve the sentence I wrote?*

**The 4-step process:**

1. **Name the feeling** in 2–3 adjectives derived from the brief (not from a menu — invent them fresh each time)
2. **Find real-world references** — what existing brands, physical spaces, or print design shares this feeling?
3. **Write your own one-sentence visual prompt** that fuses layout, type, motion, color, texture, and whitespace into a single image of what the finished thing looks like. This is your anchor.
4. **Map the feeling to concrete choices** — layout (structured vs. broken vs. flowing), typography (geometric sans vs. serif vs. monospace), motion (snappy vs. cinematic vs. bouncy), color (high contrast vs. muted vs. warm vs. cool), texture (glass vs. flat vs. grain vs. paper), whitespace (generous vs. tight vs. rhythmic)

**What a good vibe prompt looks like** — these are examples of the *format and specificity* to aim for, drawn from real brand references. Do not copy them verbatim; write one that's genuinely specific to your project:

- *"Minimalist web design with dynamic diagonal layouts, ultra-clean typography, floating elements with subtle depth, motion-inspired imagery, geometric overlays, generous whitespace, and crisp modern edges"* — (Nike / Apple Fitness energy)
- *"Organic web design with soft rounded shapes, flowing curves, calm spaciousness, natural textures, gentle transitions, circular frames, and breathing room throughout"* — (Yoga / wellness brand energy)
- *"Raw brutalist aesthetic with stark geometric blocks, heavy typography, aggressive angles, high contrast, dramatic negative space, industrial textures, and intentional visual tension"* — (CrossFit / streetwear energy)
- *"Clean modern interface with systematic grids, geometric typography, dashboard-inspired layouts, frosted glass effects, layered components with depth, organized data displays, and precise alignment"* — (Linear / Vercel / dev tools energy)
- *"Sophisticated editorial layout with magazine-inspired grids, elegant serif typography, generous whitespace, full-bleed imagery, asymmetric composition, refined details, and luxurious proportions"* — (Kinfolk / Cereal / high-end consultant energy)
- *"Soft cloud-like warmth with floating elements, gentle blue gradients, and organic placement that feels human and approachable"* — (Community / social app energy)
- *"Bright, bouncy, rounded everything — big friendly type, candy colors, and playful hover animations that reward exploration"* — (Kids' learning platform energy)
- *"Warm cream base with bold geometric illustrations, one electric accent color, floating pill badges, hand-drawn annotation marks over clean type, and scroll-triggered path animations connecting sections — fun without being childish"* — (Adult-playful / bootcamp / creative agency energy)

Most projects blend two feelings. A crypto startup might be "precise and confident" structure with "moody and cinematic" atmosphere. Derive the blend from the brief — write one hybrid prompt, not two.

**Feeling → concrete choices reference:**

| Feeling | Layout | Type | Motion | Color | Whitespace |
|---------|--------|------|--------|-------|------------|
| Raw & urgent | Stark blocks, hard cuts | Ultra-bold grotesque | Aggressive, snappy | Black/white + one accent | Dramatic negative space |
| Calm & spacious | Flowing, circular | Rounded, organic | Slow, gentle | Warm earth tones | Generous, breathing |
| Precise & confident | Systematic grid | Geometric sans | Functional, instant | Muted + one semantic accent | Tight but rhythmic |
| Dramatic & editorial | Magazine, asymmetric | Serif + thin sans | Slow, cinematic | High contrast | Luxurious, varied |
| Playful & energetic | Rounded, varied | Friendly, large | Bouncy, spring | Multi-color, saturated | Generous padding |
| Quirky & personable | Organic, floating, broken grid | Bold sans + hand-drawn accents | Scroll-path drawing, pill floats | Warm neutral + 1 electric accent | Generous with scroll spacers |
| Moody & cinematic | Extreme scale, layered | Heavy display or ultra-thin | Slow burn reveals | Deep darks + one vivid | Atmospheric |
| Dynamic & athletic | Diagonal, off-axis | Bold sans | Snappy scroll | High contrast photography | Crisp, minimal |
| Warm & human | Organic, floating, asymmetric | Rounded / humanist sans | Gentle float, soft bounces | Soft gradients, pastels | Generous, organic |
| Tech & immersive | Layered, parallax depth | Monospace or sharp geometric | Scroll-linked assembly | Dark + neon/glow accents | Atmospheric |

## Step 0: Discover the Current Landscape — Design From Live References, Not Memory

Design trends move faster than this document. Anything hard-coded here — font names, "2026 techniques", trending palettes, motion idioms — is a **fallback baseline, not the menu**. Designing only from what's written below is exactly how every project ends up looking like the last one. So before the vibe hardens into code, pull *current, live* references for **every design element**. This is what keeps the skill self-updating instead of static.

**Run this at the start of every project. Use today's date — design for *now*, not for a year baked into a doc.**

Discover, per element category:

- **Typography** — Fetch the live Google Fonts catalog: `https://fonts.google.com/metadata/fonts` returns `familyMetadataList`, every family with `category`, `dateAdded`, `lastModified`, `popularity` (rank — 1 = most used), `trending` (rank), and variable-font `axes`. Sort by `dateAdded`/`lastModified` for the newest releases; sort by `trending` for what is rising right now; read `axes` to find true variable fonts. Also browse Fontshare (`https://api.fontshare.com/v2/fonts`). This source updates itself — so font choices stay current with zero edits to this skill.
- **Color** — Web-search current palette directions for this domain and year ("[domain] color trends [current year]", "web color palettes [current year]"). Don't reach for the same accent every time.
- **Layout & composition** — Look at what award sites are doing *now* (search Awwwards, SiteInspire, Godly, Land-book for the domain). Note the current conventions and one deliberate way to deviate.
- **Motion, micro-animations & interaction** — Search for current interaction and micro-animation patterns: hover/press/focus micro-states, easing fashions, scroll choreography, page/element transitions. The named techniques later in this doc are a floor, not a ceiling — micro-interactions date a UI as fast as fonts do, so refresh them.
- **Effects & texture** — Glass, grain, gradients, mesh, noise, dithering, 3D — check what is current and what is now overexposed.

**The output of Step 0** is a short written list of the current, specific references and choices feeding this project: fonts, palette direction, layout move, motion/micro-animation idiom, one signature effect. These feed straight into the Design System Manifest below. If a live fetch or search isn't available, fall back to the baselines in this document — but treat them as a starting point to push past, and say so.

## Avoid the Default — The Anti-Template Principle

There is a recognizable "AI-generated default" look. Every project that drifts toward it loses its individuality. Treat the following as **banned defaults** — usable only if Step 0 and the domain genuinely prove one is the single best answer, and never as a reflex:

| Element | Tired default to avoid | Do instead |
|---|---|---|
| Font (sans) | Inter / Roboto / Geist / Space Grotesk / Plus Jakarta / DM Sans / Poppins / Montserrat on everything | Pick fresh from Step 0's live catalog — see Typography |
| Font (serif) | Playfair Display / Cormorant / Lora / Libre Baskerville / DM Serif / EB Garamond reached for by reflex — the "editorial magazine" tell | Choose a serif only when the domain earns it, varied per project — never the house serif |
| Type template | "Elegant serif headline + neutral sans body" on every project — the single most overused AI design combo | Role-differentiated type chosen per project (see Typography); editorial-serif+sans only when genuinely editorial AND Step 0 confirms |
| Color | Pure `#000`/`#fff`; one violet/indigo accent; the generic "dark SaaS" palette | Domain-derived palette; off-blacks and warm/cool whites; an accent earned from the brand |
| Hero | Centered headline + subtitle + two buttons on a flat or purple gradient | A real visual element; an asymmetric or split composition (see Layout craft) |
| Card | White rounded rectangle + one soft shadow, identical for every card | Vary frames, depth, borders; multi-layer shadows; let card style suit its content |
| Micro-animation | `translateY(-2px)` + same fade on every element; one global easing | Per-element-type hover/press/focus personalities; varied easing and timing (see Interaction craft) |
| Layout | `repeat(auto-fit, minmax(300px,1fr))` uniform grid everywhere | Intentional, explicit column/row spans and visual rhythm |
| Effect | A glassmorphic card on a blurry blob gradient, used everywhere | One signature effect, chosen for the domain, used with restraint |

**The fingerprint rule:** before shipping, name 3 concrete things that make *this* project visually unmistakable and that you would not have done identically on an unrelated project — a specific typeface pairing, a specific palette, a specific layout move, a signature micro-interaction. If you can't name 3, the design is still a template. Record them in the manifest.

## Design System Manifest — Establish It Once, Then Iterate Within It

The single biggest cause of a design "falling apart" across feedback rounds is **re-deriving the system on every edit**. Once a direction is approved, the vibe is settled — it must not be silently re-litigated when the user asks for a small change. Picking new fonts, shifting the palette, or changing the corner radius while "polishing the hero" is how iteration #4 stops looking like iteration #1.

The fix: every design carries an explicit, written **Design System Manifest**, and once a direction is approved that manifest becomes the locked source of truth. This is **soft lock** — the system can still evolve, but only deliberately and visibly, never as a side effect.

### Producing the manifest (first build)

After deriving the vibe and running Step 0, and *before* writing component code, write the manifest as the **first thing in the output** — a comment block followed by a complete `:root` token set. After this point, nothing in the design may use a raw value that isn't a token.

The manifest must define, explicitly:

- **Identity** — the one-sentence vibe prompt recorded verbatim, plus the 3 fingerprint items. This is the brief the design is held to.
- **Fonts** — the exact families chosen (heading, body, and mono/accent if used) and the weights loaded. Recorded so they can never drift silently.
- **Type scale** — base size, ratio, and the resolved step values.
- **Color tokens** — every background, surface, text, border, accent, and semantic color, each a named token.
- **Spacing scale, radius scale, shadow set, motion tokens** — durations, easings, and the standard micro-animation behaviors (hover, press, focus, reveal).

Example header (CSS):

```css
/* ============================================================
   DESIGN SYSTEM MANIFEST  ·  v1
   Identity: "<the verbatim one-sentence vibe prompt>"
   Fingerprint: <three things that make this project unmistakable>
   Fonts:    <Heading family> / <Body family> [/ <Mono>]
   Type:     base 16px · ratio 1.2 (Minor Third)
   Status:   DRAFT — lock on user approval
   Changelog:
     v1 — initial system
   ============================================================ */
:root { /* all color, type, spacing, radius, shadow, motion tokens */ }
```

### The lock (soft lock)

When the user approves a direction — "yes, go with this", "looks good", "approved", "let's run with option 2", or simply moves on to requesting refinements — change the manifest `Status` to `LOCKED — v1` and treat every token as **the default that stays put**.

After the lock, classify every feedback request *before* touching code:

- **Scoped change** — anything achievable *using the existing tokens*: move or resize a section, change copy, restructure layout, add a component built from current tokens, change which token an element uses. Apply it directly; no warning needed.
- **System change** — anything that would *alter a token value or introduce a new one*: a different font, a new accent or background color, a changed corner radius, a new spacing step, a different motion or micro-animation feel. **Do not apply these silently.**

### Drift warning (required before any system change)

When a feedback request can only be satisfied by changing the system, stop and surface it in one short line *before* proceeding:

> ⚠️ **Design-system change:** this would change `--accent` from `#C8F20D` to `#FF5A36` — that touches buttons, links, and ~6 other places. Want me to update the system (I'll bump it to v2), or keep the current accent and solve this another way?

Then wait for the user's call. If they confirm, apply the change, bump the manifest version (`v1 → v2`), and add a one-line changelog entry. If they decline, solve the request within the existing tokens.

### Hard rules for iterating on a locked design

- **Never regenerate the vibe.** Once locked, the Identity line is fixed. "Make the hero punchier" means work *within* the system — not pick new fonts and colors.
- **Never swap fonts, palettes, or motion idioms as a side effect.** Those change only via an explicit, confirmed system change.
- **One token, one place.** Changing a token updates it in `:root` only — never hardcode a one-off override on a component.
- **Preserve everything not mentioned.** A feedback request touches only what it names. "Fix the footer spacing" puts the header, hero, and color system off-limits.
- **Carry the manifest forward.** Every time you return edited code, the manifest header and `:root` block come with it, version and changelog updated. The next iteration reads the manifest straight out of the file — that is what makes consistency automatic, with no separate step to remember.

## Quality Standard

What separates award-winning from generic:

1. **One bold idea executed exceptionally** — not ten mediocre effects stacked together
2. **Personality** — the site feels like it belongs to someone/something, not generated from a template
3. **Typography as a primary design tool** — not just "pick a Google Font and go"
4. **Intentional color** — every color has a reason, derived from the brand/domain
5. **Motion that tells a story** — not motion for motion's sake
6. **Performance as craft** — fast load, smooth scroll, no jank
7. **Surprise within structure** — one unexpected layout choice, one delightful interaction, something that makes you pause

## Craft Execution — The Details That Matter

This section exists because the difference between "vibe-coded" and "designed" is in the details. Strategic direction is not enough — the output needs to feel like a designer sweated over it. These are non-negotiable craft requirements:

### Typography craft
- **Always load real fonts from Google Fonts** (`<link href="https://fonts.googleapis.com/css2?family=...">`) or a CDN. Never rely on system font stacks alone for anything user-facing. System fonts are fine as fallbacks, not as the design.
- Choose fonts that have personality and match the domain, pulled from Step 0's live catalog. A photography portfolio wants an expressive editorial serif for headlines — not system Georgia. A crypto app wants a sharp grotesque or a technical monospace — not a default sans. Derive the specific face per project; don't reuse the same name every time.
- **Fine-tune typography**: Set `letter-spacing` on headlines (usually -0.02em to -0.04em for large text). Set `line-height` precisely (1.1–1.2 for headlines, 1.6–1.8 for body). Use `font-weight` variety — don't just use 400 and 700, use 300, 500, 600 where appropriate.
- Headlines should feel *dramatically* larger than body text. If your body is 16px, your hero headline should be 56–80px (clamp for responsiveness).

### Icons and visual elements
- **Never use emoji as icons** in professional UI — not in nav, not in cards, not in pop-outs, not anywhere. Use inline SVGs or an icon library (Lucide, Heroicons, Phosphor). Emoji looks amateur and immediately signals "AI-generated." This applies to ALL contexts including children's apps.
- **Hero sections require a real visual element — this is non-negotiable.** A hero with only text on a gradient background is a placeholder, not a design. Build one of: an SVG illustration specific to the product/brand, a geometric composition with depth and layering, a meaningful data visualization, or a full-bleed image (from picsum.photos or similar if no real asset exists). For a crypto app the hero visual might be a geometric vault/shield with animated connecting nodes. For a portfolio it might be a full-bleed photograph. For a SaaS product it might be a stylized UI mockup. The visual must be *specific to this project*, not a generic abstract blob.
- Decorative SVG patterns, geometric shapes, and abstract illustrations add richness that colored `<div>`s never will. An SVG hero illustration built from scratch with `<path>`, `<circle>`, `<polygon>` elements — with gradients, glow filters, and layered depth — is often more distinctive than anything you could find as a stock asset.

### Layout craft
- **Actually break the grid.** Don't just use `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` and call it a day. Define explicit, intentional column structures. For a portfolio: make the first image span 2 columns, the next one tall and spanning 2 rows, the third small. Each layout decision should feel deliberate.
- Use `grid-column: span 2`, `grid-row: span 2`, explicit `grid-template-areas`, and varied `aspect-ratio` values to create genuine visual rhythm — not a uniform grid.
- For hero sections: don't default to centered text on a plain background. Consider split layouts (60/40 image + text), overlapping elements, a full-bleed background image with text overlay, or a compelling visual element alongside the headline.

### Color craft
- Build a **full color system**, not just 2-3 variables. Define: background layers (primary, secondary, elevated), text layers (primary, secondary, tertiary), border/divider shades, accent + accent-hover + accent-muted, semantic states (success, warning, danger, info). Even a "simple" site needs 12-15 color tokens to feel professional.
- Use **multiple shadow layers** for depth. Instead of `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`, use compound shadows like `box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06)`. Layered shadows look natural; single shadows look flat.

### Interaction craft
- **Hover states need variety.** Don't use the same `translateY(-2px)` on every element. Cards might lift and glow. Buttons might shift color and show a subtle shine. Images might scale slightly with an overlay appearing. Nav links might show an animated underline. Each interactive element type should have its own hover personality.
- Create **visual feedback loops**: When someone hovers a card, maybe the title text subtly changes color too. When a button is hovered, its shadow might expand. These interconnected states feel polished.
- For image grids: hover should reveal something — a title overlay, a subtle zoom with darkened edges, a color shift. Not just `transform: scale(1.02)` alone.

### Content craft
- **Write real, specific copy** that matches the domain. "Welcome to our platform. We provide amazing solutions." is filler. For a crypto app: "Your keys. Your coins. Self-custody made simple." For a photographer: "Capturing form, light, and silence in concrete and stone." Copy should feel like a real person wrote it for this specific brand.
- Use real-seeming data in dashboards. Not just round numbers (10, 20, 30) but numbers that feel organic (47, 124, 18). Include trends, dates, names that feel lived-in.

### The "would I screenshot this?" test
After writing the code, mentally open the page and ask: **Would I screenshot this and share it as an example of great design?** If the answer is no — if it looks like a tutorial output or a Bootstrap template — identify specifically what's flat about it and fix it before calling it done.

## Modern Interaction Techniques — Non-Negotiable for Current Work

Award-winning sites today are defined by scroll-driven storytelling and physics-based interactions. Every project should use at least 2-3 of these techniques (chosen based on domain). A page with zero scroll animations or interactive hover states will feel dated.

**These techniques are a baseline, not the frontier.** Interaction fashions and micro-animation idioms move fast — refresh them against Step 0's live trend research each project, and don't apply the same motion signature to every build. The patterns below are what to reach for when discovery turns up nothing better, not a fixed menu.

### Choosing motion — purpose before technique

Every animation must earn its place by doing a job for the user. If it isn't serving one of the jobs below, it's decoration — cut it. Work from the experience outward (Phase 0): for each moment, ask *what does the user need here?*, then pick the lightest technique that delivers it. This is how the skill finds the **ideal** use of any animation — listed here or not — instead of applying effects by reflex. Refresh the specific idioms against Step 0 each project so motion doesn't date.

**The jobs motion can do** — map a moment to a job first, then to a technique:
- **Direct attention** — reveal, fade-up, blur-in bring the eye to what matters next.
- **Show state & give feedback** — press, toggle, success/error, loading; answer every action within ~100ms.
- **Express hierarchy & continuity** — view/shared-element transitions, slide-in *direction*, stagger; show what came from where.
- **Tell a scroll story** — pinned sections, scrubbed reveals, parallax, progress bar; pace a narrative to the scroll.
- **Convey brand personality** — magnetic buttons, marquee, heartbeat, idle/ambient motion; tone, used sparingly.
- **Reduce perceived wait** — skeletons, pulse dots, count-ups make latency feel shorter.
- **Confirm the data** — count-ups and chart draw-on let numbers land (see the Dashboard data-viz rules).

**Rules that always apply:** animate only `transform`/`opacity` (compositor-safe); physics easing, never `linear` except scrubbed scroll; **one signature moment per view**, not motion on everything; if two techniques do the same job, choose the calmer, cheaper one; and every decorative or looping motion must be wrapped in `prefers-reduced-motion: reduce`. If a moment has no job, it gets no motion.

### Motion vocabulary by purpose (a palette, not a checklist)

A menu to select from by job — **not exhaustive, and not to be sprinkled**. Reach for whatever serves the moment, including techniques not listed; leave motion out where it serves nothing.

- **Entrances / reveals** — *Fade-up* and *Slide-in* for content arriving (mind slide *direction* = where it comes from); *Blur-in* for a premium image/headline reveal; *Scroll reveal* (scrubbed) for section content as it enters.
- **Scroll story** — *Pinned section* to hold a stage while its content changes; *Parallax* / *Velocity parallax* for depth and energy on hero imagery; *Smooth scroll* for anchor jumps and inertial pacing (never hijack the page); *Progress bar* to orient on long reads and checkout.
- **State / feedback** — *Modal fade* (backdrop) + *Modal pop* (panel settle) for dialogs; *Button lift* / *Card lift* and a sub-150ms press scale for affordance; *Underline grow* for links/nav; *Swatch scale* for selection in pickers and option grids; *Image zoom* to invite interaction with media.
- **Brand / ambient** — *Magnetic buttons* for high-intent CTAs; *Marquee* for logo/ticker/announcement bands; *Heartbeat* / *Pulse* to draw the eye to one element (a like, a live dot); *Pulse dots* for typing/processing; *Idle/mascot* for character liveliness (CSS for a simple float/breathe, Rive or Spline for an expressive character like a blinking, tail-wagging mascot).
- **Data** — *Count-up* for KPI and stat reveals; chart draw-on for trend sections.

### Name the motion before you build it — the scroll-driven taxonomy

"Add some animation" is how a page ends up with the same fade on everything. Before writing motion, decide *which kind* of scroll behavior the domain needs. These are seven distinct things — pick deliberately, and never confuse a trigger with a scrub:

1. **Scroll-triggered reveal** — animation *starts* when an element enters the viewport, then plays out on its own clock. Fade-in, slide-up, staggered cards. The SaaS baseline. CSS `animation-timeline: view()`.
2. **Scroll-scrubbed (scroll-linked)** — animation *progress is tied 1:1 to scroll position*. Scroll 10% → 10% through; scroll back → it reverses. This is the "I'm manually controlling it" feeling — product reveals, frame-by-frame timelines, Apple-style storytelling. CSS `scroll()`/`view()` with **no `duration`** and `linear` easing, or GSAP `scrub: true`.
3. **Parallax** — layers translate at different rates so the page gains depth. The speed *delta* is the effect. CSS `scroll()` timeline driving `translate` on each layer.
4. **Smooth / inertia scroll** — momentum and easing applied to the scroll itself; the page glides and settles. The "buttery" luxury feel. Lenis (preferred) or Locomotive Scroll. Pairs naturally with parallax.
5. **Pinned / cinematic storytelling** — a section *pins* in place while its inner content scrubs through steps, then releases. The Apple product-page combo: pin + scrub + text reveals. GSAP ScrollTrigger `pin` + `scrub`.
6. **Reactive micro-motion** — elements respond to cursor position, scroll velocity, and direction: subtle tilt, drift, glow shift, blob movement. This is what makes a page feel *alive* rather than just animated. Tiny JS + `requestAnimationFrame`.
7. **Scroll-jacking** — the site overrides native scrolling entirely (one wheel tick = one full-screen section). **2026 stance: use sparingly.** It causes motion sickness and breaks user expectations. Prefer CSS `scroll-snap` for sectioned pages — it gives 90% of the effect while keeping the scrollbar honest.

### The 2026 motion standard — subtle, physics-based, performant

The current direction is *away from* aggressive scroll-jacking and theatrical autoplay, *toward* motion that feels tactile and responds to intent. Hold every build to this:

- **Subtle reactive over forced cinematic.** A small drift that answers the cursor beats a takeover that hijacks the wheel. Reactive micro-motion (type 6) should be measured in single-digit pixels and a few degrees — a *whisper*, not a move.
- **Physics, not linear tweens.** Easing should feel like it has mass. Use spring-style settles (overshoot-then-rest) for playful UIs and `cubic-bezier(0.16, 1, 0.3, 1)` for confident ones. Lerp toward a target (`v += (target - v) * 0.08`) for cheap inertia. Avoid `linear` everywhere *except* scrubbed animations, where the scroll itself is the easing.
- **Stay on the compositor thread.** Animate **only `transform` and `opacity`** (and `filter` sparingly) — never `top`, `width`, `margin`. CSS scroll-driven animations run *off the main thread*, so they hold 60fps even while JS is busy. That performance edge is the reason to prefer CSS `animation-timeline` over JS scroll listeners wherever it covers the need.
- **Timings.** Hover/press micro-states: 100–150ms, snappy. Ease-out for entrances, ease-in for exits. Element reveals: 400–700ms. Scrubbed animations: *no duration at all* — the timeline supplies progress.
- **Always gate on `prefers-reduced-motion`.** Reactive motion and parallax should fully disable; reveals should degrade to a plain instant state, not vanish.

### Pick the right motion tool

| Need | Reach for | Notes |
|------|-----------|-------|
| Reveals, scrub, parallax | **CSS `animation-timeline`** | No library. Compositor-threaded. The default — try this first. |
| Pinning, horizontal scroll, multi-step choreography | **GSAP ScrollTrigger** | When CSS can't express the sequence. |
| Smooth/inertia scrolling | **Lenis** | Lightweight; pairs with parallax and GSAP. |
| Physics springs, React orchestration | **Motion One** (vanilla, WAAPI) or **Framer Motion** (React) | Motion One is tiny and modern; Framer Motion for component-level springs. |
| Interactive vector / 3D scenes | **Rive** / **Spline** | For mascots, interactive illustrations, 3D product reveals. |

**Browser support:** CSS scroll-driven animations are supported in Chromium 115+ and Safari 18+; Firefox is partial. Always ship the Intersection Observer fallback below so non-supporting browsers still get the reveal (without the scrub).

### Copy-paste motion patterns

**Pattern A — Scroll-scrubbed reveal (pure CSS, the 2026 default).** Progress is tied to scroll; scroll up and it reverses. Note the missing `duration` and the `linear` easing — both are required for a true scrub.

```css
@keyframes reveal-scrub {
  from { opacity: 0; transform: translateY(40px) scale(0.96); filter: blur(8px); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    filter: blur(0);   }
}
.scrub-reveal {
  animation: reveal-scrub linear both;     /* no duration — the timeline drives it */
  animation-timeline: view();              /* tracks this element through the viewport */
  animation-range: entry 0% entry 90%;     /* runs as it enters; done near fully in-view */
}
/* Stagger: each child finishes a little further down the scroll */
.scrub-list > * { animation: reveal-scrub linear both; animation-timeline: view(); }
.scrub-list > *:nth-child(1) { animation-range: entry 5%  entry 60%; }
.scrub-list > *:nth-child(2) { animation-range: entry 15% entry 70%; }
.scrub-list > *:nth-child(3) { animation-range: entry 25% entry 80%; }

@media (prefers-reduced-motion: reduce) {
  .scrub-reveal, .scrub-list > * { animation: none; opacity: 1; filter: none; transform: none; }
}
```

**Pattern B — Parallax depth (pure CSS).** Layers driven by the *page* scroll at different rates; the speed delta is the depth.

```css
@keyframes drift-up   { to { translate: 0 -120px; } }
@keyframes drift-down { to { translate: 0  80px;  } }
.parallax-bg  { animation: drift-down linear both; animation-timeline: scroll(root block); }
.parallax-mid { animation: drift-up   linear both; animation-timeline: scroll(root block); }
/* foreground layer gets no animation — it's the anchor the others move against */
@media (prefers-reduced-motion: reduce) {
  .parallax-bg, .parallax-mid { animation: none; }
}
```

**Pattern C — Reactive micro-motion (tiny JS).** Elements drift toward the cursor with inertia. Keep the output small — ~10px and a couple degrees — so it reads as "alive", not "moving". The lerp is what gives it spring.

```js
const reactive = document.querySelectorAll('[data-depth]');   // <div data-depth="1.4">
let mx = 0, my = 0, tx = 0, ty = 0;
addEventListener('pointermove', e => {
  mx = (e.clientX / innerWidth  - 0.5) * 2;   // -1 .. 1
  my = (e.clientY / innerHeight - 0.5) * 2;
});
function frame() {
  tx += (mx - tx) * 0.08;                     // lerp toward target = inertia / spring feel
  ty += (my - ty) * 0.08;
  reactive.forEach(el => {
    const d = parseFloat(el.dataset.depth) || 1;
    el.style.transform =
      `translate3d(${tx * 10 * d}px, ${ty * 10 * d}px, 0) rotate(${tx * 2 * d}deg)`;
  });
  requestAnimationFrame(frame);
}
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(frame);
```

**Intersection Observer fallback** — ship this with any `animation-timeline` work so older Safari/Firefox still reveal content (it won't scrub, but it won't break):

```js
if (!CSS.supports('animation-timeline: view()')) {
  const io = new IntersectionObserver(
    es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')),
    { threshold: 0.2 }
  );
  document.querySelectorAll('.scrub-reveal, .scrub-list > *').forEach(el => io.observe(el));
}
/* CSS: .scrub-reveal.in { opacity: 1; transform: none; filter: none; } */
```

### Reference implementations (selected by the purpose map above)

Adapt these — selection is governed by *Choosing motion*; never apply one as a default. The reveal (Pattern A), parallax (Pattern B), and cursor inertia (Pattern C) live above; build anything not shown from the same primitives. **All looping/decorative ones below assume a `@media (prefers-reduced-motion: reduce)` that disables them.**

```css
/* Scroll progress bar — orientation on long pages (CSS scroll timeline) */
.scroll-progress{position:fixed;inset:0 0 auto 0;height:3px;background:var(--accent);
  transform:scaleX(0);transform-origin:0 50%;animation:progress linear both;animation-timeline:scroll(root block);}
@keyframes progress{to{transform:scaleX(1)}}

/* Pinned stage — hold a section while its children change */
.pin-wrap{height:300vh}                 /* scroll distance the pin lasts */
.pin{position:sticky;top:0;height:100vh;overflow:clip}  /* drive children with animation-timeline; GSAP ScrollTrigger for scrubbed pin */

/* Entrance: fade-up / slide-in (add .in via IntersectionObserver or on load) */
.enter{opacity:0;transform:translateY(24px);transition:opacity .6s,transform .6s cubic-bezier(.16,1,.3,1)}
.enter.from-left{transform:translateX(-24px)} .enter.in{opacity:1;transform:none}

/* Modal: fade backdrop + pop panel */
.backdrop{opacity:0;transition:opacity .25s ease}.backdrop.open{opacity:1}
.modal{opacity:0;transform:translateY(8px) scale(.96);transition:opacity .25s,transform .25s cubic-bezier(.16,1,.3,1)}
.modal.open{opacity:1;transform:none}

/* Looping/ambient — gate behind reduced-motion */
@keyframes heartbeat{0%,100%{transform:scale(1)}15%{transform:scale(1.18)}30%{transform:scale(1)}45%{transform:scale(1.1)}}
.heartbeat{animation:heartbeat 1.4s ease-in-out infinite}
@keyframes pulse{0%,80%,100%{opacity:.3;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}
.dots span{display:inline-block;width:7px;height:7px;border-radius:50%;background:currentColor;animation:pulse 1.2s ease-in-out infinite}
.dots span:nth-child(2){animation-delay:.2s}.dots span:nth-child(3){animation-delay:.4s}
.marquee{overflow:clip}.marquee__track{display:inline-flex;gap:3rem;white-space:nowrap;animation:marquee 22s linear infinite} /* track holds content twice */
@keyframes marquee{to{transform:translateX(-50%)}} .marquee:hover .marquee__track{animation-play-state:paused}
@keyframes idle{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-6px) rotate(1deg)}}
.idle{animation:idle 4s ease-in-out infinite;transform-origin:center bottom}

/* Hover micro-affordances */
.zoom{overflow:clip}.zoom img{transition:transform .5s cubic-bezier(.16,1,.3,1)}.zoom:hover img{transform:scale(1.06)}
.swatch{transition:transform .15s ease,box-shadow .15s ease}.swatch:hover{transform:scale(1.12)}
.swatch[aria-pressed="true"]{transform:scale(1.18);box-shadow:0 0 0 2px var(--bg),0 0 0 4px currentColor}
```
```js
// Count-up — let a stat land when it scrolls in
const ease=t=>1-Math.pow(1-t,3);
const up=el=>{const to=+el.dataset.to,t0=performance.now();(function f(n){const p=Math.min(1,(n-t0)/1200);
  el.textContent=Math.round(to*ease(p)).toLocaleString();p<1&&requestAnimationFrame(f)})(t0)};
new IntersectionObserver((es,o)=>es.forEach(e=>e.isIntersecting&&(up(e.target),o.unobserve(e.target))),{threshold:.6})
  .observe?.(0); // observe each [data-to] element

// Magnetic button — pull toward the cursor, spring back on leave
document.querySelectorAll('[data-magnetic]').forEach(b=>{
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();
    b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px)`});
  b.addEventListener('pointerleave',()=>b.style.transform='')}); // CSS: [data-magnetic]{transition:transform .25s cubic-bezier(.16,1,.3,1)}

// Velocity parallax — scroll speed drives a small decaying skew
let last=scrollY,v=0;addEventListener('scroll',()=>{v=scrollY-last;last=scrollY});
(function tick(){v*=.9;document.querySelectorAll('[data-skew]').forEach(el=>el.style.transform=`skewY(${Math.max(-6,Math.min(6,v*.2))}deg)`);requestAnimationFrame(tick)})();

// Smooth scroll: html{scroll-behavior:smooth} covers anchor jumps; add Lenis only for inertial page smoothing — never scroll-jack.
```

### Elements assembling on scroll (the 2026 signature)
The pattern where scattered or hidden elements fly/slide into their final positions as the user scrolls — a scroll-triggered (type 1) or scroll-scrubbed (type 2) assembly:
- Cards slide in from alternating sides with slight rotation
- Grid items appear with stagger, blur, and scale transitions
- Connecting lines/paths draw themselves between assembled elements
- Use `animation-timeline: view()` for simple assembly, GSAP for scrub-linked assembly
- See the "Scatter-to-Spread Assembly" and "SVG Path Connector Animation" patterns later in this doc for full implementations.

### Microinteraction craft — every interactive element earns its own personality
A microinteraction is the small, single-purpose response to one user action — a hover, a press, a toggle, a successful save. They date a UI as fast as fonts do, so refresh them per project (Step 0) and never apply one global behavior to everything:
- **Hover** — vary it by element type. Cards lift and deepen their shadow; buttons shift fill and reveal a shine; links draw an underline; images zoom under an overlay. Each *type* gets its own move.
- **Press** — every clickable element needs a sub-150ms `:active` state (a small `scale(0.97)` or fill shift). Without it the UI feels dead on touch.
- **Focus** — visible, on-brand focus rings are non-negotiable for accessibility; style them, don't remove them.
- **State change** — toggles, likes, and saves deserve a spring settle or a one-shot flourish (a confetti burst on *first* save, not every save — see Micro-interaction anatomy under Motion & Interaction).
- Apply the four-part anatomy (Trigger / Rules / Feedback / Loop) from the Motion & Interaction section to anything non-trivial.

### Scroll arrow indicator (REQUIRED on full-viewport heroes)
If the hero takes up the full viewport, add a bouncing scroll-down arrow or chevron indicator at the bottom center. Style it as a visible downward-pointing arrow or chevron (not just a thin line). It should be clearly visible against the hero background (use white on dark heroes, dark on light heroes). Auto-hide after user starts scrolling. This is a critical UX signal — without it, users may not know to scroll.

### Domain-specific interaction choices
- **Brand/marketing sites**: Magnetic buttons, custom cursor, clip-path text reveals, horizontal scroll galleries
- **Portfolios/editorial**: Slow parallax, text wipe reveals, scroll-snapping between full-viewport sections
- **Crypto/fintech**: Snappy assembly animations, glow-on-hover, data counters animating up on scroll
- **Dashboards/SaaS**: Functional micro-interactions only (hover states, smooth transitions), staggered card reveals. Skip theatrical effects.
- **Community/social apps**: Floating pop-outs, scatter-to-spread assembly, sticky stacking testimonials, gentle float animations
- **Playful/personable brands (bootcamps, agencies, schools)**: SVG path connectors drawing on scroll, floating pill badges around headlines, color-blocked bento grids, hand-drawn annotation overlays, generous scroll spacers between sections, geometric oversized CTA compositions, mascot elements with personality

### What to avoid
- Simple `translateY(-2px)` on every element — vary your hover states by element type
- Identical animation on every element — stagger, vary direction, vary timing
- Animation for animation's sake — every motion should serve the content
- `linear` easing on anything that isn't a scrubbed scroll animation — UI moves need physics
- Animating layout properties (`top`, `width`, `margin`) — stay on `transform`/`opacity`
- Scroll-jacking the whole page — prefer `scroll-snap`; reserve full takeover for rare, justified cases
- Reactive motion that's too large — keep cursor/velocity response to single-digit pixels
- Missing `prefers-reduced-motion` media query — always respect it

### Loading external libraries
When using GSAP (for ScrollTrigger, pinning, horizontal scroll, magnetic effects):
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```
For smooth/inertia scrolling (type 4), add Lenis:
```html
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
<script>const lenis = new Lenis(); function raf(t){ lenis.raf(t); requestAnimationFrame(raf); } requestAnimationFrame(raf);</script>
```
For reveals, scrub, and parallax, prefer CSS `animation-timeline` (`view()` / `scroll()`) with the Intersection Observer fallback above — no library, and it runs off the main thread.

## Spacing System

Consistent spacing on a `4px` grid:

| Token | Value | Use |
|-------|-------|-----|
| `xs`  | 4px   | Tight element gaps (icon + label) |
| `sm`  | 8px   | Intra-component spacing |
| `md`  | 16px  | Between related elements |
| `lg`  | 24px  | Between sections |
| `xl`  | 32px  | Major section breaks |
| `2xl` | 48px  | Page-level section spacing |
| `3xl` | 64px  | Hero/landing page spacing |
| `4xl` | 96px  | Full-bleed section breathing room |
| `5xl` | 128px | Dramatic editorial spacing |

How aggressively you use whitespace depends on the domain. Editorial and luxury = more space. Dashboards and tools = tighter but still rhythmic.

## Layout

- **Max content width**: 1200px for full layouts, 680px for text-heavy content. Full-bleed sections can go edge-to-edge with constrained text inside.
- **Grid**: CSS Grid for page structure, Flexbox for component alignment. Use `gap` over margin.
- **Asymmetry**: Break the grid when the domain calls for it (editorial, portfolios, brand sites). Keep it structured when the domain calls for scannability (dashboards, e-commerce).
- **Container Queries**: `container-type: inline-size` for responsive components.
- **CSS Subgrid**: For aligned nested content (pricing cards, feature grids).

## Typography — Best-in-Class, Discovered Fresh, Never Static

Typography is the fastest way a project either gains a personality or collapses into a template. The rule: **discover the type for each project; never pick from memory.** No font is ever hard-coded or chosen from a fixed list — including any list in this skill. The only font names committed to memory are the **banned** ones (to avoid); every face you ship is *derived* from the brief and weighed against the project's goal, objective, audience, and style. Naming specific families is correct in the final manifest — they're the *output* of that derivation, never a preset reached for at the start.

### Choosing type (every project)

1. **Pull the live catalog** — as in Step 0, fetch `https://fonts.google.com/metadata/fonts`. Filter by `category`, surface recent releases (`dateAdded`/`lastModified`) and rising faces (`trending`), and prefer families with rich variable `axes`. Also consider Fontshare. The catalog updates itself — so taste stays current with no edit to this skill.
2. **Avoid the overused roster.** Sans crutches that read instantly as "default": **Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, Raleway, Work Sans, Geist, Satoshi, Plus Jakarta Sans, DM Sans, Space Grotesk, Manrope, Sora.** And the editorial-serif crutches that read as the AI-generated "magazine" default: **Playfair Display, Cormorant (and Cormorant Garamond), Lora, Libre Baskerville, DM Serif Display, EB Garamond, Marcellus.** Pick any of these *only* if it is genuinely, specifically the best answer for the domain — and even then prefer a fresher sibling. A top-30 `popularity` rank is a red flag, not a recommendation.
3. **Assign a distinct font to each purpose — different fonts for different jobs.** A polished system uses 2–4 deliberately chosen faces across clear roles, not one family doing everything: **display/headline** (carries the personality), **body/long-form** (built for sustained reading), **UI/labels** (small, legible, often a tighter sans), **data/numerals** (tabular figures or mono where numbers matter), and an optional **accent/eyebrow** voice. Make each role a real choice; never let one default face quietly cover all of them. Pair for contrast in role but harmony in feeling, and rotate which category leads project to project (grotesque-led, humanist-led, slab-led, mono-led). Do **not** reach for "editorial serif head + neutral sans body" by reflex — it is the most overused AI template, valid only when the project is genuinely editorial and Step 0 confirms it.
4. **Vary the pairing from your last project.** If recent work leaned geometric-sans, reach for a serif or grotesque this time. Individuality comes from not repeating yourself.
5. **Record the exact families and weights in the Design System Manifest.** After lock, they change only via a confirmed system change.

### Selecting a face — by attributes, never from a list

Do not pick a font from any roster, including this one. Select every face by reasoning from the brief to attributes to a catalog match — so the choice is custom to *this* project, not pulled from a template.

1. **Derive the required attributes from the brief.** Translate the project's goal, objective, audience, and style into concrete type qualities: personality (neutral ↔ characterful), formality, era/reference, stroke contrast (low ↔ high), x-height and aperture, width/proportion, warmth, and functional needs (tabular figures, legibility at small size, range of weights/axes). Do this per role — display, body, UI/labels, data, accent — since each role wants different qualities.
2. **Match those attributes against the live catalog** (Step 1's fetch) using `category`, variable `axes`, trending/recency signals, and the family's actual letterforms. Choose the face whose qualities fit the derived attributes — never the one you reach for often.
3. **Justify each pick in one line, tied to the brief** — e.g. "high-contrast transitional serif → carries the firm's heritage and authority." If you can't say why this face serves *this* project, you're templating; choose again.
4. **Check it's not a repeat.** Confirm the choice differs from what you'd have picked for an unrelated recent project, and that it isn't on the banned list.
5. **Record the chosen families and their roles in the manifest** — the specific names belong there, as the result of steps 1–4.

If a live fetch genuinely isn't available, still choose by attributes (1, 3, 4) from the widest range you can, **state that the pick was made without live data so it can be revisited, and do not fall back to a canned shortlist.**

### Type craft

- **Variable fonts** for professional work — smooth weight/width/optical-size transitions, often a smaller payload than many static cuts.
- **Vary the scale per project — don't ship the same `clamp()` values every time.** Choose a base size (15–18px) and a ratio fit to density: ~1.15–1.2 for dense UIs and dashboards, 1.25 for general product, 1.333–1.5 for editorial and expressive landing pages. Resolve the steps, record them in the manifest, limit to 4–5 active sizes.
- **Scale references** (starting points, then adjust base + ratio so no two projects share an identical scale): Major Third (×1.25) — 12→15→19→24→30→38→48px. Perfect Fourth (×1.333) for editorial — 12→16→21→28→37→50→66px.
- **Line-height by context**: 1.1–1.2 for headlines. 1.4–1.5 for body. 1.6–1.8 for long-form reading. Never use the same value across all levels.
- **Letter-spacing**: −0.02 to −0.04em on headlines 40px+. Zero on body. +0.05–0.08em on uppercase labels and captions. Negative tracking makes large type feel intentional, not loose.
- **Weight variety**: Don't jump straight from 400 to 700. Use 300 (ultra-light display), 500 (subtle emphasis), 600 (subheadings), 800–900 (impact moments). Variable fonts let you dial exact weights mid-scale.
- **Headlines dramatically larger than body** — 16px body pairs with a 56–80px hero (use `clamp()`).
- **Kinetic typography**: Available for expressive work (landing pages, brand sites). Keep to headlines only.
- **Pre-ship type self-check:** would this type system look identical to my last three projects, or like the generic AI "editorial serif + sans" magazine default? If yes, re-choose from the live catalog. Confirm each role (display / body / UI / data / accent) has a deliberately chosen face, and record the specific families and their roles in the manifest.

## Visual Hierarchy

Every layout has a reading order. Design it deliberately — don't let it emerge by accident.

**The squint test**: blur your eyes until details disappear. Whatever remains visible is dominant. The primary action and primary message should survive the squint. If it's unclear what survives, size/weight/contrast differentiation is insufficient.

**Four levels — one per view maximum for Primary:**
- **Primary** (seen first): largest, highest contrast, most whitespace around it. One per view — two competing primaries cancel each other out.
- **Secondary** (scanned next): section headings, key content. Clearly distinct from primary, clearly distinct from body. Minimum 1.5× size ratio between levels.
- **Tertiary** (read on demand): body copy, supporting information — comfortable but not competing for attention.
- **Quaternary** (available, not prominent): timestamps, metadata, fine print. Low contrast is a feature here, not a bug.

**Tools that create hierarchy** (in order of effectiveness):
1. Size — at least 1.5× between levels; 1.2× reads as the same level
2. Weight — bold vs. regular creates strong separation without relying on size
3. Contrast — high-contrast elements attract attention first; reserve maximum contrast for one element per zone
4. Whitespace — more space around an element increases perceived importance
5. Position — top-left (LTR) is seen first; above the fold always wins

**Common violations that flatten hierarchy:**
- Two CTAs with equal visual weight (the "two primary buttons" problem)
- Body text within 20% the size of headings
- Accent color applied to too many elements (loses its attention-directing power)
- Cards with four equally prominent pieces of information (image, title, meta, CTA — all fighting)

## Color

Color is derived from the domain, not from a universal default.

- **Start with mood, not with "dark mode"**. Ask what color story this project tells. Then build the palette.
- **Dark vs. light** is a design choice, not a checkbox. Dark works for: tech, nightlife, luxury, gaming. Light works for: editorial, health, education, e-commerce. Either can work for anything — but it should be a deliberate choice.
- When going dark: use `#0A0A0A` to `#1C1C1C`, never pure `#000000`. When going light: use warm whites (`#FAFAF9`) or cool whites (`#F8FAFC`), not sterile `#FFFFFF`.
- **One accent color used with conviction** is more powerful than a rainbow.
- **Trending palettes available**: Blue-green (teal, aqua), earthy (forest, clay, terracotta), iridescent/pearlescent. Use when they fit the domain — not by default.

**Color system layers** — build all four for any production project:
- **Brand palette**: Primary and accent colors with full tonal scales (50–950). Never just a single hex — you need light tints for backgrounds and dark shades for text.
- **Neutral palette**: Gray scale for text, backgrounds, borders, and surfaces. 10–12 stops minimum.
- **Semantic colors**: Success (green), warning (amber), error (red), info (blue). Each needs 4 variants: background (light tint), foreground (readable text), border (subtle outline), icon (saturated enough to read).
- **Extended palette**: Data visualization colors (needs 6–8 distinct, accessible colors), illustration palette, gradient definitions.

**Accessibility floor** (non-negotiable — check before shipping):
- Body text on background: minimum 4.5:1 contrast (WCAG AA)
- Large text (18px+ or 14px bold): minimum 3:1
- UI components and icons: minimum 3:1 against adjacent colors
- Never use color alone to convey meaning — always pair with text, icon, or shape

## Dark Mode

Dark mode is not color inversion — it requires redesigning surface hierarchy from scratch.

**Surface elevation** (lighter = higher, not shadows — shadows disappear on dark backgrounds):
| Surface level | Value range | Use |
|---------------|-------------|-----|
| Base background | `#0A0A0A`–`#121212` | Page background |
| Surface 1 | `#1C1C1C`–`#1E1E1E` | Cards, panels |
| Surface 2 | `#252525`–`#2A2A2A` | Modals, sheets |
| Surface 3 | `#2E2E2E`–`#333333` | Tooltips, menus |

**Color adaptation for dark backgrounds:**
- Primary/accent colors: reduce saturation 10–20% — vivid colors vibrate harshly on dark surfaces
- Text: off-white `#E0E0E0`–`#EDEDED`, not pure `#FFFFFF` (reduces halation and eye strain)
- Borders: `rgba(255,255,255,0.08–0.12)` — subtle, not hard lines
- Semantic colors (error red, success green): adjust lightness so they read clearly against dark surfaces without burning
- Images: consider dimming 5–10%; provide dark variants for illustrations and logos

**Implementation rules:**
- Use `prefers-color-scheme: dark` as the system default — never force light mode
- Provide a manual toggle that overrides system preference and persists in `localStorage`
- Use semantic CSS tokens (`--color-bg`, `--color-surface-1`, `--color-text`) — swap them at `:root[data-theme="dark"]`, never duplicate component styles
- Smooth transition: `transition: background-color 0.2s ease, color 0.2s ease` on `:root` (exclude from `prefers-reduced-motion`)
- Test every component in dark mode — don't assume light-mode designs translate

## Motion & Interaction

Motion should match the domain's emotional register:

- **Timing**: 200–500ms for micro-interactions. Under 200ms = instant (hovers). Over 500ms = cinematic (page reveals).
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` for most. Spring physics for playful UIs.
- **Match energy to domain**: Crypto = snappy and precise. Photography = slow and reverent. Dashboard = functional and instant. Brand site = theatrical and scroll-driven.
- **Scroll-driven animations**: Great for storytelling sites. Overkill for dashboards.
- **Hover states**: Every interactive element needs one. The style depends on context.
- **`prefers-reduced-motion`**: Always respect it.
- **Libraries**: GSAP for scroll-driven work, Framer Motion for React, CSS transitions for simple cases.
- **Micro-interaction anatomy**: Before implementing any interaction, name its four parts — **Trigger** (what starts it: click, hover, system event, threshold), **Rules** (the sequence: what happens and in what order), **Feedback** (what the user perceives: visual, motion, audio), **Loop/Mode** (does it repeat? first-time vs. repeat behavior?). If you can't name all four, the interaction is underspecified. A confetti burst on first save — not every save — is correct loop behavior.

## Loading States

Show something immediately — a blank screen is never acceptable, regardless of how fast the data is expected to load.

| Duration | Right pattern |
|----------|--------------|
| Under 100ms | No indicator — just render |
| 100ms–1s | Skeleton screen that matches the content shape (card, list row, etc.) |
| 1s–10s | Spinner if indeterminate; progress bar if measurable |
| Over 10s | Explicit progress with time estimate, or offer a background/offline option |

**Skeleton screens** beat spinners whenever content structure is known. The skeleton shape should match what will appear — a card skeleton for cards, row skeletons for lists. Animate with a shimmer traveling left-to-right at 1.5s. Always honor `prefers-reduced-motion` by removing the shimmer (keep the skeleton shape).

**Optimistic UI**: For reliable user actions (toggle, save, like), show the expected result immediately and reconcile with the server. Roll back on failure. This removes perceived latency without deception.

**Transition into content**: Fade loaded content in (opacity 0→1, 200ms) — never pop it in. Stagger list items by 30–50ms. Prevent layout shift (CLS) by reserving space with matching skeleton dimensions before content loads.

## Feedback Patterns

Every user action needs acknowledgment. Design feedback as a unified system — not per-feature, per-case.

**Four feedback types:**
- **Immediate** (under 100ms, always): button state change on press, inline validation on blur, toggle visual response, drag position update. If the UI doesn't respond in under 100ms, it feels broken.
- **Confirmation** (brief, non-blocking): success toast after save, checkmark animation on completion, undo option for reversible actions. Never block flow — show it alongside, not instead of, continuing the task.
- **Status** (persists while relevant): progress bars for ongoing operations, status badges (pending / active / complete / failed), syncing indicators, upload progress.
- **Notification** (async events): in-app alerts for background events, badge counts on nav items, system-wide banners for outages or announcements.

**Feedback hierarchy** — prefer the level closest to the action:
1. **Inline/contextual** — label change, icon swap, color shift at the exact element
2. **Component-level** — within the card, form, or section where the action occurred
3. **Page-level** — toast or snackbar at top or bottom of viewport (use sparingly)
4. **System-level** — notification outside current view (only for truly async background events)

**Duration and dismissal rules:**
- Success toasts: auto-dismiss after 3–5 seconds
- Error messages: persist until resolved or explicitly dismissed — never auto-dismiss an error
- Confirmations: 2–3 second display with an undo action inline
- "Provide undo, not 'Are you sure?'" — optimistic UI + undo is always better UX than a confirmation dialog for reversible actions

**Accessibility**: Every feedback channel must have a non-color component — icon, text label, or ARIA announcement. Use `role="alert"` for errors and critical messages; `aria-live="polite"` for status updates that shouldn't interrupt screen readers.

## Technology Approach

1. **React + Tailwind** (default) — Tailwind utilities, `clsx`/`cn()`, Framer Motion for animation.
2. **HTML + CSS** — Semantic HTML, CSS custom properties, modern CSS (container queries, subgrid, scroll-snap).
3. **React + CSS Modules** — Scoped styles with `composes`.

## Performance is Design

- **Core Web Vitals**: LCP, INP, CLS are design constraints.
- **Lazy load** below the fold. Optimize animations to compositor thread (`transform`, `opacity`).
- **Font loading**: `font-display: swap`, preload primary font.
- **Images**: WebP/AVIF with responsive `srcset`.

## External Tool Workflow

- **Figma**: Pull design tokens and specs directly if MCP connected.
- **Canva**: Quick visual assets and social graphics.
- **Gamma**: Presentation-style pages and pitch decks.

## Reference Material — Everything Is Inline

This skill is **fully self-contained**. There are no external reference files to fetch — every toolbox lives in this document. Treat them as toolboxes to **selectively pull from**, not checklists to apply uniformly:

- **The 2026 interaction toolkit** — see "Modern Interaction Techniques" above: the scroll-driven animation taxonomy (the seven types), the 2026 motion standard, the tool decision table, and copy-paste patterns for scrubbed reveals, parallax, and reactive micro-motion.
- **Core UI component patterns** — the section directly below: cards, buttons, inputs, nav, and tables for SaaS and dashboard work.
- **Advanced component patterns** — the final section of this document: scatter-to-spread assembly, floating pop-outs, sticky stacking testimonials, frosted nav, pill badges, SVG path connectors, color-blocked bento grids, hand-drawn annotations, and more — for marketing and landing pages.

## Core UI Component Patterns — Cards, Buttons, Inputs, Nav, Tables

The bread-and-butter of SaaS and dashboard work. Every value below is a **token reference** — wire these to the Design System Manifest's `:root` set; never ship raw hex. Each interactive element carries its own hover, a sub-150ms press state, and a visible focus ring.

### Buttons
One base, varied by surface. Primary dominates; secondary and ghost recede.

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 20px; border-radius: var(--radius-md, 10px);
  font-weight: 600; font-size: 0.95rem; cursor: pointer;
  border: 1px solid transparent;
  transition: transform 120ms ease, background-color 120ms ease, box-shadow 120ms ease;
}
.btn:active        { transform: scale(0.97); }                          /* press feedback */
.btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.btn-primary       { background: var(--accent); color: var(--accent-fg, #fff); }
.btn-primary:hover { background: var(--accent-hover); box-shadow: 0 4px 12px var(--accent-glow, rgba(0,0,0,.15)); }
.btn-secondary     { background: var(--surface-1); color: var(--text-1); border-color: var(--border); }
.btn-secondary:hover { background: var(--surface-2); }
.btn-ghost         { background: transparent; color: var(--text-1); }
.btn-ghost:hover   { background: var(--surface-1); }
```

### Cards
Lift and deepen the shadow on hover — only for cards that are actually interactive.

```css
.card {
  background: var(--surface-1); border: 1px solid var(--border);
  border-radius: var(--radius-lg, 16px); padding: var(--space-lg, 24px);
  box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 4px 8px rgba(0,0,0,.04);
  transition: transform 200ms cubic-bezier(.16,1,.3,1), box-shadow 200ms ease;
}
.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 4px rgba(0,0,0,.06), 0 8px 16px rgba(0,0,0,.06), 0 20px 32px rgba(0,0,0,.08);
}
```

### Inputs
Focus is a clear border + glow ring; errors pair color with text and `role="alert"`.

```css
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 0.85rem; font-weight: 500; color: var(--text-2); }
.input {
  padding: 10px 14px; border-radius: var(--radius-md, 10px);
  background: var(--surface-1); border: 1px solid var(--border);
  color: var(--text-1); font-size: 0.95rem;
  transition: border-color 120ms ease, box-shadow 120ms ease;
}
.input::placeholder        { color: var(--text-3); }
.input:focus {
  outline: none; border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow, rgba(0,0,0,.1));
}
.input[aria-invalid="true"] { border-color: var(--danger); }
.field-error { font-size: 0.8rem; color: var(--danger); }   /* render with role="alert" */
```

### Navigation
Active item gets an animated underline, not just a color change.

```css
.nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 24px; gap: 24px;
}
.nav-links { display: flex; gap: 4px; }
.nav-link {
  position: relative; padding: 8px 12px; border-radius: 8px;
  color: var(--text-2); font-weight: 500; text-decoration: none;
  transition: color 120ms ease, background-color 120ms ease;
}
.nav-link:hover { color: var(--text-1); background: var(--surface-1); }
.nav-link[aria-current="page"] { color: var(--text-1); }
.nav-link[aria-current="page"]::after {
  content: ""; position: absolute; left: 12px; right: 12px; bottom: 2px;
  height: 2px; background: var(--accent); border-radius: 2px;
}
```

### Tables
Quiet header, hover-highlighted rows, tabular numerals so columns of numbers align.

```css
.table { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
.table th {
  text-align: left; padding: 12px 16px; font-weight: 600;
  color: var(--text-2); font-size: 0.8rem; text-transform: uppercase;
  letter-spacing: 0.04em; border-bottom: 1px solid var(--border);
}
.table td { padding: 14px 16px; border-bottom: 1px solid var(--border); color: var(--text-1); }
.table tbody tr        { transition: background-color 100ms ease; }
.table tbody tr:hover  { background: var(--surface-1); }
.table .num { font-variant-numeric: tabular-nums; text-align: right; }
```

---

## Advanced Component Patterns — Ready-to-Use Implementations

The following are production-ready patterns extracted from award-winning sites. These are **copy-paste-and-adapt** implementations, not abstract descriptions.

**IMPORTANT: Every landing page or marketing page MUST implement at least 2 of these patterns.** Don't just describe them — copy the HTML/CSS/JS blocks below, adapt the content, and ship them. A landing page without at least one scroll-driven animation pattern (scatter-to-spread, sticky stacking, or scroll-triggered assembly) will feel static and dated. A page with a download CTA should use the QR code polish pattern. A page with testimonials should use the sticky stacking pattern or the overlapping card stack.

### Scatter-to-Spread Assembly

Elements start clustered at center, then spread to unique final positions as the section enters the viewport. Creates a "constellation" effect with visual gravity. **Best for**: team photos, feature showcases, app screenshots, partner logos, testimonial avatars.

```html
<section class="scatter-section">
  <!-- Concentric circle background for visual gravity -->
  <div class="scatter-bg">
    <div class="circle circle-outer"></div>
    <div class="circle circle-mid"></div>
    <div class="circle circle-inner"></div>
  </div>
  <!-- Central text that fades in as items spread -->
  <div class="scatter-text">
    <h2>Your Heading Here</h2>
    <p>Supporting text</p>
  </div>
  <!-- Scattered items — each gets unique final position via CSS vars -->
  <div class="scatter-item" style="--tx:-340px;--ty:-120px;--r:-4deg;--delay:0ms;--s:1.05">
    <img src="..." alt="" /><span>Label</span>
  </div>
  <div class="scatter-item" style="--tx:280px;--ty:-90px;--r:3deg;--delay:80ms;--s:1">
    <img src="..." alt="" /><span>Label</span>
  </div>
  <div class="scatter-item" style="--tx:-200px;--ty:180px;--r:-2deg;--delay:160ms;--s:0.9">
    <img src="..." alt="" /><span>Label</span>
  </div>
  <div class="scatter-item" style="--tx:320px;--ty:150px;--r:5deg;--delay:240ms;--s:1.1">
    <img src="..." alt="" /><span>Label</span>
  </div>
  <!-- Add 4-8 items, each with UNIQUE tx/ty/r values -->
</section>
```
```css
.scatter-section {
  position: relative; min-height: 100vh; display: flex;
  align-items: center; justify-content: center; overflow: hidden;
}
.scatter-bg { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.circle {
  position: absolute; border-radius: 50%; border: 1px solid rgba(0,0,0,0.06);
}
.circle-outer { width: 600px; height: 600px; }
.circle-mid { width: 450px; height: 450px; }
.circle-inner { width: 300px; height: 300px; }
.scatter-text { position: relative; z-index: 2; text-align: center; transition: opacity 0.8s ease; }
.scatter-item {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0.7) rotate(0deg); /* START: clustered at center */
  opacity: 0; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay);
  border-radius: 16px; overflow: hidden; background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.08);
}
.scatter-section.visible .scatter-item {
  /* END: spread to unique positions */
  transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(var(--s)) rotate(var(--r));
  opacity: 1;
}
```
```js
// Trigger the spread when section enters viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.3 });
document.querySelectorAll('.scatter-section').forEach(s => observer.observe(s));
```

**What makes this work**: (1) each item has UNIQUE translate/rotate/scale values — no two are the same, (2) staggered delays create a cascade, (3) concentric circles give visual gravity, (4) the central text fades in as items spread.

### Floating Pop-Out Cards

Small cards positioned at organic angles around a central element (phone mockup, hero image, product screenshot). Each card is slightly rotated with a gentle floating animation. **Best for**: app landing pages, feature showcases, social proof around a device mockup.

```css
.popout-container { position: relative; /* Contains the central element + popouts */ }
.popout {
  position: absolute; padding: 12px 16px; background: white;
  border-radius: 16px; display: flex; align-items: center; gap: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.08);
  animation: gentle-float 6s ease-in-out infinite;
}
/* Each popout gets unique position, rotation, and animation delay */
.popout:nth-child(1) { top: 15%; left: 5%; transform: rotate(-5deg); animation-delay: 0s; }
.popout:nth-child(2) { top: 60%; right: 3%; transform: rotate(4deg); animation-delay: 1.5s; }
.popout:nth-child(3) { bottom: 10%; left: 8%; transform: rotate(-3deg); animation-delay: 3s; }
.popout:nth-child(4) { top: 25%; right: 8%; transform: rotate(2deg); animation-delay: 0.8s; }

@keyframes gentle-float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -8px; }
}
```

Content ideas for pop-outs: mini testimonial quotes with avatar, stat badges ("4.8★ rating"), feature snippets with icon, user count ("12k+ users"). Each pop-out should contain *different types* of content — mixing quotes, stats, and features prevents monotony.

### Sticky Stacking Testimonials

Testimonial cards that stack on top of each other as the user scrolls, creating a "card deck" effect. Each card sticks at the same position; the next card scrolls up and covers the previous one. Slight alternating rotations create a natural, fanned look. **Best for**: testimonials, case studies, team quotes, customer stories.

```html
<section class="sticky-stack-section">
  <div class="sticky-stack-header">
    <h2>What People Say</h2>
    <p>Real stories from real users</p>
  </div>
  <div class="sticky-stack-cards">
    <div class="stack-card" style="--rotation: 0deg">
      <div class="stack-card-inner">
        <img src="avatar1.jpg" class="stack-avatar" alt="" />
        <div class="stack-content">
          <p class="stack-name">Jane Smith</p>
          <p class="stack-role">CEO, Acme Corp</p>
          <p class="stack-quote">"This completely transformed how our team works together."</p>
        </div>
      </div>
    </div>
    <div class="stack-card" style="--rotation: 3deg">
      <div class="stack-card-inner">
        <!-- Second testimonial -->
      </div>
    </div>
    <div class="stack-card" style="--rotation: -3deg">
      <div class="stack-card-inner">
        <!-- Third testimonial -->
      </div>
    </div>
  </div>
</section>
```
```css
.sticky-stack-section {
  padding: 80px 0;
}
.sticky-stack-header {
  text-align: center; margin-bottom: 40px;
  position: sticky; top: 40px; z-index: 10;
}
.sticky-stack-cards {
  max-width: 800px; margin: 0 auto;
  /* Extra bottom padding so user can scroll past the last card */
  padding-bottom: 60vh;
}
.stack-card {
  position: sticky; top: 280px; /* All cards stick at the same Y position */
  margin-bottom: 40px; /* Spacing between cards in document flow — controls scroll distance before next card covers */
  transform: rotate(var(--rotation, 0deg));
}
.stack-card-inner {
  /* Outer frame — subtle tinted background */
  padding: 8px; border-radius: 32px;
  background: rgba(0,0,0,0.03);
}
.stack-card-inner > div,
.stack-card-content {
  /* Inner card — white with multi-layer shadow */
  background: white; border-radius: 24px;
  padding: 32px; display: flex; gap: 24px; align-items: flex-start;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.06),
    0 4px 8px rgba(0,0,0,0.04),
    0 12px 24px rgba(0,0,0,0.08);
}
.stack-avatar {
  width: 80px; height: 80px; border-radius: 16px; object-fit: cover; flex-shrink: 0;
}
.stack-quote {
  font-size: 1.1rem; line-height: 1.6; color: #333;
}
```

**What makes this work**: (1) all cards share the same `top` value so they stack in place as user scrolls, (2) `margin-bottom` on each card controls how far user scrolls before next card arrives, (3) alternating rotations (+3°, -3°) create a natural fanned-deck aesthetic, (4) nested card design (outer tinted frame + inner white card) adds depth, (5) `padding-bottom: 60vh` on the container ensures the last card gets fully revealed. **This is a scroll-driven animation** — the user sees card 1, scrolls, card 2 slides up and covers card 1, scrolls more, card 3 covers card 2. It feels magical in practice.

### Frosted Glass Navigation

A pill-shaped floating nav with frosted glass effect. Premium and modern.

```css
.nav-frosted {
  position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
  z-index: 100; padding: 10px 24px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border-radius: 999px;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 8px rgba(0,0,0,0.03),
    0 8px 16px rgba(0,0,0,0.02);
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex; align-items: center; gap: 24px;
}
```

### Polished QR Code / Download Section

When showing a QR code or app download CTA, frame it like a product:

```css
.qr-frame {
  padding: 24px; border-radius: 24px; background: white; display: inline-block;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.04),
    0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.06);
}
.qr-frame img { border-radius: 12px; width: 200px; height: 200px; }
```

Place store badges (Apple/Google) below in a row. Pair with a clean heading like "Scan to download" + subtitle text.

### Overlapping Card Stack (Static)

For when you want the "fanned deck" look without scroll — testimonials, team highlights, or feature cards in a static pile:

```css
.card-stack { position: relative; min-height: 400px; max-width: 600px; margin: 0 auto; }
.card-stack-item {
  position: absolute; width: 90%; padding: 32px; background: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.06);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-stack-item:nth-child(1) { z-index: 3; transform: rotate(-1deg); }
.card-stack-item:nth-child(2) { z-index: 2; transform: rotate(2deg) translateY(20px) translateX(15px); opacity: 0.85; }
.card-stack-item:nth-child(3) { z-index: 1; transform: rotate(-3deg) translateY(40px) translateX(-10px); opacity: 0.7; }
```

### Floating Pill Badges Around Hero Text

Small keyword pills scattered at organic angles around a large headline. Each pill floats gently, creating energy and personality. **Best for**: playful landing pages, bootcamp/school sites, creative agency heroes, any brand that wants to feel human and energetic.

```html
<section class="pill-hero">
  <h1 class="pill-hero-heading">Master Your Craft<br/>Once And For All</h1>
  <div class="pill-badge" style="--x:-320px;--y:-80px;--r:-8deg;--d:0s">START NOW</div>
  <div class="pill-badge" style="--x:240px;--y:-120px;--r:5deg;--d:0.4s">TOP RESULTS</div>
  <div class="pill-badge" style="--x:-180px;--y:60px;--r:-4deg;--d:0.8s">NO FEAR</div>
  <div class="pill-badge" style="--x:280px;--y:40px;--r:7deg;--d:1.2s">YES YOU CAN</div>
  <div class="pill-badge" style="--x:10px;--y:-140px;--r:2deg;--d:0.6s">OUR BRAND</div>
</section>
```
```css
.pill-hero {
  position: relative; min-height: 80vh; display: flex;
  align-items: center; justify-content: center;
  background: #FAF8F5; overflow: hidden;
}
.pill-hero-heading {
  font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 700;
  text-align: center; line-height: 1.1; color: #1a1a1a;
}
.pill-badge {
  position: absolute; top: 50%; left: 50%;
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(var(--r));
  background: #C8F20D; /* bold accent — chartreuse, coral, electric blue etc */
  color: #1a1a1a; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 8px 18px; border-radius: 999px;
  animation: pill-float 5s ease-in-out infinite;
  animation-delay: var(--d);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
@keyframes pill-float {
  0%, 100% { translate: 0 0; }
  33% { translate: 3px -6px; }
  66% { translate: -2px 4px; }
}
```

**What makes this work**: (1) each badge has UNIQUE x/y/rotation values so they feel hand-placed, not gridded, (2) the floating animation is subtle (3-6px) — just enough to feel alive without being distracting, (3) staggered delays so they don't all bob in sync, (4) a single bold accent color unifies them all, (5) uppercase + small font + generous padding creates a confident pill shape.

### SVG Path Connector Animation

An SVG dashed or dotted path that curves between page sections, "drawing itself" as the user scrolls. Creates visual continuity and a journey/story feeling. **Best for**: onboarding flows, process explanations, connecting disparate content sections, playful sites.

```html
<svg class="connector-path" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
  <path class="draw-path"
    d="M 100,50 C 300,50 200,400 500,350 S 800,500 1100,200"
    stroke="#E8C840" stroke-width="4" stroke-dasharray="12 8"
    stroke-linecap="round" fill="none" />
</svg>
```
```css
.connector-path {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1;
}
.draw-path {
  stroke-dasharray: 2000; /* must be >= path length */
  stroke-dashoffset: 2000;
  transition: stroke-dashoffset 0s; /* JS controls this */
}
```
```js
// Draw the path as user scrolls through the section
const path = document.querySelector('.draw-path');
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
  const section = path.closest('section') || path.closest('.connector-wrapper');
  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top + window.scrollY;
  const sectionHeight = rect.height;
  const scrollProgress = Math.max(0, Math.min(1,
    (window.scrollY - sectionTop + window.innerHeight * 0.5) / sectionHeight
  ));
  path.style.strokeDashoffset = pathLength * (1 - scrollProgress);
});
```

**Variations**: Use `stroke-dasharray: 12 8` for dashed lines (Akadian style), `stroke-dasharray: 2 6` with `stroke-linecap: round` for dotted lines, or solid (`stroke-dasharray: none` on the initial style, only using dasharray/offset for the drawing animation). For color, match the brand accent — a bold yellow, coral, or lime works well on warm off-white backgrounds.

### Color-Blocked Bento Grid

A feature/benefits grid where each cell has its own distinct, saturated background color, creating a patchwork quilt effect. Very different from uniform-colored bento grids. **Best for**: feature showcases, value propositions, course/program breakdowns, any "4 things we offer" section.

```html
<section class="color-bento">
  <div class="bento-cell" style="--bg:#F5D76E">
    <h3>Job-ready Tech Skills</h3>
    <div class="bento-illustration"><!-- Custom SVG or geometric illustration --></div>
    <p>Stay ahead of the curve and focus on what top companies hire for today.</p>
  </div>
  <div class="bento-cell" style="--bg:#F4B4C4">
    <h3>Project Based Learning</h3>
    <div class="bento-illustration"><!-- Different illustration --></div>
    <p>Learn by building a portfolio of real projects.</p>
  </div>
  <div class="bento-cell" style="--bg:#6B8BF5">
    <h3>Accelerated Onsite</h3>
    <div class="bento-illustration"><!-- Different illustration --></div>
    <p>Small groups with expert mentors at arm's length.</p>
  </div>
  <div class="bento-cell" style="--bg:#5BBFB5">
    <h3>Land Your Dream Job</h3>
    <div class="bento-illustration"><!-- Different illustration --></div>
    <p>87% of graduates land their first job within 6 months.</p>
  </div>
</section>
```
```css
.color-bento {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0; /* cells sit flush — no gap creates the patchwork feel */
  max-width: 1000px; margin: 0 auto;
}
.bento-cell {
  background: var(--bg); padding: 48px 36px;
  display: flex; flex-direction: column; gap: 16px;
  min-height: 320px;
}
.bento-cell h3 {
  font-size: 1.6rem; font-weight: 800; color: #1a1a1a; line-height: 1.2;
}
.bento-cell p {
  font-size: 0.95rem; color: #2a2a2a; line-height: 1.6;
}
.bento-illustration {
  flex: 1; display: flex; align-items: center; justify-content: center;
}
/* Optional: cells at different sizes for visual rhythm */
.bento-cell:nth-child(3) { grid-column: 1; }
.bento-cell:nth-child(4) { grid-column: 2; }
```

**What makes this work**: (1) the colors are bold and saturated, not pastel tints — each cell is immediately distinct, (2) flush cells with no gap creates the patchwork/quilt aesthetic (add `gap: 2px` for a subtle separator if needed), (3) each cell has its own custom illustration in the same geometric style, (4) text stays dark and readable against every color because the colors are chosen to be medium-brightness.

### Hand-Drawn SVG Annotation Overlay

A hand-drawn circle, underline, or arrow drawn over clean typography, creating a "human annotation" feeling. **Best for**: emphasizing key words in headlines, adding warmth to otherwise clean designs, any playful/personable brand.

```html
<h1 class="annotated-heading">
  Master Your English
  <span class="annotated-word">
    Once And For All
    <svg class="hand-drawn-circle" viewBox="0 0 300 80" fill="none">
      <ellipse cx="150" cy="40" rx="140" ry="35"
        stroke="#C8F20D" stroke-width="2"
        stroke-dasharray="600" stroke-dashoffset="600"
        style="animation: draw-circle 1.5s ease forwards 0.5s">
        <!-- Imperfect shape: use a path for more organic feel -->
      </ellipse>
    </svg>
  </span>
</h1>
```
```css
.annotated-word { position: relative; display: inline-block; }
.hand-drawn-circle {
  position: absolute; top: -10px; left: -10px;
  width: calc(100% + 20px); height: calc(100% + 20px);
  pointer-events: none;
}
@keyframes draw-circle {
  to { stroke-dashoffset: 0; }
}
```

**Pro tip**: For a truly organic hand-drawn feel, use a `<path>` instead of `<ellipse>` — trace an imperfect, wobbly circle in an SVG editor. The slight irregularity is what sells the "hand-drawn" illusion. You can also use this technique for underlines (a wavy `<path>` below text) or arrows pointing to key elements.
