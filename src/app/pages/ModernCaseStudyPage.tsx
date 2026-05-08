import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { projectData } from '../data/projects';
import IIMUDesignComponent from '../../imports/Group1707479481-1/Group1707479481';

export default function ModernCaseStudyPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#141414] dark:text-white mb-4 transition-colors duration-300">
            Project not found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-[#737373] dark:text-gray-400 hover:text-[#141414] dark:hover:text-white transition-colors duration-300"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const isKen42 = projectId === 'ken42';
  const isIIMU = projectId === 'iimu';
  const isMCA = projectId === 'mca';

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-24 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[#737373] dark:text-gray-400 hover:text-[#141414] dark:hover:text-white transition-colors duration-300 mb-12"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to work
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-[#737373] dark:text-gray-400 text-sm font-medium mb-3 transition-colors duration-300">{project.category}</p>
          <h1 className="text-[#141414] dark:text-white text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300">
            {project.title}
          </h1>
          <p className="text-[#737373] dark:text-gray-400 text-lg transition-colors duration-300">{project.subtitle}</p>
        </motion.div>

        {/* Metadata */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 min-w-[150px] p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300"
          >
            <p className="text-[#737373] dark:text-gray-400 text-sm font-medium mb-2 transition-colors duration-300">Company</p>
            <p className="text-[#141414] dark:text-white font-semibold transition-colors duration-300">
              {project.metadata.company}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex-1 min-w-[150px] p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300"
          >
            <p className="text-[#737373] dark:text-gray-400 text-sm font-medium mb-2 transition-colors duration-300">Role</p>
            <p className="text-[#141414] dark:text-white font-semibold transition-colors duration-300">
              {project.metadata.role}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 min-w-[150px] p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300"
          >
            <p className="text-[#737373] dark:text-gray-400 text-sm font-medium mb-2 transition-colors duration-300">Expertise</p>
            <p className="text-[#141414] dark:text-white font-semibold transition-colors duration-300">
              {project.metadata.expertise}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex-1 min-w-[150px] p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300"
          >
            <p className="text-[#737373] dark:text-gray-400 text-sm font-medium mb-2 transition-colors duration-300">Year</p>
            <p className="text-[#141414] dark:text-white font-semibold transition-colors duration-300">
              {project.metadata.year}
            </p>
          </motion.div>
        </div>

        {/* Project Image */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-12"
        >
          <div className="w-full">
            <img
              src={project.image || '/src/imports/image-22.png'}
              alt={project.title}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.section>

        {/* Ken42 Special Layout */}
        {isKen42 && (
          <>
            {/* Context */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Context
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.context}
              </p>
            </motion.section>

            {/* Goals */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">Goals</h2>
              <ul className="space-y-2.5">
                {project.goals.map((goal: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Contributions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                My Contributions
              </h2>
              <ul className="space-y-2.5">
                {project.contributions.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Design Approach */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">
                Design Approach
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#141414] dark:text-white text-lg font-semibold mb-3 transition-colors duration-300">
                    Research & Ideation
                  </h3>
                  <ul className="space-y-2">
                    {project.designApproach.research.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                        >
                          <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#141414] dark:text-white text-lg font-semibold mb-3 transition-colors duration-300">
                    Design System
                  </h3>
                  <ul className="space-y-2">
                    {project.designApproach.designSystem.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                        >
                          <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#141414] dark:text-white text-lg font-semibold mb-3 transition-colors duration-300">
                    UI Execution
                  </h3>
                  <ul className="space-y-2">
                    {project.designApproach.uiExecution.map(
                      (item: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                        >
                          <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                            •
                          </span>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                QA & Validation
              </h2>
              <ul className="space-y-2.5">
                {project.qaValidation.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Impact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">Impact</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {project.impact.map(
                  (
                    item: {
                      emoji: string;
                      title: string;
                      description: string;
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                    >
                      <div className="text-3xl mb-3">{item.emoji}</div>
                      <h3 className="text-[#141414] dark:text-white font-bold text-base mb-1.5 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300">{item.description}</p>
                    </div>
                  )
                )}
              </div>
            </motion.section>

            {/* Learnings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Key Learnings
              </h2>
              <ul className="space-y-2.5">
                {project.learnings.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </>
        )}

        {/* IIMU Layout */}
        {isIIMU && (
          <>
            {/* Design Component */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <div className="w-full rounded-2xl overflow-hidden bg-white">
                <IIMUDesignComponent />
              </div>
            </motion.section>

            {/* Context */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Overview
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.context}
              </p>
            </motion.section>

            {/* Problem Statement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Problem Statement
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.problemStatement}
              </p>
            </motion.section>

            {/* Goals */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">Goal</h2>
              <ul className="space-y-2.5">
                {project.goals.map((goal: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Users */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">Users</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.users.map((user: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                  >
                    <h3 className="text-[#141414] dark:text-white font-bold text-lg mb-3 transition-colors duration-300">
                      {user.type}
                    </h3>
                    <ul className="space-y-2">
                      {user.activities.map((activity: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                        >
                          <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                            •
                          </span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Key Design Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Key Design Challenge
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.keyChallenge}
              </p>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">
                Solution
              </h2>
              <div className="space-y-8">
                {Object.values(project.solution).map((sol: any, index: number) => (
                  <div key={index} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300">
                    <h3 className="text-[#141414] dark:text-white text-lg font-semibold mb-3 transition-colors duration-300">
                      {sol.title}
                    </h3>
                    {sol.description && (
                      <p className="text-[#737373] dark:text-gray-400 text-sm mb-3 leading-relaxed transition-colors duration-300">
                        {sol.description}
                      </p>
                    )}
                    {sol.impact && (
                      <ul className="space-y-2">
                        {sol.impact.map((item: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                          >
                            <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {sol.features && (
                      <ul className="space-y-2">
                        {sol.features.map((item: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                          >
                            <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* My Role */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                My Role
              </h2>
              <ul className="space-y-2.5">
                {project.myRole.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Impact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">Impact</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {project.impact.map(
                  (
                    item: {
                      emoji: string;
                      title: string;
                      description: string;
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                    >
                      <div className="text-3xl mb-3">{item.emoji}</div>
                      <h3 className="text-[#141414] dark:text-white font-bold text-base mb-1.5 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300">{item.description}</p>
                    </div>
                  )
                )}
              </div>
            </motion.section>

            {/* Key Learnings */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Key Learnings
              </h2>
              <ul className="space-y-2.5">
                {project.learnings.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-base transition-colors duration-300"
                  >
                    <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </>
        )}

        {/* MCA (Mumbai T20) Layout */}
        {isMCA && (
          <>
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Overview
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.overview}
              </p>
            </motion.section>

            {/* Problem */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Problem
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.problem}
              </p>
            </motion.section>

            {/* Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Challenge
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.challenge}
              </p>
            </motion.section>

            {/* Approach */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">
                Approach
              </h2>
              <div className="space-y-6">
                {project.approach.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300"
                  >
                    <h3 className="text-[#141414] dark:text-white text-lg font-semibold mb-3 transition-colors duration-300">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-[#737373] dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">
                Solution
              </h2>
              <div className="space-y-6">
                {project.solution.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                  >
                    <h3 className="text-[#141414] dark:text-white text-lg font-semibold mb-3 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.points.map((point: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300"
                        >
                          <span className="text-[#141414] dark:text-white font-bold mt-0.5 transition-colors duration-300">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Key Design Decisions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">
                Key Design Decisions
              </h2>
              <div className="space-y-4">
                {project.keyDesignDecisions.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300"
                  >
                    <h3 className="text-[#141414] dark:text-white font-bold text-base mb-2 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#737373] dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Collaboration */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-4 transition-colors duration-300">
                Collaboration
              </h2>
              <p className="text-[#737373] dark:text-gray-400 text-base leading-relaxed transition-colors duration-300">
                {project.collaboration}
              </p>
            </motion.section>

            {/* Impact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-[#141414] dark:text-white text-2xl font-bold mb-6 transition-colors duration-300">Impact</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {project.impact.map(
                  (
                    item: {
                      emoji: string;
                      title: string;
                      description: string;
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                    >
                      <div className="text-3xl mb-3">{item.emoji}</div>
                      <h3 className="text-[#141414] dark:text-white font-bold text-base mb-1.5 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#737373] dark:text-gray-400 text-sm transition-colors duration-300">{item.description}</p>
                    </div>
                  )
                )}
              </div>
            </motion.section>

            {/* Key Insight */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="p-6 bg-[#141414] dark:bg-white text-white dark:text-[#0a0a0a] rounded-xl transition-colors duration-300"
            >
              <h2 className="text-lg font-bold mb-3">Key Insight</h2>
              <p className="text-base leading-relaxed opacity-90 dark:opacity-100">
                {project.insight}
              </p>
            </motion.section>
          </>
        )}

        {/* Navigation to next project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
        >
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-[#141414] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-semibold"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            View all projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}
