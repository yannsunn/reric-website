'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-lg mx-auto">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <Image
            src="/logo.svg"
            alt="株式会社Reric"
            fill
            className="object-contain"
            priority={true}
          />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">エラーが発生しました</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          申し訳ありませんが、問題が発生しました。もう一度お試しいただくか、ホームページに戻ってください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-lg transition-colors"
          >
            ホームページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 