# Ajmal Riswan — Software Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://mohamad-ajmal.vercel.app)

A modern, high-performance portfolio engineered for **Ajmal Riswan**, a Software Engineering graduate from Sri Lanka specializing in backend systems, RESTful API engineering, .NET, Node.js, and relational database architecture.

Live Demo: **[mohamad-ajmal.vercel.app](https://mohamad-ajmal.vercel.app)**

---

## Key Features

- **Cyberpunk Glassmorphism Design System**: Deep dark palette (`#09090B`), subtle neon red accents (`#D81E28`), frosted glass containers with backdrop blur, specular reflections, and ambient particle micro-animations.
- **Adaptive Responsive Layout (Mobile, Tablet, Laptop, PC)**:
  - **Laptops & PCs ($\ge$ 1024px)**: Full floating desktop navbar with inline links and horizontal pinned GSAP scroll for projects.
  - **Mobile & Tablets ($<$ 1024px)**: Automatically switches to an animated **Cyberpunk Hamburger Menu** with body scroll lock, ESC handling, quick CTAs, and a clean vertical project stack.
- **Interactive Cyberpunk Cursor**: GPU-accelerated interactive magnetic tracking cursor (automatically disabled on touch devices).
- **Emerald Green Typewriter Animation**: Dynamic role typewriter with glowing cursor showcasing key competencies (`Software Developer`, `Mobile Application Developer`, `Web Apps Developer`, `Backend & API Engineer`).
- **Live Local Time Indicator**: Dynamic real-time clock displaying Sri Lanka Standard Time (UTC+5:30) with pulsing status badge (`● Open to new roles`).
- **Curated Technical Stacks Matrix**: 5 domain categories with SVG icons and frosted glass tiles.
- **Featured Project Showcase**: 5 production-grade case studies with direct verified GitHub repository links:
  1. **NWSDB Service-Oriented System** — Water billing and third-party payment API integration with C#, .NET, Entity Framework Core, SQL Server, and Scalar.
  2. **PrintXpress** — Native Android application for print customization, order management, and live job tracking with Java and Firebase.
  3. **OCODR: One Citizen, One Digital Record** — Centralized zero-trust national digital identity core with 10 RBAC tiers, cryptographic audit logs, and JWT/bcrypt on Node.js & MySQL.
  4. **GlobeTrek: Tourism Travel Management** — Web platform for travel package browsing, reservations, and admin catalog management with PHP and MySQL on XAMPP.
  5. **GreenBasketGUI: Shop Stock Management System** — Object-oriented Java desktop application with GUI forms and automated stock threshold alerts.
- **Academic Qualifications (Education)**: Glassmorphism credential panel with Cardiff Metropolitan University (UK) / ICBT Kandy and G.C.E. Advanced Level milestones.
- **Recruiter Contact Hub**: Direct email copy trigger, one-click "Copy Recruiter Summary" clipboard action, LinkedIn, GitHub, and pre-filled mail client form.
- **Interactive CV Viewer**: Integrated modal for instant PDF review and direct download.
- **SEO & Structured Data**: Dynamic OpenGraph cards, Twitter cards, XML sitemap, `robots.txt`, and Schema.org JSON-LD structured metadata (`Person` and `CreativeWork`).

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & CSS Variables |
| **Motion & Scroll** | [GSAP 3](https://greensock.com/gsap/) (ScrollTrigger) & [Lenis](https://github.com/darkroomengineering/lenis) (Smooth Scroll) |
| **Typography** | `Bebas Neue` (Display), `Caveat` (Script), `Space Grotesk` (Tech), `JetBrains Mono` (Code), `Plus Jakarta Sans` (Body) via `next/font` |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Project Structure

```text
├── app/
│   ├── layout.tsx                # Root layout, fonts, SEO metadata, background canvas, cursor
│   ├── page.tsx                  # Home page: Hero, Skills, Projects, Education, Contact
│   ├── projects/[slug]/page.tsx  # Dynamic architectural case studies with JSON-LD
│   ├── sitemap.ts                # Metadata route generating XML sitemap
│   └── robots.ts                 # Metadata route generating robots.txt
├── components/
│   ├── Header.tsx                # Adaptive floating navbar with mobile/tablet hamburger drawer
│   ├── Hero.tsx                  # Hero section with portrait frame, live time, emerald typewriter
│   ├── Skills.tsx                # 5 domain tech stack grid with frosted glass SVG tiles
│   ├── ProjectsScroll.tsx        # Horizontal pinned scroll on desktop, vertical stack on mobile
│   ├── ProjectCard.tsx           # Project preview card with GitHub button & tech tags
│   ├── Education.tsx             # Academic credentials with GSAP ScrollTrigger blur entrance
│   ├── Contact.tsx               # Recruiter hub, copy email action, contact form
│   ├── Footer.tsx                # Frosted glass footer with centered social buttons
│   ├── CvModal.tsx               # PDF curriculum vitae modal viewer & direct download
│   ├── BackgroundAnimation.tsx   # Ambient particle canvas & tech loop video
│   ├── CustomCursor.tsx          # Cyberpunk tracking cursor with pointer-event detection
│   ├── Reveal.tsx                # Reusable GSAP ScrollTrigger reveal component
│   └── SmoothScrollProvider.tsx  # Lenis + GSAP ticker synchronization
├── lib/
│   ├── projects.ts               # Strongly typed data for all 5 verified projects
│   └── motion.ts                 # GSAP ScrollTrigger & Lenis configuration
├── public/
│   ├── Ajmal_Riswan_CV.pdf       # Verified Curriculum Vitae document
│   ├── icons/skills/             # SVG icons for tech stack matrix
│   └── images/
│       ├── mohammad_ajmal_isolated.png # Ajmal Riswan portrait photograph
│       ├── ocodr-preview.png     # OCODR project screenshot
│       └── projects/             # Architectural preview screenshots
├── styles/
│   └── globals.css               # Design system tokens, SVG grain overlay, keyframes
└── README.md
```

---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v20+ or v24 LTS recommended)
- `npm` (v10+)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AjmalRizz/portfolio.git
cd portfolio
npm install
```

### 3. Environment Configuration

Create a local environment file `.env.local`:

```bash
cp .env.example .env.local
```

Configure your site URL:

```env
NEXT_PUBLIC_SITE_URL=https://mohamad-ajmal.vercel.app
```

### 4. Running the Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Building for Production

Compile TypeScript and build the optimized production output:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

---

## Deployment to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push your repository to GitHub: `https://github.com/AjmalRizz/portfolio`.
2. Navigate to [vercel.com](https://vercel.com) and click **Add New...** → **Project**.
3. Select your repository and configure the environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://mohamad-ajmal.vercel.app`
4. Click **Deploy**. Vercel will build the application using Next.js 16.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

---

## Contact & Connect

- **Name**: Ajmal Riswan
- **Role**: Software Developer (Backend, REST APIs, Web & Mobile)
- **Location**: Kandy, Sri Lanka (Open to Relocation & Remote Roles)
- **Email**: [mohammadajmal8767@gmail.com](mailto:mohammadajmal8767@gmail.com)
- **LinkedIn**: [linkedin.com/in/ajmal-rm](https://linkedin.com/in/ajmal-rm)
- **GitHub**: [github.com/AjmalRizz](https://github.com/AjmalRizz)
- **Portfolio**: [mohamad-ajmal.vercel.app](https://mohamad-ajmal.vercel.app)

---

Built with ❤️ by **Ajmal Riswan** © 2026.
