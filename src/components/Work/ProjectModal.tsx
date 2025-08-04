import { Image, Text, VStack, Wrap, Tag, Portal, Dialog, DialogBackdrop, DialogPositioner, DialogContent, CloseButton } from "@chakra-ui/react";
import type { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";

interface ProjectModalProps {
  project: Project;
}

const ModalContent = ({ project }: ProjectModalProps) => {
  return (
    <>
      <Dialog.Header>
        <Dialog.Title>
          {project.title}
          <Wrap pt={2}>  
            {project.tags.map((tag) => (
              <Tag.Root colorPalette="blue" key={`${project.title}-${tag}`}>
                <Tag.Label>{tag}</Tag.Label>
              </Tag.Root>
            ))}
          </Wrap>
        </Dialog.Title>
        <Dialog.CloseTrigger asChild>
          <CloseButton size="sm" />
        </Dialog.CloseTrigger>
      </Dialog.Header>
      <Dialog.Body overflowY="auto" p={0}>
        <Image src={project.imageSrc} alt={project.title} />
        <VStack align="start" p={6}>
          <Text>{project.description}</Text>
        </VStack>
      </Dialog.Body>
    </>
  );
};

const ProjectModal = ({ project }: ProjectModalProps) => {
  return (
    <>
      <Dialog.Root scrollBehavior="inside" size="lg">
        <Dialog.Trigger asChild>
          <ProjectCard {...project} />
        </Dialog.Trigger>

        <Portal>
          <DialogBackdrop />
          <DialogPositioner>
            <DialogContent>
              <ModalContent project={project} />
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}

export default ProjectModal;