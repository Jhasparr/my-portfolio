"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

interface ScrollSlideProps extends MotionProps {
  children: ReactNode;
  className?: string;
  from?: "left" | "right"; // direction
  threshold?: number;
}

const ScrollSlide: React.FC<ScrollSlideProps> = ({
  children,
  className,
  from = "left",
  threshold = 0.2,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: threshold });

  // initial offset based on direction
  const xOffset = from === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSlide;
