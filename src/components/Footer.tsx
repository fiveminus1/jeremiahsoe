"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={6} mt={12} >
      <Flex
        direction={{ base: "column", md: "row"}}
        justify="center"
        align="center"
        maxW="7xl"
        mx="auto"
        px={6}
        gap={4}
      >
        <VStack align={{base: "center", md: "flex-end"}} textAlign={{base: "center", md: "right"}}>
          <Text fontSize="md">Copyright {new Date().getFullYear()} (c) Jeremiah Soe. </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Footer;