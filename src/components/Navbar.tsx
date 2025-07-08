"use client";

import { Box, Flex, Button, HStack } from "@chakra-ui/react";

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="surface.elevated" color="fg" boxShadow="sm" px={4} py={3}> 
      <Flex maxW="6xl" mx="auto" justify="center" align="center">
        <HStack>
          <Box fontWeight="bold" fontSize="lg" px={4} py={2}>
            JeremiahSoe {/* todo: want to keep this? */}
          </Box>
          <Button bg="primary" color="fg" variant="ghost" onClick={() => scrollToSection("#about")} px={4} py={2}>
            About
          </Button>
          <Button bg="primary" color="fg" variant="ghost" onClick={() => scrollToSection("#projects")} px={4} py={2}>
            Projects
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;