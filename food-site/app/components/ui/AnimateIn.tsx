"use client";
import { motion, useReducedMotion } from "motion/react";

type From = "bottom" | "left" | "right" | "none";

const variants = {
  bottom: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  left:   { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right:  { hidden: { opacity: 0, x: 32 },  visible: { opacity: 1, x: 0 } },
  none:   { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export default function AnimateIn({
  children,
  from = "bottom",
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  from?: From;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={variants[from]}
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
