"use client";

import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedImage from "../components/AnimatedImage";
import { AnimatedNavItem } from "../components/AnimatedNavItem";
import AnimatedCard from "../components/AnimatedCard";
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
      <section id="vision" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              OUR VISION
            </AnimatedHeader>
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <AnimatedImage
                src="/images/hands.jpg"
                alt="企業理念"
                width={800}
                height={400}
                className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
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
          <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            BUSINESS
            <span className="block text-2xl mt-4 text-gray-700">事業内容</span>
          </AnimatedHeader>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard
              title="小売業"
              description="BtoCを中心にECサイト、Amazonなどのショッピングモール、実店舗などで販売を行っています。お客様のニーズに合わせた商品選定と、迅速かつ丁寧な対応を心がけています。"
              icon="🏪"
              className="hover:shadow-xl transition-shadow duration-300"
            />
            <AnimatedCard
              title="卸売業"
              description="商品を仕入れ、小売業へ卸売を行っています。新商品の開発や提案も行っています。高品質な商品を適正価格で提供することで、取引先様のビジネス成長をサポートしています。"
              icon="🏭"
              className="hover:shadow-xl transition-shadow duration-300"
            />
            <AnimatedCard
              title="コンサルティング事業"
              description="商品の仕入れや販売戦略の提案など、企業様の課題解決をサポートするコンサルティングを行っています。豊富な業界経験と専門知識を活かし、お客様のビジネス成長を総合的にサポートします。"
              icon="💡"
              className="hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            COMPANY
            <span className="block text-2xl mt-4 text-gray-700">会社概要</span>
          </AnimatedHeader>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64 mb-8">
              <AnimatedImage
                src="/images/office.jpg"
                alt="会社オフィス"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="p-8">
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="py-4 text-left text-gray-600 w-1/3">会社名</th>
                    <td className="py-4">株式会社Reric</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="py-4 text-left text-gray-600">代表者名</th>
                    <td className="py-4">田中 玲哉</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="py-4 text-left text-gray-600">所在地</th>
                    <td className="py-4">〒581-0002 大阪府八尾市東久宝寺2-7-2</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="py-4 text-left text-gray-600">設立日</th>
                    <td className="py-4">2020年5月</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="py-4 text-left text-gray-600">TEL</th>
                    <td className="py-4">080-5638-2314</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            CONTACT
            <span className="block text-2xl mt-4 text-gray-700">お問い合わせ</span>
          </AnimatedHeader>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <AnimatedButton
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    送信する
                  </AnimatedButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">株式会社Reric</h3>
              <p className="text-gray-400">〒581-0002</p>
              <p className="text-gray-400">大阪府八尾市東久宝寺2-7-2</p>
              <p className="text-gray-400 mt-2">TEL: 080-5638-2314</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#vision" className="text-gray-400 hover:text-white transition-colors">
                    企業理念
                  </a>
                </li>
                <li>
                  <a href="#business" className="text-gray-400 hover:text-white transition-colors">
                    事業内容
                  </a>
                </li>
                <li>
                  <a href="#company" className="text-gray-400 hover:text-white transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 株式会社Reric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
