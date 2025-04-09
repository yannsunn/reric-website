import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "株式会社Reric",
  description: "株式会社Rericは小売業・卸売業・コンサルティングを専門とし、顧客の成功と幸福を追求する企業です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
