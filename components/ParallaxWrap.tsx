"use client";

import { useRef, type ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  fromY?: number;
  toY?: number;
};

export function ParallaxWrap({
  children,
  className = "man_absolute_image",
  fromY = 0,
  toY = 100,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [fromY, toY]);

  return (
    <motion.div ref={ref} className={className} style={{ y }} data-bottom-top={`transform:translateY(${fromY}px)`} data-center-bottom={`transform:translateY(${toY}px)`}>
      {children}
    </motion.div>
  );
}
