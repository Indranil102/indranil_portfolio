import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiSqlite,
  SiFirebase,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React JS' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <SiPostgresql />, name: 'SQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiSqlite />, name: 'SQLite' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <FaGitAlt />, name: 'Git' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>

      {/* responsive grid: 3 → 4 → 5 → 6 columns as screen grows */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-10 max-w-5xl mx-auto place-items-center">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
            className="flex flex-col items-center gap-2 text-5xl text-accent"
          >
            {s.icon}
            <span className="text-sm text-gray-300">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}