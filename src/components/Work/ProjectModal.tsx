import { Text, VStack, Wrap, Tag, Portal, Dialog, DialogBackdrop, DialogPositioner, DialogContent, CloseButton, Skeleton } from "@chakra-ui/react";
import type { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";
import { lazy, Suspense } from "react";

const getLazyMDX = (id: Project['id']) => 
  lazy(() => 
    import(`@/content/projects/${id}.mdx`).catch(() => ({
      default: () => <Text>More info coming soon!</Text>
    }))
  );

interface ProjectModalProps {
  project: Project;
}

const ModalContent = ({ project }: ProjectModalProps) => {
  const MDXContent = getLazyMDX(project.id);

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
        <VStack align="start" p={6}>
          <Suspense fallback={<Skeleton height="50px" width="100%" />}>
            <MDXContent />
          </Suspense>
        </VStack>
      </Dialog.Body>
    </>
  );
};

const ProjectModal = ({ project }: ProjectModalProps) => {
  return (
    <>
      <Dialog.Root scrollBehavior="inside" size="xl">
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