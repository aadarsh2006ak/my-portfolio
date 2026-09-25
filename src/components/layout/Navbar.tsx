import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import {
  logo,
  menu,
  close,
  github,
  leetcode,
} from "../../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const id = section.getAttribute("id");

        const height = (section as HTMLElement).offsetHeight;

        const top =
          section.getBoundingClientRect().top - height * 0.2;

        if (top < 0 && top + height > 0) {
          setActive(id || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-30 flex w-full items-center py-4 sm:py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5"
          : "bg-[#050816]/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 z-20 group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setToggle(false);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="flex flex-col">
            <span className="text-[17px] sm:text-[18px] font-bold text-white tracking-wide leading-tight group-hover:text-[#00f2fe] transition-colors">
              Aadarsh
            </span>
            <span className="text-[11px] sm:text-[12px] text-purple-300 font-medium tracking-wide leading-tight">
              SDE & Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[16px] font-medium transition-colors ${
                active === nav.id
                  ? "text-[#00f2fe] font-semibold"
                  : "text-secondary hover:text-white"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <div className="h-5 w-px bg-white/10" />

          <a
            href="https://github.com/aadarsh2006ak"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <img
              src={github}
              alt="github"
              className="h-5 w-5 transition hover:scale-110 opacity-85 hover:opacity-100"
            />
          </a>

          <a
            href="https://leetcode.com/u/aadarsh_2026/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
          >
            <img
              src={leetcode}
              alt="leetcode"
              className="h-5 w-5 transition hover:scale-110 opacity-85 hover:opacity-100"
            />
          </a>

          <a
            href="/Aadarsh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Aadarsh_Resume.pdf"
            className="rounded-xl bg-gradient-to-r from-[#915eff] to-[#703bf7] hover:from-[#804bee] hover:to-[#602ce6] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Resume
          </a>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="flex items-center sm:hidden z-20">
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-xl bg-tertiary/80 border border-white/10 text-white flex items-center justify-center focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-5 w-5 object-contain"
            />
          </button>
        </div>

        {/* Mobile Backdrop Overlay */}
        {toggle && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-10 sm:hidden"
            onClick={() => setToggle(false)}
          />
        )}

        {/* Mobile Drawer Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute right-4 top-16 z-20 mx-2 my-2 min-w-[220px] max-w-[280px] w-full rounded-2xl bg-[#100d25]/95 backdrop-blur-xl border border-white/10 p-5 shadow-2xl shadow-purple-950/50 flex-col sm:hidden`}
        >
          <ul className="flex w-full flex-col gap-3.5">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[15px] font-medium py-1 px-2 rounded-lg transition-colors ${
                  active === nav.id
                    ? "text-[#00f2fe] bg-white/5 font-semibold"
                    : "text-secondary hover:text-white"
                }`}
                onClick={() => setToggle(false)}
              >
                <a href={`#${nav.id}`} className="block w-full">
                  {nav.title}
                </a>
              </li>
            ))}

            <hr className="border-white/10 my-1" />

            <li className="flex items-center justify-around py-1">
              <a
                href="https://github.com/aadarsh2006ak"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-tertiary border border-white/10 hover:border-purple-500/40"
                aria-label="GitHub"
              >
                <img src={github} alt="github" className="h-5 w-5" />
              </a>

              <a
                href="https://leetcode.com/u/aadarsh_2026/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-tertiary border border-white/10 hover:border-purple-500/40"
                aria-label="LeetCode"
              >
                <img src={leetcode} alt="leetcode" className="h-5 w-5" />
              </a>
            </li>

            <li className="pt-1">
              <a
                href="/Aadarsh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Aadarsh_Resume.pdf"
                className="block w-full rounded-xl bg-gradient-to-r from-[#915eff] to-[#703bf7] py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-purple-600/30 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;