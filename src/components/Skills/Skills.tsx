"use client";

import { Card, VStack, Heading, Wrap, WrapItem, Box, Icon, Text } from "@chakra-ui/react";
import { SiReact, SiNextdotjs, SiPostgresql, SiPython, SiTypescript, SiMongodb } from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: FaJava },
  { name: "AWS", icon: FaAws },
  { name: "MongoDB", icon: SiMongodb },
];

const Skills = () => {
  return (
    <VStack align="stretch" id="skills">
      <Heading size="5xl" fontWeight="bold" textAlign="left" py={4}>
        Skills
      </Heading>

      <Card.Root
        width="100%"
        p={6}
      >
        <Wrap justify="center">
          {skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <WrapItem key={skill.name}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={4}
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Icon as={SkillIcon} boxSize={10} />
                  <Text mt={2}>{skill.name}</Text>
                </Box>
              </WrapItem>
            );
          })}

        </Wrap>
        

      </Card.Root>
    </VStack>
  );
};

export default Skills;