import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function ModernHero() {
  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-8 lg:px-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="space-y-8">
          {/* Small intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-5 py-2.5 transition-colors duration-300"
          >
            <span className="size-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" />
            <span className="text-[#737373] dark:text-gray-400 text-base font-medium">
              Available for new projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#141414] dark:text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight transition-colors duration-300"
          >
            Product Designer crafting meaningful digital experiences
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#737373] dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl transition-colors duration-300"
          >
            I'm Sajin Abishek, a Product Designer with 3 years of experience
            specializing in EdTech. I create user-centric solutions that drive
            accessibility and better learning outcomes.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <button
              onClick={scrollToWork}
              className="group px-10 py-4 bg-[#141414] dark:bg-white text-white dark:text-[#0a0a0a] rounded-full hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-all text-base font-medium inline-flex items-center gap-2"
            >
              View my work
              <ArrowDown
                size={20}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 border-2 border-gray-200 dark:border-gray-700 text-[#141414] dark:text-white rounded-full hover:border-[#141414] dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-base font-medium"
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#737373] dark:text-gray-400 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
