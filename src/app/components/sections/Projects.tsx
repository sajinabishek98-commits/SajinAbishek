import { motion } from 'motion/react';
import { useState } from 'react';
import ProjectModal from '../ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
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
    <>
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            My <span className="text-[#7dd3fc]">Projects</span>
          </h2>
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
              <button
                onClick={() => setSelectedProject(project.id)}
                className="group block bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#7dd3fc]/50 transition-all hover:shadow-lg hover:shadow-[#7dd3fc]/10 w-full text-left"
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
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
