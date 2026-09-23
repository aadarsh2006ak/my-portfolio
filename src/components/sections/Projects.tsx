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

const ProjectCard: React.FC<{ index: number; isDragging: boolean } & TProject> = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
  isDragging,
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
    <div className="w-[290px] sm:w-[320px] md:w-[345px] shrink-0 flex h-full select-none">
      <Tilt
        glareEnable
        tiltEnable={!isDragging}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareColor="#aaa6c3"
        glareMaxOpacity={0.12}
        className="w-full flex"
      >
        <div className="bg-tertiary/90 backdrop-blur-md w-full rounded-2xl p-4 flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
          <div>
            <div className="relative h-[165px] w-full rounded-xl overflow-hidden bg-black-200 group/img">
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

            <div className="mt-3.5">
              <h3 className="text-[16px] sm:text-[17px] font-bold text-white leading-snug min-h-[44px] flex items-center">
                {name}
              </h3>
              <p className="text-secondary mt-1.5 text-[12px] sm:text-[12.5px] leading-[18px] min-h-[56px] line-clamp-3">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-col justify-end">
            <div className="flex flex-wrap gap-1.5 mb-3.5 min-h-[44px] content-start">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[11px] px-2 py-0.5 rounded-md bg-black-200/70 border border-white/5 font-medium ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
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
  const isPausedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Repeat projects so the continuous scroll loops seamlessly and has enough width
  const repeatCount = Math.max(2, Math.ceil(8 / projects.length));
  const repeatedProjects = Array.from({ length: repeatCount }, () => projects).flat();

  // Fast & smooth continuous auto-scrolling from Right to Left
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isPausedRef.current && container) {
        const halfWidth = container.scrollWidth / 2;

        // Auto move right-to-left continuously with faster speed
        container.scrollLeft += 1.8;

        // Infinite loop wrap
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Manual Drag-to-Scroll handlers (Mouse & Touch)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    isPausedRef.current = true;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;

    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (scrollRef.current.scrollLeft >= halfWidth) {
      scrollRef.current.scrollLeft -= halfWidth;
      setScrollLeftPos(scrollRef.current.scrollLeft);
      setStartX(x);
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += halfWidth;
      setScrollLeftPos(scrollRef.current.scrollLeft);
      setStartX(x);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    isPausedRef.current = false;
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Single Row Horizontal Container (Auto + Manual Scrollable with hidden scrollbar) */}
      <div className="relative mt-12 w-full">
        {/* Left & Right subtle edge fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-primary via-primary/60 to-transparent z-10" />

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
          }}
          className={`w-full overflow-x-auto no-scrollbar py-3 flex flex-nowrap gap-5 cursor-grab active:cursor-grabbing select-none`}
        >
          {repeatedProjects.map((project, index) => (
            <ProjectCard
              key={`proj-${index}`}
              index={index}
              isDragging={isDragging}
              {...project}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
