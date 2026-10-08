# Halcyon Court: demo website

A fictional serviced-apartment brand in Uyo, built as a pitch sample. Stack: HTML, CSS, vanilla JavaScript, Three.js r128 (cdnjs).

## Files

- `index.html`: all three pages (Home, Suites, Book). Pages switch by URL hash: `#/`, `#/suites`, `#/book`.
- `css/style.css`: styling. Brand colours and light/dark themes are the variables at the top.
- `js/app.js`: the 3D scenes, interactions and booking form.

## Interactions

Time-of-day slider, camera tour, drag or arrow-key orbit (click the 3D view first), clickable room hotspots, three light scenes, live price estimate, booking form that opens WhatsApp with the details filled in.

## Brand notes

- Palette: slate `#23282e`, stone `#e8eaeb`, amber `#d9993a`, timber `#a9733f`. Taken from a real Uyo serviced-apartment look: slate exterior, timber cladding, warm cove light.
- Type: Fraunces for headings, Figtree for body.
- Voice: plain, calm, specific. Say what the guest gets, skip adjectives.
- Logo: an arch with a centre line, drawn in CSS (`.logo i`).
