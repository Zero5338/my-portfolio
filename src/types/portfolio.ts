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
    solution?: string;
    result: string;
    action?: string;
    analysis?: string;
  }[];
  highlights: string[];
  github: string | Record<string, string>;
  live: string | null;
  color: string;
  contributions?: { title: string; description?: string }[];
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
