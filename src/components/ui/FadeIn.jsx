import React from "react";
import { motion } from "motion/react";

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  y = 36,
  scale = 1,
  once = true,
  amount = 0.05,
  margin = "0px 0px -20px 0px",
  ease = "easeInOut",
  as = "div",
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount, margin }}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

export default FadeIn;
