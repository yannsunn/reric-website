"use client";

import Link from "next/link";
import HeaderNav from '@/components/HeaderNav';
import MobileMenu from '@/components/MobileMenu';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Reric Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-lg md:text-xl font-bold">Reric</span>
        </Link>
        <HeaderNav />
        <MobileMenu />
      </div>
    </header>
  );
} 