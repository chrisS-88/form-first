# Pennine Design System

Pennine Design System is a modular, theme-driven foundation for building fast, consistent, and maintainable front-end experiences across Pennine Digital projects. It centralises design tokens, themes, motion packs, and behaviour utilities into a single versioned package that can be reused across any Astro + Tailwind project.

The goal is to keep client projects lightweight while ensuring visual and behavioural consistency across the entire Pennine Digital ecosystem.

---

## Installation

The design system can be installed locally during development or directly from GitHub for portability and clean handoff.

### Local install (recommended during development)

If your folder structure looks like:

/dev
/pennine-design-system
/clients/client-site

Install into a project:

```
npm install ../../pennine-design-system
```

### GitHub install (recommended for portability and handoff)

```
npm install git+https://github.com/<your-username>/pennine-design-system.git
```

### Tailwind Setup

Load the design system presets inside your project’s `tailwind.config.mjs`:

```
import base from "pennine-design-system/base/tailwind.base.js";
import theme from "pennine-design-system/themes/warmMinimal.js";
import minimal from "pennine-design-system/motion/minimal.js";

export default {
  presets: [base, theme, minimal],
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,md,mdx}"]
};
```

This provides global tokens, theme colours, wrapper widths, spacing scales, and motion utilities.

### Utilities

Behaviour utilities live in:

```
pennine-design-system/utils/
```

They can be imported individually depending on the project’s needs.

### Scroll-reveal

### CSS

```
@import "pennine-design-system/utils/animate.css";
```

### JS

```
import initScrollAnimations from "pennine-design-system/utils/animate.js";

initScrollAnimations();
```

### Markup

```
<div data-animate class="fade-up" data-delay="100">
  Hello
</div>
```

### Parallax

### JS

```
import { initParallax } from "pennine-design-system/utils/parallax.js";

initParallax();
```

### Markup

```
<div data-parallax data-parallax-speed="1.2"></div>

```

### Scroll-lock

```
import { lockScroll, unlockScroll } from "pennine-design-system/utils/scroll-lock.js";
```

### Reduced motion detection

```
import { prefersReducedMotion } from "pennine-design-system/utils/prefers-reduced-motion.js";

if (prefersReducedMotion()) {
  document.documentElement.classList.add("reduce-motion");
}
```

### Folder Structure

```
pennine-design-system/
  base/                → core tokens (typography, spacing, wrappers, radii)
  themes/              → brand colour palettes
  motion/              → minimal & expressive animation packs
  utils/               → behaviour utilities (scroll, parallax, accessibility)
  components/          → optional reusable UI components
  package.json
  README.md
```

### Philosophy

Pennine Design System is designed to:

- Keep client projects clean and lightweight

- Avoid duplication of tokens and utilities

- Provide consistent spacing, typography, and motion

- Allow theme swapping per project

- Offer behaviour utilities without heavy dependencies

- Scale as Pennine Digital grows

It acts as the shared foundation for all Pennine Digital work, ensuring clarity, consistency, and maintainability across every project.
