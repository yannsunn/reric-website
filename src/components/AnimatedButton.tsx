import { motion, Variants, domAnimation, LazyMotion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const buttonVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export default function AnimatedButton({
  children,
  className = '',
  ...props
}: AnimatedButtonProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.button
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.button>
    </LazyMotion>
  );
} 