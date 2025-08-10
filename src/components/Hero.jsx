import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = ['AI + LLM engineering', 'Full-Stack Developer', 'Creative Coder', 'Problem Solver'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (forward) {
        if (text.length === phrases[index].length) {
          setForward(false);
          setTimeout(() => {}, 1200);
        } else {
          setText(phrases[index].slice(0, text.length + 1));
        }
      } else {
        if (text.length === 0) {
          setForward(true);
          setIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setText(phrases[index].slice(0, text.length - 1));
        }
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [text, forward, index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm Indranil Samanta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.p>
      </div>
    </section>
  );
}