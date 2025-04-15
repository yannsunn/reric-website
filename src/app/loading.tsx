import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/logo.svg"
            alt="株式会社Reric"
            fill
            className="object-contain animate-pulse"
            priority={true}
          />
          <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin" 
               style={{ animationDuration: '1.5s' }} />
        </div>
        <h2 className="text-2xl font-medium text-primary animate-pulse">読み込み中...</h2>
      </div>
    </div>
  );
} 