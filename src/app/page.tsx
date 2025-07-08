import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
}
