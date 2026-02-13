export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tools: string[];
  overview: string;
  problem: string;
  goals: string[];
  role: string;
  process: {
    research: string;
    wireframes: string;
    design: string;
  };
  solution: string;
  outcomes: string[];
}

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "FinTrack Mobile",
    description: "A fintech dashboard app simplifying personal finance tracking with intuitive data visualization.",
    thumbnail: project1,
    tools: ["Figma", "Protopie", "Principle"],
    overview: "FinTrack is a mobile-first personal finance application designed to help millennials manage their spending, savings, and investments from a single dashboard.",
    problem: "Young professionals struggle to get a holistic view of their finances across multiple accounts, leading to poor budgeting decisions and financial stress.",
    goals: [
      "Create a unified dashboard for all financial accounts",
      "Make complex financial data easy to understand at a glance",
      "Encourage positive financial habits through smart nudges"
    ],
    role: "Lead UI/UX Designer responsible for end-to-end design — from user research through final handoff to development.",
    process: {
      research: "Conducted 15 user interviews with millennials aged 25–35, created affinity maps, and identified three key personas. Competitive analysis covered 8 existing fintech apps.",
      wireframes: "Developed low-fidelity wireframes for 12 core screens, tested paper prototypes with 6 users, iterated based on usability findings.",
      design: "Created a clean, data-rich visual language using a blue-dominant palette. Designed a component library with 40+ reusable elements in Figma."
    },
    solution: "A streamlined mobile experience with an intelligent dashboard that surfaces actionable insights, automated savings goals, and spending pattern recognition.",
    outcomes: [
      "92% task completion rate in usability testing",
      "4.7/5 average desirability score",
      "Reduced onboarding time by 40% compared to competitor average"
    ]
  },
  {
    id: "ecommerce-redesign",
    title: "NovaBoutique",
    description: "A complete e-commerce redesign focused on conversion optimization and brand storytelling.",
    thumbnail: project2,
    tools: ["Figma", "Adobe XD", "Hotjar"],
    overview: "NovaBoutique is a premium fashion e-commerce platform redesigned to blend editorial storytelling with seamless shopping experiences.",
    problem: "The existing store had a 68% cart abandonment rate and users reported difficulty discovering products that matched their style preferences.",
    goals: [
      "Reduce cart abandonment rate by 25%",
      "Increase average session duration by 40%",
      "Create a personalized discovery experience"
    ],
    role: "Senior Product Designer leading the redesign initiative, collaborating with a cross-functional team of 8 engineers and 2 product managers.",
    process: {
      research: "Analyzed heatmaps and session recordings of 2,000+ users. Ran A/B tests on checkout flow variants. Surveyed 500 customers on style preferences.",
      wireframes: "Created user flows for 5 key journeys. Built interactive wireframes in Figma to validate navigation patterns with stakeholders.",
      design: "Developed a luxurious visual identity with editorial-style product layouts, immersive hover states, and a simplified 3-step checkout."
    },
    solution: "A visually rich storefront with AI-powered style recommendations, editorial lookbooks, and a frictionless checkout experience.",
    outcomes: [
      "Cart abandonment reduced by 31%",
      "Average session duration increased by 52%",
      "Revenue per visitor increased by 18%"
    ]
  },
  {
    id: "healthcare-app",
    title: "MediConnect",
    description: "A healthcare platform connecting patients with providers through seamless appointment management.",
    thumbnail: project3,
    tools: ["Figma", "FigJam", "Maze"],
    overview: "MediConnect streamlines the patient-provider relationship with easy appointment scheduling, health record access, and secure messaging.",
    problem: "Patients face fragmented healthcare experiences — juggling phone calls, paper records, and multiple portals to manage their health needs.",
    goals: [
      "Unify the patient experience across scheduling, records, and communication",
      "Achieve WCAG 2.1 AA accessibility compliance",
      "Reduce appointment no-show rates"
    ],
    role: "UX Designer and Researcher, responsible for user research, interaction design, and accessibility audits.",
    process: {
      research: "Conducted contextual inquiries at 3 clinics, interviewed 20 patients and 8 healthcare providers. Created journey maps highlighting 14 pain points.",
      wireframes: "Designed task-based wireframes focusing on the top 5 user tasks. Ran moderated usability tests with 10 participants including users with disabilities.",
      design: "Built an accessible design system with high-contrast modes, large touch targets, and clear information hierarchy. Used calming blue tones to reduce patient anxiety."
    },
    solution: "An inclusive healthcare platform with one-tap scheduling, unified health timeline, and real-time provider messaging with read receipts.",
    outcomes: [
      "No-show rate reduced by 35%",
      "100% WCAG 2.1 AA compliance achieved",
      "Net Promoter Score of 72 from patient beta group"
    ]
  },
  {
    id: "saas-analytics",
    title: "InsightHub",
    description: "A SaaS analytics platform transforming complex data into actionable business intelligence.",
    thumbnail: project4,
    tools: ["Figma", "Principle", "Lottie"],
    overview: "InsightHub is a B2B analytics dashboard that transforms raw business data into clear, actionable insights for decision-makers.",
    problem: "Product managers and executives waste 5+ hours per week building manual reports because existing tools are too complex for non-technical users.",
    goals: [
      "Enable report creation in under 2 minutes",
      "Support both light and dark mode for extended use",
      "Design a scalable component system for 20+ chart types"
    ],
    role: "Design Systems Lead, responsible for the component library, interaction patterns, and design-to-code handoff.",
    process: {
      research: "Interviewed 12 product managers across 4 industries. Analyzed support tickets to identify top 10 usability issues. Benchmarked against Mixpanel, Amplitude, and Looker.",
      wireframes: "Created modular wireframe templates for dashboard configurations. Tested 3 layout paradigms with users to determine optimal information density.",
      design: "Built a comprehensive design system with 80+ components, token-based theming, and animated data transitions using Lottie. Documented all patterns in a living Figma library."
    },
    solution: "A drag-and-drop dashboard builder with smart templates, natural language queries, and automated insight generation.",
    outcomes: [
      "Average report creation time: 90 seconds",
      "Design system adopted by 3 additional product teams",
      "User satisfaction score increased from 3.2 to 4.6/5"
    ]
  }
];
