import { Box, Heading, Stack, Text, Highlight, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <Box id="hero" minH="100vh" display="flex" justifyContent="left" alignItems="center" px={12} py={16}>
      <Stack direction="column" textAlign="left">
        <Heading size="6xl" fontWeight="bold">
          <Highlight 
            query={["Jeremiah Soe"]}
            styles={{ bg: "accentDark"}}
          >
          Blah blah, Jeremiah Soe.
          </Highlight>
        </Heading>
        <Text fontSize="lg">
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
        </HStack>
      </Stack>
    </Box>
  );
};

export default Hero;