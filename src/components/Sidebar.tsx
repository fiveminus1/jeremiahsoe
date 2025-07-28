"use client";
import { Flex, IconButton, Separator } from "@chakra-ui/react";
import { FaUser, FaBriefcase, FaMoon } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      position="fixed"
      top="50%"
      right="2rem"
      transform="translateY(-50%)"
      bg="rgba(255, 255, 255, 0.02)"
      p={2}
      gap={2}
      borderRadius="xl"
      zIndex={10}
      height="auto"
      shadow="lg"
    >
      <IconButton variant="ghost">
        <FaUser />
      </IconButton>

      <IconButton variant="ghost">
        <FaTools />
      </IconButton>

      <IconButton variant="ghost">
        <FaBriefcase />
      </IconButton>

      <Separator />

      <IconButton variant="ghost">
        <FaMoon />
      </IconButton>
    </Flex>

  );
}

export default Sidebar;
