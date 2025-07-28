"use client";

import { Card, Image, Wrap, VStack, Tag } from "@chakra-ui/react";
import type { Project } from "@/types/types";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const MotionCard = motion.create(chakra(Card.Root));

const ProjectCard = ({ title, description, imageSrc, tags, onClick }: ProjectCardProps) => {
  return (
    <MotionCard 
      width="400px" 
      onClick={onClick} 
      cursor="pointer" 
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0px 16px 24px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}      
      bgGradient="cardBgDark"
      borderColor="gray.800"
    > 
      <Image
        src={imageSrc}
        height="200px"
        width="400px"
        objectFit="cover"
        alt={title}
        flexShrink={0}
      />
      <Card.Body>
        <VStack align="start">
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Wrap>
            {tags.map((tag) => (
              <Tag.Root key={`${title}-${tag}`}>
                <Tag.Label>{tag}</Tag.Label>
              </Tag.Root>
            ))}
          </Wrap>
        </VStack>
      </Card.Body> 
    </MotionCard >
  )
};

export default ProjectCard;