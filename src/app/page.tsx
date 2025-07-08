"use client";

import { Box, Separator } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Box bg="bg" color="fg">
      <Navbar />
      <Hero />
      <Projects />
    </Box>
  );
}
