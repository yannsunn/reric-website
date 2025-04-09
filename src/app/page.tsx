import AnimatedCard from '@/components/AnimatedCard';
import AnimatedImage from '@/components/AnimatedImage';
import AnimatedButton from '@/components/AnimatedButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Company Section */}
      <section id="company" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16" delay={0}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">会社情報</h2>
            <p className="text-xl text-gray-600">
              私たちは、お客様のビジネスの成長をサポートします
            </p>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 卸売業 */}
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={1}>
              <div className="flex justify-center mb-6">
                <AnimatedImage
                  src="/wholesale-icon.svg"
                  alt="卸売業"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">卸売業</h3>
              <p className="text-gray-600 mb-6">
                商品を仕入れ、小売業へ卸売を行っています。新商品の開発や提案も行っています。
                高品質な商品を適正価格で提供することで、取引先様のビジネス成長をサポートしています。
              </p>
              <AnimatedButton
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={() => console.log('卸売業の詳細')}
              >
                詳細を見る
              </AnimatedButton>
            </AnimatedCard>

            {/* 小売業 */}
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={2}>
              <div className="flex justify-center mb-6">
                <AnimatedImage
                  src="/retail-icon.svg"
                  alt="小売業"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">小売業</h3>
              <p className="text-gray-600 mb-6">
                直営店舗とECサイトを通じて、お客様に商品を提供しています。
                お客様のニーズに合わせた商品選定と、丁寧な接客サービスを心がけています。
              </p>
              <AnimatedButton
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={() => console.log('小売業の詳細')}
              >
                詳細を見る
              </AnimatedButton>
            </AnimatedCard>

            {/* 不動産業 */}
            <AnimatedCard className="bg-white p-6 rounded-lg shadow-md" delay={3}>
              <div className="flex justify-center mb-6">
                <AnimatedImage
                  src="/realestate-icon.svg"
                  alt="不動産業"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">不動産業</h3>
              <p className="text-gray-600 mb-6">
                不動産の売買、賃貸、管理を行っています。
                お客様の大切な資産を適切に管理し、価値の向上に努めています。
              </p>
              <AnimatedButton
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={() => console.log('不動産業の詳細')}
              >
                詳細を見る
              </AnimatedButton>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </main>
  );
}