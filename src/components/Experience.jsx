import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const jobs = [
  {
    company: 'NeuroTech AI',
    role: 'ML Engineer',
    duration: '2023 – Present',
    details:
      'Designed end-to-end pipelines for NLP models, improving inference speed by 40%.',
  },
  {
    company: 'PixelPerfect Inc.',
    role: 'Frontend Developer',
    duration: '2021 – 2023',
    details:
      'Led React migration, implemented design system, reduced bundle size by 25%.',
  },
  {
    company: 'CloudBase Solutions',
    role: 'Backend Intern',
    duration: '2020 – 2021',
    details:
      'Built RESTful APIs with Django, integrated PostgreSQL, containerized with Docker.',
  },
];

export default function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <section id="experience" className="py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            layout
            onClick={() => setOpen(open === i ? null : i)}
            className="bg-neutral-900 rounded-xl p-6 cursor-pointer hover:shadow-accent/30 shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-accent">{job.company}</h3>
              <p className="text-gray-400">
                {job.role} • {job.duration}
              </p>
            </div>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 text-gray-300"
                >
                  {job.details}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}