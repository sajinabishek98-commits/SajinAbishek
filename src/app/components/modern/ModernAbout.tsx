import { motion } from 'motion/react';

export default function ModernAbout() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Happy Clients', value: '15+' },
  ];

  const skills = [
    'UX Research',
    'UI Design',
    'Design Systems',
    'Prototyping',
    'Figma',
    'User Testing',
    'Wireframing',
    'Product Strategy',
  ];

  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#141414] text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-16">
            {/* Left Column - Bio */}
            <div className="space-y-5">
              <p className="text-[#737373] text-base leading-relaxed">
                I'm a Product Designer with over 3 years of experience crafting
                user-centric digital experiences. Currently working at Turbostart,
                I've contributed to end-to-end product design for multiple startup
                and client projects.
              </p>
              <p className="text-[#737373] text-base leading-relaxed">
                My approach combines strategic thinking, user research, and visual
                design to create solutions that solve real problems. I'm passionate
                about EdTech and building products that make learning accessible and
                engaging.
              </p>
              <p className="text-[#737373] text-base leading-relaxed">
                When I'm not designing, I'm exploring new design trends, reading
                about product strategy, or collaborating with other designers to
                improve my craft.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <p className="text-3xl font-bold text-[#141414] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[#737373] text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Skills & Experience */}
            <div className="space-y-12">
              {/* Skills */}
              <div>
                <h3 className="text-[#141414] text-2xl font-bold mb-6">
                  Skills & Tools
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="px-4 py-2 bg-white border border-gray-200 text-[#141414] text-sm font-medium rounded-full hover:border-[#141414] transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-[#141414] text-2xl font-bold mb-6">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[#141414] font-semibold">
                          Product Designer
                        </h4>
                        <p className="text-[#737373]">Turbostart</p>
                      </div>
                      <p className="text-[#737373] text-sm">2023 - Present</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[#141414] font-semibold">
                          UI Designer
                        </h4>
                        <p className="text-[#737373]">Freelance</p>
                      </div>
                      <p className="text-[#737373] text-sm">2024 - 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
