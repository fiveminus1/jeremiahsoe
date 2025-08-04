"use client";

import { MotionBox } from "@/components/util";
import { Particle } from "@/types/types";
import { useEffect, useRef, useState } from "react";

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
  })
);

interface ParticlesBackgroundProps {
  particles: Particle[]
}

const ParticlesBackground = ( { particles }: ParticlesBackgroundProps ) => {
  return (
    <MotionBox
      position="absolute"
      top="10vh"
      left={0}
      width="100%"
      height="75vh"
      zIndex={0}
      overflow="hidden"
      pointerEvents="none"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8, ease: "easeInOut"}}
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
    </MotionBox>
  );
}


interface SpotlightProps {
  isOn: boolean;
  onComplete?: () => void;
}

const Spotlight = ({ isOn, onComplete }: SpotlightProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showParticles, setShowParticles] = useState(false);
  const prevIsOn = useRef(false);

  useEffect(() => {
    if(isOn && !prevIsOn.current){
      setShowParticles(false);
    }
    prevIsOn.current = isOn;
  }, [isOn]);

  useEffect(() => {
    if (isOn){
      setParticles(generateParticles(40));
    }
    else { 
      setParticles([]);
      setShowParticles(false);
    }
  }, [isOn]);

  return (
    <>
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1}
        bg="radial-gradient(ellipse 100% 30% at top center, rgba(255, 250, 200, 0.2) 0%, transparent 80%)"
        filter="blur(12px)"
        mixBlendMode="screen"
        pointerEvents="none"
        initial={{ opacity: 0 }}
        animate={
          isOn ? {
            opacity: [0, 0.5, 0.3, 1],
            transition: {
              duration: 1.2,
              times: [0, 0.3, 0.5, 1],
              ease: "easeInOut",
            },
          } : {
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }
        }
        onAnimationComplete={() => {
          if(isOn && !showParticles){
            setShowParticles(true);
            onComplete?.();
          }
        }}
      />

      {isOn && showParticles && <ParticlesBackground particles={particles} /> }
    </>
  );
};

export default Spotlight;