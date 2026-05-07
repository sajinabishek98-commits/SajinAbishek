import { motion } from 'motion/react';
import { Lightbulb, Palette, Layout, Code } from 'lucide-react';

export default function ModernServices() {
  const services = [
    {
      icon: Lightbulb,
      title: 'UX Research',
      description:
        'User interviews, usability testing, and data-driven insights to understand user needs and pain points.',
    },
    {
      icon: Palette,
      title: 'UI Design',
      description:
        'Creating beautiful, intuitive interfaces that balance aesthetics with functionality and accessibility.',
    },
    {
      icon: Layout,
      title: 'Design Systems',
      description:
        'Building scalable component libraries and design systems that ensure consistency across products.',
    },
    {
      icon: Code,
      title: 'Prototyping',
      description:
        'Interactive prototypes that bring ideas to life and validate concepts before development.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-[#141414] dark:text-white text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300">
            What I Do
          </h2>
          <p className="text-[#737373] dark:text-gray-400 text-sm max-w-2xl transition-colors duration-300">
            Specialized skills and services I offer to bring your digital
            products to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-[#141414] dark:hover:border-white hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-[#141414] dark:group-hover:bg-white transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-[#141414] dark:text-white group-hover:text-white dark:group-hover:text-[#0a0a0a] transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-[#141414] dark:text-white text-lg font-bold mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#737373] dark:text-gray-400 text-xs leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
