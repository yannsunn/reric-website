"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-primary/95 backdrop-blur-sm text-white py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="株式会社Reric"
                width={40}
                height={40}
                className="mr-2 transition-transform group-hover:scale-105"
                priority={true}
              />
              <span className="text-xl font-bold group-hover:text-gray-200 transition-colors">株式会社Reric</span>
            </Link>
            <nav>
              <ul className="flex space-x-8">
                <li><Link href="/#vision" className="text-white hover:text-gray-200 transition-colors">企業理念</Link></li>
                <li><Link href="/#business" className="text-white hover:text-gray-200 transition-colors">事業内容</Link></li>
                <li><Link href="/#company" className="text-white hover:text-gray-200 transition-colors">会社概要</Link></li>
                <li><Link href="/#contact" className="text-white hover:text-gray-200 transition-colors">お問い合わせ</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* プライバシーポリシー */}
      <section id="privacy-policy" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-primary">プライバシーポリシー</h1>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">1. 個人情報の取り扱いについて</h2>
              <p className="text-gray-600 leading-relaxed">
                株式会社Reric（以下「当社」）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（個人情報保護法）に基づき、個人情報の適切な取り扱い及び保護に努めます。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">2. 収集する個人情報の範囲</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                当社は、お問い合わせやサービスの提供にあたり、以下の個人情報を取得させていただきます：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>会社名（法人の場合）</li>
                <li>その他、お問い合わせの際にご提供いただく情報</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">3. 個人情報の利用目的</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                取得した個人情報は、以下の目的で利用させていただきます：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                <li>お問い合わせに対する回答</li>
                <li>サービスの提供及び業務の遂行</li>
                <li>サービスの品質向上</li>
                <li>お客様との連絡・コミュニケーション</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">4. 個人情報の第三者提供</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-3 ml-4">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">5. 個人情報の安全管理</h2>
              <p className="text-gray-600 leading-relaxed">
                当社は、個人情報の漏洩、滅失、き損等を防止するため、適切な安全管理措置を講じます。また、従業員に対する教育・指導を徹底し、個人情報の適切な取り扱いに努めます。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">6. 個人情報の開示・訂正・利用停止</h2>
              <p className="text-gray-600 leading-relaxed">
                お客様ご本人からの個人情報の開示、訂正、利用停止等のご要望があった場合、合理的な範囲で速やかに対応いたします。その際、ご本人確認をさせていただく場合がございます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary">7. お問い合わせ窓口</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください：
              </p>
              <div className="text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-xl">
                <p className="font-medium text-primary mb-2">株式会社Reric</p>
                <p>住所：〒581-0002 大阪府八尾市東久宝寺2-7-2</p>
                <p>電話：080-5638-2314</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.svg"
                alt="株式会社Reric"
                width={60}
                height={60}
                className="mx-auto mb-4 transition-transform group-hover:scale-105"
              />
              <p className="text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors">株式会社Reric</p>
            </Link>
            <p className="text-gray-200">〒581-0002 大阪府八尾市東久宝寺2-7-2</p>
          </div>
          <div className="flex justify-center mb-8">
            <ul className="flex flex-wrap gap-8 justify-center">
              <li><Link href="/#vision" className="text-white hover:text-gray-200 transition-colors">企業理念</Link></li>
              <li><Link href="/#business" className="text-white hover:text-gray-200 transition-colors">事業内容</Link></li>
              <li><Link href="/#company" className="text-white hover:text-gray-200 transition-colors">会社概要</Link></li>
              <li><Link href="/#contact" className="text-white hover:text-gray-200 transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy-policy" className="text-white hover:text-gray-200 transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-gray-300">Copyright © 2025 株式会社Reric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 