import { motion } from 'motion/react';

export default function ExperienceSection() {
  const experience = [
    {
      company: 'Turbostart',
      role: 'Product Designer',
      period: '2023 - Present',
      description: [
        'End-to-end product design',
        'Collaboration with cross-functional teams',
        'Improved usability and experience',
      ],
    },
    {
      company: 'Freelance',
      role: 'UI Designer (Remote)',
      period: '2024 - 2026',
      description: [
        'Designed UI for multiple clients',
        'Focused on usability and consistency',
        'Delivered tailored solutions',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#141414] mb-3">Experience</h2>
        <p className="text-lg text-[#737373] mb-12">
          My professional journey and contributions
        </p>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-2 border-gray-200 pl-6 pb-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-[#141414]">
                    {job.company}
                  </h3>
                  <p className="text-lg text-[#737373] mt-1">{job.role}</p>
                </div>
                <p className="text-[#737373] mt-2 md:mt-0">{job.period}</p>
              </div>

              <ul className="space-y-2 mt-4">
                {job.description.map((item, i) => (
                  <li key={i} className="text-[#737373] flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
