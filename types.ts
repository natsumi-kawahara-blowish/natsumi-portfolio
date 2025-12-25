export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'infra' | 'tools' | 'communication';
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  title: string;
  description: string;
  techStack: string[];
  points: string[];
}

export interface Profile {
  name: string;
  kana: string;
  role: string;
  email: string;
  location: string;
  summary: string;
  strengths: { title: string; description: string }[];
}