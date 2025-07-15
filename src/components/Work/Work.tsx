"use client";

import { Box, CloseButton, Heading, VStack, SimpleGrid, Dialog, Portal, DialogBackdrop, DialogPositioner, DialogContent } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types/types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects: Project[] = [
  {
    title: "Fabflix",
    description: "Blah blah blah..." ,
    imageSrc: //todo: update hosting and image
      "/project_temp.jpeg",
    tags: [
      "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
  {
    title: "Fabflix2",
    description: "Blah blah blah..." ,
    imageSrc: //todo: update hosting and image
      "/project_temp.jpeg",
    tags: [
      "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
  {
    title: "Fabflix3",
    description: "Blah blah blah..." ,
    imageSrc: //todo: update hosting and image
      "/project_temp.jpeg",
    tags: [
      "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
]

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box id="work" py={12}>
      <VStack align="stretch">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 40}}
          animate={isInView ? { opacity: 1, y: 0 }: {}}
          transition={{duration: 0.6, ease: "easeOut"}}
          >
          <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
            Work
          </Heading>

          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            columnGap="12" 
            rowGap="8"
            justifyItems="start"
          >
            {projects.map((project) => (
              <Dialog.Root scrollBehavior="inside" size="md" key={project.title}>
                <Dialog.Trigger asChild>
                  <ProjectCard {...project} />
                </Dialog.Trigger>

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
                        <ProjectModal project={project} />
                      </Dialog.Body>
                    </DialogContent>
                  </DialogPositioner>
                </Portal>
              </Dialog.Root>
            ))}
          </SimpleGrid>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default Projects;