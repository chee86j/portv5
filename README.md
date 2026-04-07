# Welcome to Jeffrey Chee's Portfolio v5.0

## Dive Into My Digital World

Welcome to my personal corner on the web! I'm thrilled to present my portfolio, a reflection of my journey and skills in software development. This isn't just a website; it's a statically generated site built with Next.js 16 and the App Router, a testament to modern design and my commitment to responsive, accessible, interactive user experiences. From my Profile to Projects, every section is crafted to tell my story.

## Why You'll Love This Portfolio

- **Seamlessly Responsive**: Whether you're on a phone, tablet, or desktop, my portfolio adapts for the perfect fit.
- **Dark Mode Delight**: System-aware dark mode with manual override, because who doesn't love options?
- **Engage and Interact**: Dive into a world where every scroll and hover feels purposeful, thanks to scroll-triggered fade-ins and 3D tilt effects powered by Motion.
- **SEO Ready**: Fully pre-rendered static HTML with content that is indexable by search engines without JavaScript.
- **Reduced Motion Respect**: Animations automatically scale back for users who prefer less motion.

## Tech Stack - The Backbone of My Portfolio

- **Next.js 16** (App Router): Server-first rendering with static generation.
- **TypeScript 5**: Strict, fully typed throughout.
- **Tailwind CSS v4**: Utility-first styling with CSS-variable theming.
- **Motion**: Scroll animations and 3D tilt effects with reduced-motion support.
- **next-themes**: System-aware dark mode.
- **react-icons v5**: Tree-shakeable icon library.

## Featured Projects - My Digital Craftsmanship

Several key projects are showcased and more will be added in the future, demonstrating a range of skills and technologies. Below are some of the highlighted projects:

### JS Foreclosure Scraper

- **Description**: Automated REO Foreclosure Data Aggregation Tool with Enhanced Investment Analysis Dashboard for Real Estate Investors. Features Personalized Property Tracking, Financial Metrics Calculation, and Interactive Visualization enabling data-driven decision making with continuous market monitoring for Northern New Jersey.
- **Technologies**:
  - **Frontend**: React 19, TypeScript, TailwindCSS, Motion
  - **Backend**: Node.js, Express, PostgreSQL, Sequelize ORM
- **Links**: [GitHub](https://github.com/chee86j/JSForeclosureScraper) | [Live Demo](https://jsforeclosurescraper-production.up.railway.app/)

### Acme Web Store

- **Description**: Developers will find Acme Web Store a powerful platform to build exceptional e-commerce solutions. Leveraging the cutting-edge PERN stack, the app offers a scalable foundation and seamless integration with essential services like Stripe for secure payments.
- **Technologies**: PostgreSQL, Express.js, React, Node.js, TailwindCSS, DaisyUI, Stripe API.
- **Links**: [GitHub](https://github.com/chee86j/acme-web-store) | [Live Demo](https://acme-web-store.up.railway.app/)

### Reel Relations

- **Description**: Developed using the robust PERN stack, Reel Relations explores degrees of separation with a Breadth-First Search algorithm for fast and optimized graph traversal.
- **Technologies**: PostgreSQL, Express.js, React, Node.js, TailwindCSS.
- **Links**: [GitHub](https://github.com/chee86j/Reel_Relations2-JeffRender) | [Live Demo](https://reelrelations.up.railway.app/)

### Tetris Beats TS

- **Description**: Step into the captivating realm of Tetris Beats TS, a unique twist on the legendary Tetris game, crafted using React and TypeScript with a strong audio-visual focus.
- **Technologies**: TypeScript, React.
- **Links**: [GitHub](https://github.com/chee86j/Tetris-Beats-TS) | [Live Demo](https://ts-tetris.onrender.com)

### Manny's Seamless Gutters

- **Description**: A contract project to develop a full-stack lead generation site for a gutter contractor, featuring a feature-rich admin interface for managing leads, job quotes, admin user interactions, and P&L statements.
- **Technologies**: PostgreSQL, Express.js, React, Node.js, TailwindCSS, DaisyUI.
- **Links**: [Live Demo](https://mannysseamlessgutters.up.railway.app/)

Each project incorporates responsive design and interactive elements, ensuring a user-friendly experience across various devices.

## Setup and Installation

1. **Install Dependencies**:

- Install Node.js and npm.
- Run `npm install` to install all dependencies.

2. **Run the Application**:

- Run `npm run dev` to start the development server.
- Visit `http://localhost:3000` to view the local development server.

3. **Build for Production**:

- Run `npm run build` to generate the static production build.
- The deployable output is generated in the `out/` directory.

4. **Preview the Static Build Locally**:

- Run `npm run build` first.
- Run `npx serve@latest out` to serve the exported static site locally.

## Static Export

This project is configured for static export in [next.config.ts](next.config.ts):

- `output: "export"`
- `images.unoptimized: true`

Running `npm run build` generates a deployable static site in the `out/` directory.

## Render Static Site Settings

- Repository: `https://github.com/chee86j/portv5`
- Build Command: `npm run build`
- Publish Directory: `out`

## ASCII File Structure Plan

Visual map of the repo:

```text
portv5/
|-- app/
|   |-- components/
|   |   |-- providers/
|   |   |   `-- ThemeProvider.tsx
|   |   |-- sections/
|   |   |   |-- About.tsx
|   |   |   |-- Contact.tsx
|   |   |   |-- Experience.tsx
|   |   |   |-- Footer.tsx
|   |   |   |-- Navbar.tsx
|   |   |   |-- Profile.tsx
|   |   |   `-- Projects.tsx
|   |   `-- ui/
|   |       |-- DarkModeToggler.tsx
|   |       |-- FadeInSection.tsx
|   |       |-- Loader.tsx
|   |       `-- TiltCard.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- lib/
|   |   `-- data/
|   |       |-- projects.tsx
|   |       `-- skills.tsx
|   `-- page.tsx
|-- public/
|   |-- icons/
|   |   `-- pytest.svg
|   `-- images/
|       |-- about-pic.jpg
|       |-- profile-pic.jpg
|       |-- project-1.png
|       |-- project-2.png
|       |-- project-3.png
|       |-- project-4v2.png
|       `-- project-5.png
|-- next.config.ts
|-- package.json
`-- README.md
```
