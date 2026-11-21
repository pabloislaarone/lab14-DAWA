import Image from 'next/image';

interface AvatarProps {
  src: string;
  name: string;
  sizes: string;
}

// Retrato del perfil. Mientras no haya foto, el marco queda vacío con las iniciales.
export default function Avatar({ src, name, sizes }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        fill
        sizes={sizes}
        loading="lazy"
        className="object-cover"
      />
    );
  }

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      role="img"
      aria-label={`Retrato de ${name} (pendiente)`}
      className="absolute inset-0 flex items-end p-6 bg-paper"
    >
      <span
        aria-hidden="true"
        className="text-[clamp(4rem,12vw,7rem)] font-bold tracking-[-0.05em] leading-none text-line-strong"
      >
        {initials}
      </span>
    </div>
  );
}
