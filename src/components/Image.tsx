'use client';

import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'style'> {
  fallback?: string;
  preserveAspectRatio?: boolean;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallback = '/images/placeholder.jpg',
  preserveAspectRatio = true,
  style,
  fill,
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  
  // fillプロパティがある場合は別のロジックで処理する
  if (fill) {
    return (
      <NextImage
        src={error ? fallback : src}
        alt={alt}
        fill={fill}
        className={className}
        onError={() => setError(true)}
        {...props}
      />
    );
  }
  
  // fillがない場合は通常のロジックを使用
  const finalStyle = preserveAspectRatio ? {
    ...style,
    width: 'auto',
    height: 'auto',
  } : style;

  return (
    <NextImage
      src={error ? fallback : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={finalStyle}
      onError={() => setError(true)}
      {...props}
    />
  );
} 