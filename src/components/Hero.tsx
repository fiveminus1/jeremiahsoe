import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box id="hero" minH="100vh" display="flex" justifyContent="left" px={4}>
      <Stack direction="column" textAlign="left">
        <Heading size="6xl" fontWeight="bold">Jeremiah Soe</Heading>
        <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Stack>
    </Box>
  );
};

export default Hero;