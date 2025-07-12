import { Box, Heading, Stack, Text, Highlight, HStack, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";
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
          Jeremiah Soe
   
        </Heading>
        <Text fontSize={textSize}>
          <Highlight 
            query={["Computer Science"]}
            styles={{ bg: "accentDark" }}
          >
            I'm a full-stack software engineer currently studying Computer Science at the 
          </Highlight>
          {" "}
          <Link href="https://uci.edu" color="textDark">
            University of California, Irvine.
          </Link>
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