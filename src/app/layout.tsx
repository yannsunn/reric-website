import { Metadata as NextMetadata } from "next/types";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export type Metadata = NextMetadata;

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reric株式会社",
  description: "Reric株式会社のコーポレートサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
