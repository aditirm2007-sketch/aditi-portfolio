import Reveal from "./Reveal";

const stats = [
  { value: "2", label: "Live products shipped solo" },
  { value: "500+", label: "SKU catalogue designed & built" },
  { value: "5", label: "Deals closed per month, avg." },
  { value: "8+", label: "Years STANSV has operated" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8 border-y border-rule py-10 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.05}>
          <p className="font-display text-4xl font-bold md:text-5xl">{s.value}</p>
          <p className="mt-2 text-sm text-muted">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
