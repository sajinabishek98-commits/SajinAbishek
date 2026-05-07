import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const projects = [
    {
      id: 'mumbai-t20',
      title: 'Mumbai T20',
      description: 'Real-time cricket experience designed and delivered in 7 days',
      category: 'Mobile App',
    },
    {
      id: 'ken42',
      title: 'Ken42',
      description: 'Redesigned legacy higher-ed platform with scalable design system',
      category: 'Web App',
    },
    {
      id: 'iimu',
      title: 'IIMU',
      description: 'Educational institution website redesign',
      category: 'Website',
    },
    {
      id: 'mca',
      title: 'MCA',
      description: 'Course management application for students',
      category: 'Web App',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center py-20">
        <div className="grid md:grid-cols-2 gap-12 w-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm">Available for Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6">
              Hey, I'm <br />
              <span className="text-[#7dd3fc]">Sajin Abishek.</span>
            </h1>

            <p className="text-xl text-gray-400 mb-4">I'm a Product Designer.</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              I'm a Product Designer with over 3 years of experience in crafting
              user-centric digital experiences. I've worked on multiple startup and
              client projects, with a growing specialization in EdTech - crafting
              seamless experiences that drive accessibility and better learning
              outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#7dd3fc] text-black px-8 py-3 rounded-lg hover:bg-[#7dd3fc]/90 transition-all font-medium inline-flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="border border-white/20 px-8 py-3 rounded-lg hover:bg-white/5 transition-all font-medium"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
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
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#7dd3fc]/30 transition-all">
            <MapPin className="text-[#7dd3fc] mb-4" size={32} />
            <h3 className="text-2xl mb-2">Location</h3>
            <p className="text-gray-400">Tuticorin, Tamil Nadu</p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#7dd3fc]/30 transition-all">
            <div className="text-[#7dd3fc] text-4xl mb-4">3+</div>
            <h3 className="text-2xl mb-2">Years</h3>
            <p className="text-gray-400">Professional Experience</p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#7dd3fc]/30 transition-all">
            <div className="text-[#7dd3fc] text-4xl mb-4">10+</div>
            <h3 className="text-2xl mb-2">Projects</h3>
            <p className="text-gray-400">Successfully Completed</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg mb-12">
            Explore some of my recent work
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7dd3fc]/50 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#7dd3fc]/20 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <p className="text-gray-600">Project Preview</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[#7dd3fc] text-sm mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl mb-2 group-hover:text-[#7dd3fc] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
