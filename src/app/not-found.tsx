import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="text-center max-w-lg px-6 py-16">
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Reric Logo" width={80} height={80} />
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">ページが見つかりません</h2>
        
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
          URLを確認するか、以下のリンクからホームページにお戻りください。
        </p>
        
        <Link 
          href="/" 
          className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
} 