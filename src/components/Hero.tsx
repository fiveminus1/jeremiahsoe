import { Box, Heading, Stack, Text, Highlight } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box id="hero" minH="100vh" display="flex" justifyContent="left" px={4} py={6}>
      <Stack direction="column" textAlign="left">
        <Heading size="6xl" fontWeight="bold">
          <Highlight 
            query={["Jeremiah Soe"]}
            styles={{ bg: "accentDark"}}
          >
          Blah blah, Jeremiah Soe.
          </Highlight>
        </Heading>
        <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Stack>
    </Box>
  );
};

export default Hero;