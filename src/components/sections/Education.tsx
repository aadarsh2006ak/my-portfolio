import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const Education: React.FC = () => {
  return (
    <>
      <Header
        useMotion={true}
        p="Academic Background & Milestones"
        h2="Education & Achievements."
      />

      <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
        {/* Education Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="bg-tertiary/80 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between shadow-lg hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 h-full"
        >
          <div>
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#915eff] flex items-center justify-center shrink-0 shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider text-purple-300 font-semibold block mb-0.5">
                  Education
                </span>
                <h4 className="text-[18px] sm:text-[19px] font-bold text-white leading-snug min-h-[48px] flex items-center">
                  Ganga Institute of Technology & Management
                </h4>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-4" />

            {/* Content list */}
            <div className="space-y-2.5 text-xs sm:text-[13.5px] text-gray-300">
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#915eff] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Degree & Branch:</strong> B.Tech in Computer Science & Engineering.
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Academic Status:</strong> 3rd Year Undergraduate (Active Batch).
                </span>
              </p>
            </div>
          </div>

          {/* Bottom aligned metadata bar */}
          <div className="flex items-center justify-between pt-4 mt-5 border-t border-white/10 text-xs sm:text-sm">
            <span className="text-secondary font-medium">
              B.Tech (3rd Year) – CSE
            </span>
            <span className="text-[#00f2fe] font-semibold tracking-wide bg-[#00f2fe]/10 px-2.5 py-0.5 rounded-md border border-[#00f2fe]/20">
              2024 – 2028
            </span>
          </div>
        </motion.div>

        {/* Certifications & Hackathons Card */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="bg-tertiary/80 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between shadow-lg hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 h-full"
        >
          <div>
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00f2fe] flex items-center justify-center shrink-0 shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.496m5.007 0a3.75 3.75 0 0 0 3.743-3.75V5.25A2.25 2.25 0 0 0 16 3H8a2.25 2.25 0 0 0-2.25 2.25v6.375a3.75 3.75 0 0 0 3.746 3.75"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-semibold block mb-0.5">
                  Achievements & Hackathons
                </span>
                <h4 className="text-[18px] sm:text-[19px] font-bold text-white leading-snug min-h-[48px] flex items-center">
                  Competitive Coding & AI Hackathons
                </h4>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 my-4" />

            {/* Content list */}
            <div className="space-y-2.5 text-xs sm:text-[13.5px] text-gray-300">
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Hack or Crack 2.0 (CTF):</strong> Solved algorithmic & cybersecurity challenges.
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#915eff] mt-2 shrink-0" />
                <span>
                  <strong className="text-white">Tech4Hack — Thoughtworks:</strong> Built an AI Resume Analyzer in a team hackathon.
                </span>
              </p>
            </div>
          </div>

          {/* Bottom aligned metadata bar */}
          <div className="flex items-center justify-between pt-4 mt-5 border-t border-white/10 text-xs sm:text-sm">
            <span className="text-secondary font-medium">
              Problem Solving & AI Events
            </span>
            <span className="text-[#915eff] font-semibold tracking-wide bg-[#915eff]/10 px-2.5 py-0.5 rounded-md border border-[#915eff]/20">
              National Hackathons
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
