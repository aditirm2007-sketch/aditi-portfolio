import Image from "next/image";

export default function Portrait({ src, alt = "Aditi RM", className = "" }) {
  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-rule bg-surface ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 420px, 90vw"
            className="object-cover grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 mix-blend-color bg-brand/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,var(--surface-2),var(--background))]">
          <span className="font-display text-[9rem] font-bold leading-none text-rule select-none">
            AR
          </span>
          <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_6px)]" />
        </div>
      )}
      <div className="absolute left-4 top-4 h-3 w-3 border-l-2 border-t-2 border-brand" />
      <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-brand" />
    </div>
  );
}
