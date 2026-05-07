import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'ken42',
      category: 'Higher Education Platform',
      title: 'Ken42',
      description:
        'Redesigning a fragmented higher-ed platform into a scalable, user-friendly system for students, faculty, and administrators.',
      tags: ['UX/UI Design', 'Design Systems', 'EdTech'],
      thumbnail: '/src/imports/image-1.png',
    },
    {
      id: 'iimu',
      category: 'Educational Institution',
      title: 'IIMU',
      description:
        'Modern website redesign to improve user experience and increase application conversion rates.',
      tags: ['Web Design', 'Branding', 'Education'],
      thumbnail: null,
    },
    {
      id: 'mca',
      category: 'Course Management',
      title: 'MCA',
      description:
        'Helping students organize coursework, track assignments, and collaborate seamlessly.',
      tags: ['UX/UI Design', 'Prototyping', 'Education'],
      thumbnail: null,
    },
  ];

  return (
    <section id="projects" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-20">
          <h2 className="text-[#141414] text-4xl lg:text-5xl font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-[#737373] text-lg max-w-2xl">
            A collection of projects spanning EdTech platforms, web applications,
            and institutional design systems.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => navigate(`/case-study/${project.id}`)}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] bg-white rounded-xl overflow-hidden mb-8 border border-gray-200 shadow-sm group-hover:shadow-lg transition-all duration-500">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    <p className="text-[#737373] text-lg font-medium">
                      {project.title}
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-[#737373] text-sm tracking-wide uppercase font-medium">
                  {project.category}
                </p>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[#141414] text-3xl lg:text-4xl font-bold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={28}
                    className="text-[#737373] group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1"
                  />
                </div>

                <p className="text-[#737373] text-lg leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-white border border-gray-200 text-[#737373] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
