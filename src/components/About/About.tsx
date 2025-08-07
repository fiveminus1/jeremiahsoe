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
          Currently, I&apos;m in my fourth year studying Computer Science with a specialization in Information and a minor in Informatics.
        </Text>
        <Text>{" "}</Text>
        <Text textStyle={textSize}>
          At UC Irvine, I work on social media outreach towards the school of ICS and develop course planning tools as a part of the{' '}
          <Link color="link" href="https://studentcouncil.ics.uci.edu/">ICS Student Council&apos;s</Link> Public Relations and Projects committees. I also write the club&apos;s{' '}
          <Link color="link" href="https://icssc.link/ICSSCNewsletter">weekly newsletter</Link>!
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