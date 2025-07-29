"use client";
import { Flex, IconButton, Separator } from "@chakra-ui/react";
import { FaMoon, FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      position="fixed"
      top="50%"
      right="2rem"
      transform="translateY(-50%)"
      bg="rgba(255, 255, 255, 0.05)"
      p={2}
      gap={2}
      borderRadius="xl"
      zIndex={10}
      height="auto"
      shadow="lg"
    >
      <IconButton variant="ghost">
        <FaMoon />
      </IconButton>

      <Separator />

      <IconButton variant="ghost">
        <FaHome />
      </IconButton>

      <IconButton variant="ghost">
        <FaPhone />
      </IconButton>


      
    </Flex>

  );
}

export default Sidebar;
