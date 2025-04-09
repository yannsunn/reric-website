import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants, domAnimation, LazyMotion } from 'framer-motion';

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

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, delay, hasAnimated]);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className={className}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
} 