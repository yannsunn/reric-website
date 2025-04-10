"use client";

import Link from "next/link";
import {
  AnimatedSection,
  AnimatedHeader,
  AnimatedImage,
  AnimatedCard,
  AnimatedButton
} from "@/components";
import Image from "next/image";
import HeaderNav from '@/components/HeaderNav';
import MobileMenu from '@/components/MobileMenu';
import ContactForm from '../components/ContactForm';
import { useEffect, useState } from 'react';
import Header from './header';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* ヘッダー */}
      <Header />

      {/* ヒーローセクション */}
      <section id="vision" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedImage
            src="/images/hero/office-modern.jpg"
            alt="オフィス"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeader className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              OUR VISION
            </AnimatedHeader>
            <div className="space-y-6 text-gray-700 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl">
              <p className="text-base md:text-lg leading-relaxed">
                株式会社Rericは小売業・卸売業・コンサルティングを専門とし、顧客の成功と幸福を追求することを企業理念とします。
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                最高品質のサービス提供を通じて顧客の信頼と満足を追求します。他企業様と調和を取りながら事業に取り組んでいます。
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                私たちは常にお客様の視点に立ち、真のニーズを理解し、最適なソリューションを提供することで、長期的な信頼関係を構築します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="business" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            BUSINESS
            <span className="block text-xl md:text-2xl mt-3 md:mt-4 text-gray-700">事業内容</span>
          </AnimatedHeader>
          
          {isClient && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              <AnimatedSection className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-primary hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <AnimatedImage
                    src="/images/business/retail.jpg"
                    alt="小売業"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">小売業</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    BtoCを中心にECサイト、Amazonなどのショッピングモール、実店舗などで販売を行っています。お客様のニーズに合わせた商品選定と、迅速かつ丁寧な対応を心がけています。
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div className="w-10 h-10">
                      <Image src="/images/retail.svg" alt="小売業" width={40} height={40} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-secondary hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <AnimatedImage
                    src="/images/business/wholesale.jpg"
                    alt="卸売業"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">卸売業</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    商品を仕入れ、小売業へ卸売を行っています。新商品の開発や提案も行っています。高品質な商品を適正価格で提供することで、取引先様のビジネス成長をサポートしています。
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div className="w-10 h-10">
                      <Image src="/images/wholesale.svg" alt="卸売業" width={40} height={40} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-accent hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <AnimatedImage
                    src="/images/business/consulting.jpg"
                    alt="コンサルティング事業"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">コンサルティング事業</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    商品の仕入れや販売戦略の提案など、企業様の課題解決をサポートするコンサルティングを行っています。豊富な業界経験と専門知識を活かし、お客様のビジネス成長を総合的にサポートします。
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div className="w-10 h-10">
                      <Image src="/images/consulting.svg" alt="コンサルティング" width={40} height={40} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          )}

          {!isClient && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="h-96 animate-pulse rounded-2xl bg-gray-200"></div>
              <div className="h-96 animate-pulse rounded-2xl bg-gray-200"></div>
              <div className="h-96 animate-pulse rounded-2xl bg-gray-200"></div>
            </div>
          )}
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            COMPANY
            <span className="block text-xl md:text-2xl mt-3 md:mt-4 text-gray-700">会社概要</span>
          </AnimatedHeader>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">会社情報</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-32 font-bold text-darkGray">会社名</div>
                      <div className="mt-1 md:mt-0">株式会社Reric</div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-32 font-bold text-darkGray">代表者</div>
                      <div className="mt-1 md:mt-0">田中 玲哉</div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-32 font-bold text-darkGray">所在地</div>
                      <div className="mt-1 md:mt-0">〒581-0002 大阪府八尾市東久宝寺2-7-2</div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-32 font-bold text-darkGray">資本金</div>
                      <div className="mt-1 md:mt-0">100万円</div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-32 font-bold text-darkGray">電話番号</div>
                      <div className="mt-1 md:mt-0">080-5638-2314</div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-32 font-bold text-darkGray">事業内容</div>
                      <div className="mt-1 md:mt-0">小売業、卸売業、コンサルティング</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <AnimatedImage
                    src="/images/hero/meeting-room.jpg"
                    alt="会社概要"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            CONTACT
            <span className="block text-xl md:text-2xl mt-3 md:mt-4 text-gray-700">お問い合わせ</span>
          </AnimatedHeader>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <p className="text-gray-600 mb-8 text-center">
                  サービスや商品に関するお問い合わせは、お気軽にご連絡ください。
                  お問い合わせいただいた内容に、迅速かつ丁寧に対応いたします。
                </p>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">株式会社Reric</h3>
              <p className="text-gray-300">〒581-0002</p>
              <p className="text-gray-300">大阪府八尾市東久宝寺2-7-2</p>
              <p className="text-gray-300 mt-2">TEL: 080-5638-2314</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2">
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
