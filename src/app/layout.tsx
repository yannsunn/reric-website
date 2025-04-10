import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株式会社Reric",
  description: "株式会社Rericのコーポレートサイトです。",
  metadataBase: new URL('https://reric.jp'),
  openGraph: {
    title: '株式会社Reric',
    description: '株式会社Rericのコーポレートサイトです。',
    url: 'https://reric.jp',
    siteName: 'RERIC',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Reric',
    description: '株式会社Rericのコーポレートサイトです。',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://www.google-analytics.com https://*.google-analytics.com; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com; frame-src 'self' https://www.google-analytics.com;"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
