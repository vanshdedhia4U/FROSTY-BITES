import React, { useState } from 'react';

interface CakeImageProps {
  src: string;
  alt: string;
  className?: string;
  categoryHint?: string;
  titleHint?: string;
  aspectClass?: string;
  priority?: boolean;
}

export const CakeImage: React.FC<CakeImageProps> = ({
  src,
  alt,
  className = '',
  categoryHint,
  titleHint,
  aspectClass = 'aspect-[4/3]',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F6EDE3] ${aspectClass} ${className}`}
    >
      {/* Warm refined skeleton while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#F6EDE3] animate-pulse" />
      )}

      {/* Editorial Fallback if image fails */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-[#F6EDE3] text-[#3D231A]">
          <span className="font-serif text-2xl tracking-widest text-[#79321A] mb-1">
            FB
          </span>
          <span className="text-[11px] tracking-wider text-[#7A5C50] uppercase font-semibold">
            {categoryHint || 'Artisanal Cake'}
          </span>
          <h4 className="font-serif text-base font-normal text-[#3D231A] mt-1 max-w-[200px] leading-tight">
            {titleHint || alt}
          </h4>
          <span className="text-[10px] text-[#7A5C50] mt-1">
            Frosty Bites · Ambernath
          </span>
        </div>
      )}

      {/* Actual photo */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};
