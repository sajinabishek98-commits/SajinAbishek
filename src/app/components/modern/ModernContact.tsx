import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function ModernContact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sajinabishek@gmail.com',
      href: 'mailto:sajinabishek@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sajinabishek',
      href: 'https://linkedin.com/in/sajinabishek',
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'behance.net/sajinabishek',
      href: 'https://behance.net/sajinabishek',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-[#141414] transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="text-3xl font-bold text-[#141414] dark:text-white transition-colors duration-300">SA</div>
          </div>

          <h2 className="text-[#141414] dark:text-white text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300">
            Let's Work Together
          </h2>
          <p className="text-[#737373] dark:text-gray-400 text-sm max-w-2xl mb-10 transition-colors duration-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-[#141414] dark:hover:border-white hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-[#141414] dark:group-hover:bg-white transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#141414] dark:text-white group-hover:text-white dark:group-hover:text-[#0a0a0a] transition-colors duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#737373] dark:text-gray-400 text-sm font-medium mb-1 transition-colors duration-300">
                        {link.label}
                      </p>
                      <p className="text-[#141414] dark:text-white font-semibold truncate transition-colors duration-300">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center transition-colors duration-300"
        >
          <p className="text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300">
            © 2026 Sajin Abishek. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
