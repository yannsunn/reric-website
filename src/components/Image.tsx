'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = ImageProps & {
  fallbackSrc?: string;
};

export const OptimizedImage = ({ src, fallbackSrc = '/images/common/placeholder.png', alt, ...props }: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      style={{ 
        objectFit: props.style?.objectFit || 'cover' as const,
        width: props.style?.width || 'auto',
        height: props.style?.height || 'auto',
        ...props.style
      }}
    />
  );
};

export const AnimatedImage = (props: OptimizedImageProps) => {
  return (
    <OptimizedImage
      {...props}
      className={`transition-transform duration-500 ${props.className || ''}`}
    />
  );
}; 