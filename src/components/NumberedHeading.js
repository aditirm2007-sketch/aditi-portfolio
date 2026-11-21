export default function NumberedHeading({ index, title, className = "" }) {
  return (
    <div className={`relative flex items-end gap-4 ${className}`}>
      <span className="font-display text-6xl font-bold leading-none text-rule select-none md:text-7xl">
        {index}
      </span>
      <h3 className="pb-1 font-display text-xl font-bold md:text-2xl">{title}</h3>
    </div>
  );
}
