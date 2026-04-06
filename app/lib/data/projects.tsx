export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Acme Web Store",
    description:
      "E-commerce platform built with the PERN stack, offering a streamlined shopping experience, secure Stripe payments, and scalable features for the future of online retail.",
    image: "/images/project-1.png",
    githubUrl: "https://github.com/chee86j/acme-web-store",
    demoUrl: "https://acme-web-store.up.railway.app/",
  },
  {
    id: 2,
    title: "Reel Relations",
    description:
      "PERN stack app that explores degrees of separation using a BFS algorithm for efficient pathfinding through a graph of Actors and Movies.",
    image: "/images/project-2.png",
    githubUrl: "https://github.com/chee86j/Reel_Relations2-JeffRender",
    demoUrl: "https://reelrelations.up.railway.app/",
  },
  {
    id: 3,
    title: "Tetris Beats TS",
    description:
      "A modern Tetris clone that harmonizes classic gameplay with a rich audio-visual experience. Features customizable themes, dynamic audio-visual synergy, and draggable controls.",
    image: "/images/project-3.png",
    githubUrl: "https://github.com/chee86j/Tetris-Beats-TS",
    demoUrl: "https://ts-tetris.onrender.com",
  },
  {
    id: 4,
    title: "Manny's Seamless Gutters",
    description:
      "Contracted Lead Generation job for a Seamless Gutter Contractor with Feature Rich Admin Interface for Managing Leads, Quotes, User Interactions & P&L Statements streamlining Business Ops with Integrated DB Management & Real-Time Updates.",
    image: "/images/project-4v2.png",
    demoUrl: "https://mannysseamlessgutters.up.railway.app/",
  },
  {
    id: 5,
    title: "JS Foreclosure Scraper",
    description:
      "Automated REO Foreclosure Data Aggregation Tool with Enhanced Investment Analysis Dashboard for Real Estate Investors featuring Personalized Property Tracking, Financial Metrics Calculation & Interactive Visualization enabling Data-Driven Decision Making with Continuous Market Monitoring For Northern New Jersey.",
    image: "/images/project-5.png",
    githubUrl: "https://github.com/chee86j/JSForeclosureScraper",
    demoUrl: "https://jsforeclosurescraper-production.up.railway.app/",
  },
];
