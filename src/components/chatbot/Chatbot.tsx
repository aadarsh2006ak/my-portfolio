import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "../../constants/config";
import { projects, experiences } from "../../constants";

interface Message {
  role: "user" | "model";
  text: string;
}

/* =========================================================
   GEMINI SYSTEM PROMPT
========================================================= */

const SYSTEM_PROMPT = `
You are the friendly and professional AI Portfolio Assistant for Aadarsh (Aadarsh Kumar).

Your job is to answer questions about Aadarsh's portfolio, skills,
projects, education, internships, certifications, and contact information.

IMPORTANT RULES:

1. Be friendly, professional, concise, and helpful.
2. Only use the factual information provided below.
3. Never invent personal information, projects, companies, skills, or experience.
4. If asked about hiring or contacting Aadarsh, provide his email (${config.html.email}), phone (+91-8595814064), and LinkedIn / GitHub links.
5. Use bullet points when useful.
6. If a question is unrelated to Aadarsh or software engineering,
   politely redirect the user toward his portfolio, projects, skills,
   or experience.

Aadarsh's Information from Resume:

Name:
Aadarsh (Aadarsh Kumar)

Roles:
SDE / Java Developer | Full Stack Developer

Location:
Delhi, India

Contact:
Email: kumar869645@gmail.com
Phone: +91-8595814064
GitHub: https://github.com/aadarsh2006ak
LinkedIn: https://www.linkedin.com/in/aadarsh-kumar-646361335
LeetCode: https://leetcode.com/u/aadarsh_2026/
Portfolio: https://aadarsh-portfolio.vercel.app / Current Website

Education:
B.Tech (3rd Year) in Computer Science & Engineering (2024–2028)
Ganga Institute of Technology & Management

Technical Skills:
- Languages: Java, JavaScript, C++, SQL
- Backend & Security: Spring Boot, Spring Security, Spring Data JPA, Hibernate, Node.js, Express.js, REST APIs, JWT Authentication
- Frontend: React.js, Redux Toolkit, Tailwind CSS, Vite, HTML5, CSS3
- Databases & Caching: PostgreSQL, MongoDB, Redis
- Testing & Monitoring: JUnit 5, Mockito, Testcontainers, Apache JMeter, Prometheus, Grafana, Micrometer
- DevOps & Tools: Docker, Docker Compose, Git, GitHub, Maven, Postman, GitHub Actions, Nginx
- Core Fundamentals: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Concurrency & Multithreading
- AI & Cloud: LLM APIs, Gemini API, Groq API, AWS S3, Cloudinary

Certifications & Achievements:
- Hack or Crack 2.0 (CTF): Solved algorithmic & cybersecurity challenges.
- Tech4Hack — Thoughtworks: Built an AI Resume Analyzer in a team hackathon.

Work Experience:
${experiences
  .map(
    (experience) => `
- ${experience.title} at ${experience.companyName} (${experience.date})
  Responsibilities:
  ${experience.points.join(" ")}
`
  )
  .join("\n")}

Projects:
${projects
  .map(
    (project) => `
- ${project.name}
  Description: ${project.description}
  Technologies: ${project.tags
    .map((tag) => tag.name)
    .join(", ")}
  GitHub: ${project.sourceCodeLink}
  Live Demo: ${project.liveDemoLink}
`
  )
  .join("\n")}

Resume:
Available for direct download as /Aadarsh.pdf on the website.
`;

/* =========================================================
   INITIAL MESSAGE
========================================================= */

const INITIAL_MESSAGES: Message[] = [
  {
    role: "model",
    text: "Hi there! 👋 I'm Aadarsh's AI Assistant. Ask me anything about his projects, skills, experience, or how to get in touch!",
  },
];

/* =========================================================
   SUGGESTIONS
========================================================= */

const SUGGESTIONS = [
  "Tell me about Aadarsh",
  "What are his key skills?",
  "Show me his top projects",
  "How can I contact him?",
];

/* =========================================================
   COMPONENT
========================================================= */

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>(INITIAL_MESSAGES);

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const inputRef =
    useRef<HTMLInputElement>(null);

  /* =======================================================
     GEMINI API KEY

     .env:

     VITE_GEMINI_API_KEY=YOUR_API_KEY
  ======================================================= */

  const apiKey =
    import.meta.env.VITE_GEMINI_API_KEY || "";

  /* =======================================================
     SCROLL
  ======================================================= */

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const handleSendMessage = async (
    textToSend?: string
  ) => {
    const query = (textToSend || input).trim();

    if (!query || isLoading) {
      return;
    }

    /* USER MESSAGE */

    const userMessage: Message = {
      role: "user",
      text: query,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      /* ===================================================
         API KEY CHECK
      =================================================== */

      if (!apiKey) {
        throw new Error(
          "Gemini API key is missing. Add VITE_GEMINI_API_KEY to your .env file and restart the Vite server."
        );
      }

      /* ===================================================
         CONVERSATION

         Remove initial greeting.
      =================================================== */

      const conversation = updatedMessages
        .slice(1)
        .map((message) => ({
          role: message.role,
          parts: [
            {
              text: message.text,
            },
          ],
        }));

      /* ===================================================
         GEMINI API WITH SMART MODEL FALLBACK
      =================================================== */

      const candidateModels = [
        "gemini-1.5-flash",
        "gemini-2.0-flash",
        "gemini-1.5-pro",
      ];

      let response: Response | null = null;
      let data: any = null;
      let lastErrorMessage = "";

      for (const modelName of candidateModels) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": apiKey,
              },
              body: JSON.stringify({
                system_instruction: {
                  parts: [
                    {
                      text: SYSTEM_PROMPT,
                    },
                  ],
                },
                contents: conversation,
                generationConfig: {
                  maxOutputTokens: 600,
                },
              }),
            }
          );

          const resultData = await res.json();
          if (res.ok) {
            response = res;
            data = resultData;
            break;
          } else {
            lastErrorMessage =
              resultData?.error?.message || `Request failed with status ${res.status}`;
            // If it's a 404 (model not found), try next model in fallback list
            if (res.status === 404) {
              continue;
            } else {
              response = res;
              data = resultData;
              break;
            }
          }
        } catch (err: any) {
          lastErrorMessage = err?.message || "Network error";
        }
      }

      if (!response || !data) {
        throw new Error(
          lastErrorMessage || "Unable to connect to Gemini API. Please check your network connection."
        );
      }

      console.log("Gemini API Response:", data);

      /* ===================================================
         API ERROR
      =================================================== */

      if (!response.ok) {
        const apiError =
          data?.error?.message ||
          `Gemini API request failed with status ${response.status}`;

        if (
          response.status === 400 ||
          response.status === 401 ||
          apiError
            .toLowerCase()
            .includes("api key")
        ) {
          throw new Error(
            "Gemini API key is invalid or inactive. Create a new Gemini API key and update your .env file."
          );
        }

        if (response.status === 403) {
          throw new Error(
            "Gemini API access was denied. Check your API key and Gemini API access."
          );
        }

        if (response.status === 429) {
          throw new Error(
            "Gemini API rate limit reached. Please wait a moment and try again."
          );
        }

        if (response.status === 404) {
          throw new Error(
            "The selected Gemini model is unavailable for this API request."
          );
        }

        throw new Error(apiError);
      }

      /* ===================================================
         GET GENERATED TEXT
      =================================================== */

      const botReply =
        data?.candidates?.[0]?.content?.parts
          ?.map(
            (part: { text?: string }) =>
              part.text || ""
          )
          .join("") || "";

      /* ===================================================
         EMPTY RESPONSE
      =================================================== */

      if (!botReply.trim()) {
        throw new Error(
          "Gemini returned an empty response. Please try again."
        );
      }

      /* ===================================================
         BOT MESSAGE
      =================================================== */

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "model",
          text: botReply,
        },
      ]);
    } catch (error: unknown) {
      console.error(
        "Gemini Chatbot Error:",
        error
      );

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while contacting Gemini.";

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "model",
          text: `⚠️ ${errorMessage}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* =======================================================
     ENTER KEY
  ======================================================= */

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  /* =======================================================
     CLEAR CHAT
  ======================================================= */

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">

      {/* =================================================
          CHAT WINDOW
      ================================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="mb-3 sm:mb-4 flex flex-col h-[min(520px,calc(100dvh-6rem))] max-h-[540px] w-[calc(100vw-2rem)] sm:w-[360px] md:w-[390px] rounded-2xl bg-[#100d25]/95 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-900/40 overflow-hidden"
          >

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[#1d1836] to-[#151030]">

              <div className="flex items-center gap-3">

                {/* ROBOT ICON */}

                <div className="relative">

                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#915eff] to-[#00cea8] flex items-center justify-center shadow-md">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <rect
                        x="4"
                        y="7"
                        width="16"
                        height="12"
                        rx="3"
                      />

                      <path
                        strokeLinecap="round"
                        d="M9 11h.01M15 11h.01"
                      />

                      <path
                        strokeLinecap="round"
                        d="M9 15h6"
                      />

                      <path
                        strokeLinecap="round"
                        d="M12 3v4"
                      />
                    </svg>

                  </div>

                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-[#100d25]" />

                </div>

                <div>

                  <h4 className="text-[15px] font-bold text-white leading-none">
                    Aadarsh's AI Assistant
                  </h4>

                  <span className="text-[11px] text-purple-300/80 font-medium">
                    Powered by Gemini AI
                  </span>

                </div>

              </div>

              <div className="flex items-center gap-1 text-secondary">

                {/* CLEAR */}

                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Clear chat"
                  className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />

                  </svg>

                </button>

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  title="Close chat"
                  className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />

                  </svg>

                </button>

              </div>

            </div>

            {/* =================================================
                MESSAGES
            ================================================= */}

            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scroll-smooth">

              {messages.map(
                (message, index) => (

                  <div
                    key={index}
                    className={`flex flex-col ${
                      message.role === "user"
                        ? "items-end"
                        : "items-start"
                    }`}
                  >

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed break-words shadow-md ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-[#915eff] to-[#703bf7] text-white rounded-br-none"
                          : "bg-[#1d1836] text-gray-200 border border-white/10 rounded-bl-none"
                      }`}
                    >

                      <p className="whitespace-pre-wrap">
                        {message.text}
                      </p>

                    </div>

                  </div>

                )
              )}

              {/* LOADING */}

              {isLoading && (
                <div className="flex items-start">

                  <div className="bg-[#1d1836] border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 shadow-md flex items-center gap-1.5">

                    <span className="w-2 h-2 rounded-full bg-[#915eff] animate-bounce" />

                    <span
                      className="w-2 h-2 rounded-full bg-[#915eff] animate-bounce"
                      style={{
                        animationDelay:
                          "0.15s",
                      }}
                    />

                    <span
                      className="w-2 h-2 rounded-full bg-[#915eff] animate-bounce"
                      style={{
                        animationDelay:
                          "0.3s",
                      }}
                    />

                  </div>

                </div>
              )}

              {/* =================================================
                  SUGGESTIONS
              ================================================= */}

              {messages.length === 1 &&
                !isLoading && (

                  <div className="pt-2 flex flex-col gap-1.5">

                    <p className="text-[11px] font-medium text-secondary uppercase tracking-wider px-1">
                      Suggested Questions
                    </p>

                    <div className="flex flex-wrap gap-1.5">

                      {SUGGESTIONS.map(
                        (
                          suggestion,
                          index
                        ) => (

                          <button
                            key={index}
                            type="button"
                            onClick={() =>
                              handleSendMessage(
                                suggestion
                              )
                            }
                            className="text-left text-[12px] bg-white/5 hover:bg-purple-600/30 text-gray-300 hover:text-white border border-white/10 hover:border-purple-500/40 rounded-xl px-3 py-1.5 transition-all duration-200 cursor-pointer"
                          >
                            {suggestion}
                          </button>

                        )
                      )}

                    </div>

                  </div>

                )}

              <div ref={messagesEndRef} />

            </div>

            {/* =================================================
                INPUT
            ================================================= */}

            <div className="p-3 border-t border-white/10 bg-[#151030]/80">

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2 bg-[#1d1836] rounded-xl px-3 py-1.5 border border-white/10 focus-within:border-purple-500 transition-colors"
              >

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-[16px] sm:text-[13.5px] text-white placeholder:text-secondary outline-none disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={
                    !input.trim() ||
                    isLoading
                  }
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#915eff] to-[#703bf7] hover:from-[#804bee] hover:to-[#602ce6] disabled:opacity-40 text-white rounded-lg transition-all cursor-pointer disabled:cursor-not-allowed shadow-sm"
                  title="Send message"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />

                  </svg>

                </button>

              </form>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

      <motion.button
        type="button"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="relative group bg-gradient-to-r from-[#915eff] via-[#703bf7] to-[#00cea8] p-[2px] rounded-full shadow-lg shadow-purple-600/40 cursor-pointer"
        aria-label="Toggle AI Chat"
      >

        <div className="bg-[#100d25] hover:bg-transparent rounded-full p-3.5 flex items-center justify-center transition-colors duration-300">

          {isOpen ? (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />

            </svg>

          ) : (

            /* VALID ROBOT ICON */

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >

              <rect
                x="4"
                y="7"
                width="16"
                height="12"
                rx="3"
              />

              <path
                strokeLinecap="round"
                d="M9 11h.01M15 11h.01"
              />

              <path
                strokeLinecap="round"
                d="M9 15h6"
              />

              <path
                strokeLinecap="round"
                d="M12 3v4"
              />

            </svg>

          )}

        </div>

        {!isOpen && (

          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">

            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-[#100d25]" />

          </span>

        )}

      </motion.button>

    </div>
  );
};

export default Chatbot;