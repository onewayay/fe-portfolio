export interface Project {
  id: number;
  title: string;
  bgImg?: string;
  type: string;
  desc: string;
  skills: string[];
  func?: string;
  githubUrl?: string;
  deployUrl: string;
}
