import { motion } from 'motion/react';

export default function SkillsSection() {
  const skills = [
    'UX Design',
    'UI Design',
    'Wireframing',
    'Prototyping',
    'Figma',
    'Design Systems',
    'User Research',
    'Interaction Design',
    'Visual Design',
    'Usability Testing',
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#141414] mb-3">
          Skills & Expertise
        </h2>
        <p className="text-lg text-[#737373] mb-12">
          Tools and capabilities I bring to every project
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-all"
            >
              <span className="text-[#141414] font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
