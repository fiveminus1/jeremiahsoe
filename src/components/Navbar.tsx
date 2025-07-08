"use client";

import { Box, Flex, Button, HStack, Tabs } from "@chakra-ui/react";

const scrollToSection = (sectionId: string) => {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="surface.elevated" color="fg" boxShadow="sm" px={4} height="60px"> 
      <Flex maxW="6xl" mx="auto" justify="center" align="center">
        <Box fontWeight="bold" fontSize="lg" px={4} py={2}>
            JeremiahSoe {/* todo: want to keep this? */}
        </Box>

        <Tabs.Root>
          <Tabs.List>
            <Tabs.Trigger 
              value="about"
              as={Button} 
              height="60px"
              bg="transparent" 
              color="fg" 
              py={2} 
            >
              About
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="projects"
              as={Button} 
              height="60px"
              bg="transparent" 
              color="fg" 
              py={2} 
            >
              Projects
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Flex>
    </Box>
  );
};

export default Navbar;