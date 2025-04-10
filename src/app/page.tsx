"use client";

import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedImage from "../components/AnimatedImage";
import { AnimatedNavItem } from "../components/AnimatedNavItem";
import { AnimatedCard } from "../components/AnimatedCard";
import AnimatedButton from "../components/AnimatedButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm py-4 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex justify-between items-center">
            <AnimatedImage
              src="/logo.svg"
              alt="株式会社Reric"
              width={150}
              height={60}
              className="hover:opacity-80 transition-opacity"
              priority
            />
            <ul className="flex space-x-8">
              <AnimatedNavItem href="#vision" className="text-gray-600 hover:text-primary transition-colors">
                企業理念
              </AnimatedNavItem>
              <AnimatedNavItem href="#business" className="text-gray-600 hover:text-primary transition-colors">
                事業内容
              </AnimatedNavItem>
              <AnimatedNavItem href="#company" className="text-gray-600 hover:text-primary transition-colors">
                会社概要
              </AnimatedNavItem>
              <AnimatedNavItem href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                お問い合わせ
              </AnimatedNavItem>
            </ul>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section id="vision" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1a5f7a] to-[#2c88a0]">
              OUR VISION
            </AnimatedHeader>
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <AnimatedImage
                src="/images/hands.jpg"
                alt="ビジネス握手"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                株式会社Rericは小売業・卸売業・コンサルティングを専門とし、顧客の成功と幸福を追求することを企業理念とします。
              </p>
              <p className="text-lg leading-relaxed">
                最高品質のサービス提供を通じて顧客の信頼と満足を追求します。他企業様と調和を取りながら事業に取り組んでいます。
              </p>
              <p className="text-lg leading-relaxed">
                私たちは常にお客様の視点に立ち、真のニーズを理解し、最適なソリューションを提供することで、長期的な信頼関係を構築します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="business" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1a5f7a] to-[#2c88a0]">
            BUSINESS
            <span className="block text-2xl mt-4 text-gray-700">事業内容</span>
          </AnimatedHeader>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard
              title="小売業"
              description="BtoCを中心にECサイト、Amazonなどのショッピングモール、実店舗などで販売を行っています。お客様のニーズに合わせた商品選定と、迅速かつ丁寧な対応を心がけています。"
              icon="🏪"
              className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#1a5f7a]"
            />
            <AnimatedCard
              title="卸売業"
              description="商品を仕入れ、小売業へ卸売を行っています。新商品の開発や提案も行っています。高品質な商品を適正価格で提供することで、取引先様のビジネス成長をサポートしています。"
              icon="🏭"
              className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2c88a0]"
            />
            <AnimatedCard
              title="コンサルティング事業"
              description="商品の仕入れや販売戦略の提案など、企業様の課題解決をサポートするコンサルティングを行っています。豊富な業界経験と専門知識を活かし、お客様のビジネス成長を総合的にサポートします。"
              icon="💡"
              className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#f5a623]"
            />
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1a5f7a] to-[#2c88a0]">
            COMPANY
            <span className="block text-2xl mt-4 text-gray-700">会社概要</span>
          </AnimatedHeader>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#1a5f7a]">会社情報</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-32 font-bold text-gray-600">会社名</div>
                      <div>株式会社Reric</div>
                    </div>
                    <div className="flex">
                      <div className="w-32 font-bold text-gray-600">代表者</div>
                      <div>田中 玲哉</div>
                    </div>
                    <div className="flex">
                      <div className="w-32 font-bold text-gray-600">所在地</div>
                      <div>〒581-0002 大阪府八尾市東久宝寺2-7-2</div>
                    </div>
                    <div className="flex">
                      <div className="w-32 font-bold text-gray-600">資本金</div>
                      <div>100万円</div>
                    </div>
                    <div className="flex">
                      <div className="w-32 font-bold text-gray-600">電話番号</div>
                      <div>080-5638-2314</div>
                    </div>
                    <div className="flex">
                      <div className="w-32 font-bold text-gray-600">事業内容</div>
                      <div>小売業、卸売業、コンサルティング</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <AnimatedImage
                    src="/images/company.jpg"
                    alt="会社概要"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1a5f7a] to-[#2c88a0]">
            CONTACT
            <span className="block text-2xl mt-4 text-gray-700">お問い合わせ</span>
          </AnimatedHeader>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <p className="text-gray-600 mb-8 text-center">
                  サービスや商品に関するお問い合わせは、お気軽にご連絡ください。
                  お問い合わせいただいた内容に、迅速かつ丁寧に対応いたします。
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-field"
                      placeholder="例：山田 太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder="例：example@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-field"
                      placeholder="例：090-1234-5678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      件名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="input-field"
                      placeholder="例：商品について"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="input-field"
                      placeholder="お問い合わせ内容を入力してください"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <AnimatedButton
                      type="submit"
                      className="btn-primary"
                    >
                      送信する
                    </AnimatedButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-[#1a5f7a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">株式会社Reric</h3>
              <p className="text-gray-300">〒581-0002</p>
              <p className="text-gray-300">大阪府八尾市東久宝寺2-7-2</p>
              <p className="text-gray-300 mt-2">TEL: 080-5638-2314</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#vision" className="text-gray-300 hover:text-white transition-colors">
                    企業理念
                  </a>
                </li>
                <li>
                  <a href="#business" className="text-gray-300 hover:text-white transition-colors">
                    事業内容
                  </a>
                </li>
                <li>
                  <a href="#company" className="text-gray-300 hover:text-white transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 株式会社Reric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
