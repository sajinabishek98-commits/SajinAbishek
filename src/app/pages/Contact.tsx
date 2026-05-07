import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! In a real application, this would send your message.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl mb-6">
          Let's Work <span className="text-[#7dd3fc]">Together</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Have a project in mind or just want to chat? Feel free to reach out. I'm
          always open to discussing new opportunities and collaborations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl mb-8">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#7dd3fc]/10 border border-[#7dd3fc]/30 rounded-lg p-3">
                  <Mail className="text-[#7dd3fc]" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:sajinabishek98@gmail.com"
                    className="text-lg hover:text-[#7dd3fc] transition-colors"
                  >
                    sajinabishek98@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#7dd3fc]/10 border border-[#7dd3fc]/30 rounded-lg p-3">
                  <Phone className="text-[#7dd3fc]" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:6379416577"
                    className="text-lg hover:text-[#7dd3fc] transition-colors"
                  >
                    6379416577
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#7dd3fc]/10 border border-[#7dd3fc]/30 rounded-lg p-3">
                  <MapPin className="text-[#7dd3fc]" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-lg">Tuticorin, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7dd3fc]/10 to-transparent border border-[#7dd3fc]/30 rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm">Available for Work</span>
            </div>
            <p className="text-gray-300">
              Currently open to new freelance and full-time opportunities.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#7dd3fc]/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#7dd3fc]/50 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-2 text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#7dd3fc]/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7dd3fc] text-black px-8 py-4 rounded-lg hover:bg-[#7dd3fc]/90 transition-all font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
