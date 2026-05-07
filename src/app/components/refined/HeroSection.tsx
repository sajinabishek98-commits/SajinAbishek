import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#737373] text-sm tracking-wide uppercase mb-6 font-medium"
        >
          Product Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#141414] text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
        >
          Sajin Abishek
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#737373] text-xl lg:text-2xl leading-relaxed max-w-3xl mb-12"
        >
          Product Designer with 3 years of experience crafting user-centric
          digital experiences. Specializing in EdTech, I create seamless
          solutions that drive accessibility and better learning outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm"
        >
          <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[#141414] text-sm font-medium">
            Available for Work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
