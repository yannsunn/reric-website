"use client";

import { motion, Variants, domAnimation, LazyMotion, useReducedMotion } from 'framer-motion';
import { ReactNode, Component, ErrorInfo } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class AnimationErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AnimatedCard error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="animated-card-fallback">{this.props.children}</div>;
    }

    return this.props.children;
  }
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
  const shouldReduceMotion = useReducedMotion();

  const reducedMotionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    }
  };

  return (
    <AnimationErrorBoundary>
      <LazyMotion features={domAnimation}>
        <motion.div
          custom={delay}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={shouldReduceMotion ? reducedMotionVariants : cardVariants}
          className={className}
          aria-live="polite"
        >
          {children}
        </motion.div>
      </LazyMotion>
    </AnimationErrorBoundary>
  );
} 