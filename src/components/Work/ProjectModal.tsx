import { Text, VStack, Wrap, Tag, Portal, Dialog, DialogBackdrop, DialogPositioner, DialogContent, CloseButton } from "@chakra-ui/react";
import type { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const mdxModules: Record<Project['id'], () => Promise<{default: React.FC }>> = {
  "quote-book-bot": () => import('@/content/projects/quote-book-bot.mdx'),
  "fabflix": () => import('@/content/projects/fabflix.mdx'),
};

interface ProjectModalProps {
  project: Project;
}

const ModalContent = ({ project }: ProjectModalProps) => {
  const [MDXContent, setMDXContent] = useState<React.FC | null>(null);

  useEffect(() => {
    if (project.id && mdxModules[project.id]) {
      mdxModules[project.id]().then((mod) => {
        setMDXContent(() => mod.default);
      });
    }
  }, [project.id]);

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
          {MDXContent ? (
            <MDXContent />
          ) : (
            <Text>Loading..</Text> //todo: replace w skeleton
          )}
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