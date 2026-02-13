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
    id: "nuvra-crypto",
    title: "Nuvra Crypto Wallet",
    description: "A comprehensive crypto wallet and exchange platform with staking, swaps, and transaction history.",
    thumbnail: project1,
    tools: ["Figma", "Protopie", "Principle"],
    overview: "Nuvra is a full-featured cryptocurrency wallet app enabling users to manage digital assets, stake tokens, track transaction history, and exchange currencies — all from a unified mobile and web experience.",
    problem: "Crypto users juggle multiple apps for wallets, exchanges, and staking — leading to fragmented experiences, security concerns, and missed earning opportunities.",
    goals: [
      "Unify wallet, exchange, and staking into one seamless platform",
      "Design an intuitive mobile experience for complex crypto operations",
      "Build trust through clear data visualization and transaction transparency"
    ],
    role: "Lead UI/UX Designer responsible for end-to-end design across 5 core screens — from landing page through wallet, earn, and history flows.",
    process: {
      research: "Conducted 15 user interviews with active crypto traders and holders. Competitive analysis covered 8 existing wallet and exchange apps.",
      wireframes: "Developed low-fidelity wireframes for 12 core screens including home dashboard, earn/staking, history, and exchange. Tested with 6 users.",
      design: "Created a dark-themed visual language with orange accents for CTAs. Designed a component library with 40+ reusable elements in Figma."
    },
    solution: "A streamlined multi-platform experience with an intelligent dashboard, one-tap staking, candlestick charts, and a complete transaction timeline.",
    outcomes: [
      "92% task completion rate in usability testing",
      "4.7/5 average desirability score",
      "Reduced onboarding time by 40% compared to competitor average"
    ]
  },
  {
    id: "gaming-landing",
    title: "GameVault Landing",
    description: "A bold gaming store landing page designed to maximize engagement and drive conversions.",
    thumbnail: project2,
    tools: ["Figma", "Adobe XD", "Hotjar"],
    overview: "GameVault is a premium gaming storefront landing page designed to immerse players in featured titles while driving purchases and engagement.",
    problem: "Existing gaming storefronts felt cluttered and generic, failing to create excitement around featured titles or drive immediate action.",
    goals: [
      "Create an immersive hero experience for featured games",
      "Increase click-through rate on primary CTAs by 25%",
      "Design a clean, bold layout that showcases game art"
    ],
    role: "Senior Product Designer leading the landing page redesign, collaborating with marketing and development teams.",
    process: {
      research: "Analyzed heatmaps and session recordings of 2,000+ users on the existing store. A/B tested hero layout variants with 500 users.",
      wireframes: "Created user flows for browse-to-purchase journeys. Built interactive wireframes to validate navigation patterns with stakeholders.",
      design: "Developed a minimalist visual identity with bold typography, full-bleed character art, and high-contrast CTAs for maximum impact."
    },
    solution: "A visually striking landing page with cinematic hero imagery, platform availability badges, and clear purchase/play CTAs.",
    outcomes: [
      "Click-through rate increased by 31%",
      "Average session duration increased by 52%",
      "Revenue per visitor increased by 18%"
    ]
  },
  {
    id: "ocean-escape",
    title: "Ocean Escape",
    description: "A luxury yacht charter booking platform with an emphasis on visual storytelling and seamless reservations.",
    thumbnail: project3,
    tools: ["Figma", "FigJam", "Maze"],
    overview: "Ocean Escape streamlines luxury yacht charter bookings with stunning visuals, social proof, and an intuitive reservation flow.",
    problem: "Luxury charter booking sites felt outdated and complex, failing to convey the premium experience or simplify the reservation process.",
    goals: [
      "Create a visually immersive booking experience",
      "Achieve a booking flow completable in under 60 seconds",
      "Build trust through reviews and social proof elements"
    ],
    role: "UX Designer and Researcher, responsible for user research, interaction design, and the end-to-end booking experience.",
    process: {
      research: "Conducted contextual inquiries with 3 charter companies, interviewed 20 potential customers. Created journey maps highlighting 14 pain points.",
      wireframes: "Designed task-based wireframes focusing on search, filtering, and booking. Ran moderated usability tests with 10 participants.",
      design: "Built a fresh, airy design system with ocean blue accents, large hero imagery, and integrated social proof elements like ratings and review counts."
    },
    solution: "A stunning booking platform with location-based search, class selection, date pickers, and one-click reservation — all above the fold.",
    outcomes: [
      "Booking completion rate increased by 35%",
      "100% mobile responsiveness achieved",
      "Net Promoter Score of 72 from beta user group"
    ]
  },
  {
    id: "food-platform",
    title: "Savor Restaurant",
    description: "A restaurant ordering platform blending appetizing food photography with a seamless ordering experience.",
    thumbnail: project4,
    tools: ["Figma", "Principle", "Lottie"],
    overview: "Savor is a restaurant website combining editorial food photography with a frictionless online ordering and menu browsing experience.",
    problem: "Restaurant websites often feel generic and fail to showcase food quality, leading to low online order conversion and high bounce rates.",
    goals: [
      "Showcase food through high-quality editorial photography",
      "Enable menu browsing and ordering in under 2 minutes",
      "Build trust through customer testimonials and social proof"
    ],
    role: "Design Systems Lead, responsible for the component library, food photography layout, and ordering UX.",
    process: {
      research: "Interviewed 12 restaurant owners and analyzed 500 customer surveys. Benchmarked against leading food delivery platforms.",
      wireframes: "Created modular wireframe templates for menu layouts. Tested 3 layout paradigms with users to determine optimal food presentation.",
      design: "Built a warm, appetizing design system with earthy brown accents, generous white space, and a carousel for featured dishes."
    },
    solution: "A visually rich restaurant platform with hero food imagery, quick-order CTAs, menu carousel, and integrated customer stats.",
    outcomes: [
      "Online orders increased by 45%",
      "Average session duration: 3.5 minutes",
      "Customer satisfaction score increased from 3.2 to 4.6/5"
    ]
  }
];
