"use client";

import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <Box
      id="about"
      py={12}
    >
      <VStack align="stretch">
        <HStack gap={4}>
          <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
          About me
          </Heading>
          <Box fontSize="2xl" as={FaUser} />
        </HStack>

        <Text textStyle="lg">
          I&apos;m a software engineer with experience across the stack, particularly in web development. Currently, I&apos;m in my fourth year studying Computer Science at UC Irvine. 
        </Text>
        <Text>{" "}</Text>
        <Text textStyle="lg">
          At UCI, I&apos;m heavily involved in the ICS Student Council. I work on social media and outreach efforts towards the greater ICS community as part of the Public Relations Committee. 
          As a member of the Projects Committee, I contribute to a widely used course planning app, PeterPortal. 
          I also write the club’s weekly newsletter.
        </Text>
        <Text>{" "}</Text>
        <Text textStyle="lg">
          Away from my desk, you&apos;ll find me lifting weights, battling a caffeine addiction, hiking, or playing video games (probably in that order). 
        </Text>
      </VStack>
    </Box>
  );
};

export default About;