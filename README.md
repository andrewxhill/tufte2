# Graphics Press CSS

A typographic and data-visualization CSS library derived from the books of Edward Tufte, the cartographic color principles of Eduard Imhof, and the typographic standards of Robert Bringhurst.

**[Live Demo & Documentation](https://andrewxhill.github.io/tufte2)**

## Features

- **ET Book typeface** -- Tufte's open-source Bembo digitisation
- **Sidenotes & margin notes** -- CSS-only, no JavaScript required
- **Data visualization components** -- dot charts, dumbbell charts, sparklines, bullet graphs, heat tables, slopegraphs, parallel coordinates, and more
- **Dark mode** -- automatic via `prefers-color-scheme`, manual via `.dark` class
- **Responsive** -- fluid typography, mobile sidenote toggles, adaptive chart layouts
- **Print styles** -- optimized for paper output
- **CSS layers** -- `@layer` for specificity-safe cascade; override without `!important`
- **oklch() colors** -- perceptually uniform categorical palette per Imhof's equal-weight principle

## Install

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/graphics-press-css@4.0.0/css/graphics-press.css">
```

### npm

```bash
npm install graphics-press-css
```

```css
@import 'graphics-press-css';
```

### Tailwind CSS

```bash
npm install graphics-press-css tailwindcss
```

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('graphics-press-css/tailwind'),
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
  <link rel="stylesheet" href="https://unpkg.com/graphics-press-css@4.0.0/css/graphics-press.css">
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
