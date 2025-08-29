"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
  className?: string;
}>;

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  x = 0,
  once = true,
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const initial = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, x, y };

  const animate = prefersReduced
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}


