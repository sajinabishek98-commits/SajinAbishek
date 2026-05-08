import { motion } from 'motion/react';
import profileImage from '../../../imports/6C672866-F7AB-403A-9767-6E76C1730AF3.JPG';

export default function ModernAboutSplit() {
  return (
    <section id="about" className="py-24 px-8 lg:px-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#141414] dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-16 transition-colors duration-300">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[420px] order-2 lg:order-1"
            >
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-[#141414] dark:hover:border-[#E4FE52]">
                <img
                  src={profileImage}
                  alt="Sajin Abishek - Product Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Bio */}
            <div className="flex-1 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-[#737373] dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors duration-300">
                  I'm a <span className="text-[#141414] dark:text-white font-semibold">Product Designer</span> with over 3 years of experience crafting
                  user-centric digital experiences. Currently working at <span className="text-[#141414] dark:text-white font-semibold">Turbostart</span>,
                  I've contributed to end-to-end product design for multiple startup
                  and client projects.
                </p>
                <p className="text-[#737373] dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors duration-300">
                  My approach combines strategic thinking, user research, and visual
                  design to create solutions that solve real problems. I'm passionate
                  about <span className="text-[#141414] dark:text-white font-semibold">EdTech</span> and building products that make learning accessible and
                  engaging.
                </p>
                <p className="text-[#737373] dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors duration-300">
                  When I'm not designing, I'm exploring new design trends, reading
                  about product strategy, or collaborating with other designers to
                  improve my craft.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
