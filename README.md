# Graphics Press CSS

A typographic and data-visualization CSS library derived from the books of Edward Tufte, the cartographic color principles of Eduard Imhof, and the typographic standards of Robert Bringhurst.

**[Live Demo & Documentation](https://andrewxhill.github.io/tufte2)**

## Features

- **ET Book typeface** -- Tufte's open-source Bembo digitisation
- **Sidenotes & margin notes** -- CSS-only, no JavaScript required
- **Data visualization components** -- dot charts, dumbbell charts, sparklines, bullet graphs, heat tables, slopegraphs, parallel coordinates, and more
- **Narrative map framing** -- reusable slippy-map container, inset legend panel, and map annotation chrome for MapLibre/Leaflet examples
- **Analytical briefing blocks** -- strategy headers, metric strips, tab rows, analytic cards, app-shell primitives, reusable research rows, and editorial spread layouts for research apps
- **Chart interop tokens** -- semantic chart colors and axis/grid variables for D3, Recharts, ECharts, and hand-rolled SVG
- **Editorial spread layouts** -- dual-column analysis blocks with deliberate chart/timeline breakout rows
- **Dark mode** -- automatic via `prefers-color-scheme`, manual via `.dark` class
- **Responsive** -- fluid typography, mobile sidenote toggles, adaptive chart layouts
- **Print styles** -- optimized for paper output
- **CSS layers** -- `@layer` for specificity-safe cascade; override without `!important`
- **oklch() colors** -- perceptually uniform categorical palette per Imhof's equal-weight principle

## Install

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@andrewxhill/graphics-press-css@4.5.0/css/graphics-press.css">
```

### npm

```bash
npm install @andrewxhill/graphics-press-css
```

```css
@import '@andrewxhill/graphics-press-css';
```

### Tailwind CSS

```bash
npm install @andrewxhill/graphics-press-css tailwindcss
```

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('@andrewxhill/graphics-press-css/tailwind'),
  ],
}
```

## Quick Start

```html
<!DOCTYPE html>
<html lang="en" class="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/@andrewxhill/graphics-press-css@4.5.0/css/graphics-press.css">
</head>
<body>
  <article>
    <h1>Your Title</h1>
    <p class="subtitle">Your subtitle here</p>
    <section>
      <h2>Section heading</h2>
      <p>Your content with a sidenote.<label for="sn-1" class="sidenote-toggle sidenote-number"></label>
        <input type="checkbox" id="sn-1" class="sidenote-toggle">
        <span class="sidenote">This appears in the margin on wide screens.</span>
      </p>
    </section>
  </article>
</body>
</html>
```

## Components

| Component | Class | Description |
|-----------|-------|-------------|
| Sidenotes | `.sidenote` | Numbered margin notes |
| Margin notes | `.marginnote` | Unnumbered margin content |
| Figures | `.figure-full`, `.figure-margin` | Column, full-width, or margin figures |
| Tables | booktabs default | Three-rule tables in Gill Sans |
| Sparklines | `.sparkline` | Word-sized inline charts |
| Dot chart | `.dot-chart` | Tufte's bar chart replacement |
| Dumbbell | `.dumbbell` | Before/after connected dots |
| Strip plot | `.strip-plot` | One-way scatter |
| Bullet graph | `.bullet-graphs` | Gauge replacement |
| Heat table | `.heat-table` | Color-encoded cell values |
| Ranked table | `.ranked-table` | Dotted leaders, recessive ranks |
| Small multiples | `.small-multiples` | Grid of comparable charts |
| Timeline | `.timeline` | Events and periods |
| Slopegraph | `.slopegraph-wrap` | Two-point comparison |
| Parallel coords | `.parallel-coords` | Multi-variable SVG |
| Slippy map | `.gp-map-block`, `.gp-map-frame`, `.gp-map-panel` | Narrative map embed with overlay panel and key |
| Strategy brief | `.brief-backlink`, `.brief-header`, `.metric-strip`, `.tab-nav--filled`, `.analytic-grid`, `.activity-timeline` | Analytical dashboard framing for research and trading apps |
| App UI | `.gp-app-shell`, `.gp-workspace`, `.gp-workspace__tabs`, `.gp-workspace__header`, `.gp-workspace__toolbar`, `.gp-toolbar`, `.gp-btn`, `.gp-input`, `.gp-panel`, `.gp-kpi-grid`, `.gp-data-table`, `.gp-card-grid`, `.gp-progress`, `.gp-meter`, `.gp-record-list`, `.gp-chart-frame`, `.gp-spread`, `.gp-treemap` | Tufte-compatible operational UI layer for analytics apps, research lists, chart wrappers, editorial spreads, wide workspace shells, treemaps, and quantitative table cells |
| Bar chart | `.bar-chart` | Minimal tick or filled bars |
| Pull stat | `.pull-stat` | Large featured numbers |
| Stat grid | `.stat-grid` | Multiple metrics under one rule |
| Evidence | `.evidence` | Image + analysis layout |

## Dark Mode

Automatic via system preference, or manual:

```js
// Toggle
document.documentElement.classList.toggle('dark');
document.documentElement.classList.toggle('light');
```

## License

MIT

## Release Flow

Releases are CI-driven with Changesets.

For any PR that should publish a new package version:

```bash
npx changeset
```

Choose the release type:

- `patch` for fixes and polish
- `minor` for new backwards-compatible components or tokens
- `major` for breaking changes

When changesets land on `main`:

- GitHub Actions opens or updates a release PR
- merging that PR bumps the version and creates the release commit
- CI tags the release, publishes to npm, creates the GitHub release, and republishes `gh-pages`

Do not hand-create version tags or GitHub releases for normal package publishing.
