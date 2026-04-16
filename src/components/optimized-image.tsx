import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
  srcSet?: string;
  sizes?: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'loading' | 'decoding' | 'fetchPriority' | 'srcSet' | 'sizes'>;

export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  decoding = 'async',
  srcSet,
  sizes,
  avifSrcSet,
  webpSrcSet,
  ...rest
}: OptimizedImageProps) {
  return (
    <picture>
      {avifSrcSet ? <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} /> : null}
      {webpSrcSet ? <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} /> : null}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        srcSet={srcSet}
        sizes={sizes}
        {...rest}
      />
    </picture>
  );
}
