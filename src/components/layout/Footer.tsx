import React from "react";
import { logo, github, leetcode } from "../../assets";
import { config, socialLinks } from "../../constants/config";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialItems = [
    {
      name: "GitHub",
      url: socialLinks.github,
      handle: "@aadarsh2006ak",
      icon: (
        <img
          src={github}
          alt="GitHub"
          className="w-5 h-5 object-contain"
        />
      ),
      bgGradient: "hover:from-[#24292e] hover:to-[#1a1e22]",
      borderColor: "hover:border-white/30",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
      badgeColor: "bg-white/10 text-white",
    },
    {
      name: "LinkedIn",
      url: socialLinks.linkedin,
      handle: "aadarsh-kumar",
      icon: (
        <svg
          className="w-5 h-5 fill-current text-[#0A66C2] group-hover:text-white transition-colors"
          viewBox="0 0 24 24"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
        </svg>
      ),
      bgGradient: "hover:from-[#0A66C2]/30 hover:to-[#004182]/40",
      borderColor: "hover:border-[#0A66C2]/60",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(10,102,194,0.35)]",
      badgeColor: "bg-[#0A66C2]/20 text-[#70b5ff]",
    },
    {
      name: "Instagram",
      url: socialLinks.instagram,
      handle: "@aadarsh_2006_ak",
      icon: (
        <svg
          className="w-5 h-5 fill-current text-[#E1306C] group-hover:text-white transition-colors"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
      ),
      bgGradient: "hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/25",
      borderColor: "hover:border-[#E1306C]/60",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(225,48,108,0.35)]",
      badgeColor: "bg-[#E1306C]/20 text-[#ff8fb4]",
    },
    {
      name: "LeetCode",
      url: socialLinks.leetcode,
      handle: "aadarsh_2026",
      icon: (
        <img
          src={leetcode}
          alt="LeetCode"
          className="w-5 h-5 object-contain"
        />
      ),
      bgGradient: "hover:from-[#FFA116]/20 hover:to-[#B26E00]/30",
      borderColor: "hover:border-[#FFA116]/60",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(255,161,22,0.35)]",
      badgeColor: "bg-[#FFA116]/20 text-[#ffc670]",
    },
  ];

  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-primary/95 pt-12 pb-8 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
              <span className="text-xl font-bold text-white tracking-wide">
                {config.html.fullName}
              </span>
            </div>
            <p className="text-secondary text-sm max-w-md">
              Full Stack Developer & Software Engineer crafting scalable,
              interactive, and production-ready applications.
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="flex flex-wrap justify-center gap-3.5">
            {socialItems.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-tertiary/80 border border-white/10 ${social.borderColor} ${social.bgGradient} transition-all duration-300 shadow-md ${social.glowColor} hover:-translate-y-1`}
              >
                <div className="flex items-center justify-center">
                  {social.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[13px] font-semibold leading-tight group-hover:text-white">
                    {social.name}
                  </span>
                  <span className="text-secondary text-[11px] leading-tight">
                    {social.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>© {currentYear} {config.html.fullName}. All rights reserved.</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-[#915eff] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
