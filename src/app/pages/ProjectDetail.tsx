import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Briefcase, Target, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProjectDetail() {
  const { projectId } = useParams();

  const projectData: Record<string, any> = {
    'mumbai-t20': {
      title: 'Mumbai T20',
      subtitle: 'Designing a Real-Time Cricket Experience in 7 Days',
      category: 'Mobile App - Case Study',
      metadata: {
        company: 'Mumbai T20',
        role: 'Product Designer',
        expertise: 'Mobile UX/UI, Information Architecture',
        year: '2024',
      },
      overview:
        'Mumbai T20 aimed to launch a mobile application to help cricket fans track live matches, player stats, and team performance in real time. I led the end-to-end design, from structuring the product to delivering production-ready UI for both iOS and Android platforms.',
      problem:
        'Cricket is inherently data-dense and fast-moving, but existing experiences often overload users with too much information and make it difficult to quickly access key match updates. Users needed a way to instantly check live scores, understand match context quickly, and navigate across stats, teams, and players without friction.',
      challenge:
        'How do we design an experience where users can understand live match data in seconds, especially during ongoing matches?',
      approach:
        'Started with information-first thinking by structuring the data before designing screens. Prioritized live match data as the primary layer and organized supporting information around it. Designed for real usage context where the app is used during live matches, focusing on quick scanning, minimal cognitive load, and fast navigation. Defined clear sections based on user intent: Home (live matches), Match Stats, Points Table, and Teams & Players.',
      solution:
        'Created a scannable data experience by structuring complex data into clear, modular layouts. Used hierarchy and spacing to guide attention and highlighted key information. Enabled real-time match flow with quick access to live scores, ball-by-ball commentary, and scorecards. Implemented a dark theme visual system optimized for long viewing sessions with improved contrast for readability.',
      timeline: '7 days',
      metrics: [
        { value: '40%', label: 'Improved usability' },
        { value: '30%', label: 'Faster information access' },
        { value: '7', label: 'Days to production' },
        { value: '2', label: 'Platforms (iOS & Android)' },
      ],
      impact: [
        { percentage: '40%', description: 'Improved usability through better structure' },
        { percentage: '30%', description: 'Reduced time to access key info' },
        { percentage: '100%', description: 'Production-ready in 7 days' },
      ],
      principles: [
        'Clarity over density',
        'Speed of access',
        'Consistency across screens',
        'Information-first thinking',
      ],
      insight:
        'In real-time experiences, users don\'t explore - they scan and decide quickly. Designing for speed and clarity had the biggest impact on usability.',
      collaboration:
        'Worked closely with developers to ensure accurate implementation. Backend powered by Salesforce for real-time data. Conducted QA reviews to refine usability and fix edge cases.',
    },
    ken42: {
      title: 'Ken42',
      subtitle: 'Redesigning a Fragmented Higher-Ed Platform into a Scalable System',
      category: 'Web App - Case Study',
      metadata: {
        company: 'Ken42',
        role: 'Associate Product Designer',
        expertise: 'UX/UI Design, Design Systems',
        year: '2024-2025',
      },
      overview:
        'Ken42 is a higher-ed platform used by students, faculty, and administrators to manage academic workflows. As an Associate Product Designer, I worked on redesigning a legacy system that had grown fragmented over time. The platform struggled with inconsistent experiences across portals, outdated UI patterns, and high friction in critical user journeys. The goal was not just visual improvement, but to restructure the experience into a scalable, efficient, and system-driven product.',
      problem:
        'The existing product had several usability and system-level challenges: fragmented user experience across multiple portals, outdated UI patterns that reduced usability, high friction in critical flows like login, navigation, and dashboard access, and lack of consistency across student, faculty, and admin interfaces. These issues resulted in longer task completion times, confusion, and reduced efficiency across user roles.',
      challenge:
        'Redesign the platform to create a unified, scalable, and user-friendly experience. Key objectives: improve usability across all user roles, increase conversion rates in key flows (especially login and onboarding), reduce task completion time across workflows, and build a scalable, white-label-ready design system.',
      approach:
        'Research & Structure: Audited existing user flows to identify friction points, simplified complex journeys into clear structured flows, and created low-fidelity wireframes to establish hierarchy and clarity. Design System Thinking: Built a consistent system of typography, colors, and components with minimal and neutral UI to support white-label flexibility and ensure scalability across multiple institutions. UI Execution: Designed intuitive and structured interfaces across Student Portal (attendance, exams, events, academic tracking), Faculty Portal (academic workflows and management tools), and Admin Portal (system configuration and operational control). The focus was on clarity, speed, and consistency across all user roles.',
      solution:
        'I contributed across the full redesign lifecycle, focusing on both experience and system-level improvements. Led redesign efforts across student, faculty, and admin portals. Simplified navigation and restructured dashboards, improving task efficiency. Improved onboarding and authentication flows, increasing login success by ~20-25%. Designed key workflows across academic and administrative systems. Supported creation of a scalable design system for white-label deployment. Delivered reusable components and interactive prototypes for faster development. To ensure quality: conducted continuous UI/UX reviews during development, maintained structured bug tracking for design consistency, performed functional testing in real-world scenarios, and iterated designs based on usability feedback.',
      timeline: 'Multi-phase project',
      metrics: [
        { value: '30%', label: 'Faster task completion' },
        { value: '20-25%', label: 'Improved login success' },
        { value: '3', label: 'Portals redesigned' },
        { value: '100%', label: 'White-label ready system' },
      ],
      impact: [
        { percentage: '30%', description: 'Faster task completion' },
        { percentage: '25%', description: 'Improved login success rate' },
        { percentage: '100%', description: 'Scalable design system delivered' },
      ],
      principles: [
        'Designing systems early significantly improves scalability',
        'Minimal and neutral UI is essential for white-label products',
        'Continuous QA reduces post-launch issues and inconsistencies',
        'Small UX improvements can drive meaningful efficiency gains',
      ],
      insight:
        'Designing for multiple user roles requires more than UI consistency - it demands a shared system that balances flexibility, clarity, and scalability.',
      collaboration:
        'Collaborated closely with engineering to resolve inconsistencies and ensure accuracy. Delivered reusable components and interactive prototypes for faster development. Participated in usability testing and iterated based on real user behavior. Improved developer efficiency through structured components and clear handoff.',
    },
    iimu: {
      title: 'IIMU',
      subtitle: 'Educational institution website redesign',
      category: 'Website - Case Study',
      metadata: {
        company: 'IIMU',
        role: 'UI Designer',
        expertise: 'Web Design, Branding',
        year: '2024',
      },
      overview:
        'IIMU needed a modern website redesign to better represent their institution and improve the user experience for prospective students and faculty.',
      problem:
        'The existing website had outdated design, poor navigation, and low conversion rates for applications.',
      challenge:
        "Create a modern, accessible website that showcases the institution's values while making it easy for users to find information and apply.",
      approach:
        "Conducted stakeholder interviews, analyzed competitor websites, and created a comprehensive design system aligned with the institution's branding.",
      solution:
        'Designed a clean, modern website with improved information architecture, clear CTAs, and an intuitive application flow.',
      timeline: '6 weeks',
      metrics: [
        { value: '45%', label: 'Increase in applications' },
        { value: '60%', label: 'Reduction in bounce rate' },
        { value: '35%', label: 'Faster page load time' },
        { value: '5', label: 'Main sections redesigned' },
      ],
      impact: [
        { percentage: '45%', description: 'More applications submitted' },
        { percentage: '60%', description: 'Lower bounce rate' },
        { percentage: '80%', description: 'Positive user feedback' },
      ],
      principles: [
        'Accessible design for all users',
        'Clear information hierarchy',
        'Mobile-first approach',
        'Brand consistency',
      ],
      insight:
        'First impressions matter. A clean, professional design builds trust and credibility.',
    },
    mca: {
      title: 'MCA',
      subtitle: 'Course management application for students',
      category: 'Web App - Case Study',
      metadata: {
        company: 'MCA Program',
        role: 'Product Designer',
        expertise: 'UX/UI Design, Prototyping',
        year: '2025',
      },
      overview:
        'MCA is a course management application designed to help students organize their coursework, track assignments, and collaborate with peers.',
      problem:
        'Students were using multiple disconnected tools to manage their courses, leading to missed deadlines and disorganized workflows.',
      challenge:
        'Create a unified platform that brings together course materials, assignments, and collaboration tools in one seamless experience.',
      approach:
        'Conducted user interviews with students, analyzed existing workflows, and created prototypes to test different organizational approaches.',
      solution:
        'Developed an intuitive dashboard with course cards, deadline tracking, and integrated collaboration features. Implemented smart notifications and calendar integration.',
      timeline: '10 weeks',
      metrics: [
        { value: '35%', label: 'Fewer missed deadlines' },
        { value: '50K', label: 'Monthly active students' },
        { value: '15-20', label: 'Daily active sessions' },
        { value: '4', label: 'Core features launched' },
      ],
      impact: [
        { percentage: '35%', description: 'Fewer missed deadlines' },
        { percentage: '55%', description: 'Better organization' },
        { percentage: '40%', description: 'Higher collaboration' },
      ],
      principles: [
        'Unified experience across tools',
        'Proactive deadline reminders',
        'Easy collaboration',
        'Clean information display',
      ],
      insight:
        'Students need simplicity and automation. Reduce cognitive load by surfacing the right information at the right time.',
    },
  };

  const project = projectData[projectId || ''];

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl mb-4">Project not found</h1>
        <Link to="/projects" className="text-[#7dd3fc] hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7dd3fc] transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-[#7dd3fc] mb-4">{project.category}</p>
        <h1 className="text-5xl md:text-6xl mb-6">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-12">{project.subtitle}</p>

        {/* Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#111111] border border-white/10 rounded-2xl p-8">
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Briefcase size={18} />
              <p className="text-sm">Company</p>
            </div>
            <p className="text-lg">{project.metadata.company}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Target size={18} />
              <p className="text-sm">Role</p>
            </div>
            <p className="text-lg">{project.metadata.role}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Target size={18} />
              <p className="text-sm">Expertise</p>
            </div>
            <p className="text-lg">{project.metadata.expertise}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Calendar size={18} />
              <p className="text-sm">Year</p>
            </div>
            <p className="text-lg">{project.metadata.year}</p>
          </div>
        </div>
      </motion.div>

      {/* Project Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="aspect-video bg-gradient-to-br from-[#7dd3fc]/20 to-transparent rounded-2xl border border-white/10 flex items-center justify-center">
          <p className="text-gray-600">Project Screenshot</p>
        </div>
      </motion.div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12 mb-20"
      >
        <div>
          <h2 className="text-3xl mb-4">Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Problem</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Challenge</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Approach</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.approach}
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">Solution</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-[#7dd3fc]" size={24} />
            <h3 className="text-2xl">Timeline</h3>
          </div>
          <p className="text-lg text-gray-300">
            Completed in {project.timeline}
          </p>
        </div>
      </motion.div>

      {/* Impact & Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl mb-8">Impact & Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.metrics.map((metric: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl text-[#7dd3fc] mb-3">{metric.value}</div>
              <p className="text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Impact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl mb-8">Key Results</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.impact.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#7dd3fc]/30 transition-all"
            >
              <div className="text-5xl text-[#7dd3fc] mb-4">
                {item.percentage}
              </div>
              <p className="text-lg text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Design Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl mb-8">Design Principles</h2>
        <ul className="space-y-4">
          {project.principles.map((principle: string, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3 text-lg"
            >
              <span className="text-[#7dd3fc] mt-1">•</span>
              <span className="text-gray-300">{principle}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="bg-gradient-to-br from-[#7dd3fc]/10 to-transparent border border-[#7dd3fc]/30 rounded-2xl p-8">
          <h3 className="text-2xl mb-4 text-[#7dd3fc]">Key Insight</h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            {project.insight}
          </p>
        </div>
      </motion.div>

      {/* Collaboration (optional) */}
      {project.collaboration && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl mb-6">Collaboration</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.collaboration}
          </p>
        </motion.div>
      )}
    </div>
  );
}
