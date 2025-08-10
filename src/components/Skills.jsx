import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiMongodb } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
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
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 max-w-4xl mx-auto place-items-center">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
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