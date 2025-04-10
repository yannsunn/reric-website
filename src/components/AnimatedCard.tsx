"use client";

import { motion, Variants, domAnimation, LazyMotion, useReducedMotion } from 'framer-motion';
import { ReactNode, Component, ErrorInfo, useEffect, useState } from 'react';
import { FC } from 'react';
import Image from 'next/image';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon?: string;
  iconSrc?: string;
  className?: string;
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
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
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

const AnimatedCard: FC<AnimatedCardProps> = ({
  title,
  description,
  icon,
  iconSrc,
  className = '',
}) => {
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
    hover: {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    }
  };

  // アイコンコンポーネントを切り替え
  const IconComponent = () => {
    if (iconSrc) {
      return (
        <div className="w-24 h-24 mx-auto mb-6 text-primary">
          <img src={iconSrc} alt={title} className="w-full h-full" />
        </div>
      );
    } else if (icon) {
      return (
        <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
          <Image
            src={icon}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    return null;
  };

  if (!isMounted) {
    return (
      <div className={`bg-white p-8 rounded-2xl shadow-lg ${className}`}>
        <IconComponent />
        <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }

  return (
    <AnimationErrorBoundary>
      <LazyMotion features={domAnimation}>
        <ClientOnlyMotion
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={shouldReduceMotion ? reducedMotionVariants : cardVariants}
          className={`bg-white p-8 rounded-2xl shadow-lg ${className}`}
        >
          <IconComponent />
          <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </ClientOnlyMotion>
      </LazyMotion>
    </AnimationErrorBoundary>
  );
};

export default AnimatedCard; 