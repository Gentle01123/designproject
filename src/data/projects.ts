import type { Project } from "@/types";

import nuvraFront from "@/assets/nuvra-front.png";
import nuvraHome from "@/assets/nuvra-home.png";
import nuvraEarn from "@/assets/nuvra-earn.png";
import nuvraHistory from "@/assets/nuvra-history.png";
import nuvraSwap from "@/assets/nuvra-swap.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import virrelHero from "@/assets/virrel-hero.png";
import virrelClothing from "@/assets/virrel-clothing.png";
import virrelDesign from "@/assets/virrel-design.png";

export const projects: Project[] = [
  {
    id: "nuvra-crypto",
    title: "Nuvra Crypto Wallet",
    description:
      "A full-featured wallet and exchange platform — staking, swaps, transaction history, all unified. 92% task completion rate in testing.",
    tags: ["Mobile App", "Figma"],
    year: "2024",
    color: "from-[#0A0A0F] to-[#1C1C28]",
    accentColor: "#FF7A1A",
    thumbnail: nuvraFront,
    gallery: [nuvraFront, nuvraHome, nuvraEarn, nuvraHistory, nuvraSwap],
    overview:
      "Nuvra is a full-featured cryptocurrency wallet enabling users to manage digital assets, stake tokens, track transaction history, and exchange currencies — all from one unified mobile experience.",
    problem:
      "Crypto users juggle multiple apps for wallets, exchanges, and staking — leading to fragmented experiences, security concerns, and missed earning opportunities.",
    goals: [
      "Unify wallet, exchange, and staking into one seamless platform",
      "Design an intuitive mobile experience for complex crypto operations",
      "Build trust through clear data visualization and transparent transactions",
    ],
    role: "Lead UI/UX Designer responsible for end-to-end design across 5 core screens — from landing through wallet, earn, and history flows.",
    process: {
      research:
        "Conducted 15 user interviews with active crypto traders and holders. Competitive analysis covered 8 existing wallet and exchange apps.",
      wireframes:
        "Developed low-fidelity wireframes for 12 core screens including home dashboard, earn/staking, history, and exchange. Tested with 6 users.",
      design:
        "Created a dark-themed visual language with orange accents for CTAs. Designed a component library with 40+ reusable elements in Figma.",
    },
    solution:
      "A streamlined experience with an intelligent dashboard, one-tap staking, candlestick charts, and a complete transaction timeline.",
    outcomes: [
      "92% task completion rate in usability testing",
      "4.7/5 average desirability score",
      "Onboarding time reduced by 40%",
    ],
  },
  {
    id: "gamevault",
    title: "GameVault Landing",
    description: "Bold gaming storefront redesign. CTR up 31%, session time up 52%.",
    tags: ["Web Design", "Adobe XD"],
    year: "2024",
    color: "from-[#14141C] to-[#0A0A0F]",
    accentColor: "#C8FF00",
    thumbnail: project2,
    overview:
      "GameVault is a premium gaming storefront landing page designed to immerse players in featured titles while driving purchases and engagement.",
    problem:
      "Existing gaming storefronts felt cluttered and generic, failing to create excitement around featured titles or drive immediate action.",
    goals: [
      "Create an immersive hero experience for featured games",
      "Increase click-through rate on primary CTAs by 25%",
      "Design a clean, bold layout that showcases game art",
    ],
    role: "Senior Product Designer leading the landing page redesign, collaborating with marketing and development teams.",
    process: {
      research:
        "Analyzed heatmaps and session recordings of 2,000+ users. A/B tested hero layout variants with 500 users.",
      wireframes:
        "Created user flows for browse-to-purchase journeys. Built interactive wireframes to validate navigation patterns.",
      design:
        "Developed a minimalist visual identity with bold typography, full-bleed character art, and high-contrast CTAs.",
    },
    solution:
      "A visually striking landing page with cinematic hero imagery, platform availability badges, and clear purchase/play CTAs.",
    outcomes: [
      "Click-through rate increased by 31%",
      "Average session duration up 52%",
      "Revenue per visitor increased by 18%",
    ],
  },
  {
    id: "ocean-escape",
    title: "Ocean Escape",
    description: "Luxury yacht charter platform. Booking completion up 35%, NPS of 72.",
    tags: ["UX Design", "Figma"],
    year: "2024",
    color: "from-[#1C1C28] to-[#14141C]",
    accentColor: "#3AB6FF",
    thumbnail: project3,
    overview:
      "Ocean Escape streamlines luxury yacht charter bookings with stunning visuals, social proof, and an intuitive reservation flow.",
    problem:
      "Luxury charter booking sites felt outdated and complex, failing to convey the premium experience or simplify the reservation process.",
    goals: [
      "Create a visually immersive booking experience",
      "Achieve a booking flow completable in under 60 seconds",
      "Build trust through reviews and social proof elements",
    ],
    role: "UX Designer and Researcher, responsible for user research, interaction design, and the end-to-end booking experience.",
    process: {
      research:
        "Conducted contextual inquiries with 3 charter companies, interviewed 20 potential customers. Created journey maps highlighting 14 pain points.",
      wireframes:
        "Designed task-based wireframes focusing on search, filtering, and booking. Ran moderated usability tests with 10 participants.",
      design:
        "Built a fresh, airy design system with ocean blue accents, large hero imagery, and integrated social proof elements.",
    },
    solution:
      "A stunning booking platform with location-based search, class selection, date pickers, and one-click reservation — all above the fold.",
    outcomes: [
      "Booking completion rate up 35%",
      "100% mobile responsiveness achieved",
      "Net Promoter Score of 72",
    ],
  },
  {
    id: "virrel-clothing",
    title: "Virrel Clothing Store",
    description: "Fashion e-commerce brand. Conversion up 28%, avg browse time 4.2 min.",
    tags: ["E-Commerce", "Figma"],
    year: "2024",
    color: "from-[#14141C] to-[#1C1C28]",
    accentColor: "#F0EDE6",
    thumbnail: virrelHero,
    gallery: [virrelHero, virrelClothing, virrelDesign],
    overview:
      "Virrel is a fashion e-commerce brand featuring curated collections, category browsing, new arrivals, and a seamless shopping experience.",
    problem:
      "Many fashion e-commerce sites feel generic and cluttered, making it hard for brands to convey their unique identity while maintaining a smooth shopping experience.",
    goals: [
      "Create a visually distinctive brand presence",
      "Design intuitive category browsing and product discovery",
      "Build trust through customer reviews and quality messaging",
    ],
    role: "UI/UX Designer responsible for the full e-commerce experience — from hero landing through product browsing and newsletter engagement.",
    process: {
      research:
        "Analyzed 10 competitor fashion brands and conducted surveys with 25 online shoppers to understand browsing and purchase behavior.",
      wireframes:
        "Created low-fidelity wireframes for 8 key pages including homepage, shop, collections, and product detail. Tested navigation flows with 8 users.",
      design:
        "Developed a clean, modern design system with neutral tones, bold typography, and generous whitespace to let product imagery shine.",
    },
    solution:
      "A polished e-commerce platform with hero collections, category filters, new arrivals grid, value propositions, and customer testimonials.",
    outcomes: [
      "Conversion rate increased by 28%",
      "Average browse time: 4.2 minutes",
      "Customer satisfaction score of 4.8/5",
    ],
  },
  {
    id: "savor-restaurant",
    title: "Savor Restaurant",
    description: "Restaurant ordering platform. Online orders up 45%, satisfaction 4.6/5.",
    tags: ["Web Design", "Figma"],
    year: "2024",
    color: "from-[#0A0A0F] to-[#14141C]",
    accentColor: "#FF4D6D",
    thumbnail: project4,
    overview:
      "Savor is a restaurant website combining editorial food photography with a frictionless online ordering and menu browsing experience.",
    problem:
      "Restaurant websites often feel generic and fail to showcase food quality, leading to low online order conversion and high bounce rates.",
    goals: [
      "Showcase food through high-quality editorial photography",
      "Enable menu browsing and ordering in under 2 minutes",
      "Build trust through customer testimonials and social proof",
    ],
    role: "Design Systems Lead, responsible for the component library, food photography layout, and ordering UX.",
    process: {
      research:
        "Interviewed 12 restaurant owners and analyzed 500 customer surveys. Benchmarked against leading food delivery platforms.",
      wireframes:
        "Created modular wireframe templates for menu layouts. Tested 3 layout paradigms with users to determine optimal food presentation.",
      design:
        "Built a warm, appetizing design system with earthy brown accents, generous white space, and a carousel for featured dishes.",
    },
    solution:
      "A visually rich restaurant platform with hero food imagery, quick-order CTAs, menu carousel, and integrated customer stats.",
    outcomes: [
      "Online orders up 45%",
      "Average session duration: 3.5 minutes",
      "Customer satisfaction 4.6/5",
    ],
  },
];
