import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 pb-20 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[#141414] text-4xl lg:text-5xl font-bold mb-16">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="text-[#737373] text-lg leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:sajinabishek98@gmail.com"
                className="group flex items-center gap-4 text-[#141414] hover:text-blue-600 transition-colors"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-lg group-hover:border-blue-600 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#737373] mb-0.5">Email</p>
                  <p className="text-lg font-medium">sajinabishek98@gmail.com</p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-4 text-[#141414] hover:text-blue-600 transition-colors"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-lg group-hover:border-blue-600 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#737373] mb-0.5">LinkedIn</p>
                  <p className="text-lg font-medium">Connect with me</p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-4 text-[#141414] hover:text-blue-600 transition-colors"
              >
                <div className="p-3 bg-white border border-gray-200 rounded-lg group-hover:border-blue-600 transition-colors">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#737373] mb-0.5">Portfolio</p>
                  <p className="text-lg font-medium">View more work</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full">
              <div className="aspect-square max-w-sm bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-200">
                <p className="text-[#737373] text-center px-8">
                  Your profile photo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-200 text-center">
          <p className="text-[#737373]">
            © 2026 Sajin Abishek. Designed & built with care.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
