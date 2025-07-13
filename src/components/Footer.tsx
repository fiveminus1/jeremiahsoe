"use client";

import { Box, Flex, Text, Link, VStack, HStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={6} mt={12} bg="surface.elevated">
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
              <Link fontSize="sm" href="mailto:jeremiahjsoe@gmail.com">Email</Link>
            </HStack>
            <HStack gap={1}>
              <FaLinkedin size={16} />
              <Link fontSize="sm" href="https://www.linkedin.com/in/jeremiah-soe/">LinkedIn</Link>
            </HStack>
          </HStack>
        </VStack>
        <VStack align={{base: "center", md: "flex-end"}} textAlign={{base: "center", md: "right"}}>
          <Text fontSize="sm">Copyright {new Date().getFullYear()} (c) Jeremiah Soe. Built using{" "}
            <Link href="https://nextjs.org/">Next.js</Link>{", "}
            <Link href="https://chakra-ui.com/">Chakra UI</Link>{", and "}
            <Link href="https://motion.dev/">Motion</Link>{"."}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;