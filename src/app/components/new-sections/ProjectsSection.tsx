import { motion } from 'motion/react';
import { useState } from 'react';
import ProjectModal from '../ProjectModal';
import ken42Thumbnail from '../../../imports/image-1.png';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'ken42',
      title: 'Ken42',
      description:
        'Redesigned a fragmented higher-ed platform into a scalable, user-friendly system for students, faculty, and administrators.',
      tags: ['UX/UI Design', 'Design Systems', 'EdTech'],
      thumbnail: ken42Thumbnail,
    },
    {
      id: 'iimu',
      title: 'IIMU',
      description:
        'Modern website redesign for an educational institution to improve user experience and conversion rates.',
      tags: ['Web Design', 'Branding', 'Education'],
      thumbnail: null,
    },
    {
      id: 'mca',
      title: 'MCA',
      description:
        'Course management application helping students organize coursework, track assignments, and collaborate.',
      tags: ['UX/UI Design', 'Prototyping', 'Education'],
      thumbnail: null,
    },
  ];

  return (
    <>
      <section id="projects" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#141414] mb-3">My Projects</h2>
          <p className="text-lg text-[#737373] mb-12">
            A collection of design work spanning EdTech, web applications, and
            client projects.
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                className="group w-full text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Thumbnail */}
                  <div className="md:col-span-2 aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-400 font-medium">
                          {project.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8">
                    <h3 className="text-2xl font-semibold text-[#141414] mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#737373] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-[#737373] text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
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
