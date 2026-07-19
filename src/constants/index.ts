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
  placementhub,
  chatbot,
  avatarGenerator,
  medicalReportAnalyzer,
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
    id: "projects",
    title: "Projects"
  },
  {
    id: "work",
    title: "Work",
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
    title: "Software Developer",
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
    title: "Software Developer (Core Java)",
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
    name: "AI Placement Hub",
    description:
      "A complete AI-powered placement preparation platform where students can practice coding, generate resumes, prepare for interviews, receive AI career guidance and manage placement activities through a secure MERN-based dashboard.",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
    ],

    image: placementhub,

    sourceCodeLink: "https://github.com/aadarsh2006ak/Ai-placementHub.git",
  },
  {
    name: "AI Powered Custom Chatbot",
    description:
      "An intelligent chatbot capable of answering user queries using advanced LLM APIs with conversation history, secure authentication and responsive UI.",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],

    image: chatbot,

    sourceCodeLink: "https://github.com/aadarsh2006ak/Ai-chatBot.git",
  },
  {
    name: "AI Avatar Generator",
    description:
      "An AI application that generates high-quality custom avatars from user prompts with image generation APIs, authentication and cloud image storage.",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
    ],

    image: avatarGenerator,

    sourceCodeLink: "https://github.com/aadarsh2006ak/Avatar-Generator.git",
  },
  {
    name: "AI Medical Report Analyzer",
    description:
      "A smart healthcare application that analyzes uploaded medical reports using Generative AI and provides simplified health summaries, risk indicators and recommendations.",

    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "blue-text-gradient",
      },
    ],

    image: medicalReportAnalyzer,

    sourceCodeLink: "https://github.com/aadarsh2006ak/Medical-report-analyzer.git",
  },
];

export { services, technologies, experiences, projects };
