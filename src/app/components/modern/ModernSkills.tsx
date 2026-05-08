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
    <section className="py-24 px-8 lg:px-16 bg-gray-50 dark:bg-[#141414] transition-colors duration-300">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#141414] dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-12 transition-colors duration-300">
            Skills & Tools
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full hover:border-[#141414] dark:hover:border-[#E4FE52] hover:shadow-md dark:hover:shadow-xl transition-all duration-300"
              >
                <p className="text-[#141414] dark:text-white text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300">
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
