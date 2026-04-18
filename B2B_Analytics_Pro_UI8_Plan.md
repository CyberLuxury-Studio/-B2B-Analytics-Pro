# B2B Analytics Pro - UI8 Project Plan

## Overview
**Project Name:** B2B Analytics Pro
**Description:** A professional, production-ready landing page tailored for a B2B analytics platform. It features a "Corporate Cyber" aesthetic—deep dark blues, rich purples, frosted dark glass (glassmorphism), and subtle glowing accents. Designed to be sold as a premium template on UI8.
**Tech Stack:** Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline (3D), TypeScript.

---

## 1. Project Structure
The project follows the Next.js App Router convention, organizing files by feature and maintaining a clean separation of concerns.

```text
b2b-analytics-pro/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with Inter & Space Grotesk fonts
│   │   ├── page.tsx           # Main landing page (Framer Motion + Spline)
│   │   └── globals.css        # Tailwind directives and custom utility classes
├── public/                    # Favicons, manifest, external assets
├── tailwind.config.ts         # Optional additional Tailwind configuration
├── postcss.config.mjs         # PostCSS Config
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration (v16.2.4)
├── package.json               # Dependencies and scripts
└── README.md                  # Developer instructions
```

---

## 2. Section-by-Section Breakdown

### A. Navigation (Sticky Navbar)
- **Layout:** Flexbox, logo on the left, links centered, CTA button on the right.
- **Design:** Transparent at the top, activating a Glassmorphic background (`bg-[#030305]/70 backdrop-blur-xl border-white/5`) dynamically on scroll.
- **Animations:** Subtle underline scale-in (`hover:after:scale-x-100`) for navigation links.

### B. Hero Section
- **Layout:** Centered content over a mesh-gradient and grid pattern background.
- **Content:** High-impact H1 ("Next-Gen Data Intelligence"), supportive subheadline, primary & secondary CTA buttons.
- **Spline Usage:** Integrated via `@splinetool/react-spline` wrapped in `next/dynamic` (`ssr: false`). It displays a glowing, abstract 3D data node right below the hero text.
- **Animations:** Framer Motion staggered fade-up entrance (`opacity: 0, y: 30` -> `opacity: 1, y: 0`). Spline scene fades in with a slight delay.

### C. Features (Glassmorphic Grids)
- **Layout:** CSS Grid (1 column mobile, 3 columns desktop).
- **Content:** Feature cards ("Real-time Processing", "Predictive Analytics", "Automated Reporting") utilizing `lucide-react` icons (Zap, Sparkles, Terminal).
- **Design:** Dark glass cards (`.glass-card`) with a subtle glowing border on hover (`hover:border-primary/30`).
- **Animations:** Cards slide up staggered using `whileInView` with a viewport margin to trigger just as they scroll into view.

### D. Pricing Tables
- **Layout:** 3-column grid layout.
- **Content:** "Starter", "Pro", and "Enterprise" tiers.
- **Design:** The "Pro" tier is highlighted with a stronger glass effect (`bg-surface-container/80 backdrop-blur-3xl`), scaled up slightly (`scale-105`), and surrounded by a glowing neon border (`.neon-border-blue`).
- **Animations:** `whileInView` entrance animations where side cards slide in from the left and right, and the center card scales up.

### E. Call to Action (CTA)
- **Layout:** Centered block.
- **Content:** "Ready to transform your data?" with a final primary button.
- **Design:** Deep gradient background (dark blue to purple) with absolute positioned blurred radial gradients to create an atmospheric glow.
- **Animations:** Fade in with a slight scale-up (`initial={{ opacity: 0, scale: 0.95 }}`) on scroll.

### F. Footer
- **Layout:** 4-column grid for links, minimal dark background.
- **Content:** Copyright, platform links, resources, company info.
- **Design:** Minimalist, extremely dark background (`bg-surface`) with subtle hover states for links.

---

## 3. Design System

### Color Palette (Corporate Cyber)
Defined directly in `globals.css` using Tailwind v4 compatible CSS variables (`@theme`):
- `var(--background)`: `#030305` (Main surface)
- `var(--foreground)`: `#F8FAFC` (Main text)
- `var(--color-primary)`: `#3B82F6` (Cyber Blue)
- `var(--color-secondary)`: `#8B5CF6` (Cyber Purple)
- `var(--color-tertiary)`: `#06B6D4` (Cyber Cyan)

### Typography
- **Headings:** *Space Grotesk* (Technical, geometric, modern) - Applied via `.headline-font`.
- **Body:** *Inter* (Highly readable, clean) - Applied via `.font-body`.
- Fonts are optimized using `next/font/google`.

### Reusable Styles (`globals.css`)
- `.glass-card`: Background blur and subtle white borders.
- `.neon-border-blue`: Glowing blue box-shadows.
- `.bg-noise`: SVG fractal noise filter applied as an overlay to the entire page to give it texture.

---

## 4. Animation & 3D Integration Plan

### Framer Motion
- Elements heavily use `initial`, `animate` (for on-load) and `whileInView`, `viewport={{ once: true }}` (for scroll reveals).
- Physics: Simple, smooth easing (`ease: "easeOut"`) with slight delays applied to map content sequentially.

### Spline Integration Strategy
- **Component:** `@splinetool/react-spline`
- **Performance Optimization:** Dynamically imported using Next.js `dynamic()` with `ssr: false`.
- **Loading State:** Includes a custom animated spinner fallback while the 3D model downloads and initializes, preventing layout shift.

---

## 5. UI8 Packaging Checklist
- [x] **`/src` folder:** Contains the clean, fully functional Next.js 16.2.4 codebase.
- [ ] **`README.md`:** Comprehensive instructions on setup, customization, and replacing the Spline URL.
- [ ] **`preview.jpg`:** High-resolution screenshot of the compiled landing page.
- [ ] **Code Quality:** Ensure `npm run lint` and `npm run build` pass with zero errors (Verified!).