import Image from 'next/image';
import { AnimatedCard } from '@/components/AnimatedCard';

export default function Home() {
  const handleSectorClick = (sector: string) => {
    console.log(`Clicked ${sector} sector`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            私たちの事業について
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            創業以来、卸売、小売、不動産の3つの事業を柱に、お客様のニーズに応える
            サービスを提供してまいりました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard delay={0.2}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/wholesale-icon.svg"
                  alt="卸売事業"
                  width={48}
                  height={48}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                卸売事業
              </h3>
              <p className="text-gray-600 mb-4">
                高品質な商品を適正価格で提供し、取引先様の事業発展をサポートいたします。
              </p>
              <button
                onClick={() => handleSectorClick('wholesale')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                詳細を見る
              </button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/retail-icon.svg"
                  alt="小売事業"
                  width={48}
                  height={48}
                  className="text-green-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                小売事業
              </h3>
              <p className="text-gray-600 mb-4">
                お客様一人一人のニーズに寄り添い、最適な商品とサービスを提供いたします。
              </p>
              <button
                onClick={() => handleSectorClick('retail')}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                詳細を見る
              </button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.6}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Image
                  src="/realestate-icon.svg"
                  alt="不動産事業"
                  width={48}
                  height={48}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                不動産事業
              </h3>
              <p className="text-gray-600 mb-4">
                豊富な経験と専門知識を活かし、お客様の不動産に関する課題を解決いたします。
              </p>
              <button
                onClick={() => handleSectorClick('realestate')}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                詳細を見る
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </main>
  );
}