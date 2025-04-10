"use client";

import React, { useRef, useEffect, useState } from 'react';
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

// サーバーサイドレンダリングの問題を回避するラッパー
const ClientOnlyMotion = React.forwardRef(({ children, ...props }: any, ref: any) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  if (!isMounted) {
    return <div className="motion-placeholder">{children}</div>;
  }
  
  return <motion.div ref={ref} {...props}>{children}</motion.div>;
});

ClientOnlyMotion.displayName = 'ClientOnlyMotion';

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: AnimatedImageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

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

  if (!isMounted) {
    return (
      <div className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  return (
    <AnimationErrorBoundary>
      <LazyMotion features={domAnimation}>
        <ClientOnlyMotion
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? reducedMotionVariants : imageVariants}
          whileHover={shouldReduceMotion ? {} : { scale: 1.03, transition: { duration: 0.3 } }}
          aria-live="polite"
          className={`relative ${className}`}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            ref={imageRef}
            className="w-full h-full object-cover"
            onLoad={handleLoadingComplete}
          />
        </ClientOnlyMotion>
      </LazyMotion>
    </AnimationErrorBoundary>
  );
} 