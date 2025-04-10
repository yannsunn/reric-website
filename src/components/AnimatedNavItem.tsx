"use client";

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type AnimatedNavItemProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export const AnimatedNavItem: FC<AnimatedNavItemProps> = ({ 
  href, 
  children, 
  className = '', 
  external = false,
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={href} 
        className={`text-darkGray hover:text-primary transition-colors duration-300 ${className}`}
        onClick={handleClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    </motion.div>
  );
}; 