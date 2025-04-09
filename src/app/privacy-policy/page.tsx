"use client";

import Link from "next/link";
import AnimatedHeader from "../../components/AnimatedHeader";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedImage from "../../components/AnimatedImage";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
            <AnimatedImage
              src="/logo.svg"
              alt="株式会社Reric"
              width={150}
              height={60}
              priority
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/#vision" className="hover:text-primary">
                  企業理念
                </Link>
              </li>
              <li>
                <Link href="/#business" className="hover:text-primary">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/#company" className="hover:text-primary">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-3xl font-bold mb-12 text-center" level={1}>
            プライバシーポリシー
          </AnimatedHeader>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={200}>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">1. 個人情報の収集・利用目的</h2>
                <p className="mb-4">
                  当社は、以下の目的で個人情報を収集・利用いたします：
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>お問い合わせへの対応</li>
                  <li>サービス提供に関する連絡</li>
                  <li>商品・サービスの提供</li>
                  <li>アフターサービスの提供</li>
                  <li>新商品・サービスに関する情報提供</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">2. 個人情報の管理</h2>
                <p className="mb-4">
                  当社は、個人情報の正確性及び安全性を確保するために、セキュリティ対策を実施し、個人情報の漏洩、紛失、破壊、改ざん及び不正アクセスの防止に努めます。
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">3. 個人情報の第三者提供</h2>
                <p className="mb-4">
                  当社は、以下の場合を除き、お客様の同意を得ることなく第三者に個人情報を提供することはありません：
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">4. 個人情報の開示・訂正・削除</h2>
                <p className="mb-4">
                  お客様ご本人からの個人情報の開示、訂正、削除等のご要望があった場合、合理的な範囲で速やかに対応いたします。
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={1000}>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">5. プライバシーポリシーの変更</h2>
                <p className="mb-4">
                  当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={1200}>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">6. お問い合わせ窓口</h2>
                <p className="mb-4">
                  個人情報の取扱いに関するお問い合わせは、下記の窓口までご連絡ください：
                </p>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="mb-2">株式会社Reric</p>
                  <p className="mb-2">〒581-0002</p>
                  <p className="mb-2">大阪府八尾市東久宝寺2-7-2</p>
                  <p>TEL: 080-5638-2314</p>
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">株式会社Reric</h3>
              <p>〒581-0002 大阪府八尾市東久宝寺2-7-2</p>
            </div>
            
            <nav className="mt-6 md:mt-0">
              <ul className="flex flex-wrap space-x-4">
                <li><Link href="/#vision" className="hover:text-gray-300">企業理念</Link></li>
                <li><Link href="/#business" className="hover:text-gray-300">事業内容</Link></li>
                <li><Link href="/#company" className="hover:text-gray-300">会社概要</Link></li>
                <li><Link href="/#contact" className="hover:text-gray-300">お問い合わせ</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-gray-300">プライバシーポリシー</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="mt-8 text-center">
            <p>Copyright 2025 © 株式会社Reric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 