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
  akstore,
  java,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
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
    title: "Work Experience",
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
    title: "Dynamic Frontend Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java1,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Development Journey",
    companyName: "Personal Projects",
    icon: html5,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Started web development by building responsive websites using HTML, CSS and JavaScript.",
      "Developed Amazon Clone, Netflix Clone, Calculator and multiple UI-based projects.",
      "Learned responsive layouts, DOM manipulation, ES6 concepts and modern frontend practices.",
      "Built a strong foundation before moving into full-stack development."
    ],
  },
  {
    title: "Full Stack Development, Generative AI & Cloud Computing Intern",
    companyName: "UptoSkills • Intern Infobyte • IBM SkillBuild x BharatCares",
    icon: uptoskills,
    iconBg: "#383E56",
    date: "May 2026 - August 2026",
    points: [
      "Completed Full Stack Development internships with UptoSkills and Intern Infobyte, gaining hands-on experience in building modern MERN Stack applications.",
      "Developed production-ready web applications including an E-Commerce Platform, Weather App, Movie Recommendation System, and Todo Application using React.js, Node.js, Express.js, MongoDB, and REST APIs.",
      "Implemented authentication, CRUD operations, payment gateway integration, admin dashboard, responsive UI, and secure backend architecture following industry-standard coding practices.",
      "Completed a 6-week Generative AI & Cloud Computing Virtual Internship with IBM SkillBuild x BharatCares, learning Prompt Engineering, Large Language Models (LLMs), cloud computing fundamentals, and AI application development.",
      "Worked with Git-based version control, scalable application architecture, API integration, and collaborative software development practices across multiple internship projects."
    ],
  },
  {
    title: "Full Stack MERN Developer",
    companyName: "AK Store (Personal Project)",
    icon: akstore, 
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Designed and developed a production-ready E-Commerce platform using the MERN Stack with a modern and responsive user interface.",
      "Implemented secure JWT authentication, role-based admin dashboard, product management, shopping cart, order management, and RESTful APIs.",
      "Integrated online payment gateways, Cloudinary image storage, and MongoDB database while following industry-standard backend architecture.",
      "Optimized application performance, implemented protected routes, and deployed the full-stack application for real-world usage using modern deployment platforms."
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Tech Internship Skill Portal (Core Java Project)",
    icon: java, 
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Developed a console-based Internship & Skill Portal using Core Java, applying Object-Oriented Programming (OOP) principles including Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      "Implemented user authentication, internship management, skill tracking, and role-based functionalities using Java collections, methods, and control flow.",
      "Designed a modular application architecture with reusable classes, packages, and exception handling to improve maintainability and code quality.",
      "Strengthened Core Java concepts such as classes, objects, constructors, interfaces, file handling, collections framework, and object-oriented design through a real-world project."
    ],
  }
];

const projects: TProject[] = [
  {
    name: "Enterprise Employee & Asset Management System (RBAC)",
    description:
      "A production-grade, crash-resilient Enterprise Asset & Workforce Management Platform built with Spring Boot 3, React 18, PostgreSQL 15, Redis 7, Distributed Rate Limiting, Optimistic Concurrency Control (@Version), and AWS Cloud Observability (Prometheus & Grafana).",
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
    ],
    image: enterpriseAssetMgmt,
    sourceCodeLink:
      "https://github.com/aadarsh2006ak/Enterprise-Employee-Asset-Mgmt.-Sys.-RBAC-.git",
    liveDemoLink: "http://65.1.91.228/login",
  },
  {
    name: "Jira-Lite — Real-Time Collaborative Kanban Workspace",
    description:
      "A high-concurrency, enterprise-grade real-time collaborative Kanban project management platform engineered with MERN stack, Socket.io, Redis Pub/Sub, O(1) Fractional Indexing, 0ms Optimistic UI updates, and Optimistic Concurrency Control (OCC).",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
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
        name: "React 18 & Redux",
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
    ],
    image: jiraLite,
    sourceCodeLink:
      "https://github.com/aadarsh2006ak/Real-Time-Collaborative-Workspace-Kanban-Tracker-Jira-Lite-.git",
    liveDemoLink: "https://jira-lite-client.onrender.com",
  },
  {
    name: "AI-Powered Smart Document & Report Analyzer",
    description:
      "An enterprise-grade, asynchronous document intelligence & RAG platform featuring multi-format ingestion (PDF/DOCX/Images/XLSX), BullMQ & Redis distributed worker pipelines, interactive citation-backed RAG chat, SHA-256 deduplication cache (<15ms), and 6 specialized domain reasoning studios.",
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
  // Future projects will be appended here in order:
];

export { services, technologies, experiences, projects };
