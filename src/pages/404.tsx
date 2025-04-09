import Link from 'next/link';
import { Layout } from '@components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">ページが見つかりませんでした</p>
        <Link 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          ホームページへ戻る
        </Link>
      </div>
    </Layout>
  );
} 