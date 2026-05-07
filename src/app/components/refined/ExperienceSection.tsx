import { motion } from 'motion/react';

export default function ExperienceSection() {
  const experience = [
    {
      role: 'Product Designer',
      company: 'Turbostart',
      period: '2023 — Present',
      contributions: [
        'End-to-end product design for EdTech platforms',
        'Led design system creation and implementation',
        'Collaborated with cross-functional teams',
      ],
    },
    {
      role: 'UI Designer',
      company: 'Freelance',
      period: '2024 — 2026',
      contributions: [
        'Designed UI for multiple client projects',
        'Focused on usability and visual consistency',
        'Delivered tailored design solutions',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[#141414] text-4xl lg:text-5xl font-bold mb-16">
          Experience
        </h2>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <div>
                <h3 className="text-[#141414] text-2xl font-semibold mb-2">
                  {job.role}
                </h3>
                <p className="text-[#737373] font-medium">{job.company}</p>
                <p className="text-[#737373] text-sm mt-1">{job.period}</p>
              </div>

              <div className="lg:col-span-2">
                <ul className="space-y-3">
                  {job.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#737373] text-lg leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
