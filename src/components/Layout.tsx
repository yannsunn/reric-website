import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>株式会社Reric</title>
        <meta name="description" content="株式会社Rericの公式ウェブサイトです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">Reric</a>
          <Navigation />
        </div>
      </header>
      <main className="pt-16">{children}</main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">株式会社Reric</h2>
              <p className="text-sm">〒581-0002 大阪府八尾市東久宝寺2-7-2</p>
              <p className="text-sm">TEL: 080-5638-2314</p>
            </div>
            <Navigation />
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} 株式会社Reric All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}; 