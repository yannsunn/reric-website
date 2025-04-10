import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="animate-pulse mb-8">
        <Image src="/logo.svg" alt="Reric Logo" width={100} height={100} />
      </div>
      
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-t-secondary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
      </div>
      
      <h2 className="mt-8 text-xl font-medium text-gray-700">読み込み中...</h2>
    </div>
  );
} 