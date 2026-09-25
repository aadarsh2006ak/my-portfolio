import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
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

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
        {technologies.map((technology, index) =>
          isMobile ? (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-tertiary/80 border border-white/10 shadow-lg shadow-purple-950/30 backdrop-blur-md w-24 h-24 sm:w-28 sm:h-28 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(145,94,255,0.4)] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="mt-2 text-[11px] font-semibold text-gray-300 group-hover:text-white transition-colors truncate max-w-[80px] text-center">
                {technology.name}
              </span>
            </motion.div>
          ) : (
            <div className="h-28 w-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

