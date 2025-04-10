import React from 'react';
import Link from 'next/link';
import { AnimatedNavItem } from './AnimatedNavItem';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`flex gap-4 ${className}`}>
      <AnimatedNavItem href="/" className="">
        ホーム
      </AnimatedNavItem>
      <AnimatedNavItem href="/about" className="">
        会社概要
      </AnimatedNavItem>
      <AnimatedNavItem href="/services" className="">
        サービス
      </AnimatedNavItem>
      <AnimatedNavItem href="/contact" className="">
        お問い合わせ
      </AnimatedNavItem>
    </nav>
  );
} 