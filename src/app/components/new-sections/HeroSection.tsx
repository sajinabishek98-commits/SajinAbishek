import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#737373] text-lg mb-4"
        >
          Product Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-6xl font-bold text-[#141414] mb-6 leading-tight"
        >
          Hey, I'm <br />
          Sajin Abishek
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-[#737373] leading-relaxed max-w-2xl mb-8"
        >
          I'm a Product Designer with over 3 years of experience in crafting
          user-centric digital experiences. I've worked on multiple startup and
          client projects, with a growing specialization in EdTech — crafting
          seamless experiences that drive accessibility and better learning
          outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2"
        >
          <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-green-700 text-sm font-medium">
            Available for Work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
