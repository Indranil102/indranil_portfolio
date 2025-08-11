// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = ['HOME', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'CONTACT'];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu after click (mobile)
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(e.currentTarget.dataset.section);
    target?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-black/70 backdrop-blur-md'
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Desktop links (≥768px) */}
        <ul className="hidden md:flex justify-center gap-8 text-sm">
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

        {/* Mobile hamburger & drawer (<768px) */}
        <div className="md:hidden flex items-center justify-between px-4">
          {/* optional logo / title here */}
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 text-2xl"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-screen w-64 bg-neutral-900/95 backdrop-blur-md z-40 pt-20 md:hidden"
      >
        <ul className="flex flex-col items-center gap-8 text-lg">
          {links.map((l) => (
            <li key={l}>
              <a
                data-section={l.toLowerCase()}
                onClick={handleClick}
                className="text-gray-300 hover:text-accent transition-colors cursor-pointer"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};