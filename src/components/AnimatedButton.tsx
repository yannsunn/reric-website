"use client";

import { motion, Variants, domAnimation, LazyMotion, useReducedMotion } from 'framer-motion';
import { Component, ErrorInfo, MouseEvent, ReactNode, useEffect, useState } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
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
    console.error('AnimatedButton error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="animated-button-fallback">{this.props.children}</div>;
    }

    return this.props.children;
  }
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

// サーバーサイドレンダリングの問題を回避するラッパー
const ClientOnlyMotion = ({ children, ...props }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <button className="motion-placeholder">{children}</button>;
  }
  
  return <motion.button {...props}>{children}</motion.button>;
};

export default function AnimatedButton({
  children,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  id,
  name,
}: AnimatedButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const reducedMotionVariants: Variants = {
    initial: { scale: 1 },
    hover: { opacity: 0.8 },
    tap: { opacity: 0.7 },
  };

  if (!isMounted) {
    return (
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
        id={id}
        name={name}
      >
        {children}
      </button>
    );
  }

  return (
    <AnimationErrorBoundary>
      <LazyMotion features={domAnimation}>
        <ClientOnlyMotion
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={shouldReduceMotion ? reducedMotionVariants : buttonVariants}
          className={className}
          type={type}
          onClick={onClick}
          disabled={disabled}
          aria-live="polite"
          id={id}
          name={name}
        >
          {children}
        </ClientOnlyMotion>
      </LazyMotion>
    </AnimationErrorBoundary>
  );
} 