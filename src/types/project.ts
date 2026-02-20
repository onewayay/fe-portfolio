export interface Project {
  id: number;
  title: string;
  bgImg?: string;
  type: string;
  desc: string;
  skills: string[];
  notionUrl?: string;
  githubUrl?: string;
  deployUrl: string;
}
