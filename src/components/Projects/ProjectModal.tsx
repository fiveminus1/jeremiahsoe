import { Dialog, Portal, Image, Text, VStack, Heading, Wrap, Tag } from "@chakra-ui/react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: { //todo: make new type
    title: string;
    description: string; 
    imageSrc: string;
    tags: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Body>
              <Image src={project.imageSrc} alt={project.title} width="100%" />
              <VStack align="start" p={6}>
                <Heading size="lg">{project.title}</Heading>
                <Text>{project.description}</Text>
                <Wrap>
                  {project.tags.map((tag) => (
                    <Tag.Root key={`${project.title}-${tag}`}>
                      <Tag.Label>{tag}</Tag.Label>
                    </Tag.Root>
                  ))}
                </Wrap>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default ProjectModal;