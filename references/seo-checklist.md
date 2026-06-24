# On-page SEO checklist — Bridge

Every page (homepage, landing page, suburb page, subject page, blog post) must
satisfy every applicable item. Read [[voice]] and [[facts]] first — copy quality
gates SEO. This is the bar; don't ship a page that fails a required item.

---

## Metadata (every page)

- [ ] **Title**: 50–60 chars, primary keyword near the start, ends with "— Bridge Tutoring" (template handles the suffix).
- [ ] **Meta description**: 140–160 chars, primary keyword + benefit + soft, non-salesy CTA.
- [ ] **Canonical** set via `alternates.canonical` (relative path; `metadataBase` makes it absolute).
- [ ] **Open Graph**: inherits site default unless the page has a better image.
- [ ] One page = one intent. Don't target two unrelated keywords on one page.

## URL

- [ ] Lowercase, hyphenated, short. No underscores, no stop words.
- [ ] Logical hierarchy: `/tutors/[suburb]`, `/subjects/[subject]`, `/blog/[slug]`.
- [ ] Primary keyword in the slug.

## Headings

- [ ] Exactly **one H1**, containing the primary keyword naturally.
- [ ] Logical H2 → H3 order, never skip levels.
- [ ] H2s use real questions/terms parents search ("How much does tutoring cost?", "Maths tutors in Sandton").
- [ ] No keyword stuffing — must read in Bridge voice.

## Local SEO (suburb & city pages)

- [ ] Primary keyword pattern: **"[subject] tutor in [suburb]"** or **"tutors in [suburb]"**.
- [ ] Name the suburb and its metro (Pretoria / Johannesburg) in the H1 and first paragraph.
- [ ] Mention nearby/related suburbs for context and internal links.
- [ ] State both service modes where true: in-person in that area + online across SA.
- [ ] Don't fabricate a street address — Bridge serves areas, it isn't a storefront.

## Body copy

- [ ] Primary keyword in the first 100 words; direct answer in the first paragraph.
- [ ] Short paragraphs (1–4 sentences), plain SA English.
- [ ] Benefit-led, parent-focused, steady tone. No fear, no urgency, no exclamation marks.
- [ ] Use only verified numbers from [[facts]].

## Internal links

- [ ] 3–5 contextual internal links with descriptive anchor text (never "click here").
- [ ] Link suburb ↔ subject ↔ relevant blog posts ↔ request-tutor form.
- [ ] Every page has a clear next action (usually "Find your tutor" → /request-tutor).

## Schema (JSON-LD)

- [ ] Site-wide Organization + LocalBusiness already injected in the root layout.
- [ ] **FAQPage** wherever a page has an FAQ section (use the `JsonLd` helper).
- [ ] **BreadcrumbList** on nested pages (suburb, subject, blog).
- [ ] **Article** + author on blog posts.

## E-E-A-T

- [ ] Real, specific detail — local knowledge, real subjects, the human-matching model.
- [ ] Blog posts: author byline + published date (and "updated" when revised).
- [ ] Cite authoritative sources where relevant (.gov.za, DBE, universities).

## Images & accessibility

- [ ] Descriptive `alt` text including the keyword where natural; `alt=""` only for decorative.
- [ ] `next/image` with width/height or `fill` + `sizes` (prevents CLS).
- [ ] Semantic HTML5: `<header> <nav> <main> <article> <footer>`.
- [ ] Colour contrast meets WCAG AA; visible focus states; touch targets ≥ 44px.

## Performance

- [ ] Static-render where possible (no needless client components).
- [ ] `npm run build` clean — page shows `○ (Static)` in the build log.
- [ ] No render-blocking or oversized images.

---

## Definition of done for a content page

`npm run build` passes · the page reads in Bridge voice (no AI tells) · all
required items above checked · view-source shows the rendered copy and any
JSON-LD.
