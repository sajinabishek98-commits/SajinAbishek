import { motion } from 'motion/react';

export default function ModernSkills() {
  const skills = [
    'UX Research',
    'UI Design',
    'Design Systems',
    'Prototyping',
    'User Testing',
    'Wireframing',
    'Figma',
    'Interaction Design',
    'Accessibility',
    'Visual Design',
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-[#141414] transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#141414] dark:text-white text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300">
            Skills & Tools
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group px-5 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full hover:border-[#141414] dark:hover:border-[#E4FE52] hover:shadow-md dark:hover:shadow-xl transition-all duration-300"
              >
                <p className="text-[#141414] dark:text-white text-xs font-medium whitespace-nowrap transition-colors duration-300">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
