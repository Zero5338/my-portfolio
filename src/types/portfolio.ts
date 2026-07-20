export interface Project {
  name: string;
  subtitle: string;
  period: string;
  role?: string;
  stack: Record<string, string[]>;
  desc: string;
  metrics?: { label: string; value: string }[];
  images?: string[];
  problemSolving?: {
    problem: string;
    // action: string;
    solution: string;
    // analysis: string
    result: string;
  }[];
  highlights: string[];
  github: string | Record<string, string>;
  live: string | null;
  color: string;
}

export interface TechSkillGroup {
  category: string;
  items: { name: string }[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note: string;
}
