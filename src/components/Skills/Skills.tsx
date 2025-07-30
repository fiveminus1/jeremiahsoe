"use client";

import { Card, HStack, VStack, Heading, Wrap, WrapItem, Box, Icon, Text } from "@chakra-ui/react";
import { SiReact, SiNextdotjs, SiPostgresql, SiPython, SiTypescript, SiMongodb } from "react-icons/si";
import { FaJava, FaAws, FaTools } from "react-icons/fa";
import { MotionBox } from "../util";
import FlashlightBox from "@/animations/FlashlightBox";

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
      <HStack gap={4}>
        <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
          Skills
        </Heading>
        <Box fontSize="2xl" as={FaTools} />
      </HStack>
            
      <FlashlightBox>
        <Card.Root
          width="100%"
          p={6}
          bg="rgba(255, 255, 255, 0.02)"
          shadow="sm"
        >
          <Wrap justify="center">
            {skills.map((skill) => {
              const SkillIcon = skill.icon;
              return (
                <WrapItem key={skill.name}>
                  <MotionBox
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p={4}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.1, ease: "easeOut" }}   
                  >
                    <Icon as={SkillIcon} boxSize={10} />
                    <Text mt={2}>{skill.name}</Text>
                  </MotionBox>
                </WrapItem>
              );
            })}

          </Wrap>
        </Card.Root>
      </FlashlightBox>
    </VStack>
  );
};

export default Skills;