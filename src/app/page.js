import Link from "next/link";
import Portrait from "@/components/Portrait";
import FeatureProject from "@/components/FeatureProject";
import Reveal from "@/components/Reveal";
import { profile, featuredWork } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-brand">
                {profile.role}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                Aditi RM
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/80">
                {profile.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink transition-transform hover:scale-105"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-rule px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex gap-8 border-t border-rule pt-6 text-sm text-muted">
                <span>Bangalore, India</span>
                <span>Design + Full-Stack Dev</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden md:block">
            <Portrait />
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Selected Work</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Products I&apos;ve designed &amp; built, end to end.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {featuredWork.map((project, i) => (
            <FeatureProject key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            See all work, including design explorations ↗
          </Link>
        </Reveal>
      </section>

      {/* ABOUT TEASER */}
      <section className="border-t border-rule bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-brand">About</p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold leading-snug md:text-4xl">
              UI/UX designer with full-stack development experience — I design interfaces,
              then build and ship them myself.
            </h2>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline"
            >
              More about me ↗
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
