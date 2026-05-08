import { motion } from 'motion/react';
import turbostartLogo from '../../../imports/image-26.png';

export default function ModernExperience() {
  const experiences = [
    {
      role: 'Product Designer',
      company: 'Turbostart',
      period: '2023 - Present',
      logo: turbostartLogo,
      logoType: 'image',
      description:
        'Leading design initiatives for multiple client projects, focusing on EdTech solutions and design systems.',
      achievements: [
        'Designed 10+ end-to-end product experiences',
        'Built scalable design systems',
        'Conducted user research and usability testing',
      ],
    },
    {
      role: 'UI Designer',
      company: 'Freelance',
      period: '2024 - 2026',
      logo: '∞',
      logoType: 'emoji',
      description:
        'Collaborated with startups and agencies to deliver high-quality UI designs and brand experiences.',
      achievements: [
        'Completed 15+ projects across various industries',
        'Specialized in web and mobile interfaces',
        'Maintained 100% client satisfaction',
      ],
    },
  ];

  return (
    <section className="py-24 px-8 lg:px-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#141414] dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-16 transition-colors duration-300">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-[#141414] dark:hover:border-[#E4FE52] hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:border-[#141414] dark:group-hover:border-[#E4FE52] transition-all duration-300 overflow-hidden">
                    {exp.logoType === 'image' ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-4xl">{exp.logo}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-[#141414] dark:text-white text-xl md:text-2xl font-bold mb-1 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-[#737373] dark:text-gray-400 text-base font-medium transition-colors duration-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-[#141414] dark:text-white text-sm font-medium rounded-full transition-colors duration-300">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed mb-4 transition-colors duration-300">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                        >
                          <span className="text-[#141414] dark:text-[#E4FE52] font-bold mt-0.5 transition-colors duration-300">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
