import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { projectData } from '../data/projects';

export default function CaseStudyPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId || ''];

  if (!project) {
    return (
      <main className="lg:ml-64 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#141414] mb-4">
            Project not found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline"
          >
            Back to home
          </button>
        </div>
      </main>
    );
  }

  const isKen42 = projectId === 'ken42';

  return (
    <main className="lg:ml-64">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[#737373] hover:text-[#141414] mb-12 transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to projects</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-[#737373] text-sm tracking-wide uppercase mb-4 font-medium">
            {project.category}
          </p>
          <h1 className="text-[#141414] text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-[#737373] text-xl lg:text-2xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Metadata */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200">
            <div>
              <p className="text-[#737373] text-sm mb-1">Company</p>
              <p className="text-[#141414] font-medium">
                {project.metadata.company}
              </p>
            </div>
            <div>
              <p className="text-[#737373] text-sm mb-1">Role</p>
              <p className="text-[#141414] font-medium">
                {project.metadata.role}
              </p>
            </div>
            <div>
              <p className="text-[#737373] text-sm mb-1">Expertise</p>
              <p className="text-[#141414] font-medium text-sm">
                {project.metadata.expertise}
              </p>
            </div>
            <div>
              <p className="text-[#737373] text-sm mb-1">Year</p>
              <p className="text-[#141414] font-medium">
                {project.metadata.year}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border border-gray-200">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-[#737373]">Project visuals</p>
            </div>
          </div>
        </motion.div>

        {/* Ken42 Special Layout */}
        {isKen42 ? (
          <div className="space-y-20">
            {/* Context */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">Context</h2>
              <p className="text-[#737373] text-lg leading-relaxed">
                {project.context}
              </p>
            </motion.section>

            {/* Goals */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">Goals</h2>
              <ul className="space-y-3">
                {project.goals.map((goal: string, index: number) => (
                  <li
                    key={index}
                    className="text-[#737373] text-lg leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-blue-600 mt-1.5">—</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* My Contribution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">
                My Contribution
              </h2>
              <ul className="space-y-3">
                {project.contributions.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-[#737373] text-lg leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-blue-600 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Design Approach */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-8">
                Design Approach
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-[#141414] text-xl font-semibold mb-4">
                    Research & Wireframing
                  </h3>
                  <ul className="space-y-2">
                    {project.designApproach.research.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="text-[#737373] leading-relaxed flex items-start gap-3"
                        >
                          <span className="text-blue-600 mt-1.5">—</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#141414] text-xl font-semibold mb-4">
                    Design System
                  </h3>
                  <ul className="space-y-2">
                    {project.designApproach.designSystem.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="text-[#737373] leading-relaxed flex items-start gap-3"
                        >
                          <span className="text-blue-600 mt-1.5">—</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#141414] text-xl font-semibold mb-4">
                    UI Execution
                  </h3>
                  <p className="text-[#737373] mb-3">
                    Designed clean, intuitive interfaces across:
                  </p>
                  <ul className="space-y-2">
                    {project.designApproach.uiExecution.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="text-[#737373] leading-relaxed flex items-start gap-3"
                        >
                          <span className="text-blue-600 mt-1.5">—</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* QA & Validation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">
                QA & Validation
              </h2>
              <ul className="space-y-3">
                {project.qaValidation.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-[#737373] text-lg leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-blue-600 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Impact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-8">Impact</h2>
              <div className="space-y-6">
                {project.impact.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-[#141414] font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#737373]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Key Learnings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">
                Key Learnings
              </h2>
              <ul className="space-y-3">
                {project.learnings.map((learning: string, index: number) => (
                  <li
                    key={index}
                    className="text-[#737373] text-lg leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-blue-600 mt-1.5">—</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        ) : (
          <div className="space-y-20">
            {/* Standard Layout for other projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">Overview</h2>
              <p className="text-[#737373] text-lg leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">Problem</h2>
              <p className="text-[#737373] text-lg leading-relaxed">
                {project.problem}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">
                Challenge
              </h2>
              <p className="text-[#737373] text-lg leading-relaxed">
                {project.challenge}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">
                Approach
              </h2>
              <p className="text-[#737373] text-lg leading-relaxed">
                {project.approach}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#141414] text-3xl font-bold mb-6">
                Solution
              </h2>
              <p className="text-[#737373] text-lg leading-relaxed">
                {project.solution}
              </p>
            </motion.section>

            {project.insight && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-8"
              >
                <h3 className="text-blue-900 text-xl font-semibold mb-3">
                  Key Insight
                </h3>
                <p className="text-blue-800 text-lg leading-relaxed">
                  {project.insight}
                </p>
              </motion.section>
            )}
          </div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-gray-200"
        >
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-[#141414] hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to all projects</span>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
