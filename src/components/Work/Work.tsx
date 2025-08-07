"use client";

import { Box, HStack, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/types/types";


const projects: Project[] = [
  {
    id: 'peterportal',
    title: 'PeterPortal',
    overview: 'A comprehensive course planning app used by thousands of Anteaters',
    coverImage: 
      "./peterportal.png",
    tags: [
      "TypeScript", "React", "SCSS", "Material UI", "PostgreSQL", "tRPC", "Drizzle ORM", "Next.js"
    ],
    githubUrl: "https://github.com/icssc/peterportal-client",
    link: "https://peterportal.org/",
  },
  {
    id: 'personal-site',
    title: 'Personal Site',
    overview: 'You\'re on it right now!',
    coverImage: 
      "./personal-site.png",
    tags: [
      "Chakra UI", "React", "Motion", "Next.js", "TypeScript"
    ],
    githubUrl: "https://github.com/icssc/peterportal-client",
    link: "https://peterportal.org/",
  },

  {
    id: 'quote-book-bot',
    title: "Quote Book Bot",
    overview: "A simple Discord bot to store ICSSC Board's various quotes",
    coverImage: 
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
    coverImage: 
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
    coverImage: 
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
            columns={{ base: 1, sm: 2, md: 3 }}
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