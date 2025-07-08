"use client";

import { Box, Flex, Link, Button, HStack } from "@chakra-ui/react";

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="black" boxShadow="sm" px={4} py={3}> 
      <Flex maxW="6xl" mx="auto" justify="center" align="center">
        <HStack>
          <Box fontWeight="bold" fontSize="lg" px={4} py={2}>
            jeremiahsoe {/* todo: want to keep this? */}
          </Box>
          <Button variant="ghost" onClick={() => scrollToSection("#about")} px={4} py={2}>
            About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("#projects")} px={4} py={2}>
            Projects
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;