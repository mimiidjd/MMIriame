export type ProjectCategory = 'DÉVELOPPER' | 'CONCEVOIR' | 'EXPRIMER' | 'COMPRENDRE' | 'ENTREPRENDRE';

export interface Project {
  slug: string;
  title: string;
  description: string; // Short description for cards
  content: string; // Detailed content for the project page
  categories: ProjectCategory[];
  imageUrl: string;
  learnings: {
    code: string;
    title: string;
    description: string;
  }[];
} 