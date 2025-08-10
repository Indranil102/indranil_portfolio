import { motion } from "framer-motion";

export default function AnimatedBg() {
  // Three distinct blue shades
  const blues = [
    "radial-gradient(#00b4d8, transparent)", // Sky
    "radial-gradient(#0077b6, transparent)", // Ocean
    "radial-gradient(#023e8a, transparent)", // Navy
  ];

  const variants = {
    initial: { x: "-50%", y: "-50%" },
    animate: (i) => ({
      x: ["-50%", "-45%", "-55%", "-50%"],
      y: ["-50%", "-55%", "-45%", "-50%"],
      scale: [1, 1.2, 1, 0.9, 1],
      opacity: [0.25, 0.4, 0.25, 0.15, 0.25],
      transition: {
        duration: 20 + i * 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-primary">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-[70vmin] h-[70vmin] rounded-full blur-[120px]"
          style={{ background: blues[i] }}
          variants={variants}
          initial="initial"
          animate="animate"
          custom={i}
        />
      ))}
    </div>
  );
}
