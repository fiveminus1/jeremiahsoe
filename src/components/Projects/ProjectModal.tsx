import { Image, Text, VStack, Heading, Wrap, Tag } from "@chakra-ui/react";

interface ProjectModalProps {
  project: { //todo: make new type
    title: string;
    description: string; 
    imageSrc: string;
    tags: string[];
  } | null;
}

const ProjectModal = ({ project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <>
      <Image src={project.imageSrc} alt={project.title} width="100%" />
      <VStack align="start" p={6}>
        <Text>{project.description}</Text>
        <Wrap>
          {project.tags.map((tag) => (
            <Tag.Root key={`${project.title}-${tag}`}>
              <Tag.Label>{tag}</Tag.Label>
            </Tag.Root>
          ))}
        </Wrap>
      </VStack>
    </>
  );
}

export default ProjectModal;