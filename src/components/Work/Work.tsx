"use client";

import { Box, HStack, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types/types";


const projects: Project[] = [
  {
    id: 'quote-book-bot',
    title: "Quote Book Bot",
    overview: "A simple Discord bot to store ICSSC Board's various quotes",
    description: "Blah blah blah..." ,
    imageSrc: 
      "./quote-bot.png",
    tags: [
      "Rust", "Docker", "PostgreSQL", "AWS", "Github Actions", "Notion API",
    ],
    githubUrl: "https://github.com/fiveminus1/quote-bot",
  },
  {
    id: 'fabflix',
    title: "Fabflix",
    overview: "CS 122B's quarter-long project: a full-stack multiservice architecture movie browsing website",
    description: "Blah blah blah..." ,
    imageSrc: 
      "./fabflix.png",
    tags: [
      "Java", "CSS", "JavaScript", "MySQL", "Apache Tomcat", "AWS", "GCP", "Docker", "Kubernetes",
    ],
    link: "https://youtu.be/MhOHizmFNnI",
  },
  {
    id: 'sprite-type',
    title: "Sprite Type",
    overview: "A cozy Studio Ghibli-themed typing game built for IrvineHacks 2025 featuring animated custom sprites ",
    description: "Blah blah blah..." ,
    imageSrc: 
      "./spritetype.png",
    tags: [
      "React", "Next.js", "MongoDB", "Tailwind CSS"
    ],
    githubUrl: "https://github.com/fiveminus1/SpriteType",
    link: "https://sprite-type.vercel.app/",
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
        </HStack>
        
          <SimpleGrid 
            minChildWidth="200px"
            gap="12px"
          >
            {projects.map((project) => (
              <ProjectModal project={project} key={project.title}/>
            ))}
          </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Projects;