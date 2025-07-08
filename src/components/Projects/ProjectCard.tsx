"use client";

import { Card, Image, Wrap, VStack, Tag } from "@chakra-ui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

const ProjectCard = ({ title, description, imageSrc, tags }: ProjectCardProps) => {
  return (
    <Card.Root width="400px">
      <Image
        src={imageSrc}
        height="200px"
        width="400px"
        objectFit="cover"
        alt={title}
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