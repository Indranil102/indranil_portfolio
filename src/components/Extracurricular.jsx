import { motion } from 'framer-motion';

const activities = [
  {
    title: ' CodeKshetra 2.0 - Sponser Winner',
    desc: `Took part in CodeKshetra 2.0, the biggest 36-hour hackathon in India, held at JIMS Delhi; received JBL
    headphones for putting forward a novel and creative project idea.`,
  },
  {
    title: 'Technical Secretary - EDC, JUET',
    desc: 'Encouraged innovation and improved entrepreneurial skills by planning workshops, coaching juniors, and working with peers.',
  },
  {
    title: 'Code-Q-Manipal - Hackathon',
    desc: 'Actively took part in the Manipal University Jaipur Code-Q-Manipal hackathon, collaborating in creating innovative technological solutions and honing practical problem-solving techniques..',
  },
];

export default function Extracurricular() {
  return (
    <section className="py-24 px-4 bg-neutral-900/30">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Extracurricular Activities
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
            className="bg-neutral-900 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">{act.title}</h3>
            <p className="text-gray-300">{act.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}