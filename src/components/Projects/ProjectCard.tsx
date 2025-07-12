"use client";

import { Card, Image, Wrap, VStack, Tag } from "@chakra-ui/react";
import type { Project } from "@/types/types";

interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const ProjectCard = ({ title, description, imageSrc, tags, onClick }: ProjectCardProps) => {
  return (
    <Card.Root 
      width="400px" 
      onClick={onClick} 
      cursor="pointer" 
      _hover={{boxShadow: "lg"}}
    > {/* todo: update hover effect */}
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
    </Card.Root>
  )
};

export default ProjectCard;