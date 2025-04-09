"use client";

import Link from "next/link";
import AnimatedHeader from "../../components/AnimatedHeader";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedImage from "../../components/AnimatedImage";
import AnimatedNavItem from "../../components/AnimatedNavItem";

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
              <AnimatedNavItem href="/#vision" className="hover:text-primary" delay={0}>
                企業理念
              </AnimatedNavItem>
              <AnimatedNavItem href="/#business" className="hover:text-primary" delay={1}>
                事業内容
              </AnimatedNavItem>
              <AnimatedNavItem href="/#company" className="hover:text-primary" delay={2}>
                会社概要
              </AnimatedNavItem>
              <AnimatedNavItem href="/#contact" className="hover:text-primary" delay={3}>
                お問い合わせ
              </AnimatedNavItem>
            </ul>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedHeader className="text-3xl font-bold mb-8 text-center" level={1}>
            プライバシーポリシー
          </AnimatedHeader>

          <AnimatedSection delay={200} className="prose max-w-none">
            <p className="mb-8">
              株式会社Reric（以下「当社」）は、お客様の個人情報保護の重要性を認識し、以下のプライバシーポリシーに従って個人情報を取り扱います。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">1. 個人情報の収集・利用目的</h2>
            <p className="mb-6">
              当社は、以下の目的で個人情報を収集・利用いたします：
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li>商品・サービスの提供</li>
              <li>お問い合わせへの対応</li>
              <li>新商品・サービスに関する情報提供</li>
              <li>サービス品質向上のための調査・分析</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. 個人情報の管理</h2>
            <p className="mb-8">
              当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、適切な安全対策を実施します。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. 個人情報の第三者提供</h2>
            <p className="mb-8">
              当社は、以下の場合を除き、お客様の個人情報を第三者に開示・提供することはありません：
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. 個人情報の開示・訂正・削除</h2>
            <p className="mb-8">
              お客様ご本人から個人情報の開示・訂正・削除のご請求があった場合、合理的な期間内に対応いたします。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. プライバシーポリシーの変更</h2>
            <p className="mb-8">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. お問い合わせ</h2>
            <p className="mb-8">
              本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-2">株式会社Reric</p>
              <p className="mb-2">〒582-0027</p>
              <p className="mb-2">大阪府八尾市八尾木北5丁目32-1</p>
              <p>TEL: 080-5326-2114</p>
            </div>
          </AnimatedSection>

          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">株式会社Reric</h3>
              <p className="text-gray-300 mb-2">〒582-0027</p>
              <p className="text-gray-300">大阪府八尾市八尾木北5丁目32-1</p>
            </div>
            
            <nav className="mt-0">
              <ul className="flex flex-col space-y-2">
                <li><a href="/#vision" className="hover:text-gray-300 transition-colors">企業理念</a></li>
                <li><a href="/#business" className="hover:text-gray-300 transition-colors">事業内容</a></li>
                <li><a href="/#company" className="hover:text-gray-300 transition-colors">会社概要</a></li>
                <li><a href="/#contact" className="hover:text-gray-300 transition-colors">お問い合わせ</a></li>
                <li><a href="/privacy-policy" className="hover:text-gray-300 transition-colors">プライバシーポリシー</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="pt-8 text-center border-t border-gray-700">
            <p className="text-gray-400">Copyright © 2024 株式会社Reric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 