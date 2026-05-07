import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      id: 'mumbai-t20',
      title: 'Mumbai T20',
      description: 'Real-time cricket experience designed and delivered in 7 days',
      category: 'Mobile App - Case Study',
    },
    {
      id: 'ken42',
      title: 'Ken42',
      description: 'Redesigned legacy higher-ed platform with scalable design system',
      category: 'Web App - Case Study',
    },
    {
      id: 'iimu',
      title: 'IIMU',
      description: 'Educational institution website redesign',
      category: 'Website - Case Study',
    },
    {
      id: 'mca',
      title: 'MCA',
      description: 'Course management application for students',
      category: 'Web App - Case Study',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl mb-6">
          My <span className="text-[#7dd3fc]">Projects</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A collection of design work spanning EdTech, web applications, and client
          projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
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
              className="group block bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7dd3fc]/50 transition-all hover:shadow-lg hover:shadow-[#7dd3fc]/10"
            >
              <div className="aspect-video bg-gradient-to-br from-[#7dd3fc]/20 to-transparent flex items-center justify-center relative overflow-hidden">
                <p className="text-gray-600 z-10">Project Preview</p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#7dd3fc]/0 to-[#7dd3fc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <p className="text-[#7dd3fc] text-sm mb-3">{project.category}</p>
                <h3 className="text-2xl mb-3 group-hover:text-[#7dd3fc] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
