"use client";
import { ClientOnly, Flex, IconButton, Separator } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPhone, FaUser, FaBriefcase } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { useColorMode } from "./ui/color-mode";

const Sidebar = () => {
  const { toggleColorMode, colorMode} = useColorMode()

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
      

    
      <ClientOnly>
        <Separator />

        <IconButton variant="ghost" onClick={toggleColorMode}>
          {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </IconButton>
      </ClientOnly>

      


      
    </Flex>

  );
}

export default Sidebar;
