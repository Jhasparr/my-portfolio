"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

interface ScrollPopAnimationProps extends MotionProps {
  children: ReactNode;
  className?: string;
  threshold?: number; // 0-1, amount of element visible to trigger
}

const ScrollPopAnimation: React.FC<ScrollPopAnimationProps> = ({
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
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
      transition={{ duration: 0.7, ease: "backOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollPopAnimation;
