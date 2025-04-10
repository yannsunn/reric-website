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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="text-center max-w-lg px-6 py-16">
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Reric Logo" width={80} height={80} />
        </div>
        
        <h1 className="text-4xl font-bold text-primary mb-4">エラーが発生しました</h1>
        
        <p className="text-gray-600 mb-8">
          申し訳ありませんが、サイトの表示中に問題が発生しました。
          もう一度試すか、ホームページに戻ってください。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="w-full sm:w-auto bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            もう一度試す
          </button>
          
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 