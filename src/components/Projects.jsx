// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    name: "Meeting Scheduler",
    desc: "Real-time meeting scheduler by analyzing chat transcripts.",
    tech: ["React", "Django", "BERT", "NLP", "Python"],
    img: "/public/meet.webp",
    repo: "https://github.com/Indranil102/provivo_aiml.git", // ⬅️ change
  },
  {
    name: "Text-to-Speech",
    desc: "Custom text-to-speech with user-defined voices.",
    tech: ["ReactJS", "Flask", "GTTS", "Tailwind CSS"],
    img: "/public/tts.webp",
    repo: "https://github.com/Indranil102/text-to-voice/tree/main/venv", // ⬅️ change
  },
  {
    name: "Helper Team",
    desc: "Portal for college resources & previous-year papers.",
    tech: ["ReactJS", "CSS", "GIT"],
    img: "/public/teamwork-high-five-concept-illustration_114360-15305.webp",
    repo: "https://github.com/Indranil102/Helper_Team.git", // ⬅️ change
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-accent/30 block"
          >
            <img
              src={p.img}
              alt={p.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/Indranil102"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-black font-semibold px-6 py-2 rounded
                     hover:bg-[#00ffc8] hover:text-black transition-colors duration-300"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}