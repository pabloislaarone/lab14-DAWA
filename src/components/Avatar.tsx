import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  preload?: boolean;
}

// Si no hay foto, muestra una silueta neutra en lugar de la imagen
export default function Avatar({ src, alt, sizes, className = '', preload = false }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        loading={preload ? undefined : 'lazy'}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-1/2 h-1/2" aria-hidden="true">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />
      </svg>
    </div>
  );
}
