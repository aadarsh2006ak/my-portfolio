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
  ibm,
  interninfobyte,
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
    title: "Full Stack Developer Intern",
    companyName: "UptoSkills",
    icon: uptoskills,
    iconBg: "#383E56",
    date: "May 2026 - August 2026",
    points: [
      "Completed a 3-month Full Stack Development internship focused on the MERN Stack.",
      "Built a production-ready E-Commerce platform with authentication, cart, payment gateway and admin dashboard.",
      "Developed Weather App, Movie Recommendation System and Todo Application using React and REST APIs.",
      "Worked on backend APIs using Node.js, Express.js and MongoDB following industry-standard coding practices."
    ],
  },
  {
    title: "Generative AI & Cloud Computing Intern",
    companyName: "IBM SkillBuild x BharatCares",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "6 Weeks Virtual Internship",
    points: [
      "Learned Generative AI, Prompt Engineering and Large Language Models (LLMs).",
      "Built AI-powered applications integrating modern GenAI tools and APIs.",
      "Explored cloud computing fundamentals, scalable architectures and deployment workflows.",
      "Collaborated with a virtual team to complete real-world AI and cloud-based projects."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    companyName: "Intern Infobyte",
    icon: interninfobyte,
    iconBg: "#E6DEDD",
    date: "May 2026 - July 2026",
    points: [
      "Worked on full-stack web application development using the MERN Stack.",
      "Designed responsive user interfaces and developed secure backend REST APIs.",
      "Implemented CRUD operations, authentication and database integration using MongoDB.",
      "Improved application performance while following clean code and Git-based version control."
    ],
  },
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
