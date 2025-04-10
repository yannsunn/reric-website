import OptimizedImage from '@/components/Image';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="text-center">
        <div className="relative mb-6 mx-auto">
          <OptimizedImage
            src="/logo.png"
            alt="株式会社エリック"
            width={100}
            height={100}
            className="mx-auto animate-pulse"
          />
          <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin-slow" />
        </div>
        <h2 className="text-xl font-medium text-primary">読み込み中...</h2>
      </div>
    </div>
  );
} 