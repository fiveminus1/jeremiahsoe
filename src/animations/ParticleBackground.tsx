"use client";

import { MotionBox } from "@/components/util";
import { Particle } from "@/types/types";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 50 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 5,
    size: Math.random() * 2 + 1,
    xOffset: Math.random() * 20 - 10,
    opacity: Math.random() * 0.3 + 0.1,
  }));


const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(40));
  }, []);

  return (
    <Box
      position="absolute"
      top="10vh"
      left={0}
      width="100%"
      height="75vh"
      zIndex={0}
      overflow="hidden"
      pointerEvents="none"
    >
      {particles.map((p) => (
        <MotionBox
          key={p.id}
          position="absolute"
          top={p.top}
          left={p.left}
          width={`${p.size}px`}
          height={`${p.size}px`}
          borderRadius="full"
          bg="white"
          opacity={p.opacity}
          filter="blur(1px)"
          animate={{ y: ["0%", "-150%"], x: [0, p.xOffset] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </Box>
  )
};

export default ParticleBackground;