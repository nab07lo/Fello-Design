import { HTMLAttributes } from 'react';

interface MediaRendererProps extends HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
}

export default function MediaRenderer({ src, alt, className, style, ...props }: MediaRendererProps) {
  const isVideo = src.match(/\.(mp4|webm|ogg)$/i);

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={style}
        {...(props as any)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Media content'}
      className={className}
      style={style}
      referrerPolicy="no-referrer"
      {...(props as any)}
    />
  );
}
