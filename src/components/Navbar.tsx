import { Box, Flex, Link, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="header" position="sticky" top="0" zIndex="10" bg="black" boxShadow="sm" px={4} py={3}> 
      <Flex maxW="6xl" mx="auto" justify="center" align="center">
        <HStack>
          <Box fontWeight="bold" fontSize="lg" px={4} py={2}>
            jeremiahsoe {/* todo: want to keep this? */}
          </Box>
          <Link href="#about" fontWeight="medium" px={4} py={2}>
            About
          </Link>
          <Link href="#projects" fontWeight="medium" px={4} py={2}>
            Projects
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;