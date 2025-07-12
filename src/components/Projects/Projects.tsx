"use client";

import { useState } from "react";
import { Box, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  return (
    <Box id="projects" py={12}>
      <VStack align="stretch">
        <Heading size="5xl" fontWeight="bold" textAlign="left" py={4}>
          Projects
        </Heading>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          columnGap="12" 
          rowGap="8"
          justifyItems="start"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} onClick={() => setSelectedProject(project)} />
          ))}
        </SimpleGrid>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </VStack>
    </Box>
  );
};

export default Projects;