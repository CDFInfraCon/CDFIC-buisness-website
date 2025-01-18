import Image from "next/image";

export default function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className || ""}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  );
}
