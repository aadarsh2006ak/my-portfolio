type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aadarsh — SDE & Full Stack Developer",
    fullName: "Aadarsh",
    email: "kumar869645@gmail.com",
  },
  hero: {
    name: "Aadarsh",
    p: [
      "SDE / Java Developer & Full Stack Developer specializing in Java, Spring Boot, and MERN architectures.",
      "Engineering scalable, high-concurrency, and production-grade systems.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Full Stack Developer and Computer Science undergraduate 3rd YEAR (2024–2028 at Ganga Institute of Technology & Management) specializing in Java, Spring Boot, and MERN architectures. Proven track record of engineering scalable, secure backend systems, highlighted by building an enterprise RBAC platform that sustained 51,000+ API requests with a 0.995 APDEX and 0% error rate. Strong foundation in Data Structures & Algorithms, PostgreSQL/MongoDB database design, and modern DevOps practices (Docker, Prometheus, Grafana) to deliver high-performance, production-ready software.`,
    },
    experience: {
      p: "Engineering Evolution & Milestones",
      h2: "Experience & Journey.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects demonstrate my expertise in building high-concurrency distributed systems, production-grade enterprise backends, and AI-powered document intelligence platforms. Each project includes GitHub source code, live deployment links, and detailed metrics.`,
    },
  },
};

export const socialLinks = {
  github: "https://github.com/aadarsh2006ak",
  linkedin: "https://www.linkedin.com/in/aadarsh-kumar-646361335",
  instagram: "https://www.instagram.com/aadarsh_2006_ak",
  leetcode: "https://leetcode.com/u/aadarsh_2026/",
  email: "mailto:kumar869645@gmail.com",
  phone: "+91-8595814064",
  location: "Delhi, India",
};

