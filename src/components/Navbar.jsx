import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS", "CONTACT"];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-5 bg-black/70 backdrop-blur-md" : "py-8 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ul className="flex justify-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-gray-300 hover:text-accent transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};
