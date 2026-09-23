import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const dynamicRoles = [
  "Full Stack Web Applications 💻",
  "Real-Time & Distributed Systems ⚡",
  "AI-Powered Document Platforms 🤖",
  "Scalable Backend Architectures 🚀",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[115px] sm:top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-6 pointer-events-none z-10`}
      >
        {/* Dynamic Left Pin & Energy Beam Line */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center justify-center relative select-none pointer-events-none">
          {/* Pulsing Beacon Dot */}
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#915EFF] opacity-75" />
            <div className="relative h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-tr from-[#915EFF] to-[#00f2fe] shadow-[0_0_15px_#915eff]" />
          </div>

          {/* Vertical Line with Moving Light Packet */}
          <div className="violet-gradient relative h-40 w-1 sm:h-80 overflow-hidden rounded-full shadow-[0_0_12px_rgba(145,94,255,0.6)]">
            <div className="animate-beam-flow" />
          </div>
        </div>

        {/* Dynamic Text Content */}
        <div className="flex-1 pointer-events-none select-none">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-tertiary/80 border border-white/10 backdrop-blur-md shadow-sm pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-emerald-400">
              Open to Software & Full Stack Roles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${styles.heroHeadText} text-white leading-tight flex flex-wrap items-center gap-x-3 pointer-events-auto`}
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
            className="mt-2 text-white-100 pointer-events-auto"
          >
            <p className={`${styles.heroSubText} flex flex-wrap items-center gap-1.5`}>
              <span className="text-secondary">I develop</span>
              <span className="text-[#00f2fe] font-semibold underline decoration-[#915eff]/50 underline-offset-4 min-h-[32px] inline-flex items-center">
                {displayedText}
                <span className="animate-pulse ml-0.5 text-white font-normal">|</span>
              </span>
            </p>
            <p className="text-secondary text-[13px] sm:text-[15px] mt-1.5 max-w-xl leading-relaxed hidden sm:block">
              {config.hero.p[0]} {config.hero.p[1]}
            </p>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center z-10 pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2 transition-all hover:border-[#915eff] hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

