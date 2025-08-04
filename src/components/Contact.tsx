"use client";

import { Box, Heading, VStack, HStack, Link, Text, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Box
      id="contact"
    >
      <VStack align="stretch">
        <HStack gap={4}>
          <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
          Contact
          </Heading>
        </HStack>

        <VStack align="start">
          <Link href="mailto:jeremiahjsoe@gmail.com">
            <Icon 
              aria-label="Email"
              size="lg"
            >
              <MdEmail />
            </Icon>
            <Text fontSize="xl" color="link">
              jeremiahjsoe@gmail.com
            </Text>
          </Link>

          <Link href="https://github.com/fiveminus1">
            <Icon 
              aria-label="GitHub"
              size="lg"
            >
              <FaGithub />
            </Icon>
            <Text fontSize="xl" color="link">
              GitHub
            </Text>
          </Link>

          <Link href="https://www.linkedin.com/in/jeremiah-soe/">
            <Icon 
              aria-label="LinkedIn"
              size="lg"
            >
              <FaLinkedin />
            </Icon>
            <Text fontSize="xl" color="link">
              LinkedIn
            </Text>
          </Link>

        </VStack>
        
      </VStack>
    </Box>
  );
};

export default Contact;