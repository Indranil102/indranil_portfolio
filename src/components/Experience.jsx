import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const jobs = [
  {
    company: 'Emeelan Private limited ',
    role: 'AI/ML and Python Intern',
    duration: 'JUNE 2025 – JULY 2025',
    details:
      'Developed a multilingual AI-powered TTS model supporting 35+ languages and custom inputs, achieving 85% synthesis accuracy. Built an offline AI assistant using Ollama (Llama 2/Mistral) with 92% task success, <500ms latency, and $300 monthly cost savings.',
  },
  {
    company: 'DevFrame Studio',
    role: 'Software Developer Intern ',
    duration: 'APRIL 2025 – SEPTEMBER 2025',
    details:
      'Implemented responsive UI designs using Tailwind CSS, ensuring flawless performance and 100% compatibility across mobile, tablet, and desktop devices. Collaborated on 5+ full-stack features, significantly enhancing platform functionality and driving a measurable 30% increase in overall user engagement.',
  },
  {
    company: 'MLP Techster',
    role: 'Frontend Developer Intern',
    duration: 'JAN 2025 - JUNE 2025 ',
    details:
      'Designed and enhanced 3+ user-focused, fully responsive web interfaces by applying modern UI/UX best practices and accessibility standards, resulting in a measurable 60% increase in user engagement, improved navigation efficiency, and delivering an overall enhanced digital experience for all users.',
  },
];

/* … imports stay the same … */

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
            className="bg-neutral-900 rounded-xl p-4 sm:p-6 cursor-pointer hover:shadow-accent/30 shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            {/* responsive header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-accent">
                  {job.company}
                </h3>
                <p className="text-sm text-gray-300">{job.role}</p>
              </div>
              <p className="text-sm text-gray-400 mt-1 sm:mt-0 sm:text-right shrink-0">
                {job.duration}
              </p>
            </div>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 text-sm sm:text-base text-gray-300"
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