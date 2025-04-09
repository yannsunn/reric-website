import Image from 'next/image';
import { motion, Variants, domAnimation, LazyMotion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: AnimatedImageProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </motion.div>
    </LazyMotion>
  );
} 