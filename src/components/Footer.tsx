"use client";

import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={6} mt={12}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        maxW="7xl"
        mx="auto"
        px={6}
        gap={4}
      >
        <Text fontSize="sm">Copyright {new Date().getFullYear()} (c) Jeremiah Soe. Built using{" "}
          <Link href="https://nextjs.org/">Next.js</Link>{", "}
          <Link href="https://chakra-ui.com/">Chakra UI</Link>{", and "}
          <Link href="https://motion.dev/">Motion</Link>{"."}
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;