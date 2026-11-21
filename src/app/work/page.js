import FeatureProject from "@/components/FeatureProject";
import MiniCard from "@/components/MiniCard";
import Reveal from "@/components/Reveal";
import { featuredWork, explorations, posterWork } from "@/lib/content";

export const metadata = {
  title: "Work — Aditi RM",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-brand">Work</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
          Case studies &amp; explorations.
        </h1>
        <p className="mt-5 max-w-xl text-foreground/70">
          Two full products I designed and built end-to-end, plus a handful of earlier
          design explorations.
        </p>
      </Reveal>

      <div className="mt-20 flex flex-col gap-24">
        {featuredWork.map((project, i) => (
          <FeatureProject key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-28 border-t border-rule pt-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">Explorations</p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
            Earlier design work &amp; visual experiments.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {explorations.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <MiniCard {...item} />
            </Reveal>
          ))}
          {posterWork.map((item, i) => (
            <Reveal key={item.slug} delay={(explorations.length + i) * 0.05}>
              <MiniCard name={item.name} tag="Poster Design" image={item.image} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
