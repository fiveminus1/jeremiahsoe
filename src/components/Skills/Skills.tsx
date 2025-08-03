"use client";

import { Card, HStack, VStack, Heading, Wrap, WrapItem, Box, Icon } from "@chakra-ui/react";
import { FaJava, FaAws, FaTools, FaRust, FaSwift, } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiSpringboot, 
  SiPostgresql, SiMysql, SiFirebase, SiMongodb,
  SiDocker, SiKubernetes, SiGithubactions, } from "react-icons/si";
import { Tooltip } from "../Tooltip";
import { MotionBox } from "../util";
import Flashlight from "@/animations/Flashlight";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "Rust", icon: FaRust },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Swift/SwiftUI", icon: FaSwift },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: FaFlutter },
  { name: "Spring", icon: SiSpringboot },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Amazon Web Services (AWS)", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Github Actions", icon: SiGithubactions },
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
            
      <Flashlight>
        <Card.Root
          width="100%"
          p={6}
          bg="rgba(255, 255, 255, 0.03)"
          shadow="sm"
          justifyContent="center"
          border="border"
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
                    p={4}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.1, ease: "easeOut" }}   
                  >
                    <Tooltip content={skill.name} openDelay={0} closeDelay={0}>
                      <Icon as={SkillIcon} boxSize={10} />
                    </Tooltip>
                  </MotionBox>
                </WrapItem>
              );
            })}
          </Wrap>
        </Card.Root>
      </Flashlight>
    </VStack>
  );
};

export default Skills;