import Link from "next/link";
import FeatureProject from "@/components/FeatureProject";
import Reveal from "@/components/Reveal";
import { profile, featuredWork } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 pb-20 pt-10 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-start justify-between border-b border-rule pb-6 text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="max-w-[10rem] leading-relaxed">
                UI/UX Design &amp;
                <br />
                Full-Stack Development
              </span>
              <span className="font-display text-base font-bold tracking-normal text-foreground">
                A / R
              </span>
              <span>Portfolio 2026</span>
            </div>
          </Reveal>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal delay={0.05}>
                <h1 className="font-display text-[3.2rem] font-bold leading-[0.95] tracking-tight sm:text-[4.5rem] md:text-[5.5rem]">
                  ADITI
                  <br />
                  RM
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-muted">
                  {profile.role}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-5 max-w-md border-l-2 border-foreground pl-4">
                  <p className="text-base leading-relaxed text-foreground/80">
                    {profile.tagline}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/work"
                    className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink transition-transform hover:scale-105"
                  >
                    View Work
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-rule px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground hover:text-foreground"
                  >
                    Get in Touch
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="hidden md:block">
              <div className="relative aspect-[4/5] w-full">
                <div className="absolute right-0 top-6 h-[82%] w-[82%] rounded-full border border-rule bg-surface-2" />
                <div className="absolute bottom-0 left-0 h-[88%] w-[78%] overflow-hidden rounded-2xl border border-rule bg-surface">
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,var(--surface-2),var(--background))]">
                    <span className="font-display text-7xl font-bold leading-none text-rule select-none">
                      AR
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">Selected Work</p>
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
          >
            See all work, including design explorations ↗
          </Link>
        </Reveal>
      </section>

      {/* ABOUT TEASER */}
      <section className="border-t border-rule bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">About</p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold leading-snug md:text-4xl">
              UI/UX designer with full-stack development experience — I design interfaces,
              then build and ship them myself.
            </h2>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              More about me ↗
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
