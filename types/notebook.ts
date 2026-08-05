export interface NotebookItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  content?: string;
  featured?: boolean;
}
