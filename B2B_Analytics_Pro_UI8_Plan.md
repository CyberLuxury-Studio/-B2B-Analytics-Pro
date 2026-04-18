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
│   │   ├── layout.tsx         # Root layout with font and global context providers
│   │   ├── page.tsx           # Main landing page
│   │   ├── globals.css        # Tailwind directives and global styles
│   │   └── not-found.tsx      # Custom 404 page
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, Section wrappers
│   │   ├── ui/                # Reusable atoms (Buttons, Cards, Badges)
│   │   ├── sections/          # Hero, Features, Pricing, CTA components
│   │   ├── charts/            # Glassmorphic chart visualizations
│   │   └── 3d/                # Spline scene components
│   ├── lib/
│   │   ├── utils.ts           # Helper functions (e.g., class merging)
│   │   ├── constants.ts       # Copy, pricing data, nav links
│   │   └── animations.ts      # Framer Motion variants
│   ├── hooks/
│   │   ├── useScroll.ts       # Custom scroll hooks
│   │   └── useMediaQuery.ts   # Responsive hooks
│   └── assets/
│       ├── fonts/             # Local font files
│       └── images/            # Static assets (logos, placeholder images)
├── public/                    # Favicons, manifest, external assets
├── tailwind.config.ts         # Tailwind configuration & custom theme
├── tsconfig.json              # TypeScript configuration
├── next.config.mjs            # Next.js configuration (v16.2.4)
├── package.json               # Dependencies and scripts
└── README.md                  # Developer instructions
```

---

## 2. Section-by-Section Breakdown

### A. Navigation (Sticky Navbar)
- **Layout:** Flexbox, logo on the left, links centered, CTA button on the right.
- **Design:** Glassmorphic background (`backdrop-blur-md bg-cyber-dark/60`) that activates on scroll.
- **Animations:** Framer Motion staggered entrance on load.

### B. Hero Section
- **Layout:** Two-column split on desktop (text on left, 3D on right). Stacked on mobile.
- **Content:** High-impact H1 ("Next-Gen Data Intelligence"), supportive subheadline, primary & secondary CTA buttons.
- **Spline Usage:** A glowing, abstract 3D data node or holographic globe on the right side.
- **Animations:** Text reveals character-by-character or word-by-word. Spline scene fades in after loading.

### C. Features (Glassmorphic Grids)
- **Layout:** CSS Grid (1 column mobile, 3 columns desktop).
- **Content:** Feature cards (e.g., "Real-time Processing", "Predictive Analytics").
- **Design:** Dark glass cards with a subtle purple/blue glowing border (`border-cyber-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]`).
- **Animations:** Cards slide up staggered using `whileInView` with a viewport margin.

### D. Analytics Dashboard Preview
- **Layout:** Centered massive UI mockup.
- **Content:** Abstract representation of the app dashboard featuring glassmorphic charts.
- **Design:** Mockup surrounded by a soft neon glow.
- **Animations:** Parallax effect on scroll; elements within the mockup float slightly.

### E. Pricing Tables
- **Layout:** 3-column flex or grid layout.
- **Content:** "Starter", "Pro", and "Enterprise" tiers.
- **Design:** The "Pro" tier is highlighted with a stronger glass effect and a glowing gradient border.
- **Animations:** Hover effects that slightly scale the card (`scale: 1.05`) and intensify the border glow.

### F. Call to Action (CTA)
- **Layout:** Centered block.
- **Content:** "Ready to transform your data?" with a final primary button.
- **Design:** Deep gradient background (dark blue to purple) with an overlaid noise texture.
- **Animations:** Fade in with a slight scale-up on scroll.

### G. Footer
- **Layout:** 4-column grid for links, newsletter signup.
- **Content:** Copyright, social links, legal pages.
- **Design:** Minimalist, extremely dark background (`bg-cyber-black`).

---

## 3. Design System

### Color Palette (Corporate Cyber)
- **Backgrounds:**
  - `cyber-black`: `#05050A` (Main background)
  - `cyber-dark`: `#0B0C15` (Cards/Sections)
- **Accents (Neon & Glow):**
  - `cyber-blue`: `#3B82F6` (Primary action, glowing borders)
  - `cyber-purple`: `#8B5CF6` (Secondary, gradients)
  - `cyber-cyan`: `#06B6D4` (Highlights, chart data points)
- **Text:**
  - `text-primary`: `#F8FAFC` (Headings)
  - `text-secondary`: `#94A3B8` (Body text)

### Typography
- **Headings:** *Space Grotesk* or *Syncopate* (Technical, geometric, modern).
- **Body:** *Inter* or *Geist* (Highly readable, clean).

### Spacing Scale
- Utilizing Tailwind's default spacing, leaning heavily on `py-24` and `py-32` for spacious section breaks.

### Reusable Components
- `GlassCard`: A wrapper component providing backdrop blur, border, and subtle glow.
- `NeonButton`: Button with a glowing `box-shadow` on hover.
- `GradientText`: Text component that clips a blue-to-purple gradient.

---

## 4. Animation Plan (Framer Motion)

- **Global Transitions:** `spring` based physics (`stiffness: 100`, `damping: 20`) for a smooth, premium feel.
- **Hero Entrance:**
  - `containerVariants`: Stagger children by `0.1s`.
  - `itemVariants`: `y: 20`, `opacity: 0` -> `y: 0`, `opacity: 1`.
- **Scroll-Triggered (whileInView):**
  - `viewport={{ once: true, margin: "-100px" }}` to ensure animations trigger at the right moment.
  - Directional slides (left/right) for alternating content blocks.
- **Interactive:**
  - `whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}` on cards.
  - `whileTap={{ scale: 0.95 }}` on buttons.

---

## 5. Spline Integration Plan

### Spline Scene Concept
An abstract, rotating holographic 3D data matrix or globe. Nodes connect with glowing lines, utilizing the cyber-blue and cyber-purple color palette. The background of the scene is transparent to blend seamlessly with the landing page.

### Integration Strategy
- **Component:** Use `@splinetool/react-spline`.
- **Performance:**
  - The Spline component will be dynamically imported (`next/dynamic`) with `ssr: false` to prevent hydration mismatches and reduce initial server response time.
  - **Fallback:** A static, highly optimized WebP image of the 3D scene (or a sleek CSS loader) will be displayed while the Spline script loads and initializes.
- **Interaction:** The scene will have subtle mouse-tracking (look-at) enabled in Spline, adding interactivity without heavy JS calculations on the Next.js side.

---

## 6. Component Architecture

- `HeroSection.tsx`: Orchestrates the text content and imports the `SplineViewer`.
- `SplineViewer.tsx`: Client component containing the `react-spline` canvas and fallback logic.
- `FeatureGrid.tsx`: Maps over `constants.ts` to render `FeatureCard` components.
- `FeatureCard.tsx`: Receives `title`, `description`, `icon`. Uses `GlassCard`.
- `PricingSection.tsx`: Orchestrates pricing tiers.
- `PricingCard.tsx`: Receives `tierName`, `price`, `features`, `isHighlighted`.
- `GlassChart.tsx`: A conceptual UI component using SVG or Recharts wrapped in glassmorphism to simulate the analytics dashboard.
- `Navbar.tsx`: Client component handling scroll state for the glass effect.
- `Button.tsx`: Highly configurable atom (variants: `primary`, `secondary`, `outline`, `neon`).

---

## 7. Performance Strategy

- **Image Optimization:** All static images and Spline fallbacks run through Next.js `<Image />` component (WebP format, properly sized).
- **Code Splitting:**
  - Route-based splitting handled by Next.js App Router.
  - Component-based splitting: Spline viewer and heavy chart libraries are dynamically imported.
- **Font Loading:** Use `next/font/google` to optimize and self-host fonts at build time, eliminating layout shift.
- **CSS:** Tailwind ensures minimal CSS bundle size.
- **Bundle Size Management:** Avoiding heavy client-side libraries where native CSS/HTML suffices. Framer motion imported selectively.

---

## 8. UI8 Packaging Checklist

To ensure a premium and easy-to-use product for UI8 buyers, the final zip file will contain:

- [ ] **`/source-code` folder:** The complete, clean Next.js 16.2.4 repository.
  - `node_modules` and `.next` build folders must be excluded.
- [ ] **`README.md` (Documentation):** Comprehensive guide on:
  - Prerequisites (Node version).
  - How to install (`npm install`).
  - How to run the dev server (`npm run dev`).
  - How to edit content (`lib/constants.ts`).
  - How to customize the Tailwind color palette.
  - How to replace the Spline URL with their own.
- [ ] **`/assets` folder:** Any standalone static assets, fallback images, and placeholder graphics used.
- [ ] **`preview.jpg`:** High-resolution full-page screenshot of the template for the UI8 gallery.
- [ ] **`thumbnail.jpg`:** 800x600 thumbnail for the UI8 listing.
- [ ] **Code Quality Check:** Ensure `npm run lint` and `npm run build` pass with zero errors or warnings before packaging.