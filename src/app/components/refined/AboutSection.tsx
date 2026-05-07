import { motion } from 'motion/react';

export default function AboutSection() {
  const skills = [
    'UX Research',
    'UI Design',
    'Wireframing',
    'Prototyping',
    'Figma',
    'Design Systems',
    'User Testing',
    'Product Thinking',
  ];

  return (
    <section id="about" className="py-32 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-[#141414] text-4xl lg:text-5xl font-bold mb-6">
              About
            </h2>
            <div className="space-y-6 text-[#737373] text-lg leading-relaxed">
              <p>
                I'm a Product Designer with over 3 years of experience crafting
                user-centric digital experiences. I've worked on multiple startup
                and client projects at Turbostart, contributing to end-to-end
                product design.
              </p>
              <p>
                My approach combines user research, strategic thinking, and visual
                design to create intuitive solutions that solve real problems. I'm
                passionate about EdTech and building products that make learning
                accessible.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[#141414] text-2xl font-semibold mb-6">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white border border-gray-200 text-[#141414] text-sm font-medium rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
