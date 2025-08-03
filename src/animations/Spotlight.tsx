"use client";

import { MotionBox } from "@/components/util";

interface SpotlightProps {
  isOn: boolean;
  onComplete?: () => void;
}

const Spotlight = ({ isOn, onComplete }: SpotlightProps) => {
  return (
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
      onAnimationComplete={onComplete}
    />
  );
};

export default Spotlight;