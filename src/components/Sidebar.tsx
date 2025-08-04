"use client";
import { Flex, IconButton, Separator } from "@chakra-ui/react";
import { FaPhone, FaUser, FaBriefcase, FaPowerOff } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const Sidebar = ({ toggleSpotlight }: { toggleSpotlight: () => void }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

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
      

      <IconButton variant="ghost" onClick={() => scrollToSection("about")}>
        <FaUser />
      </IconButton>

      <IconButton variant="ghost" onClick={() => scrollToSection("skills")}>
        <FaTools />
      </IconButton>

      <IconButton variant="ghost" onClick={() => scrollToSection("work")}>
        <FaBriefcase />
      </IconButton>

      <IconButton variant="ghost" onClick={() => scrollToSection("contact")}>
        <FaPhone />
      </IconButton>
      
      <Separator />

      <IconButton variant="ghost" onClick={toggleSpotlight}>
        <FaPowerOff />
      </IconButton>

      


      
    </Flex>

  );
}

export default Sidebar;
