"use client";

import { Card, Image, Wrap, VStack, Tag, Link, IconButton, HStack } from "@chakra-ui/react";
import type { Project } from "@/types/types";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import Flashlight from "@/animations/Flashlight";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const MotionCard = motion.create(chakra(Card.Root));

const ProjectCard = ({ title, overview, imageSrc, tags, onClick, githubUrl, link }: ProjectCardProps) => {
  return (
    <MotionCard 
      // maxW="400px"
      // w="full" 
      mx="auto"
      onClick={onClick} 
      cursor="pointer" 
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}      
      bgGradient="card"
      borderColor="gray.800"
    > 
      <Image
        src={imageSrc}
        h="200px"
        w="full"
        fit="cover"
        objectPosition="left"
        alt={title}
        flexShrink={0}
        bg="gray.950"
      />
      <Flashlight>
        <Card.Body>
          <VStack align="start">
            <VStack align="start" gap={2} minH="80px" maxH="80px">
              <HStack gap={1}>
                <Card.Title>
                  {title}
                </Card.Title>
                <HStack gap={0}>
                  {link && (
                    <Link href={link}>
                      <IconButton variant="ghost" size="xs" >
                        <FaExternalLinkSquareAlt />
                      </IconButton>
                    </Link>
                  )}
                  {githubUrl && (
                    <Link href={githubUrl}>
                      <IconButton variant="ghost" size="xs" >
                        <FaGithub />
                      </IconButton>
                    </Link>
                  )}
                </HStack>
              </HStack>
              <Card.Description color="muted">{overview}</Card.Description>
            </VStack>
            
            <Wrap pt={2}>
              {tags.map((tag) => (
                <Tag.Root colorPalette="blue" key={`${title}-${tag}`}>
                  <Tag.Label>{tag}</Tag.Label>
                </Tag.Root>
              ))}
            </Wrap>
          </VStack>
        </Card.Body> 
      </Flashlight>
    </MotionCard >
  )
};

export default ProjectCard;