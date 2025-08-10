import { motion } from 'framer-motion';
const projects = [
  {
    name: 'Sentiment Lens',
    desc: 'Real-time Twitter sentiment analysis dashboard.',
    tech: ['React', 'Django', 'BERT'],
    img: '/placeholder.png',
  },
  {
    name: 'AR Interior Designer',
    desc: 'AR app to visualize furniture in your room.',
    tech: ['Three.js', 'React', 'WebXR'],
    img: '/placeholder.png',
  },
  {
    name: 'DevTube',
    desc: 'YouTube clone tailored for dev tutorials.',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
    img: '/placeholder.png',
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
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-accent/30"
          >
            <img src={p.img} alt={p.name} className="h-48 w-full object-cover" />
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
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://github.com/indranil19"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-black font-semibold px-6 py-2 rounded hover:bg-accent2 transition"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}