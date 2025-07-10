import { Box, Heading, Stack, Text, Highlight, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

const Hero = () => {
  const headingSize = useBreakpointValue({base: "3xl", md: "4xl", lg: "6xl"});
  const textSize = useBreakpointValue({base: "md", md: "lg"});

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
        <Heading fontSize={headingSize} fontWeight="bold" lineHeight="short">
          <Highlight 
            query={["Jeremiah Soe"]}
            styles={{ bg: "accentDark"}}
          >
          Blah blah, Jeremiah Soe.
          </Highlight>
        </Heading>
        <Text fontSize={textSize}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <HStack py={4}>
          <IconButton 
            aria-label="GitHub"
            variant="surface"
          >
            <FaGithub />
          </IconButton>
          <IconButton 
            aria-label="LinkedIn"
            variant="surface"
          >
            <FaLinkedin />
          </IconButton>

          <ResumeModal />
        </HStack>
      </Stack>
    </Box>
  );
};

export default Hero;