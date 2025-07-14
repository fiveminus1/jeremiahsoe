"use client";

import { Box, Flex, Button, Link, HStack } from "@chakra-ui/react";

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="surface.elevated" color="fg" boxShadow="sm" px={4} height="60px" display="flex" alignItems="center"> 
      <Flex maxW="6xl" mx="auto" justify="space-between" align="center" height="100%">
        <Box fontWeight="bold" fontSize="lg" px={4}>
            JeremiahSoe {/* todo: want to keep this? */}
        </Box>

        <HStack align="center" height="100%" gap={0}>
          <Button 
            variant="ghost"
            color="fg"
            height="55px"
            onClick={() => scrollToSection("#about")}
          >
            About
          </Button>

          <Button 
            variant="ghost"
            color="fg"
            height="55px"
            onClick={() => scrollToSection("#skills")}
          >
            Skills
          </Button>

          <Button 
            variant="ghost"
            color="fg"
            height="55px"
            onClick={() => scrollToSection("#projects")}
          >
            Projects
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;