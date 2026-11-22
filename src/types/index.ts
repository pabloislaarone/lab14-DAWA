export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  color: string;
  category: string;
  status: 'Terminado' | 'En desarrollo';
  context: string;
  roleShort: string;
  contextShort: string;
  problem: string;
  solution: string;
  role: string;
  highlights: string[];
  extraLinks?: ProjectLink[];
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}

export interface Milestone {
  label: string;
  title: string;
  org: string;
  text: string;
  tags: string[];
  color: string;
}

export interface TechItem {
  name: string;
  detail: string;
  color: string;
}
