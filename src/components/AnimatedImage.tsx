"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, domAnimation, LazyMotion, useReducedMotion } from 'framer-motion';
import { Component, ErrorInfo } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class AnimationErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AnimatedImage error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="animated-image-fallback">{this.props.children}</div>;
    }

    return this.props.children;
  }
}

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: AnimatedImageProps) {
  const shouldReduceMotion = useReducedMotion();

  const reducedMotionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
  };

  const imageRef = useRef<HTMLImageElement>(null);

  const handleLoadingComplete = () => {
    if (imageRef.current) {
      // Handle image loading completion
    }
  };

  return (
    <AnimationErrorBoundary>
      <LazyMotion features={domAnimation}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? reducedMotionVariants : imageVariants}
          whileHover={shouldReduceMotion ? {} : { scale: 1.03, transition: { duration: 0.3 } }}
          aria-live="polite"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} w-auto h-auto`}
            priority={priority}
            onLoad={handleLoadingComplete}
            ref={imageRef}
          />
        </motion.div>
      </LazyMotion>
    </AnimationErrorBoundary>
  );
} 