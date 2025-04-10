"use client";

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants, domAnimation, LazyMotion } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// サーバーサイドレンダリングの問題を回避するラッパー
const ClientOnlyMotion = React.forwardRef(({ children, ...props }: any, ref: any) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <div className="motion-placeholder">{children}</div>;
  }
  
  return <motion.div ref={ref} {...props}>{children}</motion.div>;
});

ClientOnlyMotion.displayName = 'ClientOnlyMotion';

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            controls.start('visible');
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, delay, hasAnimated, isMounted]);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <ClientOnlyMotion
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className={className}
      >
        {children}
      </ClientOnlyMotion>
    </LazyMotion>
  );
} 