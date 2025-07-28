"use client";

import { Box, Flex, Text, Link, VStack, HStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={6} mt={12} >
      <Flex
        direction={{ base: "column", md: "row"}}
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        px={6}
        gap={4}
      >
        <VStack align={{base: "center", md: "flex-start"}} textAlign={{base: "center", md: "left"}}>
          <Text fontSize="sm" fontWeight="semibold">Links</Text>
          <HStack>
            <HStack gap={1}>
              <MdEmail size={16} />
              <Link fontSize="sm" color="#60a5fa" href="mailto:jeremiahjsoe@gmail.com">Email</Link>
            </HStack>
            <HStack gap={1}>
              <FaGithub size={16} />
              <Link fontSize="sm" color="#60a5fa" href="https://github.com/fiveminus1">GitHub</Link>
            </HStack>
            <HStack gap={1}>
              <FaLinkedin size={16} />
              <Link fontSize="sm" color="#60a5fa" href="https://www.linkedin.com/in/jeremiah-soe/">LinkedIn</Link>
            </HStack>
          </HStack>
        </VStack>
        <VStack align={{base: "center", md: "flex-end"}} textAlign={{base: "center", md: "right"}}>
          <Text fontSize="sm">Copyright {new Date().getFullYear()} (c) Jeremiah Soe. </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;