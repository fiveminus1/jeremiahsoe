"use client";

import { Box, Flex, Button, HStack } from "@chakra-ui/react";

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="bg.panel" color="fg" boxShadow="sm" px={4} height="60px" display="flex" alignItems="center"> 
      <Flex maxW="6xl" mx="auto" align="center" height="100%" width="100%">
        <Box fontWeight="bold" fontSize="lg" px={4}>
            Jeremiah Soe {/* todo: want to keep this? */}
        </Box>

        <HStack align="center" height="100%" gap={0} ml="auto">
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
            onClick={() => scrollToSection("#work")}
          >
            Work
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;