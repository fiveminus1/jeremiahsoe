"use client";

import { Box, HStack, CloseButton, Heading, VStack, SimpleGrid, Dialog, Portal, DialogBackdrop, DialogPositioner, DialogContent } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types/types";
import { FaBriefcase } from "react-icons/fa6";


const projects: Project[] = [
  {
    title: "Quote Book Bot",
    overview: "A simple Discord bot to store ICSSC Board's various quotes",
    description: "Blah blah blah..." ,
    imageSrc: 
      "/quote-bot.png",
    tags: [
      "Rust", "Docker", "PostgreSQL", "AWS", "Github Actions", "Notion API",
    ],
  },
  {
    title: "Fabflix",
    overview: "CS 122B's quarter-long project: a full-stack multiservice architecture movie browsing website",
    description: "Blah blah blah..." ,
    imageSrc: 
      "/fabflix.png",
    tags: [
      "Java", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
  {
    title: "Sprite Type",
    overview: "A cozy Studio Ghibli-themed typing game built for IrvineHacks 2025 featuring custom sprites ",
    description: "Blah blah blah..." ,
    imageSrc: 
      "/spritetype.png",
    tags: [
      "React", "Next.js", "MongoDB", "Tailwind CSS"
    ],
  },
]

const Projects = () => {
  return (
    <Box id="work" py={12}>
      <VStack align="stretch">
        <HStack gap={4}>
          <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
            Work
          </Heading>
          <Box fontSize="2xl" as={FaBriefcase} />
        </HStack>

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
      </VStack>
    </Box>
  );
};

export default Projects;