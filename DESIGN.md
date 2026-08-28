---
name: Mind Body Athletes Look-see
description: Editorial performance site in Allie's gold, ink, and paper palette
colors:
  ink: "#111111"
  ink-soft: "#2a2a2a"
  paper: "#f6f4f0"
  soft: "#f3f1ec"
  canvas: "#ffffff"
  quiet: "#6b6560"
  gold: "#c4a35a"
  gold-matte: "#b8954a"
  gold-deep: "#9a7c3a"
  gold-ink: "#6d5628"
  line: "rgba(17, 17, 17, 0.12)"
  line-light: "rgba(255, 255, 255, 0.22)"
typography:
  display:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 500
    lineHeight: 1.1
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontWeight: 400
    letterSpacing: "0.02em"
    textTransform: uppercase
  body:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.4
spacing:
  section-y: "clamp(2.5rem, 5vw, 5rem)"
  gutter: "clamp(1rem, 4vw, 4rem)"
rounded:
  default: "0px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.default}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.default}"
---

## Overview

Warm monochrome editorial performance: ink and paper surfaces, gold as signal (CTAs, eyebrows on dark, stats band), documentary athletic photography, Apercu-style uppercase labels, asymmetric diptychs, marquees, and frost CTAs. Light-first with strategic dark (ink) header/footer/hero bands.

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| ink | #111111 | Primary text, dark sections |
| paper | #f6f4f0 | Page background |
| soft | #f3f1ec | Alternate section fill |
| canvas | #ffffff | Cards, form fields |
| gold | #c4a35a | Primary CTA, announcement bar, accents on dark |
| gold-ink | #6d5628 | Readable gold-tone labels on light backgrounds |
| quiet | #6b6560 | Body secondary text |

**Do not use:** Nike red, navy/orange clone palette, swim-club naming.

## Typography

- **Display:** Instrument Sans — titles (`text-title-70` … `text-title-90`), fluid clamp scale.
- **Labels:** IBM Plex Mono (Apercu slot) — eyebrows, nav, captions; uppercase for short labels only.
- **Body:** Instrument Sans — `text-body-30` … `text-body-45`.

On light backgrounds, use `gold-ink` or `quiet` for small type—not `gold-deep` (fails contrast).

## Layout

- 1px spacing scale (`--spacing: 0.0625rem`).
- Section rhythm: marquee → hero → stats → protocol/steps → photo cards → values → diptych → quotes → frost CTA.
- Mobile: stacked; desktop: split grids and multi-column values rows.
- Horizontal padding: `px-16` mobile, `lg:px-64` on major sections.

## Elevation & Depth

Flat planes. Separation via borders (`line`, dashed dividers), ink bands, and photo weight—not shadows or cards.

## Shapes

Zero border radius on buttons and form controls (`--radius: 0px`). Frost CTA uses backdrop blur over photography.

## Components

- **SiteHeader:** Ink bar, light logo, gold Get Started, mobile dialog menu.
- **MarqueeBar:** Infinite scroll; pauses on hover; static when `prefers-reduced-motion`.
- **StatsPanel:** Gold-alt band with pilot survey stats.
- **ProtocolSteps:** Numbered steps on ink with photo diptych.
- **PhotoCards / Diptych:** Photo-led program and story blocks.
- **FinalCta:** Frost glass panel over full-bleed photo.

## Do's and Don'ts

**Do**
- Use real MBA copy and photos only.
- Keep gold/black/paper as the full palette.
- Add focus rings on all interactive chrome.

**Don't**
- Invent services, testimonials, or statistics.
- Use gold-deep for small text on light backgrounds.
- Add rounded card grids, gradients, or generic fitness clichés.
