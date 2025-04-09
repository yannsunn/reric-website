"use client";

import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedImage from "../components/AnimatedImage";
import AnimatedNavItem from "../components/AnimatedNavItem";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedButton from "../components/AnimatedButton";

export default function Home() {
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
              <AnimatedNavItem href="#vision" className="hover:text-primary" delay={0}>
                企業理念
              </AnimatedNavItem>
              <AnimatedNavItem href="#business" className="hover:text-primary" delay={1}>
                事業内容
              </AnimatedNavItem>
              <AnimatedNavItem href="#company" className="hover:text-primary" delay={2}>
                会社概要
              </AnimatedNavItem>
              <AnimatedNavItem href="#contact" className="hover:text-primary" delay={3}>
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

      {/* ヒーローセクション */}
      <section id="vision" className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col items-center text-center px-4">
          <div className="w-full max-w-4xl">
            <AnimatedHeader 
              className="text-4xl font-bold mb-6"
              level={2}
            >
              OUR VISION
            </AnimatedHeader>
            
            <AnimatedSection delay={200}>
              <div className="mb-8">
                <AnimatedImage
                  src="/images/hands.jpg"
                  alt="企業理念"
                  width={800}
                  height={400}
                  className="mx-auto rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-lg mb-6">
                株式会社Rericは小売業・卸売業・コンサルティングを専門とし、顧客の成功と幸福を追求することを企業理念とします。
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <p className="text-lg mb-6">
                最高品質のサービス提供を通じて顧客の信頼と満足を追求します。他企業様と調和を取りながら事業に取り組んでいます。
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={800}>
              <p className="text-lg">
                私たちは常にお客様の視点に立ち、真のニーズを理解し、最適なソリューションを提供することで、長期的な信頼関係を構築します。誠実さと透明性を重視し、すべての取引において公正かつ倫理的な行動を心がけています。
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="business" className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-3xl font-bold mb-12 text-center" level={2}>
            BUSINESS<span className="block text-xl mt-2">事業内容</span>
          </AnimatedHeader>
          
          <AnimatedSection delay={200}>
            <p className="text-center max-w-3xl mx-auto mb-12">
              株式会社Rericでは、小売業、卸売業、コンサルティング事業の3つの柱を中心に事業を展開しています。それぞれの分野で専門知識と経験を活かし、お客様のニーズに合わせたサービスを提供しています。常に市場の動向を分析し、最新のトレンドを取り入れることで、お客様のビジネスの成長と発展をサポートします。
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={0}>
              <div className="flex justify-center mb-6">
                <AnimatedImage
                  src="/retail-icon.svg"
                  alt="小売業"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">小売業</h3>
              <div className="mb-4">
                <AnimatedImage
                  src="/images/retail.svg"
                  alt="小売業イメージ"
                  width={400}
                  height={250}
                  className="mx-auto rounded"
                />
              </div>
              <p>
                BtoCを中心にECサイト、Amazonなどのショッピングモール、実店舗などで販売を行っています。お客様のニーズに合わせた商品選定と、迅速かつ丁寧な対応を心がけています。
              </p>
              <p className="mt-4">
                当社は常に最新のトレンドと市場動向を分析し、お客様に最適な商品を提供することを目指しています。品質管理にも徹底的にこだわり、安心してご利用いただける商品のみを取り扱っています。
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={1}>
              <div className="flex justify-center mb-6">
                <AnimatedImage
                  src="/wholesale-icon.svg"
                  alt="卸売業"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">卸売業</h3>
              <div className="mb-4">
                <AnimatedImage
                  src="/images/wholesale.svg"
                  alt="卸売業イメージ"
                  width={400}
                  height={250}
                  className="mx-auto rounded"
                />
              </div>
              <p>
                商品を仕入れ、小売業へ卸売を行っています。新商品の開発や提案も行っています。高品質な商品を適正価格で提供することで、取引先様のビジネス成長をサポートしています。
              </p>
              <p className="mt-4">
                国内外の優れた製造元と強固なパートナーシップを築き、安定した供給体制を確立しています。また、市場のニーズに合わせた独自商品の開発にも積極的に取り組んでいます。
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={2}>
              <div className="flex justify-center mb-6">
                <AnimatedImage
                  src="/consulting-icon.svg"
                  alt="コンサルティング事業"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">コンサルティング事業</h3>
              <div className="mb-4">
                <AnimatedImage
                  src="/images/consulting.svg"
                  alt="コンサルティングイメージ"
                  width={400}
                  height={250}
                  className="mx-auto rounded"
                />
              </div>
              <p>
                商品の仕入れや販売戦略の提案など、企業様の課題解決をサポートするコンサルティングを行っています。豊富な業界経験と専門知識を活かし、お客様のビジネス成長を総合的にサポートします。
              </p>
              <p className="mt-4">
                市場分析、競合調査、販売戦略の立案、在庫管理の最適化など、多角的な視点からビジネス課題にアプローチします。お客様と共に考え、最適なソリューションを見出すことで、持続可能な成長を実現します。
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-3xl font-bold mb-12 text-center" level={2}>
            COMPANY<span className="block text-xl mt-2">会社概要</span>
          </AnimatedHeader>
          
          <AnimatedSection delay={200}>
            <p className="text-center max-w-3xl mx-auto mb-12">
              株式会社Rericは、2020年の設立以来、小売業・卸売業・コンサルティング事業を通じて、お客様と共に成長してまいりました。私たちは常に誠実さと透明性を大切にし、お客様との信頼関係を築くことを最優先に考えています。
            </p>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-8 mb-12">
            <AnimatedSection className="md:w-1/2" delay={400}>
              <AnimatedImage
                src="/images/company.svg"
                alt="会社オフィスイメージ"
                width={400}
                height={250}
                className="mx-auto rounded-lg shadow-md"
              />
            </AnimatedSection>
            <AnimatedCard className="md:w-1/2 bg-white p-8 rounded-lg shadow-md" delay={600}>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 text-left">会社名</th>
                    <td className="py-3">株式会社Reric</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left">代表者名</th>
                    <td className="py-3">田中 太郎</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left">所在地</th>
                    <td className="py-3">〒582-0027 大阪府八尾市八尾木北5丁目32-1</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left">設立日</th>
                    <td className="py-3">2020年5月</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left">TEL</th>
                    <td className="py-3">080-5326-2114</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left">取扱システム</th>
                    <td className="py-3">楽天</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedHeader className="text-3xl font-bold mb-12 text-center" level={2}>
            CONTACT<span className="block text-xl mt-2">お問い合わせ</span>
          </AnimatedHeader>
          
          <AnimatedSection delay={200}>
            <p className="text-center max-w-3xl mx-auto mb-12">
              サービスや商品に関するお問い合わせは、お気軽にご連絡ください。お問い合わせいただいた内容に、迅速かつ丁寧に対応いたします。
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <p className="text-center max-w-3xl mx-auto mb-12">
              新規取引のご相談、商品に関するご質問、コンサルティングサービスのお問い合わせなど、どのようなことでもお気軽にご連絡ください。専門スタッフが丁寧にご対応いたします。また、お電話でのお問い合わせも受け付けております。
            </p>
          </AnimatedSection>
          
          <AnimatedCard className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md" delay={600}>
            <form 
              action="#" 
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                // フォーム送信処理をここに追加
                alert('お問い合わせありがとうございます。メッセージを受け付けました。');
                // フォームをリセット
                e.currentTarget.reset();
              }}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <AnimatedButton
                type="submit"
                className="bg-primary text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                送信
              </AnimatedButton>
            </form>
          </AnimatedCard>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">株式会社Reric</h3>
              <p>〒582-0027 大阪府八尾市八尾木北5丁目32-1</p>
            </div>
            
            <nav className="mt-6 md:mt-0">
              <ul className="flex flex-wrap space-x-4">
                <li><a href="#vision" className="hover:text-gray-300">企業理念</a></li>
                <li><a href="#business" className="hover:text-gray-300">事業内容</a></li>
                <li><a href="#company" className="hover:text-gray-300">会社概要</a></li>
                <li><a href="#contact" className="hover:text-gray-300">お問い合わせ</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="mt-8 text-center">
            <p>Copyright © 2024 株式会社Reric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
