"use client";

import { Card, Image, Wrap, VStack, Tag } from "@chakra-ui/react";
import type { Project } from "@/types/types";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import Flashlight from "@/animations/Flashlight";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const MotionCard = motion.create(chakra(Card.Root));

const ProjectCard = ({ title, overview, imageSrc, tags, onClick }: ProjectCardProps) => {
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
              <Card.Title>{title}</Card.Title>
              <Card.Description>{overview}</Card.Description>
            </VStack>
            
            <Wrap pt={2}>
              {tags.map((tag) => (
                <Tag.Root key={`${title}-${tag}`}>
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