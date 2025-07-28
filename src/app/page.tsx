"use client";

import { Container, Flex } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Work/Work";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer";
import About from "@/components/About/About";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    
    <Flex 
      direction="column" 
      bgGradient="to-br"
      gradientFrom="gray.950"
      gradientVia="blue.950"
      gradientTo="blue.900"
      color="fg"
    >      
      <Sidebar /> 
      <Hero />
      <Container maxW="7xl" flex="1" px={{base: 4, md: 8}}>
        <About />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </Flex>
  );
}
