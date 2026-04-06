"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
  margin?: string;
};

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  margin?: string;
};

const DEFAULT_MARGIN = "0px 0px -10% 0px";

export function FadeInSection({
  children,
  className,
  distance = 22,
  duration = 0.45,
  delay = 0,
  margin = DEFAULT_MARGIN,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  margin = DEFAULT_MARGIN,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 18,
  duration = 0.4,
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
