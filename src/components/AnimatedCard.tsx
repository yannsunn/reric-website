import { motion, Variants, domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: delay * 0.2,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
    },
  },
};

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
}: AnimatedCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        custom={delay}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={cardVariants}
        className={className}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
} 