import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
}) => {
  const handleLiveDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liveDemoLink && liveDemoLink.trim() !== "") {
      window.open(liveDemoLink, "_blank");
    } else {
      alert("Live demo link will be added soon!");
    }
  };

  const handleSourceCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (sourceCodeLink && sourceCodeLink.trim() !== "") {
      window.open(sourceCodeLink, "_blank");
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[340px] flex"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareColor="#aaa6c3"
        className="w-full flex"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 flex flex-col justify-between border border-white/5 hover:border-purple-500/30 transition-all duration-300">
          <div>
            <div className="relative h-[220px] w-full rounded-2xl overflow-hidden bg-black-200">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end pointer-events-none">
                <div
                  onClick={handleSourceCode}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 pointer-events-auto"
                  title="Source Code"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-[22px] font-bold text-white leading-tight min-h-[56px] flex items-center">
                {name}
              </h3>
              <p className="text-secondary mt-2 text-[14px] leading-[22px] min-h-[110px]">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-end">
            <div className="flex flex-wrap gap-2 mb-5 min-h-[52px] content-start">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[13px] px-2 py-0.5 rounded-md bg-black-200/50 ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleLiveDemo}
                className="flex-1 bg-gradient-to-r from-[#915eff] to-[#703bf7] hover:from-[#804bee] hover:to-[#602ce6] text-white py-2.5 px-4 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-purple-500/20 active:scale-95 cursor-pointer"
              >
                <span>Live Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-4 h-4"
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
                className="bg-black-200 hover:bg-black-100 text-white p-2.5 rounded-xl transition-all duration-300 border border-white/10 flex items-center justify-center hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                title="View Source Code"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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

      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
