import './globals.css'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '700'],
})

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Reric Corporation',
  description: 'Reric Corporation - Building the future of technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
