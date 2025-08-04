"use client";

import { Box, Heading, VStack, Text, HStack, Link, useBreakpointValue } from "@chakra-ui/react";

const About = () => {
  const textSize = useBreakpointValue({base: "sm", md: "lg"});
  
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
        </HStack>

        <Text textStyle={textSize}>
          I&apos;m a software engineer with experience across the stack. Currently, I&apos;m in my fourth year studying Computer Science at UC Irvine. 
        </Text>
        <Text>{" "}</Text>
        <Text textStyle={textSize}>
          At UCI, I&apos;m heavily involved in the <Link color="link" href="https://studentcouncil.ics.uci.edu/">ICS Student Council</Link>. 
          I work on <Link color="link" href="https://www.instagram.com/icssc.uci/">social media and outreach efforts</Link> towards the greater ICS community as part of the Public Relations Committee. 
          As a member of the Projects Committee, I contribute to a widely used course planning app, <Link color="link" href="https://peterportal.org/">PeterPortal</Link>. 
          I also write the club’s <Link color="link" href="https://icssc.link/ICSSCNewsletter">weekly newsletter</Link>.
        </Text>
        <Text>{" "}</Text>
        <Text textStyle={textSize}>
          Away from my desk, you&apos;ll find me lifting weights, battling a caffeine addiction, hiking, or playing video games (probably in that order). 
        </Text>
      </VStack>
    </Box>
  );
};

export default About;