export type Project = {
  id: string;
  title: string;
  overview: string;
  coverImage: string;
  tags: string[];
  githubUrl?: string;
  link?: string;
}

export type Particle = {
  id: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  size: number;
  xOffset: number;
  opacity: number;
};

export type MDXModule = {
  default: React.ComponentType<object>;
}