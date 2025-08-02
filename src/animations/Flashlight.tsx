"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import { useRef, useState } from "react";

const Flashlight = ({ children, ...props }: BoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number, y: number } | null>({ x: -9999, y: -9999 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if(!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({x, y});
    setActive(true);
  }

  const handleMouseLeave = () => {
    setActive(false);
  }

  return (
    <Box 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      position="relative"
      overflow="hidden"
      flex="1"
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        background:`radial-gradient(400px at ${pos?.x ?? 0}px ${pos?.y ?? 0}px, rgba(255, 250, 200, 0.15), transparent 80%)`,
        opacity: active ? 1 : 0,
        pointerEvents: "none",
        zIndex: 0,
        transition: "opacity 0.3s ease, background 0.05s ease",
      }}
      zIndex={0}
      {...props}
    >
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default Flashlight;