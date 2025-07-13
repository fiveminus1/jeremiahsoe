import { Box, Stack, Text, Highlight, HStack, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeModal from "./ResumeModal";
import { AnimatePresence, motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { MdEmail } from "react-icons/md";

const MotionHeading = motion.create(chakra.h1); 
const MotionBox = motion.create(Box);


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
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      py={{base:12, md:16}}
      px={{base:6, md:12}}
    >
      <Stack direction="column" maxW="4xl" textAlign="left">
        <MotionHeading 
          fontSize={headingSize} 
          fontWeight="bold" 
          lineHeight="short"
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
              <Text fontSize={textSize} mt={2}>
                <Highlight
                  query={["Computer Science"]}
                  styles={{ bg: "accentDark" }}
                >
                  Full-stack software engineer studying Computer Science at the 
                </Highlight>
                {" "}
                <Link href="https://uci.edu" color="textDark">
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
    </Box>
  );
};

export default Hero;