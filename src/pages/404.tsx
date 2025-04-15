import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">ページが見つかりませんでした</p>
        <Link href="/" className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
} 