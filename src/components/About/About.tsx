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
          I’m currently a fourth-year undergraduate studying Computer Science at UC Irvine. 
        </Text>
        <Text>{" "}</Text>
        <Text textStyle="lg">
          At UCI, I&apos;m heavily involved in the ICS Student Council. I work on social media outreach efforts towards the greater ICS community as part of the Public Relations Committee and also contribute to the development of PeterPortal, a widely used course planning tool, as a member of the Projects Committee. I also serve as Secretary, where I write the club’s weekly newsletter.
        </Text>
        <Text>{" "}</Text>
        <Text textStyle="lg">
          During my time at UCI, I also had the chance to study abroad at Hitotsubashi University. Check out my gallery page (coming soon) for some pictures from my time in Tokyo!
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