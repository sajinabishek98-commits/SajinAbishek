import { X, Calendar, Briefcase, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { projectData } from '../data/projects';

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectData[projectId];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) {
    return null;
  }

  const isKen42 = projectId === 'ken42';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <div className="relative min-h-screen flex items-start justify-center p-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white border border-gray-200 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 right-4 float-right z-10 bg-gray-100 border border-gray-200 rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-12">
                <p className="text-blue-600 mb-4">{project.category}</p>
                <h1 className="text-4xl md:text-5xl mb-4 text-[#141414]">{project.title}</h1>
                <p className="text-xl text-[#737373] mb-8">{project.subtitle}</p>

                {/* Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm">
                      <Briefcase size={16} />
                      <p>Company</p>
                    </div>
                    <p>{project.metadata.company}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm">
                      <Target size={16} />
                      <p>Role</p>
                    </div>
                    <p className="text-sm">{project.metadata.role}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm">
                      <Target size={16} />
                      <p>Expertise</p>
                    </div>
                    <p className="text-sm">{project.metadata.expertise}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm">
                      <Calendar size={16} />
                      <p>Year</p>
                    </div>
                    <p>{project.metadata.year}</p>
                  </div>
                </div>
              </div>

              {/* Project Image Placeholder */}
              <div className="mb-12">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-white/10 flex items-center justify-center">
                  <p className="text-[#737373]">Project Screenshot</p>
                </div>
              </div>

              {/* Ken42 Special Layout */}
              {isKen42 ? (
                <>
                  {/* Context */}
                  <div className="mb-12">
                    <h2 className="text-3xl mb-4 text-[#141414]">Context</h2>
                    <p className="text-lg text-[#737373] leading-relaxed">
                      {project.context}
                    </p>
                  </div>

                  {/* Goal */}
                  <div className="mb-12">
                    <h2 className="text-3xl mb-6">🎯 Goal</h2>
                    <ul className="space-y-3">
                      {project.goals.map((goal: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-lg">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-[#737373]">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* My Contribution */}
                  <div className="mb-12">
                    <h2 className="text-3xl mb-6">🧠 My Contribution</h2>
                    <ul className="space-y-3">
                      {project.contributions.map((contribution: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-lg">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-[#737373]">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Design Approach */}
                  <div className="mb-12">
                    <h2 className="text-3xl mb-6">🧠 Design Approach</h2>
                    <div className="space-y-8">
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl mb-4 text-blue-600">Research & Wireframing</h3>
                        <ul className="space-y-2">
                          {project.designApproach.research.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-[#737373]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl mb-4 text-blue-600">Design System</h3>
                        <ul className="space-y-2">
                          {project.designApproach.designSystem.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-[#737373]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-xl mb-4 text-blue-600">UI Execution</h3>
                        <p className="text-gray-400 mb-3">Designed clean, intuitive interfaces across:</p>
                        <ul className="space-y-2">
                          {project.designApproach.uiExecution.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-[#737373]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* QA & Validation */}
                  <div className="mb-12">
                    <h2 className="text-3xl mb-6">🔍 QA & Validation</h2>
                    <ul className="space-y-3">
                      {project.qaValidation.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-lg">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-[#737373]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="mb-12">
                    <h2 className="text-3xl mb-6">📈 Impact</h2>
                    <div className="space-y-4">
                      {project.impact.map((item: any, index: number) => (
                        <div
                          key={index}
                          className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-3xl">{item.emoji}</span>
                            <div>
                              <h3 className="text-lg mb-2">{item.title}</h3>
                              <p className="text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Learnings */}
                  <div className="mb-8">
                    <h2 className="text-3xl mb-6">💡 Key Learnings</h2>
                    <ul className="space-y-3">
                      {project.learnings.map((learning: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-lg">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-[#737373]">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  {/* Standard Layout for other projects */}
                  <div className="space-y-10 mb-12">
                    <div>
                      <h2 className="text-3xl mb-4 text-[#141414]">Overview</h2>
                      <p className="text-lg text-[#737373] leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-3xl mb-4 text-[#141414]">Problem</h2>
                      <p className="text-lg text-[#737373] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-3xl mb-4 text-[#141414]">Challenge</h2>
                      <p className="text-lg text-[#737373] leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-3xl mb-4 text-[#141414]">Approach</h2>
                      <p className="text-lg text-[#737373] leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-3xl mb-4 text-[#141414]">Solution</h2>
                      <p className="text-lg text-[#737373] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {project.timeline && (
                    <div className="mb-12">
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-2xl mb-2">Timeline</h3>
                        <p className="text-lg text-[#737373]">
                          Completed in {project.timeline}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.metrics && (
                    <div className="mb-12">
                      <h2 className="text-4xl mb-6">Impact & Metrics</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.metrics.map((metric: any, index: number) => (
                          <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center"
                          >
                            <div className="text-3xl text-blue-600 mb-2">
                              {metric.value}
                            </div>
                            <p className="text-gray-400 text-sm">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.impact && (
                    <div className="mb-12">
                      <h2 className="text-4xl mb-6">Key Results</h2>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.impact.map((item: any, index: number) => (
                          <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all"
                          >
                            <div className="text-4xl text-blue-600 mb-3">
                              {item.percentage}
                            </div>
                            <p className="text-[#737373]">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.principles && (
                    <div className="mb-12">
                      <h2 className="text-4xl mb-6">Design Principles</h2>
                      <ul className="space-y-3">
                        {project.principles.map((principle: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-lg"
                          >
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-[#737373]">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.insight && (
                    <div className="mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                        <h3 className="text-2xl mb-4 text-blue-600">Key Insight</h3>
                        <p className="text-xl text-[#141414] leading-relaxed">
                          {project.insight}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
