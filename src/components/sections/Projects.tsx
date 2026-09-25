import React, { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number; isDragging: boolean; isMobile: boolean } & TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
  isDragging,
  isMobile,
}) => {
  const handleLiveDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDragging) return;
    if (liveDemoLink && liveDemoLink.trim() !== "") {
      window.open(liveDemoLink, "_blank");
    } else {
      alert("Live demo link will be added soon!");
    }
  };

  const handleSourceCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDragging) return;
    if (sourceCodeLink && sourceCodeLink.trim() !== "") {
      window.open(sourceCodeLink, "_blank");
    }
  };

  return (
    <div className="w-[295px] sm:w-[335px] md:w-[350px] shrink-0 flex select-none">
      <Tilt
        glareEnable={!isMobile}
        tiltEnable={!isMobile && !isDragging}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareColor="#aaa6c3"
        glareMaxOpacity={0.12}
        className="w-full flex"
      >
        <div className="bg-tertiary/90 backdrop-blur-md w-full h-[505px] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
          <div>
            {/* Project Image */}
            <div className="relative h-[165px] w-full rounded-xl overflow-hidden bg-black-200 group/img shrink-0">
              <img
                src={image}
                alt={name}
                draggable={false}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105 pointer-events-none"
              />
              <div className="card-img_hover absolute inset-0 m-2.5 flex justify-end pointer-events-none">
                <button
                  type="button"
                  onClick={handleSourceCode}
                  className="black-gradient flex h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:scale-110 pointer-events-auto border border-white/10"
                  title="Source Code"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain pointer-events-none"
                  />
                </button>
              </div>
            </div>

            {/* Project Title (Fixed Height for Equal Alignment) */}
            <div className="mt-3">
              <h3 className="text-[16px] sm:text-[17px] font-bold text-white leading-snug h-[48px] flex items-center">
                {name}
              </h3>
              {/* Project Description (Fixed 3-Line Height for Equal Alignment) */}
              <p className="text-secondary mt-1 text-[12px] sm:text-[12.5px] leading-[18px] h-[54px] line-clamp-3 overflow-hidden">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end mt-auto">
            {/* Tags Container (Fixed Height so buttons always align at identical baseline) */}
            <div className="h-[82px] flex flex-wrap content-start gap-1.5 overflow-hidden my-2.5">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[11px] px-2 py-0.5 rounded-md bg-black-200/70 border border-white/5 font-medium ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Buttons Row (Fixed Bottom Baseline) */}
            <div className="flex items-center gap-2 pt-3 border-t border-white/10 shrink-0">
              <button
                type="button"
                onClick={handleLiveDemo}
                className="flex-1 bg-gradient-to-r from-[#915eff] to-[#703bf7] hover:from-[#804bee] hover:to-[#602ce6] text-white py-2 px-3 rounded-lg font-semibold text-[13px] flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-purple-500/20 active:scale-95 cursor-pointer"
              >
                <span>Live Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleSourceCode}
                className="bg-black-200 hover:bg-black-100 text-white p-2 rounded-lg transition-all duration-300 border border-white/10 flex items-center justify-center hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                title="View Source Code"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-4 h-4 object-contain pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isUserInteractingRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<any>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

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

  // Repeat projects so continuous scroll loops seamlessly
  const repeatCount = Math.max(2, Math.ceil(8 / projects.length));
  const repeatedProjects = Array.from({ length: repeatCount }, () => projects).flat();

  // High-precision subpixel continuous auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    scrollPosRef.current = container.scrollLeft;
    let animationFrameId: number;
    let lastTime = performance.now();

    const autoScroll = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isPausedRef.current && !isUserInteractingRef.current && container) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          scrollPosRef.current += 40 * delta; // 40px per second smooth auto-scroll

          if (scrollPosRef.current >= halfWidth) {
            scrollPosRef.current -= halfWidth;
          } else if (scrollPosRef.current <= 0) {
            scrollPosRef.current += halfWidth;
          }

          container.scrollLeft = scrollPosRef.current;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Sync scroll position during manual interaction (Touch, Mouse, or Wheel)
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const halfWidth = container.scrollWidth / 2;

    if (halfWidth > 0) {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
      }
    }

    if (isUserInteractingRef.current) {
      scrollPosRef.current = container.scrollLeft;
      isPausedRef.current = true;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        isUserInteractingRef.current = false;
        isPausedRef.current = false;
      }, 1200);
    }
  };

  // Manual Drag-to-Scroll handlers (Mouse)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    isUserInteractingRef.current = true;
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
    scrollPosRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.25;
    let newPos = scrollLeftPos - walk;

    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (halfWidth > 0) {
      if (newPos >= halfWidth) newPos -= halfWidth;
      else if (newPos <= 0) newPos += halfWidth;
    }

    scrollRef.current.scrollLeft = newPos;
    scrollPosRef.current = newPos;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (scrollRef.current) {
      scrollPosRef.current = scrollRef.current.scrollLeft;
    }
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
      isPausedRef.current = false;
    }, 1200);
  };

  // Touch Handlers for Mobile Devices (Bi-directional Swipe)
  const handleTouchStart = () => {
    isUserInteractingRef.current = true;
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (scrollRef.current) {
      scrollPosRef.current = scrollRef.current.scrollLeft;
    }
  };

  const handleTouchEnd = () => {
    if (scrollRef.current) {
      scrollPosRef.current = scrollRef.current.scrollLeft;
    }
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
      isPausedRef.current = false;
    }, 1200);
  };

  // Quick Navigation Button Handler (< and >)
  const handleManualNav = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    isUserInteractingRef.current = true;
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    const step = isMobile ? 310 : 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });

    resumeTimerRef.current = setTimeout(() => {
      if (scrollRef.current) {
        scrollPosRef.current = scrollRef.current.scrollLeft;
      }
      isUserInteractingRef.current = false;
      isPausedRef.current = false;
    }, 1800);
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-3">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary max-w-3xl text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>

        {/* Manual Scroll Controls & Interactive Swipe Hint */}
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
          <div className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary/70 border border-white/10 text-xs text-purple-300 font-medium shadow-sm">
            <span>👈 Swipe or Drag 👉</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleManualNav("left")}
              aria-label="Previous project"
              className="p-2.5 rounded-xl bg-tertiary/90 hover:bg-purple-600/30 text-white border border-white/10 hover:border-purple-500/40 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleManualNav("right")}
              aria-label="Next project"
              className="p-2.5 rounded-xl bg-tertiary/90 hover:bg-purple-600/30 text-white border border-white/10 hover:border-purple-500/40 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Single Row Horizontal Container (Auto + Fluid Touch/Drag Scrollable) */}
      <div className="relative mt-8 sm:mt-10 w-full">
        {/* Left & Right subtle edge fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-primary via-primary/60 to-transparent z-10" />

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full overflow-x-auto no-scrollbar py-3 flex flex-nowrap gap-4 sm:gap-5 cursor-grab active:cursor-grabbing select-none"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "auto",
          }}
        >
          {repeatedProjects.map((project, index) => (
            <ProjectCard
              key={`proj-${index}`}
              index={index}
              isDragging={isDragging}
              isMobile={isMobile}
              {...project}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
