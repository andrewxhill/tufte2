/**
 * Graphics Press CSS — Tailwind CSS Plugin  v4.0.0
 * ─────────────────────────────────────────────────────────────────────────────
 * A Tailwind CSS v3+ plugin that mirrors the Graphics Press CSS library.
 *
 * Usage in tailwind.config.js:
 *   const graphicsPress = require('graphics-press-css/tailwind');
 *   module.exports = { plugins: [graphicsPress] };
 *
 * MIT License. See LICENSE for details.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addBase, addComponents, addUtilities, theme }) {

    /* ═══════════════════════════════════════════════════════════════════════
       BASE — @font-face, CSS reset, custom properties (tokens)
       ═══════════════════════════════════════════════════════════════════════ */

    addBase({
      /* ── ET Book font-face declarations ─────────────────────────────── */
      '@font-face': [
        {
          fontFamily: '"ET Book"',
          src: 'url("https://edwardtufte.github.io/et-book/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff") format("woff"), url("https://edwardtufte.github.io/et-book/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf") format("truetype")',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontDisplay: 'swap',
        },
        {
          fontFamily: '"ET Book"',
          src: 'url("https://edwardtufte.github.io/et-book/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff") format("woff"), url("https://edwardtufte.github.io/et-book/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf") format("truetype")',
          fontWeight: 'normal',
          fontStyle: 'italic',
          fontDisplay: 'swap',
        },
        {
          fontFamily: '"ET Book"',
          src: 'url("https://edwardtufte.github.io/et-book/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff") format("woff"), url("https://edwardtufte.github.io/et-book/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf") format("truetype")',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontDisplay: 'swap',
        },
      ],

      /* ── Light-mode tokens (default) ────────────────────────────────── */
      ':root': {
        colorScheme: 'light',

        /* Layout */
        '--gp-text-width': '640px',
        '--gp-margin-width': '260px',
        '--gp-gutter': '48px',
        '--gp-outer-margin': 'clamp(3rem, 8vw, 6rem)',
        '--gp-page-width': 'calc(var(--gp-text-width) + var(--gp-gutter) + var(--gp-margin-width))',

        /* Typefaces */
        '--gp-serif': '"ET Book", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif',
        '--gp-sans': '"Gill Sans", "Gill Sans MT", Calibri, Optima, "Trebuchet MS", sans-serif',
        '--gp-mono': '"Lucida Console", "Andale Mono", Monaco, Consolas, monospace',

        /* Fluid type scale */
        '--gp-font-size': 'clamp(14px, 1vw + 10px, 16px)',
        '--gp-line-height': 'clamp(1.58, 1.5 + 0.4vw, 1.68)',
        '--gp-small': '0.8em',
        '--gp-caption': '0.77em',
        '--gp-micro': '0.69em',

        /* Spacing */
        '--gp-space-xs': '0.25rem',
        '--gp-space-sm': '0.5rem',
        '--gp-space-md': '1rem',
        '--gp-space-lg': '2rem',
        '--gp-space-xl': '4rem',

        /* Surface */
        '--gp-paper': 'oklch(99.4% 0.008 98)',
        '--gp-ink': 'oklch(17% 0.004 60)',
        '--gp-margin-ink': 'oklch(43% 0.003 60)',
        '--gp-ghost-ink': 'oklch(69% 0.003 60)',
        '--gp-rule': 'oklch(62% 0.002 60)',
        '--gp-light-rule': 'oklch(84% 0.005 95)',
        '--gp-code-bg': 'oklch(95% 0.006 95)',

        /* Categorical palette */
        '--gp-red': 'oklch(44% 0.14 27)',
        '--gp-red-light': 'oklch(64% 0.10 27)',
        '--gp-blue': 'oklch(44% 0.09 251)',
        '--gp-blue-light': 'oklch(64% 0.07 251)',
        '--gp-green': 'oklch(50% 0.08 149)',
        '--gp-green-light': 'oklch(67% 0.06 149)',
        '--gp-ochre': 'oklch(49% 0.10 72)',
        '--gp-ochre-light': 'oklch(67% 0.08 72)',
        '--gp-brown': 'oklch(42% 0.09 52)',
        '--gp-gray-data': 'oklch(51% 0.002 60)',

        /* Sequential ramp */
        '--gp-seq-1': 'oklch(95% 0.04 80)',
        '--gp-seq-2': 'oklch(82% 0.07 76)',
        '--gp-seq-3': 'oklch(68% 0.09 72)',
        '--gp-seq-4': 'oklch(55% 0.10 68)',
        '--gp-seq-5': 'oklch(42% 0.10 65)',

        /* Diverging ramp */
        '--gp-div-lo-2': 'oklch(44% 0.09 251)',
        '--gp-div-lo-1': 'oklch(64% 0.07 251)',
        '--gp-div-mid': 'oklch(92% 0.004 95)',
        '--gp-div-hi-1': 'oklch(64% 0.10 27)',
        '--gp-div-hi-2': 'oklch(44% 0.14 27)',

        /* Animation */
        '--gp-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        '--gp-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',

        /* SVG color tokens */
        '--svg-ink': '#111111',
        '--svg-margin': '#555555',
        '--svg-mid': '#777777',
        '--svg-rule-mid': '#999999',
        '--svg-ghost': '#aaaaaa',
        '--svg-rule': '#cccccc',
        '--svg-light-rule': '#d4d4c8',
        '--svg-soft': '#dddddd',
        '--svg-faint': '#eeeeee',
        '--svg-dim': '#888888',
        '--svg-dark-rule': '#333333',
        '--svg-red': '#b5322a',
        '--svg-blue': '#3a5a8c',
        '--svg-green': '#4a7a50',
        '--svg-ochre': '#8b6914',
        '--svg-blue-light': '#90a8c8',
      },

      /* ── Dark mode via prefers-color-scheme ────────────────────────── */
      '@media (prefers-color-scheme: dark)': {
        ':root:not(.light)': {
          colorScheme: 'dark',
          '--gp-paper': 'oklch(17% 0.008 80)',
          '--gp-ink': 'oklch(90% 0.005 85)',
          '--gp-margin-ink': 'oklch(63% 0.005 85)',
          '--gp-ghost-ink': 'oklch(40% 0.004 85)',
          '--gp-rule': 'oklch(35% 0.003 85)',
          '--gp-light-rule': 'oklch(27% 0.005 85)',
          '--gp-code-bg': 'oklch(22% 0.007 80)',
          '--gp-red': 'oklch(66% 0.13 27)',
          '--gp-red-light': 'oklch(76% 0.09 27)',
          '--gp-blue': 'oklch(66% 0.09 251)',
          '--gp-blue-light': 'oklch(76% 0.06 251)',
          '--gp-green': 'oklch(66% 0.08 149)',
          '--gp-green-light': 'oklch(76% 0.06 149)',
          '--gp-ochre': 'oklch(66% 0.09 72)',
          '--gp-ochre-light': 'oklch(76% 0.07 72)',
          '--gp-gray-data': 'oklch(58% 0.002 60)',
          '--gp-seq-1': 'oklch(35% 0.06 72)',
          '--gp-seq-2': 'oklch(47% 0.08 72)',
          '--gp-seq-3': 'oklch(59% 0.09 72)',
          '--gp-seq-4': 'oklch(71% 0.09 72)',
          '--gp-seq-5': 'oklch(83% 0.07 72)',
          '--gp-div-lo-2': 'oklch(66% 0.09 251)',
          '--gp-div-lo-1': 'oklch(76% 0.06 251)',
          '--gp-div-mid': 'oklch(25% 0.004 85)',
          '--gp-div-hi-1': 'oklch(76% 0.09 27)',
          '--gp-div-hi-2': 'oklch(66% 0.13 27)',
        },
      },

      /* ── Dark mode via .dark class ──────────────────────────────────── */
      '.dark': {
        colorScheme: 'dark',
        '--gp-paper': 'oklch(17% 0.008 80)',
        '--gp-ink': 'oklch(90% 0.005 85)',
        '--gp-margin-ink': 'oklch(63% 0.005 85)',
        '--gp-ghost-ink': 'oklch(40% 0.004 85)',
        '--gp-rule': 'oklch(35% 0.003 85)',
        '--gp-light-rule': 'oklch(27% 0.005 85)',
        '--gp-code-bg': 'oklch(22% 0.007 80)',
        '--gp-red': 'oklch(66% 0.13 27)',
        '--gp-red-light': 'oklch(76% 0.09 27)',
        '--gp-blue': 'oklch(66% 0.09 251)',
        '--gp-blue-light': 'oklch(76% 0.06 251)',
        '--gp-green': 'oklch(66% 0.08 149)',
        '--gp-green-light': 'oklch(76% 0.06 149)',
        '--gp-ochre': 'oklch(66% 0.09 72)',
        '--gp-ochre-light': 'oklch(76% 0.07 72)',
        '--gp-gray-data': 'oklch(58% 0.002 60)',
        '--gp-seq-1': 'oklch(35% 0.06 72)',
        '--gp-seq-2': 'oklch(47% 0.08 72)',
        '--gp-seq-3': 'oklch(59% 0.09 72)',
        '--gp-seq-4': 'oklch(71% 0.09 72)',
        '--gp-seq-5': 'oklch(83% 0.07 72)',
        '--gp-div-lo-2': 'oklch(66% 0.09 251)',
        '--gp-div-lo-1': 'oklch(76% 0.06 251)',
        '--gp-div-mid': 'oklch(25% 0.004 85)',
        '--gp-div-hi-1': 'oklch(76% 0.09 27)',
        '--gp-div-hi-2': 'oklch(66% 0.13 27)',

        /* SVG dark overrides */
        '--svg-ink': '#e6e0d8',
        '--svg-margin': '#a09898',
        '--svg-mid': '#8a8480',
        '--svg-rule-mid': '#606060',
        '--svg-ghost': '#505050',
        '--svg-rule': '#404040',
        '--svg-light-rule': '#383430',
        '--svg-soft': '#353030',
        '--svg-faint': '#2e2a26',
        '--svg-dim': '#585450',
        '--svg-dark-rule': '#888480',
        '--svg-red': '#e07070',
        '--svg-blue': '#7090c8',
        '--svg-green': '#70b078',
        '--svg-ochre': '#c8a040',
        '--svg-blue-light': '#7090c8',
      },

      /* ── CSS Reset ──────────────────────────────────────────────────── */
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      'html': {
        fontSize: 'var(--gp-font-size)',
        background: 'var(--gp-paper)',
        color: 'var(--gp-ink)',
        transition: 'background-color 0.25s var(--gp-ease), color 0.25s var(--gp-ease)',
      },

      /* ── Base typography ────────────────────────────────────────────── */
      'body': {
        fontFamily: 'var(--gp-serif)',
        fontWeight: 'normal',
        lineHeight: 'var(--gp-line-height)',
        background: 'var(--gp-paper)',
        color: 'var(--gp-ink)',
        margin: '0',
        padding: '0',
        counterReset: 'sidenote-counter',
        textAlign: 'left',
        hyphens: 'none',
        '-webkit-hyphens': 'none',
        fontVariantNumeric: 'oldstyle-nums proportional-nums',
        fontOpticalSizing: 'auto',
        minHeight: '100dvh',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      },

      'h1': {
        fontSize: 'clamp(1.7rem, 3vw + 0.8rem, 2.4rem)',
        fontStyle: 'italic',
        fontWeight: 'normal',
        lineHeight: '1.18',
        fontOpticalSizing: 'auto',
        margin: '0 0 var(--gp-space-sm)',
        maxWidth: 'var(--gp-text-width)',
      },
      'h2': {
        fontSize: 'clamp(1rem, 0.8vw + 0.75rem, 1.1rem)',
        fontStyle: 'italic',
        fontWeight: 'normal',
        margin: 'var(--gp-space-lg) 0 var(--gp-space-sm)',
        maxWidth: 'var(--gp-text-width)',
      },
      'h3': {
        fontSize: '1rem',
        fontStyle: 'italic',
        fontWeight: 'normal',
        margin: 'var(--gp-space-md) 0 var(--gp-space-xs)',
        maxWidth: 'var(--gp-text-width)',
      },
      'h4, h5, h6': {
        fontSize: '0.94rem',
        fontWeight: 'normal',
        fontVariant: 'small-caps',
        letterSpacing: '0.06em',
        margin: 'var(--gp-space-md) 0 var(--gp-space-xs)',
        maxWidth: 'var(--gp-text-width)',
      },

      'p': {
        margin: '0 0 var(--gp-space-md)',
        maxWidth: 'var(--gp-text-width)',
      },
      'p + p': {
        marginTop: 'calc(-1 * var(--gp-space-sm))',
        textIndent: '1.5em',
      },
      'h1 + p, h2 + p, h3 + p, h4 + p, blockquote + p, figure + p, hr + p': {
        textIndent: '0',
      },

      'abbr, .small-caps': {
        fontVariant: 'small-caps',
        letterSpacing: '0.06em',
        fontSize: '0.9em',
      },
      'em': { fontStyle: 'italic' },
      'strong': { fontWeight: 'bold' },
      'sup, sub': {
        fontSize: '0.7em',
        lineHeight: '0',
        position: 'relative',
        verticalAlign: 'baseline',
        fontVariantNumeric: 'lining-nums',
      },
      'sup': { top: '-0.5em' },
      'sub': { bottom: '-0.25em' },

      'a': {
        color: 'var(--gp-ink)',
        textDecoration: 'underline',
        textDecorationColor: 'var(--gp-light-rule)',
        textUnderlineOffset: '2px',
        transition: 'text-decoration-color 0.15s',
      },
      'a:hover': { textDecorationColor: 'var(--gp-ink)' },

      'hr': {
        border: 'none',
        margin: 'var(--gp-space-xl) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      'hr::after': {
        content: '"\\00B7 \\00B7 \\00B7"',
        display: 'block',
        textAlign: 'center',
        color: 'var(--gp-light-rule)',
        letterSpacing: '0.5em',
      },

      'table': {
        fontVariantNumeric: 'lining-nums tabular-nums',
      },
      'ul, ol': {
        paddingLeft: '1.5em',
        margin: '0 0 var(--gp-space-md)',
        maxWidth: 'var(--gp-text-width)',
      },
      'li': {
        marginBottom: 'var(--gp-space-xs)',
        lineHeight: 'var(--gp-line-height)',
      },
      'li > ul, li > ol': {
        margin: 'var(--gp-space-xs) 0',
      },
      'dl': {
        margin: '0 0 var(--gp-space-md)',
        maxWidth: 'var(--gp-text-width)',
      },
      'dt': {
        fontVariant: 'small-caps',
        letterSpacing: '0.05em',
        marginTop: 'var(--gp-space-sm)',
      },
      'dd': {
        marginLeft: '1.5em',
        marginBottom: 'var(--gp-space-xs)',
        color: 'var(--gp-margin-ink)',
        fontSize: 'var(--gp-small)',
      },

      'blockquote': {
        fontStyle: 'italic',
        margin: 'var(--gp-space-md) 0 var(--gp-space-md) 2em',
        padding: '0',
        border: 'none',
        maxWidth: 'calc(var(--gp-text-width) - 2em)',
      },
      'blockquote footer, blockquote cite': {
        fontStyle: 'normal',
        fontSize: 'var(--gp-small)',
        color: 'var(--gp-margin-ink)',
        display: 'block',
        marginTop: 'var(--gp-space-xs)',
      },
      'blockquote footer::before': { content: '"\\2014 "' },

      'code, kbd, samp': {
        fontFamily: 'var(--gp-mono)',
        fontSize: '0.84em',
        background: 'var(--gp-code-bg)',
        padding: '0.06em 0.28em',
        borderRadius: '2px',
        fontVariantNumeric: 'lining-nums',
        transition: 'background-color 0.25s',
      },
      'pre': {
        background: 'var(--gp-code-bg)',
        padding: 'var(--gp-space-md)',
        overflowX: 'auto',
        margin: 'var(--gp-space-md) 0',
        borderLeft: '2px solid var(--gp-light-rule)',
        maxWidth: 'var(--gp-text-width)',
        transition: 'background-color 0.25s, border-color 0.25s',
      },
      'pre code': {
        background: 'none',
        padding: '0',
        fontSize: 'var(--gp-small)',
        lineHeight: '1.5',
      },

      /* ── Sparkline draw animation ───────────────────────────────────── */
      '@keyframes gp-draw': {
        to: { strokeDashoffset: '0' },
      },
    });


    /* ═══════════════════════════════════════════════════════════════════════
       COMPONENTS
       ═══════════════════════════════════════════════════════════════════════ */

    addComponents({

      /* ── Typography components ──────────────────────────────────────── */
      '.subtitle': {
        fontSize: '1.04rem',
        fontStyle: 'italic',
        margin: 'calc(-1 * var(--gp-space-xs)) 0 var(--gp-space-lg)',
        color: 'var(--gp-margin-ink)',
        maxWidth: 'var(--gp-text-width)',
      },
      '.author': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
        letterSpacing: '0.04em',
        color: 'var(--gp-margin-ink)',
        margin: 'calc(-1 * var(--gp-space-md)) 0 var(--gp-space-xl)',
        fontVariantNumeric: 'lining-nums',
        maxWidth: 'var(--gp-text-width)',
      },
      'p.lead': {
        fontSize: '1.06rem',
        textIndent: '0',
      },
      'p.drop-cap::first-letter': {
        fontSize: '3.6em',
        lineHeight: '0.72',
        float: 'left',
        paddingRight: '0.06em',
        marginTop: '0.06em',
        fontStyle: 'normal',
      },
      '.new-thought': {
        fontVariant: 'small-caps',
        letterSpacing: '0.08em',
      },
      '.callout': {
        fontSize: 'var(--gp-small)',
        color: 'var(--gp-margin-ink)',
        fontStyle: 'italic',
        paddingLeft: '1em',
        borderLeft: '1px solid var(--gp-light-rule)',
        margin: 'var(--gp-space-sm) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.rule-thin': {
        border: 'none',
        borderTop: '0.5px solid var(--gp-light-rule)',
        margin: 'var(--gp-space-md) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.lnf': { fontVariantNumeric: 'lining-nums tabular-nums' },
      '.unit': {
        fontSize: '0.82em',
        color: 'var(--gp-margin-ink)',
        fontVariantNumeric: 'lining-nums',
      },
      '.datum': {
        fontVariantNumeric: 'lining-nums tabular-nums',
        fontFamily: 'var(--gp-sans)',
        fontSize: '0.9em',
        letterSpacing: '-0.01em',
      },
      '.data-label': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-margin-ink)',
      },
      '.source-line': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-ghost-ink)',
        marginTop: 'var(--gp-space-xs)',
        maxWidth: 'var(--gp-text-width)',
      },
      '.source-line::before': { content: '"Source: "' },

      /* ── Data notes ─────────────────────────────────────────────────── */
      'details.data-note': {
        fontSize: 'var(--gp-small)',
        color: 'var(--gp-margin-ink)',
        margin: 'var(--gp-space-sm) 0',
        borderLeft: '1px solid var(--gp-light-rule)',
        paddingLeft: 'var(--gp-space-sm)',
        maxWidth: 'var(--gp-text-width)',
      },
      'details.data-note summary': {
        cursor: 'pointer',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--gp-ghost-ink)',
        listStyle: 'none',
        padding: 'var(--gp-space-xs) 0',
        transition: 'color 0.15s',
        userSelect: 'none',
      },
      'details.data-note summary::-webkit-details-marker': { display: 'none' },
      'details.data-note summary::before': { content: '"\\25B8  "', fontSize: '0.8em' },
      'details.data-note[open] summary::before': { content: '"\\25BE  "' },
      'details.data-note summary:hover': { color: 'var(--gp-margin-ink)' },

      /* ── Epigraph ───────────────────────────────────────────────────── */
      '.epigraph': {
        margin: 'var(--gp-space-xl) 0 var(--gp-space-xl) 5%',
        maxWidth: 'var(--gp-text-width)',
      },
      '.epigraph > blockquote': {
        fontStyle: 'italic',
        fontSize: '1.04rem',
        margin: '0',
        padding: '0',
        border: 'none',
      },
      '.epigraph > blockquote footer': {
        fontStyle: 'normal',
        fontSize: 'var(--gp-small)',
        color: 'var(--gp-margin-ink)',
        display: 'block',
        marginTop: 'var(--gp-space-sm)',
      },

      /* ── Bibliography ───────────────────────────────────────────────── */
      '.bibliography': {
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.bibliography ol, .bibliography ul': {
        paddingLeft: '0',
        listStyle: 'none',
      },
      '.bibliography li': {
        fontSize: 'var(--gp-small)',
        paddingLeft: '2em',
        textIndent: '-2em',
        marginBottom: 'var(--gp-space-sm)',
        color: 'var(--gp-margin-ink)',
        lineHeight: '1.5',
      },
      '.bibliography .title': { fontStyle: 'italic' },

      /* ── Pull quote ─────────────────────────────────────────────────── */
      '.pull-quote': {
        fontSize: 'clamp(1.2rem, 2vw + 0.6rem, 1.45rem)',
        fontStyle: 'italic',
        lineHeight: '1.35',
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },

      /* ═══════════════════════════════════════════════════════════════════
         LAYOUT
         ═══════════════════════════════════════════════════════════════════ */

      'article': {
        position: 'relative',
        maxWidth: 'var(--gp-page-width)',
        margin: '0 auto',
        padding: 'var(--gp-space-xl) var(--gp-outer-margin)',
      },
      'section': { paddingTop: 'var(--gp-space-lg)' },

      '.running-header': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--gp-ghost-ink)',
        maxWidth: 'var(--gp-page-width)',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '0.5px solid var(--gp-light-rule)',
        paddingBottom: 'var(--gp-space-sm)',
        marginBottom: 'var(--gp-space-xl)',
        transition: 'border-color 0.25s, color 0.25s',
      },

      /* ── Figure compare ─────────────────────────────────────────────── */
      '.figure-compare': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--gp-space-md)',
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
        alignItems: 'start',
      },
      '.figure-compare.figure-compare-full': { maxWidth: 'var(--gp-page-width)' },
      '.figure-compare figure': { margin: '0', maxWidth: 'none' },
      '.figure-compare figcaption': {
        float: 'none !important',
        width: 'auto !important',
        marginRight: '0 !important',
        marginTop: 'var(--gp-space-xs)',
      },

      /* ── Compare wrap ───────────────────────────────────────────────── */
      '.compare-wrap': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--gp-space-lg)',
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
        borderTop: '0.75px solid var(--gp-rule)',
        paddingTop: 'var(--gp-space-md)',
      },
      '.compare-wrap.compare-wrap-full': { maxWidth: 'var(--gp-page-width)' },
      '.compare-col': { fontSize: 'var(--gp-small)' },
      '.compare-col__header': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--gp-margin-ink)',
        marginBottom: 'var(--gp-space-sm)',
        paddingBottom: '2px',
        borderBottom: '0.5px solid var(--gp-light-rule)',
      },
      '.compare-col.before': { color: 'var(--gp-margin-ink)' },

      /* ── Stat grid ──────────────────────────────────────────────────── */
      '.stat-grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: 'var(--gp-space-md) var(--gp-space-lg)',
        borderTop: '1.5px solid var(--gp-ink)',
        paddingTop: 'var(--gp-space-md)',
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
        transition: 'border-color 0.25s',
      },

      /* ── Evidence layout ────────────────────────────────────────────── */
      '.evidence': {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
        gap: 'var(--gp-space-lg)',
        maxWidth: 'var(--gp-page-width)',
        margin: 'var(--gp-space-lg) 0',
        alignItems: 'start',
      },
      '.evidence__image': { margin: '0', maxWidth: 'none' },
      '.evidence__image img, .evidence__image svg': {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
      },
      '.evidence__image figcaption': {
        float: 'none',
        width: 'auto',
        marginRight: '0',
        marginTop: 'var(--gp-space-xs)',
        fontSize: 'var(--gp-caption)',
        fontFamily: 'var(--gp-sans)',
        color: 'var(--gp-margin-ink)',
      },
      '.evidence__analysis': {
        fontSize: 'var(--gp-small)',
        lineHeight: '1.6',
        color: 'var(--gp-ink)',
        paddingTop: '0.1rem',
      },
      '.evidence__analysis p': { maxWidth: 'none' },
      '.evidence__analysis p + p': { textIndent: '1.2em' },
      '.evidence__caption': {
        gridColumn: '1 / -1',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-caption)',
        color: 'var(--gp-margin-ink)',
        borderTop: '0.5px solid var(--gp-light-rule)',
        paddingTop: 'var(--gp-space-xs)',
        marginTop: 'var(--gp-space-xs)',
      },

      /* ═══════════════════════════════════════════════════════════════════
         SIDENOTES & MARGIN NOTES
         ═══════════════════════════════════════════════════════════════════ */

      '.sidenote-number': { counterIncrement: 'sidenote-counter' },
      '.sidenote-number::after, .sidenote::before': {
        content: 'counter(sidenote-counter)',
        fontSize: '0.68rem',
        verticalAlign: 'super',
        lineHeight: '0',
        fontVariantNumeric: 'lining-nums',
      },
      '.sidenote-number::after': { color: 'var(--gp-margin-ink)', paddingLeft: '1px' },
      '.sidenote::before': { color: 'var(--gp-margin-ink)', paddingRight: '4px' },
      'input.sidenote-toggle': { display: 'none' },

      '.sidenote, .marginnote': {
        float: 'right',
        clear: 'right',
        marginRight: 'calc(-1 * (var(--gp-margin-width) + var(--gp-gutter)))',
        width: 'var(--gp-margin-width)',
        fontSize: 'var(--gp-small)',
        lineHeight: '1.5',
        color: 'var(--gp-margin-ink)',
        fontStyle: 'normal',
        verticalAlign: 'baseline',
        position: 'sticky',
        top: '2rem',
        paddingTop: '0.08rem',
        transition: 'color 0.25s',
      },
      '.marginnote img, .marginnote svg': {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        marginBottom: 'var(--gp-space-xs)',
      },
      '.marginnote-label': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--gp-ghost-ink)',
        display: 'block',
        marginBottom: '2px',
      },
      'label.sidenote-toggle': { display: 'none', cursor: 'pointer' },
      'label.sidenote-number': { display: 'inline' },
      '.sidenote a, .marginnote a, figcaption a': { color: 'var(--gp-margin-ink)' },

      '.section-marker': {
        float: 'right',
        clear: 'right',
        marginRight: 'calc(-1 * (var(--gp-margin-width) + var(--gp-gutter)))',
        width: 'var(--gp-margin-width)',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--gp-ghost-ink)',
        paddingTop: '0.2rem',
        position: 'sticky',
        top: '2rem',
      },

      /* ═══════════════════════════════════════════════════════════════════
         FIGURES
         ═══════════════════════════════════════════════════════════════════ */

      'figure': {
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
        padding: '0',
      },
      'figure img, figure svg, figure canvas': {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
      },
      'figure.figure-full': { maxWidth: 'var(--gp-page-width)' },
      'figure.figure-margin': {
        float: 'right',
        clear: 'right',
        marginRight: 'calc(-1 * (var(--gp-margin-width) + var(--gp-gutter)))',
        width: 'var(--gp-margin-width)',
        marginTop: '0',
        marginBottom: 'var(--gp-space-md)',
      },

      'figcaption': {
        fontSize: 'var(--gp-caption)',
        fontFamily: 'var(--gp-sans)',
        fontOpticalSizing: 'auto',
        lineHeight: '1.45',
        color: 'var(--gp-margin-ink)',
        marginTop: 'var(--gp-space-xs)',
        transition: 'color 0.25s',
      },
      'figure:not(.figure-margin):not(.figure-full):not(.evidence__image) figcaption': {
        float: 'right',
        clear: 'right',
        marginRight: 'calc(-1 * (var(--gp-margin-width) + var(--gp-gutter)))',
        width: 'var(--gp-margin-width)',
        marginTop: '0',
      },
      'figure.figure-full figcaption': {
        float: 'right',
        width: 'var(--gp-margin-width)',
        marginTop: 'var(--gp-space-xs)',
      },
      'figure.figure-margin figcaption': {
        float: 'none',
        width: 'auto',
        fontSize: '0.71em',
      },

      /* ═══════════════════════════════════════════════════════════════════
         TABLES — Booktabs
         ═══════════════════════════════════════════════════════════════════ */

      'table': {
        maxWidth: 'var(--gp-text-width)',
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
        fontVariantNumeric: 'lining-nums tabular-nums',
        margin: 'var(--gp-space-lg) 0',
        lineHeight: '1.4',
        transition: 'color 0.25s',
      },
      'thead': {
        borderTop: '1.5px solid var(--gp-ink)',
        borderBottom: '0.75px solid var(--gp-ink)',
      },
      'tbody tr:last-child td': {
        borderBottom: '1.5px solid var(--gp-ink)',
        paddingBottom: 'var(--gp-space-sm)',
      },
      'tbody tr.midrule td': {
        borderTop: '0.75px solid var(--gp-rule)',
        paddingTop: 'var(--gp-space-sm)',
      },
      'tbody tr.midrule-above td': { paddingBottom: 'var(--gp-space-sm)' },
      'th': {
        fontWeight: 'normal',
        fontVariant: 'small-caps',
        letterSpacing: '0.06em',
        textAlign: 'left',
        padding: 'var(--gp-space-xs) var(--gp-space-sm)',
        verticalAlign: 'bottom',
      },
      'td': {
        padding: 'var(--gp-space-xs) var(--gp-space-sm)',
        verticalAlign: 'top',
      },
      'td.num, th.num': { textAlign: 'right' },
      'td.neg': { color: 'var(--gp-red)' },
      'td.pos': { color: 'var(--gp-green)' },
      'tr.highlight td': {
        background: 'var(--gp-code-bg)',
        fontStyle: 'italic',
      },
      '.table-dense th, .table-dense td': {
        padding: '2px var(--gp-space-xs)',
        fontSize: 'var(--gp-micro)',
      },
      'table.table-full': { maxWidth: 'var(--gp-page-width)' },
      'table.table-striped tbody tr:nth-child(even) td': {
        background: 'oklch(from var(--gp-paper) calc(l - 0.02) c h)',
      },
      'caption': {
        fontSize: 'var(--gp-caption)',
        fontFamily: 'var(--gp-sans)',
        color: 'var(--gp-margin-ink)',
        textAlign: 'left',
        captionSide: 'top',
        paddingBottom: 'var(--gp-space-xs)',
      },

      /* ═══════════════════════════════════════════════════════════════════
         SPARKLINES
         ═══════════════════════════════════════════════════════════════════ */

      '.sparkline': {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: '1',
        position: 'relative',
        top: '-1px',
      },
      '.sparkline svg': { overflow: 'visible' },
      '@media (prefers-reduced-motion: no-preference)': {
        '.sp-draw': {
          strokeDasharray: '300',
          strokeDashoffset: '300',
          animation: 'gp-draw 0.9s var(--gp-ease-out) forwards',
        },
      },
      'table.sparkline-table': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      'table.sparkline-table .sp-cell': {
        paddingTop: '2px',
        paddingBottom: '2px',
      },
      'table.sparkline-table .sp-cell svg': {
        display: 'block',
        overflow: 'visible',
      },

      /* ═══════════════════════════════════════════════════════════════════
         SMALL MULTIPLES
         ═══════════════════════════════════════════════════════════════════ */

      '.small-multiples': {
        maxWidth: 'var(--gp-page-width)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: 'var(--gp-space-md)',
        margin: 'var(--gp-space-lg) 0',
      },
      '.small-multiples-3': { gridTemplateColumns: 'repeat(3, 1fr)' },
      '.small-multiples-4': { gridTemplateColumns: 'repeat(4, 1fr)' },
      '.small-multiples-6': { gridTemplateColumns: 'repeat(6, 1fr)' },
      '.small-multiples figure': { margin: '0', maxWidth: 'none' },
      '.small-multiples figure figcaption': {
        float: 'none',
        width: 'auto',
        marginRight: '0',
        marginTop: 'var(--gp-space-xs)',
        fontSize: '0.7em',
      },
      '.small-multiples-xlabel': {
        gridColumn: '1 / -1',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-margin-ink)',
        textAlign: 'center',
        marginTop: 'calc(-1 * var(--gp-space-sm))',
      },

      /* ═══════════════════════════════════════════════════════════════════
         PULL STATISTICS
         ═══════════════════════════════════════════════════════════════════ */

      '.pull-stat': {
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.pull-stat__number': {
        fontSize: 'clamp(2.4rem, 4vw + 1rem, 3.5rem)',
        lineHeight: '1',
        fontStyle: 'italic',
        fontWeight: 'normal',
        display: 'block',
        fontVariantNumeric: 'lining-nums',
      },
      '.pull-stat__label': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
        color: 'var(--gp-margin-ink)',
        letterSpacing: '0.04em',
        display: 'block',
        marginTop: '0.2em',
      },
      '.pull-stat__context': {
        fontSize: 'var(--gp-small)',
        color: 'var(--gp-ghost-ink)',
        fontStyle: 'italic',
        display: 'block',
      },

      /* ═══════════════════════════════════════════════════════════════════
         BAR CHART
         ═══════════════════════════════════════════════════════════════════ */

      '.bar-chart': {
        listStyle: 'none',
        padding: '0',
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.bar-chart li': {
        display: 'grid',
        gridTemplateColumns: '160px 1fr auto',
        alignItems: 'center',
        gap: 'var(--gp-space-sm)',
        marginBottom: 'var(--gp-space-xs)',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      '.bar-label': {
        textAlign: 'right',
        color: 'var(--gp-ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '.bar': {
        position: 'relative',
        height: '1px',
        background: 'var(--gp-ghost-ink)',
      },
      '.bar::after': {
        content: '""',
        position: 'absolute',
        left: 'var(--bar-value, 50%)',
        top: '-3px',
        width: '1px',
        height: '7px',
        background: 'var(--gp-ink)',
      },
      '.bar-chart.filled .bar': {
        height: '8px',
        background: 'none',
      },
      '.bar-chart.filled .bar::before': {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '0',
        height: '100%',
        width: 'var(--bar-value, 0%)',
        background: 'var(--gp-gray-data)',
      },
      '.bar-chart.filled .bar::after': { display: 'none' },
      '.bar-value': {
        color: 'var(--gp-margin-ink)',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'tabular-nums lining-nums',
      },
      '.bar.red::after, .bar-chart.filled .bar.red::before': { background: 'var(--gp-red)' },
      '.bar.blue::after, .bar-chart.filled .bar.blue::before': { background: 'var(--gp-blue)' },
      '.bar.green::after, .bar-chart.filled .bar.green::before': { background: 'var(--gp-green)' },
      '.bar.ochre::after, .bar-chart.filled .bar.ochre::before': { background: 'var(--gp-ochre)' },

      /* ── Ghosting / emphasis ────────────────────────────────────────── */
      '.ghost': { opacity: '0.22' },
      '.near-ghost': { opacity: '0.40' },
      '.focal': { opacity: '1' },

      /* ═══════════════════════════════════════════════════════════════════
         DOT CHART
         ═══════════════════════════════════════════════════════════════════ */

      '.dot-chart': {
        listStyle: 'none',
        padding: '0',
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.dot-chart li': {
        display: 'grid',
        gridTemplateColumns: '160px 1fr auto',
        alignItems: 'center',
        gap: 'var(--gp-space-sm)',
        marginBottom: 'var(--gp-space-xs)',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      '.dc-label': {
        textAlign: 'right',
        color: 'var(--gp-ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '.dc-track': {
        position: 'relative',
        height: '1px',
        background: 'var(--gp-light-rule)',
      },
      '.dc-dot': {
        position: 'absolute',
        left: 'var(--dc-pos, 50%)',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--gp-ink)',
        transition: 'background 0.25s',
      },
      '.dc-dot.red': { background: 'var(--gp-red)' },
      '.dc-dot.blue': { background: 'var(--gp-blue)' },
      '.dc-dot.green': { background: 'var(--gp-green)' },
      '.dc-dot.open': {
        background: 'var(--gp-paper)',
        border: '1.5px solid var(--gp-ink)',
      },
      '.dc-value': {
        color: 'var(--gp-margin-ink)',
        fontVariantNumeric: 'tabular-nums lining-nums',
      },

      /* ═══════════════════════════════════════════════════════════════════
         DUMBBELL CHART
         ═══════════════════════════════════════════════════════════════════ */

      '.dumbbell': {
        listStyle: 'none',
        padding: '0',
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.dumbbell li': {
        display: 'grid',
        gridTemplateColumns: '160px 1fr auto',
        alignItems: 'center',
        gap: 'var(--gp-space-sm)',
        marginBottom: 'var(--gp-space-sm)',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      '.db-label': {
        textAlign: 'right',
        color: 'var(--gp-ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '.db-track': {
        position: 'relative',
        height: '1px',
      },
      '.db-track::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: 'var(--db-l, 30%)',
        right: 'calc(100% - var(--db-r, 70%))',
        height: '1px',
        background: 'var(--gp-ghost-ink)',
      },
      '.db-dot': {
        position: 'absolute',
        top: '50%',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
      },
      '.db-dot--left': {
        left: 'var(--db-l, 30%)',
        transform: 'translate(-50%, -50%)',
        background: 'var(--gp-blue)',
      },
      '.db-dot--right': {
        left: 'var(--db-r, 70%)',
        transform: 'translate(-50%, -50%)',
        background: 'var(--gp-red)',
      },
      '.db-value': {
        color: 'var(--gp-margin-ink)',
        fontSize: 'var(--gp-micro)',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'lining-nums',
      },

      /* ═══════════════════════════════════════════════════════════════════
         STRIP PLOT
         ═══════════════════════════════════════════════════════════════════ */

      '.strip-plot': {
        listStyle: 'none',
        padding: '0',
        margin: 'var(--gp-space-lg) 0',
        maxWidth: 'var(--gp-text-width)',
      },
      '.strip-plot li': {
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        alignItems: 'center',
        gap: 'var(--gp-space-sm)',
        marginBottom: '10px',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      '.sp-label': {
        textAlign: 'right',
        color: 'var(--gp-ink)',
        whiteSpace: 'nowrap',
      },
      '.sp-track': {
        position: 'relative',
        height: '1px',
        background: 'var(--gp-light-rule)',
      },
      '.sp-dot': {
        position: 'absolute',
        left: 'var(--sp-pos, 50%)',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: 'var(--gp-ink)',
        opacity: '0.65',
      },
      '.sp-dot.red': { background: 'var(--gp-red)' },
      '.sp-dot.blue': { background: 'var(--gp-blue)' },
      '.sp-dot.green': { background: 'var(--gp-green)' },
      '.sp-axis-labels': {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 'calc(160px + var(--gp-space-sm))',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-margin-ink)',
        marginTop: '4px',
        fontVariantNumeric: 'lining-nums',
      },

      /* ═══════════════════════════════════════════════════════════════════
         STEM-AND-LEAF
         ═══════════════════════════════════════════════════════════════════ */

      'table.stem-leaf': {
        fontFamily: 'var(--gp-mono)',
        fontSize: 'var(--gp-small)',
        fontVariantNumeric: 'lining-nums tabular-nums',
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
        lineHeight: '1.9',
        borderCollapse: 'collapse',
        width: '100%',
        border: 'none',
      },
      'table.stem-leaf thead': { borderBottom: '0.75px solid var(--gp-rule)' },
      'table.stem-leaf thead th': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--gp-ghost-ink)',
        fontWeight: 'normal',
        paddingBottom: '3px',
      },
      'table.stem-leaf .sl-col-left': {
        width: '43%',
        textAlign: 'right',
        paddingRight: '8px',
        color: 'var(--gp-blue)',
      },
      'table.stem-leaf .sl-col-stem': {
        width: '14%',
        textAlign: 'center',
        color: 'var(--gp-margin-ink)',
        borderLeft: '0.5px solid var(--gp-rule)',
        borderRight: '0.5px solid var(--gp-rule)',
        padding: '0 4px',
      },
      'table.stem-leaf thead .sl-col-stem': { color: 'var(--gp-margin-ink)' },
      'table.stem-leaf .sl-col-right': {
        width: '43%',
        textAlign: 'left',
        paddingLeft: '8px',
      },
      '.sl-unit': {
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-ghost-ink)',
        marginTop: 'var(--gp-space-xs)',
      },

      /* ═══════════════════════════════════════════════════════════════════
         BULLET GRAPH
         ═══════════════════════════════════════════════════════════════════ */

      '.bullet-graphs': {
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gp-space-md)',
      },
      '.bullet-graph': {
        display: 'grid',
        gridTemplateColumns: '140px 1fr auto',
        alignItems: 'center',
        gap: 'var(--gp-space-sm)',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      '.bg-label': { textAlign: 'right', color: 'var(--gp-ink)' },
      '.bg-track': { position: 'relative', height: '16px', background: 'transparent' },
      '.bg-range': { position: 'absolute', top: '0', height: '100%', display: 'inline-block' },
      '.bg-range-1': { left: '0', background: 'var(--gp-ghost-ink)', opacity: '0.35' },
      '.bg-range-2': { left: '33%', background: 'var(--gp-ghost-ink)', opacity: '0.22' },
      '.bg-range-3': { left: '66%', background: 'var(--gp-ghost-ink)', opacity: '0.12' },
      '.bg-bar': {
        position: 'absolute',
        left: '0',
        top: '25%',
        height: '50%',
        background: 'var(--gp-ink)',
        zIndex: '2',
        transition: 'background 0.25s',
      },
      '.bg-bar.red': { background: 'var(--gp-red)' },
      '.bg-bar.blue': { background: 'var(--gp-blue)' },
      '.bg-bar.green': { background: 'var(--gp-green)' },
      '.bg-target': {
        position: 'absolute',
        top: '10%',
        height: '80%',
        width: '2px',
        background: 'var(--gp-ink)',
        zIndex: '3',
        transform: 'translateX(-50%)',
      },
      '.bg-value': {
        color: 'var(--gp-margin-ink)',
        fontVariantNumeric: 'tabular-nums lining-nums',
      },
      '.bg-axis': {
        marginLeft: 'calc(140px + var(--gp-space-sm))',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-ghost-ink)',
        borderTop: '0.5px solid var(--gp-light-rule)',
        paddingTop: '2px',
      },

      /* ═══════════════════════════════════════════════════════════════════
         HEAT TABLE
         ═══════════════════════════════════════════════════════════════════ */

      '.heat-table td.heat': {
        color: 'var(--gp-ink)',
        transition: 'background 0.2s',
        textAlign: 'right',
      },
      '.heat-table td.heat[data-dark]': { color: 'oklch(93% 0.005 85)' },
      '.heat-table td.heat-div': {
        textAlign: 'right',
        transition: 'background 0.2s',
      },

      /* ═══════════════════════════════════════════════════════════════════
         RANKED TABLE
         ═══════════════════════════════════════════════════════════════════ */

      'table.ranked-table td.rank': {
        color: 'var(--gp-ghost-ink)',
        textAlign: 'right',
        paddingRight: 'var(--gp-space-sm)',
        fontVariantNumeric: 'lining-nums tabular-nums',
        width: '2em',
      },
      'table.ranked-table td.rank-label': {
        backgroundImage: 'radial-gradient(circle, var(--gp-light-rule) 1px, transparent 1px)',
        backgroundSize: '6px 1px',
        backgroundPosition: '0 0.9em',
        backgroundRepeat: 'repeat-x',
        paddingRight: 'var(--gp-space-sm)',
      },
      'table.ranked-table td.rank-label span': {
        background: 'var(--gp-paper)',
        paddingRight: '4px',
        transition: 'background 0.25s',
      },
      'table.ranked-table td.rank-value': {
        fontVariantNumeric: 'tabular-nums lining-nums',
        textAlign: 'right',
      },
      'table.ranked-table tr.rank-highlight td.rank-label span, table.ranked-table tr.rank-highlight td.rank-label': {
        fontStyle: 'italic',
      },

      /* ═══════════════════════════════════════════════════════════════════
         TIMELINE
         ═══════════════════════════════════════════════════════════════════ */

      '.timeline': {
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
        fontFamily: 'var(--gp-sans)',
        fontSize: 'var(--gp-small)',
      },
      '.tl-track': {
        position: 'relative',
        height: '48px',
        borderBottom: '1px solid var(--gp-ink)',
      },
      '.tl-event': {
        position: 'absolute',
        left: 'var(--tl-pos, 50%)',
        bottom: '0',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
      },
      '.tl-event::after': {
        content: '""',
        display: 'block',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--gp-ink)',
      },
      '.tl-event-label': {
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-ink)',
        whiteSpace: 'nowrap',
        marginBottom: '4px',
        textAlign: 'center',
      },
      '.tl-period': {
        position: 'absolute',
        bottom: '4px',
        left: 'var(--tl-start, 0%)',
        right: 'calc(100% - var(--tl-end, 50%))',
        height: '8px',
        background: 'var(--gp-ghost-ink)',
        opacity: '0.4',
      },
      '.tl-period-label': {
        position: 'absolute',
        top: '-18px',
        left: '0',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-margin-ink)',
        whiteSpace: 'nowrap',
      },
      '.tl-period.red': { background: 'var(--gp-red)', opacity: '0.5' },
      '.tl-period.blue': { background: 'var(--gp-blue)', opacity: '0.5' },
      '.tl-period.green': { background: 'var(--gp-green)', opacity: '0.5' },
      '.tl-period.ochre': { background: 'var(--gp-ochre)', opacity: '0.5' },
      '.tl-axis': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '4px',
        fontSize: 'var(--gp-micro)',
        color: 'var(--gp-margin-ink)',
        fontVariantNumeric: 'lining-nums',
      },
      '.tl-axis span::before': {
        content: '""',
        display: 'block',
        width: '1px',
        height: '4px',
        background: 'var(--gp-rule)',
        margin: '0 auto 2px',
      },

      /* ═══════════════════════════════════════════════════════════════════
         SLOPEGRAPH
         ═══════════════════════════════════════════════════════════════════ */

      '.slopegraph-wrap': {
        maxWidth: 'var(--gp-text-width)',
        margin: 'var(--gp-space-lg) 0',
      },

      /* ═══════════════════════════════════════════════════════════════════
         PARALLEL COORDINATES
         ═══════════════════════════════════════════════════════════════════ */

      '.parallel-coords': {
        maxWidth: 'var(--gp-page-width)',
        margin: 'var(--gp-space-lg) 0',
        overflowX: 'auto',
      },
      '.parallel-coords svg': { display: 'block', overflow: 'visible' },
      '.pc-line': {
        fill: 'none',
        stroke: 'var(--gp-ghost-ink)',
        strokeWidth: '0.75',
        opacity: '0.5',
      },
      '.pc-line.highlight': {
        stroke: 'var(--gp-red)',
        strokeWidth: '1.5',
        opacity: '1',
      },
      '.pc-line.blue-hl': {
        stroke: 'var(--gp-blue)',
        strokeWidth: '1.5',
        opacity: '1',
      },
      '.pc-axis': { stroke: 'var(--gp-rule)', strokeWidth: '0.75' },

      /* ═══════════════════════════════════════════════════════════════════
         SVG ANNOTATION CONVENTIONS
         ═══════════════════════════════════════════════════════════════════ */

      '.ann-line': { stroke: 'var(--gp-ghost-ink)', strokeWidth: '0.6', fill: 'none' },
      '.ann-text': {
        fontFamily: 'var(--gp-sans)',
        fontSize: '8px',
        fill: 'var(--gp-margin-ink)',
        fontStyle: 'italic',
      },
      '.ref-band': { fill: 'var(--gp-ghost-ink)', fillOpacity: '0.10', stroke: 'none' },
      '.ref-line': {
        stroke: 'var(--gp-rule)',
        strokeWidth: '0.75',
        strokeDasharray: '2 4',
        fill: 'none',
      },
      '.zero-line': {
        stroke: 'var(--gp-rule)',
        strokeWidth: '0.75',
        strokeDasharray: '2 4',
        fill: 'none',
      },

      /* ═══════════════════════════════════════════════════════════════════
         RESPONSIVE — 960px breakpoint
         ═══════════════════════════════════════════════════════════════════ */

      '@media (max-width: 960px)': {
        'article': {
          paddingTop: 'var(--gp-space-lg)',
          paddingBottom: 'var(--gp-space-lg)',
        },
        'label.sidenote-toggle:not(.sidenote-number)': {
          display: 'inline',
          cursor: 'pointer',
          color: 'var(--gp-red)',
          fontSize: '0.85em',
        },
        '.sidenote, .marginnote': {
          display: 'none',
          float: 'none',
          position: 'static',
          margin: 'var(--gp-space-sm) 0',
          width: '100%',
          background: 'var(--gp-code-bg)',
          padding: 'var(--gp-space-sm) var(--gp-space-md)',
          borderLeft: '2px solid var(--gp-light-rule)',
          fontSize: 'var(--gp-small)',
          color: 'var(--gp-margin-ink)',
        },
        '.sidenote-toggle:checked + .sidenote, .sidenote-toggle:checked + .marginnote': {
          display: 'block',
        },
        'figure.figure-margin': {
          float: 'none',
          marginRight: '0',
          width: '100%',
        },
        'figure:not(.figure-margin):not(.figure-full):not(.evidence__image) figcaption': {
          float: 'none',
          marginRight: '0',
          width: '100%',
          marginTop: 'var(--gp-space-xs)',
        },
        'figure.figure-full, figure.figure-full figcaption': {
          maxWidth: '100%',
          float: 'none',
          width: '100%',
        },
        '.figure-compare, .compare-wrap, .evidence': {
          gridTemplateColumns: '1fr',
        },
        '.evidence__caption': { gridColumn: '1' },
        '.small-multiples-3, .small-multiples-4': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '.small-multiples-6': { gridTemplateColumns: 'repeat(3, 1fr)' },
        '.running-header': { flexDirection: 'column' },
        '.dot-chart li, .dumbbell li, .bar-chart li': {
          gridTemplateColumns: '100px 1fr auto',
        },
        '.strip-plot li': { gridTemplateColumns: '100px 1fr' },
        '.sp-axis-labels': { marginLeft: 'calc(100px + var(--gp-space-sm))' },
        '.bullet-graph': { gridTemplateColumns: '100px 1fr auto' },
        '.bg-axis': { marginLeft: 'calc(100px + var(--gp-space-sm))' },
      },

      /* ═══════════════════════════════════════════════════════════════════
         RESPONSIVE — 560px breakpoint
         ═══════════════════════════════════════════════════════════════════ */

      '@media (max-width: 560px)': {
        'article': {
          paddingTop: 'var(--gp-space-md)',
          paddingBottom: 'var(--gp-space-md)',
        },
        '.stat-grid': { gridTemplateColumns: 'repeat(2, 1fr)' },
        '.dot-chart li, .dumbbell li, .bar-chart li': {
          gridTemplateColumns: '70px 1fr auto',
        },
        '.strip-plot li': { gridTemplateColumns: '70px 1fr' },
        '.sp-axis-labels': { marginLeft: 'calc(70px + var(--gp-space-sm))' },
        '.bullet-graph': { gridTemplateColumns: '70px 1fr auto' },
        '.bg-axis': { marginLeft: 'calc(70px + var(--gp-space-sm))' },
        '.small-multiples-3, .small-multiples-4, .small-multiples-6': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      },

      /* ═══════════════════════════════════════════════════════════════════
         PRINT
         ═══════════════════════════════════════════════════════════════════ */

      '@media print': {
        ':root': {
          '--gp-font-size': '11pt',
          '--gp-text-width': '120mm',
          '--gp-margin-width': '50mm',
          '--gp-gutter': '10mm',
          '--gp-outer-margin': '0mm',
        },
        'html': { colorScheme: 'light' },
        'body': { background: 'white', color: 'black' },
        'article': { maxWidth: 'none', padding: '0' },
        'a': { textDecoration: 'none', color: 'black' },
        '.sidenote, .marginnote': {
          display: 'block !important',
          float: 'right',
          position: 'static',
          marginRight: 'calc(-1 * (var(--gp-margin-width) + var(--gp-gutter)))',
          width: 'var(--gp-margin-width)',
          fontSize: '8pt',
          background: 'none',
          border: 'none',
          padding: '0',
        },
        'input.sidenote-toggle, label.sidenote-toggle:not(.sidenote-number)': {
          display: 'none',
        },
        'figure, table': { breakInside: 'avoid' },
        'h1, h2, h3': { breakAfter: 'avoid' },
      },
    });


    /* ═══════════════════════════════════════════════════════════════════════
       UTILITIES
       ═══════════════════════════════════════════════════════════════════════ */

    addUtilities({
      /* ── Color utilities ────────────────────────────────────────────── */
      '.gp-red': { color: 'var(--gp-red)' },
      '.gp-blue': { color: 'var(--gp-blue)' },
      '.gp-green': { color: 'var(--gp-green)' },
      '.gp-ochre': { color: 'var(--gp-ochre)' },

      /* ── Layout utilities ───────────────────────────────────────────── */
      '.full-bleed': { maxWidth: 'var(--gp-page-width) !important' },
      '.align-right': { textAlign: 'right' },
      '.align-center': { textAlign: 'center' },

      /* ── Typography utilities ───────────────────────────────────────── */
      '.sans': { fontFamily: 'var(--gp-sans)' },
      '.mono': { fontFamily: 'var(--gp-mono)' },
      '.italic': { fontStyle: 'italic' },
      '.muted': { color: 'var(--gp-margin-ink)' },
      '.very-muted': { color: 'var(--gp-ghost-ink)' },
      '.small': { fontSize: 'var(--gp-small)' },
      '.micro': { fontSize: 'var(--gp-micro)' },

      /* ── Clearfix ───────────────────────────────────────────────────── */
      '.cf::after': { content: '""', display: 'table', clear: 'both' },

      /* ── Margin utilities ───────────────────────────────────────────── */
      '.mt-sm': { marginTop: 'var(--gp-space-sm)' },
      '.mt-md': { marginTop: 'var(--gp-space-md)' },
      '.mt-lg': { marginTop: 'var(--gp-space-lg)' },
      '.mt-xl': { marginTop: 'var(--gp-space-xl)' },
      '.mb-sm': { marginBottom: 'var(--gp-space-sm)' },
      '.mb-md': { marginBottom: 'var(--gp-space-md)' },
      '.mb-lg': { marginBottom: 'var(--gp-space-lg)' },
      '.mb-xl': { marginBottom: 'var(--gp-space-xl)' },

      /* ── Sequential color utilities ─────────────────────────────────── */
      '.seq-1': { color: 'var(--gp-seq-1)' },
      '.seq-2': { color: 'var(--gp-seq-2)' },
      '.seq-3': { color: 'var(--gp-seq-3)' },
      '.seq-4': { color: 'var(--gp-seq-4)' },
      '.seq-5': { color: 'var(--gp-seq-5)' },

      /* ── Ghost / emphasis utilities ─────────────────────────────────── */
      '.ghost': { opacity: '0.22' },
      '.near-ghost': { opacity: '0.40' },
      '.focal': { opacity: '1' },
    });
  },

  /* ═══════════════════════════════════════════════════════════════════════
     THEME EXTENSIONS — enables Tailwind utility classes like:
       text-gp-red, bg-gp-paper, font-serif, etc.
     ═══════════════════════════════════════════════════════════════════════ */
  {
    theme: {
      extend: {
        colors: {
          'gp-paper': 'var(--gp-paper)',
          'gp-ink': 'var(--gp-ink)',
          'gp-margin-ink': 'var(--gp-margin-ink)',
          'gp-ghost-ink': 'var(--gp-ghost-ink)',
          'gp-rule': 'var(--gp-rule)',
          'gp-light-rule': 'var(--gp-light-rule)',
          'gp-code-bg': 'var(--gp-code-bg)',

          'gp-red': 'var(--gp-red)',
          'gp-red-light': 'var(--gp-red-light)',
          'gp-blue': 'var(--gp-blue)',
          'gp-blue-light': 'var(--gp-blue-light)',
          'gp-green': 'var(--gp-green)',
          'gp-green-light': 'var(--gp-green-light)',
          'gp-ochre': 'var(--gp-ochre)',
          'gp-ochre-light': 'var(--gp-ochre-light)',
          'gp-brown': 'var(--gp-brown)',
          'gp-gray-data': 'var(--gp-gray-data)',

          'gp-seq-1': 'var(--gp-seq-1)',
          'gp-seq-2': 'var(--gp-seq-2)',
          'gp-seq-3': 'var(--gp-seq-3)',
          'gp-seq-4': 'var(--gp-seq-4)',
          'gp-seq-5': 'var(--gp-seq-5)',

          'gp-div-lo-2': 'var(--gp-div-lo-2)',
          'gp-div-lo-1': 'var(--gp-div-lo-1)',
          'gp-div-mid': 'var(--gp-div-mid)',
          'gp-div-hi-1': 'var(--gp-div-hi-1)',
          'gp-div-hi-2': 'var(--gp-div-hi-2)',
        },
        fontFamily: {
          'serif': ['var(--gp-serif)'],
          'sans': ['var(--gp-sans)'],
          'mono': ['var(--gp-mono)'],
        },
        spacing: {
          'gp-xs': 'var(--gp-space-xs)',
          'gp-sm': 'var(--gp-space-sm)',
          'gp-md': 'var(--gp-space-md)',
          'gp-lg': 'var(--gp-space-lg)',
          'gp-xl': 'var(--gp-space-xl)',
        },
        maxWidth: {
          'gp-text': 'var(--gp-text-width)',
          'gp-margin': 'var(--gp-margin-width)',
          'gp-page': 'var(--gp-page-width)',
        },
        width: {
          'gp-text': 'var(--gp-text-width)',
          'gp-margin': 'var(--gp-margin-width)',
          'gp-page': 'var(--gp-page-width)',
        },
      },
    },
  }
);
