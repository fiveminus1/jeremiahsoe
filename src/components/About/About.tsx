"use client";

import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <Box
      id="about"
      py={12}
    >
      <VStack align="stretch">
        <HStack gap={4}>
          <Heading size="4xl" fontWeight="bold" textAlign="left" py={4}>
          About me
          </Heading>
          <Box fontSize="2xl" as={FaUser} />
        </HStack>

        <Text textStyle="lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </VStack>
    </Box>
  );
};

export default About;