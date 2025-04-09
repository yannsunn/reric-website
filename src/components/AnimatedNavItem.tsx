"use client";

import { motion, Variants, domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedNavItemProps {
  children: ReactNode;
  href: string;
  className?: string;
  delay?: number;
}

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.1,
    },
  }),
};

export default function AnimatedNavItem({
  children,
  href,
  className = '',
  delay = 0,
}: AnimatedNavItemProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.li
        custom={delay}
        initial="hidden"
        animate="visible"
        variants={navItemVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        <a href={href} className={className}>
          {children}
        </a>
      </motion.li>
    </LazyMotion>
  );
} 