# Design Plan — KEYA Knit Composite (page & section classification)

The checklist for the design phase. Every page, every section top-to-bottom, plus global states. Grounded in [../../research/brief.md](../../research/brief.md), [../../research/decisions.md](../../research/decisions.md), [../../research/brand.md](../../research/brand.md).

**Imagery legend per section:**
- `[IMG]` = raster asset generated (photography, illustration, map, texture, art-directed set-piece) → `design/assets/<page>/<section>-vN.png`
- `[CSS]` = built directly in HTML/CSS/SVG (UI chrome: buttons, cards, tables, forms, badges) — craft-correct, no bitmap
- Most sections are `[CSS]` composed **around** one or more `[IMG]` anchors.

Two-lane rule applies everywhere ([brand §5](../../research/brand.md)): BUY = green+solid+cart · QUOTE = navy+outline+RFQ-sheet.

---

## GLOBAL SYSTEM (shared across all pages)
- **G1. Top utility bar** `[CSS]` — currency switcher (USD/EUR/GBP/BDT), country, "Talk to sales", language (EN).
- **G2. Header / primary nav** `[CSS]` — logo · Products / Company / Request a Quote / Contact · search · **two counters (Cart 🛒 green · Quote list 🗎 navy)** · account.
- **G3. Mega-menu (Products)** `[CSS]` — Men/Women/Kids/Baby + By Product Type + "Ready to Ship" shortcut + featured tile `[IMG]`.
- **G4. Footer** `[CSS]` — sitemap columns, newsletter, certs strip, "sister concern of Keya Group", legal, social, address.
- **G5. Global states:**
  - Toast: added-to-cart (green) `[IMG]` · added-to-quote (navy) `[IMG]` · cross-lane redirect ("made to order → moved to Quote list") `[IMG]`
  - Modal: quick-view PDP `[CSS]` · sign-in / create account `[CSS]` · RFQ submitted confirmation w/ reference no. `[IMG]`
  - Empty states: empty cart `[IMG]` · empty quote list `[IMG]` · no search results `[CSS]`
  - Loading: skeleton cards/PDP `[CSS]` · optimistic add spinner `[CSS]`
  - Error: 404 `[CSS]` · form validation inline `[CSS]` · payment failed `[CSS]`

---

## PAGE 1 — HOME (flagship; = design/index.html)
Order locked in [decisions D5](../../research/decisions.md).
1. **H1. Hero** `[IMG]` — positioning line "From two pieces to twenty thousand", dual CTA (Request a Quote / Shop Products), factory-floor hero visual.
2. **H2. Trust bar** `[CSS]` — 20+ yrs · 5,000+ workforce · 3.5M+/mo · vertical integration (animated count-up).
3. **H3. Dual-path splitter** `[IMG]`×2 — two big cards: "Buy finished products" (green lane) vs "Request a bulk quote" (navy lane).
4. **H4. Featured categories** `[IMG]`×4 — Men / Women / Kids / Baby tiles.
5. **H5. Featured ready-to-ship products** `[CSS]` + product shots `[IMG]` — adaptive cards, 3-state price zone.
6. **H6. Manufacturing process strip** `[IMG]` — animated 9-step vertical flow set-piece (Yarn→…→Export).
7. **H7. Sustainability & compliance** `[IMG]` — ETP/environment visual + cert badge grid `[CSS]`.
8. **H8. Trusted-by client logos** `[CSS]` — logo wall (H&M/Zara/Primark/… ) neutral treatment.
9. **H9. Export markets map** `[IMG]` — stylized world map, green market pins.
10. **H10. Final CTA band** `[CSS]` — "Let's create a better future together" + dual CTA on navy.
11. **G4 footer.**

## PAGE 2 — PRODUCT CATALOGUE / CATEGORY (design/pages/catalogue.html)
1. **C1. Category header** `[IMG]` — banner + breadcrumb + intro + Ready-to-Ship toggle.
2. **C2. Filter rail** `[CSS]` — category, type, gender/age, fabric, GSM, colour, price, **fulfilment mode**, MOQ, certification.
3. **C3. Toolbar** `[CSS]` — result count, sort, grid/list toggle.
4. **C4. Product grid** `[CSS]` + product shots `[IMG]` — adaptive cards, badges, quick-add per lane, 3-state price.
5. **C5. Pagination / load-more** `[CSS]`.
6. **C6. Empty/za-results & applied-filter chips** `[CSS]`.

## PAGE 3 — PRODUCT DETAIL PAGE (design/pages/product.html) — the dual-mode centerpiece
1. **P1. Breadcrumb** `[CSS]`.
2. **P2. Gallery** `[IMG]` — product image set (multi-angle, colour variants), zoom.
3. **P3. Dual-mode action panel** `[CSS]` — **Hybrid segmented toggle** [Buy Retail | Order in Bulk]; green price+qty+cart panel ⇄ navy MOQ+spec-configurator+Add-to-Quote panel.
4. **P4. Variant selectors** `[CSS]` — size, colour, fit.
5. **P5. Customisation add-ons** `[CSS]` — private label / custom colour / GSM / packaging → routes to quote.
6. **P6. Specs & care** `[CSS]` — fabric, GSM, fit, care, origin (spec table).
7. **P7. Certifications for this product** `[CSS]` — cert chips.
8. **P8. Downloadable spec sheet / tech pack** `[CSS]`.
9. **P9. Related / recommended** `[CSS]` + shots `[IMG]`.

## PAGE 4 — REQUEST A QUOTE / RFQ BUILDER + QUOTE CART (design/pages/quote.html) — flagship differentiator
1. **Q1. RFQ header** `[IMG]` — "Request a Quote", trust reassurance (48h, ungated).
2. **Q2. Quote-cart line items** `[CSS]` — products + requested qty + specs, edit/remove.
3. **Q3. RFQ builder (step wizard on mobile)** `[CSS]` — specs → quantities → shipping/incoterms → attachments → review. Fields: fabric/GSM/colour/size breakdown, target price, delivery date, destination country/port, incoterms (FOB/CIF), required certs (checkboxes), notes, file attach.
4. **Q4. Business profile prefill** `[CSS]`.
5. **Q5. Submit + reference-number confirmation** `[IMG]` (see G5 modal).
6. **Q6. Standalone entry** `[CSS]` — empty RFQ start.

## PAGE 5 — SHOPPING CART (design/pages/cart.html)
1. **CT1. Cart line items** `[CSS]` — variant, qty, price, subtotal, save-for-later.
2. **CT2. Order summary** `[CSS]` — est. shipping/taxes, promo code.
3. **CT3. Cross-sell** `[CSS]`.
4. **CT4. Cart ⇄ Quote-cart separation banner** `[CSS]`.

## PAGE 6 — CHECKOUT (design/pages/checkout.html)
1. **CO1. Contact / guest-or-account** `[CSS]`.
2. **CO2. Shipping address + validation** `[CSS]`.
3. **CO3. Shipping method (zone-based)** `[CSS]`.
4. **CO4. Payment (grouped: Stripe cards + BD-local optional)** `[CSS]`.
5. **CO5. Order summary + T&C + place order** `[CSS]`.
6. **CO6. Order confirmation** `[IMG]` — success + order number.

## PAGE 7 — COMPANY / ABOUT (design/pages/company.html) — deck content
1. **A1. Company overview hero** `[IMG]` — 20+ yrs, vertical integration.
2. **A2. Manufacturing strength** `[IMG]` — 9-step interactive process flow (deep version).
3. **A3. Quality assurance** `[IMG]` — in-line/end-line/fabric testing/AQL, inspection lab.
4. **A4. Sustainability & compliance** `[IMG]` — ETP facility + cert badge grid.
5. **A5. Infrastructure** `[IMG]` — 300+ knitting / 4,000+ sewing machines, facility gallery, daily 120K/monthly 3.5M.
6. **A6. Global export capability** `[IMG]` — market map + regions.
7. **A7. Our partners** `[CSS]` — client logo wall.
8. **A8. Why choose KEYA + values** `[CSS]` — vertical integration, pricing, QA, shipment, workforce; Integrity/Innovation/Teamwork/Passion.

## PAGE 8 — ACCOUNT (design/pages/account.html)
1. **AC1. Account nav** `[CSS]` — Orders / Quotes-RFQs / Addresses / Business Profile / Settings.
2. **AC2. Orders list + detail** `[CSS]`.
3. **AC3. Quotes/RFQs list** `[CSS]` — status pipeline (Submitted→Under Review→Quote Ready→Revised→Accepted→Converted→Closed).
4. **AC4. Quote detail** `[CSS]` — issued quote line items, accept/revise/decline, threaded messaging, PDF download.
5. **AC5. Business profile + verification badge** `[CSS]`.
6. **AC6. Empty states** `[IMG]` — no orders / no quotes.

## PAGE 9 — CONTACT (design/pages/contact.html)
1. **CN1. Contact hero + form** `[CSS]`.
2. **CN2. Address / phone / email / map embed** `[IMG]` (stylized map) — Gazaria, Munshiganj, BD.
3. **CN3. Prominent Request-a-Quote CTA + QR/connect block** `[CSS]`.

## PAGE 10 — ADMIN (design/pages/admin.html) — separate authenticated app (lighter, representative)
1. **AD1. Dashboard** `[CSS]` — KPIs (RFQ funnel, sales, top products/markets, conversion) + charts.
2. **AD2. RFQ inbox** `[CSS]` — filters (status/country/value/buyer type/date), SLA/aging indicators.
3. **AD3. RFQ detail → quote builder** `[CSS]` — specs+attachments, line prices/MOQ/lead time/terms/validity, versioning, send, convert-to-order.
4. **AD4. Products & inventory** `[CSS]` — variants, fulfilment mode, MOQ, CSV import.
5. **AD5. Orders / Customers / Content** `[CSS]` — representative tables.

---

## Build order (priority)
1. Home (flagship / index) — full imagery + assembly.
2. PDP (dual-mode centerpiece) + Catalogue.
3. RFQ builder / Quote cart (differentiator).
4. Company/About (deck credibility).
5. Cart / Checkout.
6. Account · Contact · Admin.
7. Global states woven throughout.

Version tracking in [../assets/versions.json](../assets/versions.json).
