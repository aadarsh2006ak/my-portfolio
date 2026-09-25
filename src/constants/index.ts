import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

// Declare module for asset imports when type declarations are not present
declare module "../assets";

import {
  enterpriseAssetMgmt,
  jiraLite,
  smartDocAnalyzer,
  html5,
  uptoskills,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  springboot,
  postgresql,
  redis,
  mongodb,
  java1,
  git,
  docker,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "SDE / Java Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack MERN Developer",
    icon: web,
  },
  {
    title: "Real-Time & Distributed Systems",
    icon: mobile,
  },
  {
    title: "AI & Cloud Integrator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: java1,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Development Journey",
    companyName: "Foundation & Personal Projects",
    icon: html5,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Started web engineering journey by building responsive, accessible web interfaces using HTML5, CSS3, and modern JavaScript (ES6+).",
      "Developed UI-intensive projects including Amazon Clone, Netflix Clone, Calculator, and interactive web applications.",
      "Mastered DOM manipulation, modern layout architectures (Flexbox/Grid), component state lifecycles, and clean code practices.",
      "Established a strong problem-solving and algorithmic foundation before transitioning into full-stack backend systems."
    ],
  },
  {
    title: "Full Stack & Cloud Internships",
    companyName: "UptoSkills • Intern Infobyte • IBM SkillBuild",
    icon: uptoskills,
    iconBg: "#1d1836",
    date: "May 2026 – August 2026",
    points: [
      "Candidate Lifecycle Architecture (UptoSkills): Engineered modular recruitment & candidate lifecycle backend services in Node.js, Express.js, and PostgreSQL, integrating 15+ secured RESTful APIs with JWT auth.",
      "Status Sync Problem Solved: Resolved a critical cross-module candidate status synchronization issue across recruitment drives, interviews, and company dashboards via centralized lifecycle state handlers.",
      "Production Web Applications (Intern Infobyte): Developed production-ready MERN applications including E-Commerce, Weather, and Task Management systems with MongoDB data persistence and clean Git workflows.",
      "Generative AI & Cloud Workflows (IBM): Explored Generative AI, prompt engineering, and LLM APIs to build intelligent application prototypes with scalable cloud deployment practices."
    ],
  },
  {
    title: "Real-Time & Distributed Systems Engineering",
    companyName: "Jira-Lite Platform — High-Concurrency Workspace",
    icon: nodejs,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Ordering Bottleneck Solved: Eliminated the O(N) database write storm during drag-and-drop Kanban task reordering (which updated 49 rows per drop) by engineering O(1) Fractional Midpoint Indexing, slashing DB writes by 98% (49 → 1) and server latency by 90.5% (~9.9 ms).",
      "Cross-Instance Sync via Redis: Architected real-time WebSocket communication using Redis Pub/Sub to broadcast multi-room task state changes (<1 KB payloads) across scaled server instances.",
      "Conflict Prevention & Security: Implemented Optimistic Concurrency Control (OCC) to eliminate multi-user race conditions, paired with rotating refresh cookies, HTTP-only JWTs, and 89 automated tests."
    ],
  },
  {
    title: "Enterprise Backend & High-Concurrency Systems",
    companyName: "Enterprise Asset Management Platform — Java & Spring Boot",
    icon: springboot,
    iconBg: "#1d1836",
    date: "2026",
    points: [
      "Race Condition & Overbooking Solved: Eliminated phantom double-bookings and data corruption during simultaneous asset reservations by implementing Optimistic Concurrency Control with JPA @Version locking.",
      "Distributed Rate Limiting & Crash Resilience: Integrated Redis Token Bucket Rate Limiting to prevent API abuse during traffic surges, maintaining zero degraded endpoints.",
      "High-Concurrency Load Testing: Validated enterprise resilience with Apache JMeter, sustaining 51,000 requests at 263.92 req/s with 0% errors (21.40 ms avg latency, 0.995 APDEX).",
      "Cloud Observability: Deployed Prometheus and Grafana dashboards for real-time JVM metrics, DB connection pool health, and latency monitoring in production."
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Enterprise Employee & Asset Management System — RBAC",
    description:
      "A production-grade, crash-resilient Enterprise Asset & Workforce Management Platform built with Java, Spring Boot 3, React 18, PostgreSQL 15, Redis 7, Distributed Rate Limiting, Optimistic Concurrency Control (@Version), and AWS Cloud Observability (Prometheus & Grafana). Load-tested with 51,000 requests at 263.92 req/s with 0% errors (21.40 ms avg latency, 0.995 APDEX).",
    tags: [
      {
        name: "Spring Boot 3",
        color: "green-text-gradient",
      },
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL 15",
        color: "pink-text-gradient",
      },
      {
        name: "Redis 7",
        color: "orange-text-gradient",
      },
      {
        name: "AWS & Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Grafana & Prometheus",
        color: "green-text-gradient",
      },
      {
        name: "Apache JMeter",
        color: "pink-text-gradient",
      },
    ],
    image: enterpriseAssetMgmt,
    sourceCodeLink:
      "https://github.com/aadarsh2006ak/Enterprise-Employee-Asset-Mgmt.-Sys.-RBAC-.git",
    liveDemoLink: "http://65.1.91.228/login",
  },
  {
    name: "Real-Time Collaborative Workspace — Jira-Lite Kanban Tracker",
    description:
      "A high-concurrency, enterprise-grade real-time collaborative Kanban project management platform engineered with React 18, Node.js, Express.js, Redux Toolkit, Socket.io, Redis Pub/Sub, and PostgreSQL. Implements O(1) fractional midpoint indexing reducing DB writes by 98% (49 → 1) and server latency by 90.5% (~9.9 ms), multi-room sync (<1 KB broadcast), OCC conflict prevention, short-lived JWTs with rotating refresh cookies, and 89 automated tests.",
    tags: [
      {
        name: "React 18 & Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js & Express",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Redis Pub/Sub",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker & Nginx",
        color: "blue-text-gradient",
      },
    ],
    image: jiraLite,
    sourceCodeLink:
      "https://github.com/aadarsh2006ak/Real-Time-Collaborative-Workspace-Kanban-Tracker-Jira-Lite-.git",
    liveDemoLink: "https://jira-lite-client.onrender.com",
  },
  {
    name: "AI-Powered Smart Document & Report Analyzer",
    description:
      "An enterprise-grade, asynchronous document intelligence & RAG platform featuring multi-format ingestion (PDF/DOCX/Images/XLSX), BullMQ & Redis distributed worker pipelines, SHA-256 deduplication cache (<15 ms, 99.9% duplicate latency reduction), dual-LLM pipeline (Google Gemini + Groq with Zod validation), citation-backed RAG engine, and Docker Compose deployment.",
    tags: [
      {
        name: "React 18 & Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js & Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB Atlas",
        color: "green-text-gradient",
      },
      {
        name: "Redis & BullMQ",
        color: "orange-text-gradient",
      },
      {
        name: "Google Gemini & Groq",
        color: "pink-text-gradient",
      },
      {
        name: "RAG & Citations",
        color: "blue-text-gradient",
      },
    ],
    image: smartDocAnalyzer,
    sourceCodeLink:
      "https://github.com/aadarsh2006ak/Ai-Powered-Smart-Documentation-Report-Analyzer.git",
    liveDemoLink: "https://smartdoc-analyzer-ui.onrender.com",
  },
];

export { services, technologies, experiences, projects };
