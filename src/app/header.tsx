"use client";

import React from 'react';
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-white">Reric</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#business" className="text-white hover:text-accent transition-colors">事業内容</a>
            <a href="#company" className="text-white hover:text-accent transition-colors">会社概要</a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">お問い合わせ</a>
          </div>
        </div>
      </nav>
    </header>
  );
} 