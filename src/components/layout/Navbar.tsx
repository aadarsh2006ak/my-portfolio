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
import { config } from "../../constants/config";

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
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="logo"
            className="h-9 w-9 object-contain"
          />

          <p className="text-[18px] font-bold text-white">
            {config.html.title}
          </p>
        </Link>

        {/* Desktop */}

        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[17px] font-medium transition ${
                active === nav.id
                  ? "text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <div className="h-6 w-px bg-gray-600" />

          <a
            href="https://github.com/aadarsh2006ak"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="h-6 w-6 transition hover:scale-110"
            />
          </a>

          <a
            href="https://leetcode.com/u/aadarsh_2026/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={leetcode}
              alt="leetcode"
              className="h-6 w-6 transition hover:scale-110"
            />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="rounded-lg bg-[#915EFF] px-4 py-2 text-sm font-medium text-white"
          >
            Resume
          </a>
        </ul>

        {/* Mobile */}

        <div className="flex items-center sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-7 w-7 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] rounded-xl p-6`}
          >
            <ul className="flex w-full flex-col gap-4">

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.id
                      ? "text-white"
                      : "text-secondary"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <hr className="border-gray-600" />

              <li className="flex items-center gap-5">
                <a
                  href="https://github.com/aadarsh2006ak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-6 w-6"
                  />
                </a>

                <a
                  href="https://leetcode.com/u/aadarsh_2026/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={leetcode}
                    alt="leetcode"
                    className="h-6 w-6"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg bg-[#915EFF] py-2 text-center text-white"
                >
                  Resume
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;