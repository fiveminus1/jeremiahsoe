"use client";

import { Box, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fabflix",
    description: "Blah blah blah..." ,
    imageSrc: //todo: update hosting and image
      "https://cdn.discordapp.com/attachments/1164416239209295923/1392273564480176139/IMG_3026.jpeg?ex=686eef4c&is=686d9dcc&hm=53a3d8f213056bc1951fe7fda29951858d7e6a32a98e6a48e3d4906359c67330&",
    tags: [
      "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
  {
    title: "Fabflix2",
    description: "Blah blah blah..." ,
    imageSrc: //todo: update hosting and image
      "https://cdn.discordapp.com/attachments/1164416239209295923/1392273564480176139/IMG_3026.jpeg?ex=686eef4c&is=686d9dcc&hm=53a3d8f213056bc1951fe7fda29951858d7e6a32a98e6a48e3d4906359c67330&",
    tags: [
      "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
  {
    title: "Fabflix3",
    description: "Blah blah blah..." ,
    imageSrc: //todo: update hosting and image
      "https://cdn.discordapp.com/attachments/1164416239209295923/1392273564480176139/IMG_3026.jpeg?ex=686eef4c&is=686d9dcc&hm=53a3d8f213056bc1951fe7fda29951858d7e6a32a98e6a48e3d4906359c67330&",
    tags: [
      "HTML", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
  },
]

const Projects = () => {
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
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Projects;