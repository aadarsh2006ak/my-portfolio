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
    title: "Aadarsh — Portfolio",
    fullName: "Aadarsh",
    email: "Kumar869645@gmail.com",
  },
  hero: {
    name: "Aadarsh",
    p: ["Develop interactive user interfaces,", "real-time systems, and dynamic web applications."],
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
      content: `Hi, I’m Aadarsh Kumar, a passionate 2nd-year B.Tech Computer Science and Engineering student focused on building modern and impactful software solutions. I enjoy developing interactive web applications and exploring technologies such as Java, React.js, MySQL, Firebase, and modern frontend frameworks. My projects include real-world applications featuring dynamic user experiences, real-time functionality, and scalable design. Alongside development, I continuously strengthen my Data Structures & Algorithms skills and explore emerging technologies to expand my technical expertise. I’m currently seeking internship opportunities to apply my skills, solve meaningful problems, and grow as a software engineer.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
