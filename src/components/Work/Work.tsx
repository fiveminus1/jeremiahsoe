"use client";

import { Box, HStack, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types/types";
import projects from "@/content/projects/project_info.json";

const Projects = () => {
  return (
    <Box id="work" py={12}>
      <VStack align="stretch">
        <HStack gap={4}>
          <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
            Work
          </Heading>
        </HStack>
        
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3 }}
            gap="12px"
          >
            {projects.map((project: Project) => (
              <ProjectModal project={project} key={project.title}/>
            ))}
          </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Projects;