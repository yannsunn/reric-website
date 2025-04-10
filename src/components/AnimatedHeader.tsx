"use client";

import { motion, Variants, domAnimation, LazyMotion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import React from 'react';

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

export default function AnimatedHeader({ 
  children, 
  className = '', 
  level = 2 
}: AnimatedHeaderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const HeaderTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <HeaderTag className={className}>{children}</HeaderTag>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <ClientOnlyMotion
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <HeaderTag className={className}>
          {children}
        </HeaderTag>
      </ClientOnlyMotion>
    </LazyMotion>
  );
} 