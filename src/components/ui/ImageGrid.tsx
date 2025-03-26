
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeInSection from './FadeInSection';

interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, aspectRatio = 'aspect-square' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        aspectRatio,
        'relative overflow-hidden rounded-md transition-all duration-300',
        isHovered ? 'scale-[0.98]' : 'scale-100'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        'absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:500px_100%]',
        !isLoaded && 'animate-shimmer'
      )} />
      
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      
      <div className={cn(
        'absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300',
        isHovered && 'opacity-100'
      )}>
        <div className="px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm font-medium">View</div>
      </div>
    </div>
  );
};

interface ImageGridProps {
  images: Array<{ src: string, alt: string }>;
  className?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4', className)}>
      {images.map((image, index) => (
        <FadeInSection key={index} delay={100 * index} direction="up">
          <Image src={image.src} alt={image.alt} />
        </FadeInSection>
      ))}
    </div>
  );
};

export default ImageGrid;
