import Link from 'next/link';
import OptimizedImage from '@/components/Image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="text-center">
        <OptimizedImage
          src="/logo.png"
          alt="株式会社エリック"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-4">ページが見つかりません</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          URLが正しいかご確認いただくか、ホームページに戻ってください。
        </p>
        <Link 
          href="/" 
          className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          ホームページに戻る
        </Link>
      </div>
    </div>
  );
} 