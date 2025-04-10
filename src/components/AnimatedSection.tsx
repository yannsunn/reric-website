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
    return () => setIsMounted(false);
  }, []);
  
  if (!isMounted) {
    return <div className="motion-placeholder">{children}</div>;
  }
  
  return <motion.div ref={ref} {...props}>{children}</motion.div>;
});

ClientOnlyMotion.displayName = 'ClientOnlyMotion';

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    mountedRef.current = true;
    
    return () => {
      mountedRef.current = false;
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    // まずは既存のオブザーバーをクリーンアップ
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // コンポーネントがマウントされている場合のみstateを更新
        if (entry.isIntersecting && !hasAnimated && mountedRef.current) {
          setTimeout(() => {
            if (mountedRef.current) {
              controls.start('visible').catch(() => {
                // アニメーションエラーを防止（コンポーネントがアンマウントされた場合など）
              });
              setHasAnimated(true);
            }
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px', // より早くトリガーするために上部と水平方向のマージンを調整
      }
    );

    observerRef.current.observe(sectionRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [controls, delay, hasAnimated, isMounted]);

  // 初期表示時は単純なdivでラップする（次のレンダリングでアニメーションが適用される）
  if (!isMounted) {
    return <div className={`${className} opacity-0`}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <ClientOnlyMotion
        ref={sectionRef}
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