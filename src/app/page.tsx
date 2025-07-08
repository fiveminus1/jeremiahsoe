"use client";

import { Box, Separator } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box bg="bg" color="fg">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </Box>
  );
}
