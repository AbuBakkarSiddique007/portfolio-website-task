# Mazidul Hakim — IT Leadership & Cybersecurity Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-38bdf8?style=flat&logo=netlify)](https://mazidul-hakim-portfolio.netlify.app/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat&logo=vercel)](https://portfolio-website-nu-one-49.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub_Repo-AbuBakkarSiddique007%2Fportfolio--website--task-181717?style=flat&logo=github&logoColor=white)](https://github.com/AbuBakkarSiddique007/portfolio-website-task)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance executive portfolio website built for **Mazidul Hakim** (Senior IT Leader &bull; Cloud &bull; Cybersecurity). Designed with a sleek dark aesthetic, subtle glow accents, interactive micro-animations, interactive alert feedback, and smooth navigation.

---

## 🔗 Live URLs

- **▮ Netlify**: [https://mazidul-hakim-portfolio.netlify.app/](https://mazidul-hakim-portfolio.netlify.app/)
- **▲ Vercel**: [https://portfolio-website-nu-one-49.vercel.app/](https://portfolio-website-nu-one-49.vercel.app/)
- **💻 GitHub Repository**: [https://github.com/AbuBakkarSiddique007/portfolio-website-task](https://github.com/AbuBakkarSiddique007/portfolio-website-task)

---

## 🌟 Key Features & Sections

- **⚡ Modern Dark Theme & Glassmorphism**: Tailored dark-mode UI with radial ambient glows, crisp typography (`Inter`, `Manrope`, `IBM Plex Mono`), and frosted-glass sticky navigation with active scroll tracking.
- **🌐 Global Presence Interactive Map**: Custom SVG-based visualization in the Hero section mapping multi-region leadership (Singapore HQ, Australia, India, Philippines, New Zealand).
- **🚀 Animated Marquee**: Fluid ticker highlighting core specializations, platforms, and leadership domains.
- **👤 About & Background**: In-depth executive bio focusing on turning IT functions around, modernizing infrastructure, and security posture uplifts.
- **🛠️ Core Expertise**: Clean grid showcasing technical proficiencies across Cloud Infrastructure, Cybersecurity / SOC, IT Governance, and Enterprise Modernization.
- **💼 Case Files / Impact**: Featured transformation stories and high-impact enterprise project breakdowns.
- **📈 Career Experience**: Detailed interactive timeline showcasing 17+ years of senior leadership roles and career milestones.
- **📜 Professional Certificates**: Certificate gallery and credentials showcase.
- **🎓 Professional Qualifications**: Formal academic degrees and diplomas with interactive hover states.
- **📬 Interactive Contact Form**: Functional contact form with SweetAlert2 dark-themed modals and direct contact links (Email, LinkedIn).
- **🧭 Responsive Navigation & Footer**: Smooth section scrolling with sticky header and mobile navigation drawer.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router & Turbopack) |
| **Library** | [React 19](https://react.dev) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + Custom CSS Variables |
| **Animations** | CSS animations + `IntersectionObserver` (scroll-reveal) |
| **Notifications** | [SweetAlert2](https://sweetalert2.github.io/) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Typography** | `Inter`, `Manrope`, and `IBM Plex Mono` (via `next/font/google`) |
| **Package Manager** | [pnpm](https://pnpm.io) |
| **Deployment** | [Vercel](https://vercel.com) &bull; [Netlify](https://netlify.com) |

---

## 📂 Project Structure

```text
portfolio-website-task/
├── public/
│   └── assets/                  # Certificates, qualifications, and media assets
├── src/
│   ├── app/
│   │   ├── globals.css          # Global theme styles & smooth scroll config
│   │   ├── layout.tsx           # Root layout with font definitions & Navbar
│   │   └── page.tsx             # Main landing page assembling all sections
│   └── components/
│       ├── about.tsx            # Executive bio & summary
│       ├── casefiles.tsx        # Project case studies & transformation records
│       ├── certificates.tsx     # Certifications grid & badges
│       ├── contact.tsx          # Contact form with SweetAlert2 notifications
│       ├── experience.tsx       # Career trajectory timeline
│       ├── expertise.tsx        # Core technical & leadership capabilities
│       ├── footer.tsx           # Footer navigation & copyright
│       ├── hero.tsx             # Hero section with interactive node map
│       ├── lazy-section.tsx     # Lazy-loaded section wrapper for below-fold content
│       ├── marquee.tsx          # Animated ticker
│       ├── navbar.tsx           # Glassmorphic responsive navigation with scrollspy
│       └── qualifications.tsx   # Academic qualifications & diplomas
├── netlify.toml                 # Netlify deployment configuration
├── vercel.json                  # Vercel deployment & security headers config
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/) (v10+ recommended) or `npm` / `yarn` / `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbuBakkarSiddique007/portfolio-website-task.git
   cd portfolio-website-task
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server with hot-reload |
| `pnpm build` | Creates an optimized production build |
| `pnpm start` | Starts the Next.js production server |
| `pnpm lint` | Runs ESLint to check for code quality and syntax errors |

---

## 🚀 Deployment

The site is deployed on two platforms:

### Vercel

Deploy via the Vercel CLI using `pnpm`:

```bash
# Preview deployment
pnpm dlx vercel

# Production deployment
pnpm dlx vercel --prod
```

### Netlify

Deploy the static export via the Netlify CLI:

```bash
# Build the static export
NETLIFY=true pnpm build

# Production deployment
pnpm dlx netlify deploy --dir out --prod
```

---

## 📄 License

This project is personal and proprietary. All rights reserved.
