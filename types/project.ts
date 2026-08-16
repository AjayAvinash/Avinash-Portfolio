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
  /** Three image URLs used in the comic strip hero (panels 1–3) */
  comicImages: [string, string, string];
  comic?: ProjectComic;
  /** e.g. "Logistics, Port" */
  vertical: string;
  /** e.g. "1 week" */
  duration: string;
  /** Short paragraph describing the project scope */
  scope: string;
  approach: ProjectSectionDetail;
  discovery: ProjectSectionDetail;
  /** Previously `solution` */
  whatIDid: ProjectSectionDetail;
  /** Previously `reflection` */
  whereItStands: ProjectSectionDetail;
  images: string[];
  tags: string[];
  featured?: boolean;
}
