"use client";

import Link from "next/link";
import Image from "next/image";
import Header from './header';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-white">Reric</h1>
            <div className="flex space-x-6">
              <a href="#business" className="text-white hover:text-accent transition-colors">事業内容</a>
              <a href="#company" className="text-white hover:text-accent transition-colors">会社概要</a>
              <a href="#contact" className="text-white hover:text-accent transition-colors">お問い合わせ</a>
            </div>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            未来を創造する
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            最先端のテクノロジーで、より良い社会の実現を目指します
          </p>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="business" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-16">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src="/images/business/retail-online.jpg"
                  alt="オンラインショッピング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">小売業</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  国内主要ECモール（Amazon、Yahoo!ショッピング、楽天など）を活用して商品を提供してまいります。高品質なショッピングを追及してまいります。
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src="/images/business/wholesale-warehouse.jpg"
                  alt="物流センター"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">卸売業</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  商品を仕入れ、小売業へと商品を提供します。数社との取引を行っています。
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src="/images/business/consulting-meeting.jpg"
                  alt="ビジネスコンサルティング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">コンサルティング事業</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  商品の仕入れや販売販路の開拓など小売業を営んでいる方を対象にコンサルティングを行っています。現在数名行っており、業績は右肩上がりとなっております。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-24 bg-gradient-radial from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-16">会社概要</h2>
          <div className="max-w-3xl mx-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-t border-gray-200">
                  <th className="py-6 text-left w-40 text-gray-600 text-base">会社名</th>
                  <td className="py-6 text-gray-800 text-base">株式会社Reric</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <th className="py-6 text-left text-gray-600 text-base">代表者</th>
                  <td className="py-6 text-gray-800 text-base">田中 玲哉</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <th className="py-6 text-left text-gray-600 text-base">所在地</th>
                  <td className="py-6 text-gray-800 text-base">〒581-0002 大阪府八尾市東久宝寺2-7-2</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <th className="py-6 text-left text-gray-600 text-base">資本金</th>
                  <td className="py-6 text-gray-800 text-base">100万円</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <th className="py-6 text-left text-gray-600 text-base">電話番号</th>
                  <td className="py-6 text-gray-800 text-base">080-5638-2314</td>
                </tr>
                <tr className="border-t border-gray-200 border-b">
                  <th className="py-6 text-left text-gray-600 text-base">取扱いジャンル</th>
                  <td className="py-6 text-gray-800 text-base">家電</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-16">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <p className="text-center mb-16 text-base text-gray-600 leading-relaxed">
                サービスや取り扱い商品に関するお問い合わせ、お見積もり、その他ご要望等ございましたら、お気軽にお問い合わせください。担当スタッフが迅速に対応いたします。
              </p>
              <div className="bg-white">
                <ContactForm />
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gradient-to-t from-primary to-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p className="font-serif text-2xl font-bold mb-4">Reric</p>
            <p className="text-sm opacity-80">&copy; 2024 Reric Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
