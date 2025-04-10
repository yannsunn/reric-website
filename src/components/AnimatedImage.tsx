"use client";

import React, { useRef, useEffect, useState } from 'react';
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

// サーバーサイドレンダリングの問題を回避するラッパー
const ClientOnlyMotion = ({ children, ...props }: any) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <div className="motion-placeholder">{children}</div>;
  }
  
  return <motion.div {...props}>{children}</motion.div>;
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} w-auto h-auto`}
        priority={priority}
        onLoadingComplete={handleLoadingComplete}
      />
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
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} w-auto h-auto`}
            priority={priority}
            onLoadingComplete={handleLoadingComplete}
          />
        </ClientOnlyMotion>
      </LazyMotion>
    </AnimationErrorBoundary>
  );
} 