<div align="center">

# ✦ Design Portfolio

**Pushan Bhattacharyya** — Creative Technologist

A glassmorphic portfolio showcasing UI/UX design, creative coding, and full-stack development projects.

[![Deploy](https://github.com/Ashborn-047/design-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ashborn-047/design-portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Live Site](https://ashborn-047.github.io/design-portfolio) · [Report Bug](https://github.com/Ashborn-047/design-portfolio/issues) · [Request Feature](https://github.com/Ashborn-047/design-portfolio/issues)

</div>

---

## 🛠️ Tech Stack

This project is built using a modern, performant, and high-fidelity frontend stack:

- **Core Framework**: **React 19** (leveraging concurrent features and optimal rendering)
- **Styling**: **Tailwind CSS v4** (utilizing the new `@theme` engine, OKLCH color palettes, custom variants, and layer utilities)
- **Animations**: **Framer Motion 12** (powering smooth entrance transitions, spring physics, and card-lift effects) paired with **Custom Inline SVG Animations** for unique project identities.
- **Routing**: **Wouter** (a minimal, 1.5KB React router focusing on developer experience and bundle size)
- **UI Primitives**: **Radix UI** (fully accessible dialogs, tabs, tooltips, and scroll-areas) + **Sonner** (elegant toast notifications)
- **Language**: **TypeScript** (strict type safety)
- **Build Tool**: **Vite 7** (lightning-fast development server with HMR)
- **Deployment**: **GitHub Pages** (automated CI/CD via GitHub Actions)

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion + Inline SVG |
| **Routing** | Wouter |
| **Icons** | Lucide React |
| **UI Primitives** | Radix UI |
| **Build Tool** | Vite 7 |
| **Language** | TypeScript |
| **Deployment** | GitHub Pages |

---

## ✦ Preview

> Minimalist glassmorphism meets editorial elegance — frosted glass cards, serif + sans-serif typography pairing, and subtle SVG animations that reflect each project's identity.

## 📁 Project Structure

```
design-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD
├── client/
│   ├── index.html              # Entry HTML with SEO meta + fonts
│   └── src/
│       ├── components/
│       │   ├── ui/             # Reusable UI primitives (buttons, cards, etc.)
│       │   ├── ErrorBoundary.tsx
│       │   └── ProjectAnimations.tsx  # Per-project SVG animations
│       ├── contexts/
│       │   └── ThemeContext.tsx # Light/dark theme provider
│       ├── hooks/
│       │   ├── useComposition.ts
│       │   └── useMobile.tsx
│       ├── lib/
│       │   └── utils.ts        # Tailwind merge utilities
│       ├── pages/
│       │   ├── Home.tsx        # Main portfolio page
│       │   └── NotFound.tsx    # 404 fallback
│       ├── App.tsx             # Root layout + routing
│       ├── main.tsx            # React entry point
│       └── index.css           # Design tokens + global styles
├── .gitignore
├── .prettierrc
├── LICENSE
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm (comes with Node)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ashborn-047/design-portfolio.git
cd design-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## 🎨 Design System

The portfolio follows a **Minimalist Glassmorphism** design language:

- **Fonts** — Playfair Display (headings) + Inter (body)
- **Palette** — Off-white base with soft lavender accents and deep charcoal text
- **Glass Effect** — `backdrop-filter: blur()` + semi-transparent backgrounds
- **Motion** — Subtle entrance animations, hover lifts, and per-project SVG micro-animations
- **Responsive** — Mobile-first with progressive enhancement for tablet and desktop

## 🏆 Featured Projects

| Project | Category | Description |
|---------|----------|-------------|
| **Discord Onboarding** | UX Case Study | Research-driven progressive disclosure onboarding flow to solve channel overload |
| **Notion Onboarding** | Product Design | Starter Kits and dynamic checklists to eliminate beginner friction |
| **IRCTC Redesign** | UX Redesign | Heuristic-based passenger flows optimization for speed, clarity, and trust |
| **Webtoon Redesign** | UI/UX | High-fidelity Next.js prototype fixing navigation and layout issues |
| **SilverWall Telemetry** | Data & Analytics | Real-time F1 telemetry engine with AI driver analysis |
| **The Terminal** | Systems | Browser-based Linux OS with VFS, gamification, and labs |
| **Evolution Atlas** | Creative Coding | GLSL shader experiments tracing design history |
| **SVG Forge** | Developer Tooling | Interactive SVG animation sandbox and reference |
| **Solar Core** | Physics Sim | Photorealistic WebGL planetary simulator |

## 🌐 Deployment

This project auto-deploys to GitHub Pages via the included workflow on every push to `main`.

To deploy manually:
```bash
npm run build
# The `dist/` directory is the deployable output
```

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## ✉️ Contact

**Pushan Bhattacharyya**

- Email — [bhattacharyyapushan@gmail.com](mailto:bhattacharyyapushan@gmail.com)
- GitHub — [@Ashborn-047](https://github.com/Ashborn-047)
- LinkedIn — [Pushan Bhattacharyya](https://www.linkedin.com/in/pushan-bhattacharyya-40b718287/)
