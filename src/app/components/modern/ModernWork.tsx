import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ModernWork() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'ken42',
      title: 'Ken42',
      category: 'EdTech Platform',
      description: 'Redesigned a legacy higher-ed platform into a scalable system',
      year: '2024-2025',
      tags: ['UX/UI', 'Design Systems', 'EdTech'],
      image: '/src/imports/image-3.png',
    },
    {
      id: 'iimu',
      title: 'IIMU',
      category: 'Website Redesign',
      description: 'Modern educational institution website',
      year: '2024',
      tags: ['Web Design', 'Branding'],
      image: '/src/imports/image-15.png',
    },
    {
      id: 'mca',
      title: 'MCA',
      category: 'Mobile App',
      description: 'Real-time cricket score tracking and match analytics',
      year: '2025',
      tags: ['Mobile Design', 'Real-Time Data'],
      image: '/src/imports/image-25.png',
    },
  ];

  return (
    <section id="work" className="py-24 px-8 lg:px-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[#141414] dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300">
            Selected Work
          </h2>
          <p className="text-[#737373] dark:text-gray-400 text-base md:text-lg max-w-2xl transition-colors duration-300">
            A collection of projects showcasing my approach to product design,
            user experience, and design systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => navigate(`/case-study/${project.id}`)}
              className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-[#141414] dark:hover:border-[#E4FE52] shadow-md hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-[#737373] text-base font-medium">
                      {project.title}
                    </p>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* View Project Badge */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[#141414] dark:text-white text-sm font-medium">View Project</span>
                    <ArrowUpRight size={16} className="text-[#141414] dark:text-[#E4FE52]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <p className="text-[#737373] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 transition-colors duration-300">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="text-[#141414] dark:text-white text-2xl font-bold mb-2 group-hover:text-[#141414] dark:group-hover:text-[#E4FE52] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-[#737373] dark:text-gray-400 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
