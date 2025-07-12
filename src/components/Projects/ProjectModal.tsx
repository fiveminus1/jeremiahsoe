import { Image, Text, VStack, Wrap, Tag } from "@chakra-ui/react";
import type { Project } from "@/types/types";

interface ProjectModalProps {
  project: Project;
}

const ProjectModal = ({ project }: ProjectModalProps) => {
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