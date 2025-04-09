import { motion, Variants, domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedHeaderProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function AnimatedHeader({ 
  children, 
  className = '', 
  level = 2 
}: AnimatedHeaderProps) {
  const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <HeaderTag className={className}>
          {children}
        </HeaderTag>
      </motion.div>
    </LazyMotion>
  );
} 