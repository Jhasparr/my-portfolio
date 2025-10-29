"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

interface AnimatedOnScrollProps extends MotionProps {
  children: ReactNode;
  className?: string;
   threshold?: number;
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  className,
  threshold = 0.2,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: threshold  });

  return (
     <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};


export default AnimatedOnScroll;
