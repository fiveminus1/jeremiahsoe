import { Image, Text, VStack, Wrap, Tag, Portal, Dialog, DialogBackdrop, DialogPositioner, DialogContent, CloseButton } from "@chakra-ui/react";
import type { Project } from "@/types/types";

interface ProjectModalProps {
  project: Project;
}

const ModalContent = ({ project }: ProjectModalProps) => {
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
};

const ProjectModal = ({ project }: ProjectModalProps) => {
  return (
    <>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent w="500px">
            <Dialog.Header>
              <Dialog.Title>{project.title}</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body overflowY="auto" p={0}>
              <ModalContent project={project} />
            </Dialog.Body>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </>
  );
}

export default ProjectModal;