export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  accentColor: string;
  thumbnail: string;
  gallery?: string[];
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

export interface Skill {
  name: string;
  category: "skill" | "tool";
}

export interface NavLink {
  label: string;
  href: string;
  id: string;
}
