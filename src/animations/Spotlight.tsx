"use client";

import { MotionBox } from "@/components/util";

const Spotlight = () => {
  return (
    <MotionBox
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={1}
      bg="radial-gradient(ellipse 100% 30% at top center, rgba(255, 250, 200, 0.3) 0%, transparent 80%)"
      filter="blur(12px)"
      mixBlendMode="screen"
      pointerEvents="none"

      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.4, 0.1, 0.6, 0.3, 0.7, 0.5, 1],
        transition: {
          duration: 1.6,
          ease: "easeInOut",
        },
      }}
    />
  )
};

export default Spotlight;