export interface ProjectComicFrame {
  id: string;
  title: string;
  caption: string;
  imageUrl?: string;
}

export interface ProjectComic {
  title: string;
  description: string;
  frames: ProjectComicFrame[];
}

export interface ProjectSectionDetail {
  title: string;
  description: string;
  keyTakeaways?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  comic?: ProjectComic;
  approach: ProjectSectionDetail;
  discovery: ProjectSectionDetail;
  solution: ProjectSectionDetail;
  reflection: ProjectSectionDetail;
  images: string[];
  tags: string[];
  featured?: boolean;
}
