"use client";

import { Box, Container, Stack, Text, HStack, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeModal from "./ResumeModal";
import { AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { MdEmail } from "react-icons/md";
import { MotionBox, MotionHeading } from "../util";
import ParticleBackground from "@/animations/ParticleBackground";

const Hero = () => {
  const headingSize = useBreakpointValue({base: "3xl", md: "4xl", lg: "6xl"});
  const textSize = useBreakpointValue({base: "md", md: "lg"});

  const [typedText, { isDone }] = useTypewriter({
    words: [
      "Full-stack software engineer studying Computer Science at the University of California, Irvine."
    ],
    loop: 1,
    typeSpeed: 20,
    deleteSpeed: 30,
    delaySpeed: 1000
  })

  return (
    <Box 
      id="hero" 
      w="100%"
      display="flex" 
    >
      <ParticleBackground />
      <Container
        maxW="7xl"
        py={{base:24, md:32}}
        px={{base:4, md:8}}
      >
        <Stack direction="column" maxW="5xl" textAlign="left">
          <MotionHeading 
            fontSize={headingSize} 
            fontWeight="bold" 
            lineHeight="short"
            textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            Jeremiah Soe
    
          </MotionHeading>

          <AnimatePresence mode="wait">
            {!isDone ? (
              <MotionBox
                key="typing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              >
                <Text fontSize={textSize} mt={2}>
                  {typedText}
                  <Cursor />
                </Text>
              </MotionBox>
            ) : (
              <MotionBox 
                key="highlight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <Text fontSize={textSize} mt={2} textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)">
                  Full-stack software engineer studying Computer Science at the 
                  {" "}
                  <Link href="https://uci.edu" color="link">
                    University of California, Irvine.
                  </Link>                
                </Text>
              </MotionBox>
            )}
          </AnimatePresence>
          
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <HStack py={4}>
              <Link href="mailto:jeremiahjsoe@gmail.com">
                <IconButton 
                  aria-label="Email"
                  variant="surface"
                >
                  <MdEmail />
                </IconButton>
              </Link>

              <Link href="https://github.com/fiveminus1">
                <IconButton 
                  aria-label="GitHub"
                  variant="surface"
                >
                  <FaGithub />
                </IconButton>
              </Link>

              <Link href="https://www.linkedin.com/in/jeremiah-soe/">
                <IconButton 
                  aria-label="LinkedIn"
                  variant="surface"
                >
                  <FaLinkedin />
                </IconButton>
              </Link>

              <ResumeModal />
            </HStack>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;