"use client";

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AnimatedNavItemProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export const AnimatedNavItem: FC<AnimatedNavItemProps> = ({ href, children, className = '', external = false }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const content = (
    <motion.span
      className={`inline-block ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className={className} onClick={handleClick}>
        {content}
      </Link>
    </motion.li>
  );
}; 