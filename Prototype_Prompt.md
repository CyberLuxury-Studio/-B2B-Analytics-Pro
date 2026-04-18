# Prompt for Generating B2B Analytics Pro Prototype

Use the following detailed prompt with an AI coding assistant (like Claude, ChatGPT, or Cursor) to generate the Next.js frontend prototype from scratch.

---

**Copy and paste the text below into your AI assistant:**

```text
Act as an expert Next.js architect and UI/UX developer. I need you to bootstrap and build a complete, production-ready landing page prototype for a project called "B2B Analytics Pro". It is designed to be sold as a premium template on UI8.

Here are the strict requirements and specifications:

### 1. Tech Stack
- **Framework:** Next.js 16.2.4 (App Router)
- **Styling:** Tailwind CSS (with arbitrary values and custom configurations)
- **Animation:** Framer Motion
- **3D Graphics:** @splinetool/react-spline (for the Hero section)
- **Language:** TypeScript
- **Icons:** lucide-react

### 2. Aesthetic & Design System: "Corporate Cyber"
- **Vibe:** Deep dark blues, rich purples, frosted dark glass (glassmorphism), and subtle glowing neon accents. Highly professional but futuristic.
- **Backgrounds:**
  - Main background: `#05050A` (cyber-black)
  - Cards/Containers: `#0B0C15` (cyber-dark) with backdrop blur.
- **Accents (Neon/Glow):**
  - Primary Action/Glow: `#3B82F6` (cyber-blue)
  - Secondary/Gradients: `#8B5CF6` (cyber-purple)
  - Highlights: `#06B6D4` (cyber-cyan)
- **Typography:** Use `next/font/google`. Space Grotesk for Headings, Inter for Body text.
- **Core Components Strategy:** Use a lot of glassmorphism (`backdrop-blur-md`, semi-transparent backgrounds like `bg-white/5` or `bg-black/40`), combined with thin, glowing borders (`border border-white/10` or `border-purple-500/30`).

### 3. Page Structure & Components to Build (Single Page landing `app/page.tsx`)

Please build the following sections in order, ensuring they are fully responsive:

#### A. Sticky Navbar
- Fixed to top, activates a glassmorphic background (`backdrop-blur-md bg-[#0B0C15]/80`) on scroll.
- Logo on left, navigation links centered, "Get Started" Neon Button on right.

#### B. Hero Section
- Two-column layout on desktop, stacked on mobile.
- Left side: High-impact H1 ("Next-Gen Data Intelligence"), secondary subheadline text (`#94A3B8`), and a primary "Start Free Trial" button alongside a secondary "View Demo" button.
- Right side: Integrate `<Spline />` component loading a generic abstract 3D scene (use a public spline URL placeholder like `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode`). Ensure it is wrapped in `next/dynamic` with `{ ssr: false }` for performance.
- Animation: Staggered fade-up for text using Framer Motion.

#### C. Features Grid
- Title: "Unlock Hidden Insights"
- 3-column CSS Grid.
- Create 3 to 6 feature cards using a `GlassCard` wrapper.
- Cards should have a subtle purple/blue glowing border (`border-[#8B5CF6]/30`) and a hover effect that slightly scales up (`scale-105`) and increases the box-shadow glow.
- Include dummy features like "Real-time Processing", "Predictive Analytics", "Automated Reporting". Use `lucide-react` icons.

#### D. Pricing Tables
- Title: "Transparent Pricing for Scaling Teams"
- 3-column layout.
- Tiers: Starter, Pro, Enterprise.
- Highlight the "Pro" tier in the center: give it a stronger glass effect, a glowing gradient border, and slightly larger scale.
- Include a "Get Started" button in each card.

#### E. Call to Action (CTA) Section
- Centered block with a deep gradient background (dark blue to purple).
- H2: "Ready to transform your data?"
- Final primary button.
- Animation: Fade in with a slight scale-up when scrolled into view (`whileInView`).

#### F. Footer
- Minimalist dark background (`#05050A`).
- 4-column grid for links, copyright, social placeholders.

### 4. Implementation Details to Include
- Setup the `tailwind.config.ts` to include the specific colors mentioned above.
- Create a `components/ui/` folder for reusable atoms (e.g., `GlassCard.tsx`, `NeonButton.tsx`).
- Use Framer Motion heavily for scroll-triggered animations (`whileInView`, `viewport={{ once: true }}`) to give it a premium feel.
- Ensure TypeScript interfaces are defined for all component props.

Please provide the code in a structured way. Start by giving me the commands to bootstrap the Next.js app and install dependencies, then provide the code for `tailwind.config.ts`, `app/globals.css`, the reusable UI components, and finally the main `app/page.tsx` integrating it all.
```