import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box id="hero" minH="100vh" display="flex" alignItems="center" justifyContent="left" px={4}>
      <Stack direction="column" textAlign="left">
        <Heading size="4xl">hey, i'm jeremiah</Heading>
        <Text fontSize="lg">blah blah blah</Text>
      </Stack>
    </Box>
  );
};

export default Hero;