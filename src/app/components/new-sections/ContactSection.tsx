import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#141414] mb-3">Contact</h2>
        <p className="text-lg text-[#737373] mb-12">
          Let's connect and discuss your next project
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="size-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <p className="text-gray-600 text-sm text-center px-4">
                  Your Photo
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#141414] mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:sajinabishek98@gmail.com"
                    className="flex items-center gap-3 text-[#737373] hover:text-[#141414] transition-colors group"
                  >
                    <div className="p-2 bg-white border border-gray-200 rounded-lg group-hover:border-gray-300 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span>sajinabishek98@gmail.com</span>
                  </a>

                  <a
                    href="tel:6379416577"
                    className="flex items-center gap-3 text-[#737373] hover:text-[#141414] transition-colors group"
                  >
                    <div className="p-2 bg-white border border-gray-200 rounded-lg group-hover:border-gray-300 transition-colors">
                      <Phone size={18} />
                    </div>
                    <span>6379416577</span>
                  </a>

                  <div className="flex items-center gap-3 text-[#737373]">
                    <div className="p-2 bg-white border border-gray-200 rounded-lg">
                      <MapPin size={18} />
                    </div>
                    <span>Tuticorin, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-[#737373] mb-3">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <Linkedin size={20} className="text-[#737373]" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <Github size={20} className="text-[#737373]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-[#737373]">
            © 2026 Sajin Abishek. All rights reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
