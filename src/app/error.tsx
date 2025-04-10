'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/Image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error);
  }, [error]);

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
        <h1 className="text-3xl font-bold text-primary mb-4">エラーが発生しました</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          申し訳ありませんが、問題が発生しました。もう一度お試しいただくか、ホームページに戻ってください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="border border-primary text-primary hover:bg-primary/10 font-medium py-2 px-6 rounded-lg transition-colors"
          >
            ホームページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 