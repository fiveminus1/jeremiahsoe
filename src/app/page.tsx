"use client";

import { Container, Flex } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer";
import About from "@/components/About/About";

export default function Home() {
  return (
    <Flex direction="column" minH="10vh" bg="bg" color="fg">
      <Navbar />

      <Container maxW="7xl" flex="1" px={{base: 4, md: 8}}>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </Flex>
  );
}
