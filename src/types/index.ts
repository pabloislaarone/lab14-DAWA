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
  category: string;
  status: 'Terminado' | 'En desarrollo';
  context: string;
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
