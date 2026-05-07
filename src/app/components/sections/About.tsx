import { motion } from 'motion/react';

export default function About() {
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
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      {/* Intro Section */}
      <div className="mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-8">
              About <span className="text-[#7dd3fc]">Me</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a Product Designer with over 3 years of experience in crafting
                user-centric digital experiences. I've worked on multiple startup
                and client projects at Turbostart, where I contributed to
                end-to-end product design—from understanding user needs to
                delivering intuitive and scalable solutions.
              </p>

              <p>
                Alongside my full-time role, I've also taken on freelance UI
                design projects, helping clients enhance usability and create
                visually engaging interfaces. I'm passionate about solving
                real-world problems through design and continuously improving
                products through thoughtful user experience and collaboration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#7dd3fc]/20 to-transparent rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="text-gray-600 text-center">
                <p className="text-sm">Profile Image</p>
                <p className="text-xs mt-2">Add your image here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-8">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#111111] border border-white/10 rounded-full px-6 py-3 hover:border-[#7dd3fc]/50 transition-all"
              >
                <span className="text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#7dd3fc]/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl mb-2">{job.company}</h3>
                    <p className="text-xl text-[#7dd3fc]">{job.role}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{job.period}</p>
                </div>

                <ul className="space-y-2 mt-6">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3">
                      <span className="text-[#7dd3fc] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
