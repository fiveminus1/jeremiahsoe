
export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
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