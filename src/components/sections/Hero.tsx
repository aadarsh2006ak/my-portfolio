import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const dynamicRoles = [
  "Java & Spring Boot Backends ☕",
  "Full Stack MERN Applications 💻",
  "High-Concurrency Real-Time Systems ⚡",
  "AI Document Intelligence & RAG 🤖",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  useEffect(() => {
    const currentRole = dynamicRoles[roleIndex];
    let timer: any;

    if (!isDeleting && displayedText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 60);
    } else if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== "") {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative mx-auto min-h-[92vh] sm:min-h-screen w-full overflow-hidden flex flex-col justify-between pt-[100px] sm:pt-[120px] pb-8">
      <div
        className={`mx-auto max-w-7xl w-full ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-6 z-10`}
      >
        {/* Dynamic Left Pin & Energy Beam Line */}
        <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center relative select-none pointer-events-none self-stretch">
          {/* Pulsing Beacon Dot */}
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 sm:h-7 sm:w-7 rounded-full bg-[#915EFF] opacity-75" />
            <div className="relative h-3 w-3 sm:h-5 sm:w-5 rounded-full bg-gradient-to-tr from-[#915EFF] to-[#00f2fe] shadow-[0_0_15px_#915eff]" />
          </div>

          {/* Vertical Line with Moving Light Packet */}
          <div className="violet-gradient relative flex-1 min-h-[160px] sm:min-h-[280px] w-1 overflow-hidden rounded-full shadow-[0_0_12px_rgba(145,94,255,0.6)]">
            <div className="animate-beam-flow" />
          </div>
        </div>

        {/* Dynamic Text Content */}
        <div className="flex-1">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-tertiary/80 border border-white/10 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-emerald-400">
              Open to SDE & Full Stack Roles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${styles.heroHeadText} text-white leading-tight flex flex-wrap items-center gap-x-3`}
          >
            <span>Hi, I'm</span>
            <span className="hero-name-gradient drop-shadow-[0_0_20px_rgba(145,94,255,0.4)]">
              {config.hero.name}
            </span>
          </motion.h1>

          {/* Subtitle with Dynamic Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 text-white-100"
          >
            <p className={`${styles.heroSubText} flex flex-wrap items-center gap-1.5`}>
              <span className="text-secondary">I develop</span>
              <span className="text-[#00f2fe] font-semibold underline decoration-[#915eff]/50 underline-offset-4 min-h-[44px] sm:min-h-[32px] inline-flex items-center">
                {displayedText}
                <span className="animate-pulse ml-0.5 text-white font-normal">|</span>
              </span>
            </p>
            <p className="text-secondary text-[13px] sm:text-[15px] mt-1.5 max-w-xl leading-relaxed">
              {config.hero.p[0]} {config.hero.p[1]}
            </p>
          </motion.div>

          {/* Mobile Quick Action Buttons & Interactive Tech Card */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 flex flex-col gap-3.5"
            >
              {/* Action Buttons (Balanced 2-Column Grid on Mobile) */}
              <div className="grid grid-cols-2 gap-2.5 w-full">
                <a
                  href="#projects"
                  className="col-span-2 bg-gradient-to-r from-[#915eff] to-[#703bf7] hover:from-[#804bee] hover:to-[#602ce6] text-white px-4 py-2.5 rounded-xl font-semibold text-[13.5px] shadow-lg shadow-purple-600/30 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Projects</span>
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
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="bg-tertiary/90 hover:bg-tertiary text-white border border-white/10 px-3 py-2.5 rounded-xl font-medium text-[13px] active:scale-95 transition-all flex items-center justify-center text-center"
                >
                  Contact Me
                </a>
                <a
                  href="/Aadarsh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Aadarsh_Resume.pdf"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/15 px-3 py-2.5 rounded-xl font-medium text-[13px] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>

              {/* Futuristic Interactive Terminal Card on Mobile */}
              <div className="rounded-xl bg-[#100d25]/90 border border-purple-500/20 p-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-300/70">
                    developer.config.ts
                  </span>
                </div>
                <div className="font-mono text-[11px] leading-relaxed space-y-0.5 text-gray-300">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">engineer</span> = &#123;
                  </p>
                  <p className="pl-3">
                    <span className="text-gray-400">role:</span>{" "}
                    <span className="text-emerald-400">"SDE / Full Stack Engineer"</span>,
                  </p>
                  <p className="pl-3">
                    <span className="text-gray-400">stack:</span> [
                    <span className="text-amber-300">"Java"</span>,{" "}
                    <span className="text-amber-300">"Spring Boot"</span>,{" "}
                    <span className="text-amber-300">"React"</span>,{" "}
                    <span className="text-amber-300">"PostgreSQL"</span>],
                  </p>
                  <p className="pl-3">
                    <span className="text-gray-400">status:</span>{" "}
                    <span className="text-emerald-400">"Ready to Build ⚡"</span>
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* 3D Computer Canvas (Desktop Only) */}
      {!isMobile && (
        <div
          className="absolute inset-0 top-[140px] pointer-events-auto"
          onWheel={(e) => {
            window.scrollBy({ top: e.deltaY, behavior: "auto" });
          }}
        >
          <ComputersCanvas />
        </div>
      )}

      {/* Scroll Down Indicator */}
      <div className="relative mt-8 sm:mt-0 flex w-full items-center justify-center z-10">
        <a href="#about" aria-label="Scroll to about section">
          <div className="border-secondary/60 hover:border-[#915eff] flex h-[54px] w-[30px] sm:h-[64px] sm:w-[35px] items-start justify-center rounded-3xl border-2 sm:border-4 p-1.5 sm:p-2 transition-all hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


