'use client';

import { useState, useEffect } from 'react';
import { AnimatedNavItem } from '@/components';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // メニューが開いているときにスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-darkGray p-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        aria-label="メニュー"
        aria-expanded={isOpen}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50 max-h-[80vh] overflow-y-auto rounded-b-lg"
            >
              <nav className="flex flex-col p-6">
                <AnimatedNavItem href="#vision" onClick={closeMenu} className="text-xl py-4 border-b border-gray-100">
                  企業理念
                </AnimatedNavItem>
                <AnimatedNavItem href="#business" onClick={closeMenu} className="text-xl py-4 border-b border-gray-100">
                  事業内容
                </AnimatedNavItem>
                <AnimatedNavItem href="#company" onClick={closeMenu} className="text-xl py-4 border-b border-gray-100">
                  会社概要
                </AnimatedNavItem>
                <AnimatedNavItem href="#contact" onClick={closeMenu} className="text-xl py-4">
                  お問い合わせ
                </AnimatedNavItem>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu; 