"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

interface ProfileDivAnimationProps extends MotionProps {
  children: ReactNode;
  className?: string;
  threshold?: number; // fraction of element visible to trigger
}

const ProfileDivAnimation: React.FC<ProfileDivAnimationProps> = ({
  children,
  className,
  threshold = 0.3,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px", amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ProfileDivAnimation;
