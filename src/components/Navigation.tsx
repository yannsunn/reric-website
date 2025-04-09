import React from 'react';
import Link from 'next/link';
import { AnimatedNavItem } from './AnimatedNavItem';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`flex gap-4 ${className}`}>
      <AnimatedNavItem href="/" className="text-gray-600 hover:text-gray-900">
        ホーム
      </AnimatedNavItem>
      <AnimatedNavItem href="/about" className="text-gray-600 hover:text-gray-900">
        会社概要
      </AnimatedNavItem>
      <AnimatedNavItem href="/services" className="text-gray-600 hover:text-gray-900">
        サービス
      </AnimatedNavItem>
      <AnimatedNavItem href="/contact" className="text-gray-600 hover:text-gray-900">
        お問い合わせ
      </AnimatedNavItem>
    </nav>
  );
} 