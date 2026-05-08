import ken42HeroImage from '../../imports/image-22.png';
import iimuHeroImage from '../../imports/image-30.png';
import mcaHeroImage from '../../imports/image-29.png';

export const projectData: Record<string, any> = {
  ken42: {
    title: 'Ken42',
    subtitle: 'Redesigning a Legacy Higher-Ed Platform',
    category: 'Web App - Case Study',
    image: ken42HeroImage,
    metadata: {
      company: 'Ken42',
      role: 'Associate Product Designer',
      expertise: 'UX/UI Design, Design Systems',
      year: '2024-2025',
    },
    context:
      'At Ken42, I worked as an Associate Product Designer on redesigning a legacy higher-ed platform used by students, faculty, and administrators. The product had: Fragmented user experience across portals, Outdated UI patterns, High friction in key flows like sign-in and navigation.',
    goals: [
      'Improve usability across all user roles',
      'Increase conversion rates in key flows',
      'Reduce task completion time',
      'Build a scalable, white-label-ready design system',
    ],
    contributions: [
      'Contributed to the end-to-end redesign across student, faculty, and admin portals',
      'Simplified navigation and restructured dashboards, leading to ~30% faster task completion',
      'Improved onboarding and authentication flows, increasing login success rate by ~20-25%',
      'Supported the creation of a scalable design system (typography, colors, components) for white-label deployment',
      'Designed key user experiences across multi-portal interfaces (dashboards, academic workflows, admin tools)',
      'Collaborated closely with engineering, conducting UI/UX reviews and resolving design inconsistencies',
      'Delivered component libraries and interactive prototypes to improve developer handoff efficiency',
      'Participated in usability testing and functional validation, iterating based on real user behavior',
    ],
    designApproach: {
      research: [
        'Audited existing flows and identified friction points',
        'Created low-fidelity wireframes to simplify structure and hierarchy',
      ],
      designSystem: [
        'Established typography, color, and component systems',
        'Used minimal, neutral visual style to support white-label flexibility',
      ],
      uiExecution: [
        'Student Portal (attendance, exams, events, etc.)',
        'Faculty Portal (academic workflows)',
        'Admin Portal (system management)',
      ],
    },
    qaValidation: [
      'Conducted continuous UI/UX reviews during development',
      'Maintained bug sheets to ensure design consistency',
      'Performed functional testing for real-world scenarios',
    ],
    impact: [
      {
        emoji: '⚡',
        title: 'Faster task completion across student and faculty portals',
        description: '~30% improvement',
      },
      {
        emoji: '🧭',
        title: 'Improved usability and navigation clarity',
        description: 'Users completed tasks with fewer steps and less confusion',
      },
      {
        emoji: '🎯',
        title: 'Reduced friction in key user journeys',
        description: 'Especially in login, dashboard access, and core workflows',
      },
      {
        emoji: '🧩',
        title: 'Scalable design system for white-label deployment',
        description: 'Enabled faster customization for different institutions',
      },
      {
        emoji: '🤝',
        title: 'Seamless developer handoff',
        description:
          'Delivered structured components and prototypes, improving implementation efficiency',
      },
    ],
    learnings: [
      'Designing systems early improves scalability',
      'Minimal design is essential for white-label products',
      'Continuous QA significantly reduces post-launch issues',
      'Small UX improvements can drive measurable efficiency gains',
    ],
  },
  iimu: {
    title: 'IIMU',
    subtitle: 'Application Portal - Product Design Case Study',
    category: 'Web App - Case Study',
    image: iimuHeroImage,
    metadata: {
      company: 'IIM Udaipur',
      role: 'Product Designer',
      expertise: 'UX/UI Design, System Architecture',
      year: '2024',
    },
    context:
      'The Indian Institute of Management Udaipur Application Portal is a dual-platform system designed to streamline how students apply to programs-either independently or through institutional partnerships. The product consists of two core experiences: Individual Portal (student-driven applications) and Group Portal (faculty/partner-driven nominations).',
    goals: [
      'Design a unified application ecosystem that supports both self-serve and assisted journeys',
      'Enable real-time tracking and reduce friction across the process',
      'Unify parallel journeys into a single, scalable system',
      'Ensure clarity, flexibility, and transparency for all users',
    ],
    problemStatement:
      'Prior to this system, applications were handled through fragmented workflows: Manual coordination between faculty and students, No real-time visibility into application progress, Redundant data entry across multiple systems, Missed deadlines due to lack of tracking.',
    users: [
      {
        type: 'Students',
        activities: [
          'Apply to programs',
          'Complete application forms and payments',
          'Track progress in real time',
        ],
      },
      {
        type: 'Faculty / Partner Organizations',
        activities: [
          'Nominate students',
          'Manage bulk applications',
          'Track progress and deadlines',
        ],
      },
    ],
    productStructure: {
      individualPortal: [
        'Home',
        'Programs',
        'Profile Information',
        'Billings',
        'Support',
      ],
      groupPortal: [
        'Home',
        'Organization Information',
        'Programs',
        'Nomination',
        'Billings',
        'Support',
      ],
    },
    keyChallenge:
      'Designing for two interconnected user journeys: Independent flow (student-first) and Assisted flow (faculty-first). Both flows needed to operate on a shared backend logic, support flexible ownership models, and avoid duplication and user confusion.',
    solution: {
      unifiedWorkflow: {
        title: 'Unified Workflow Architecture',
        description:
          'I designed a shared application lifecycle that works across both portals with a clear Application Status Timeline: Nominated -> Invite Sent -> Application Started -> Application Submitted -> Filled by Faculty -> Deadline Missed -> Published -> Locked',
        impact: [
          'Established a single source of truth',
          'Enabled clear ownership transitions (faculty &lt;-&gt; student)',
          'Provided real-time visibility to all stakeholders',
        ],
      },
      dualEntry: {
        title: 'Dual-Entry System',
        description:
          'Enabled both students to apply independently and faculty to initiate and complete applications',
        impact: [
          'Reduced drop-offs when students were inactive',
          'Supported institutions that preferred centralized control',
        ],
      },
      realTimeTracking: {
        title: 'Real-Time Tracking System',
        features: [
          'Status updates visible to both users',
          'Eliminated dependency on email follow-ups',
          'Improved transparency and trust',
        ],
      },
      modularIA: {
        title: 'Modular Information Architecture',
        description:
          'Both portals were designed with consistent mental models: Similar navigation structures and Shared components (billing, support, program views)',
        impact: [
          'Reduced learning curve',
          'Faster adoption',
          'Lower design and development complexity',
        ],
      },
    },
    myRole: [
      'Defined end-to-end system architecture for both portals',
      'Designed user flows for student and partner journeys',
      'Designed Student + Partner portals from scratch',
      'Built scalable flows supporting multiple application types',
      'Conducted usability evaluations and iterations',
      'Improved clarity in workflows and status tracking',
      'Reduced friction across key interaction points',
    ],
    impact: [
      {
        emoji: '⬇️',
        title: 'Reduced application drop-offs',
        description: '~20-30% through assisted flows',
      },
      {
        emoji: '⬆️',
        title: 'Increased application completion rates',
        description: 'via flexible ownership',
      },
      {
        emoji: '⬇️',
        title: 'Reduced support queries',
        description: 'related to application status',
      },
      {
        emoji: '⬆️',
        title: 'Improved visibility and trust',
        description: 'through real-time tracking',
      },
    ],
    learnings: [
      'Designing for multi-actor systems requires clear ownership transitions',
      'A shared lifecycle model simplifies complex workflows',
      'Flexibility in control (student vs faculty) directly improves completion rates',
      'Consistent architecture reduces cognitive load and improves usability',
    ],
  },
  mca: {
    title: 'Mumbai T20',
    subtitle: 'Designing a Real-Time Cricket Experience in 7 Days',
    category: 'Mobile App - Case Study',
    image: mcaHeroImage,
    metadata: {
      company: 'Mumbai T20',
      role: 'Product Designer',
      expertise: 'Mobile Design, Real-Time Data',
      year: '2024',
    },
    overview:
      'Mumbai T20 aimed to launch a mobile application to help cricket fans track live matches, player stats, and team performance in real time. Platform: iOS & Android. Timeline: 7 Days. I led the end-to-end design, from structuring the product to delivering production-ready UI.',
    problem:
      'Cricket is inherently data-dense and fast-moving, but existing experiences often overload users with too much information and make it difficult to quickly access key match updates. Users needed a way to instantly check live scores, understand match context quickly, and navigate across stats, teams, and players without friction.',
    challenge:
      'How do we design an experience where users can understand live match data in seconds, especially during ongoing matches?',
    approach: [
      {
        title: 'Information-First Thinking',
        description:
          'I started by structuring the data before designing screens: Prioritized live match data as the primary layer, Organized supporting information (stats, teams, players) around it',
      },
      {
        title: 'Designed for Real Usage Context',
        description:
          'The app is used while matches are live, so the experience focused on: Quick scanning, Minimal cognitive load, Fast navigation between key sections',
      },
      {
        title: 'Strong Information Architecture',
        description:
          'Defined clear sections based on user intent: Home (live matches), Match Stats, Points Table, Teams & Players. This ensured users always knew where to go for what.',
      },
    ],
    solution: [
      {
        title: 'Scannable Data Experience',
        points: [
          'Structured complex data into clear, modular layouts',
          'Used hierarchy and spacing to guide attention',
          'Highlighted key information (scores, overs, players)',
        ],
      },
      {
        title: 'Real-Time Match Flow',
        points: [
          'Enabled quick access to: Live scores, Ball-by-ball commentary, Scorecards',
          'Designed for seamless switching between matches',
        ],
      },
      {
        title: 'Visual System (Dark Theme)',
        points: [
          'Optimized for long viewing sessions',
          'Improved contrast for readability',
          'Emphasized important data points',
        ],
      },
    ],
    keyDesignDecisions: [
      {
        title: 'Clarity Over Density',
        description:
          'Organized data into structured views to make information easier to consume quickly',
      },
      {
        title: 'Speed of Access',
        description:
          'Reduced steps to reach critical information like live scores and stats',
      },
      {
        title: 'Consistency Across Screens',
        description:
          'Used reusable patterns to ensure familiarity and faster navigation',
      },
    ],
    collaboration:
      'Worked closely with developers to ensure accurate implementation. Backend powered by Salesforce for real-time data. Conducted QA reviews to refine usability and fix edge cases.',
    impact: [
      {
        emoji: '⚡',
        title: 'Delivered production-ready product',
        description: 'in 7 days',
      },
      {
        emoji: '📈',
        title: 'Improved usability',
        description: '~40% through better structure and clarity',
      },
      {
        emoji: '⏱️',
        title: 'Reduced time to access key information',
        description: '~30%',
      },
      {
        emoji: '🎯',
        title: 'Enabled faster understanding',
        description: 'of live match scenarios',
      },
    ],
    insight:
      "In real-time experiences, users don't explore - they scan and decide quickly. Designing for speed and clarity had the biggest impact on usability.",
  },
};
