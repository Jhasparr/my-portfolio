"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

interface ScrollFlipProps extends MotionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

const ScrollFlip: React.FC<ScrollFlipProps> = ({
  children,
  className,
  threshold = 0.2,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: -90 }}
      animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFlip;
