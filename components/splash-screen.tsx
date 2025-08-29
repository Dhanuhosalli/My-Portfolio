"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600","700"] });

type SplashProps = {
  onFinish: () => void;
  visibleMs?: number;
  fadeMs?: number;
  durationMs?: number; // optional total; derive visible/fade if provided
  message?: string;
};

export default function SplashScreen({
  onFinish,
  visibleMs,
  fadeMs,
  durationMs,
  message,
}: SplashProps) {
  const prefersReduced = useReducedMotion();

  const { visible, fade, total } = useMemo(() => {
    if (durationMs && (!visibleMs || !fadeMs)) {
      const v = Math.max(0, Math.min(durationMs, Math.floor(durationMs * 0.6)));
      const f = Math.max(0, durationMs - v);
      return { visible: v, fade: f, total: durationMs };
    }
    const v = visibleMs ?? 2800;
    const f = fadeMs ?? 1800;
    return { visible: v, fade: f, total: v + f };
  }, [visibleMs, fadeMs, durationMs]);

  const adjusted = prefersReduced
    ? { visible: 200, fade: 250, total: 450 }
    : { visible, fade, total };

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      onFinish();
    }, adjusted.total);
    return () => {
      document.body.style.overflow = original;
      clearTimeout(timer);
    };
  }, [onFinish, adjusted.total]);

  const times = [
    0,
    adjusted.visible / adjusted.total,
    1,
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: adjusted.total / 1000,
        times,
        ease: ["linear", "easeOut", "easeOut"],
      }}
    >
      <motion.div
        initial={prefersReduced ? { opacity: 0.8 } : { opacity: 0.8, scale: 0.94 }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={"text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 drop-shadow " + dancingScript.className}>
          {message ?? "Welcome to Dhanashree’s Portfolio"}
        </div>
      </motion.div>
    </motion.div>
  );
}



