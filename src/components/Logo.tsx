import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="/logo.svg" 
      width={100} 
      height={50}
      fetchPriority="high"
      alt="株式会社Reric"
      className="mr-2"
    />
  );
} 