import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <section className="px-6 pb-20 pt-10 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-start justify-between border-b border-rule pb-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="max-w-[12rem] leading-relaxed">
              UI/UX Design &amp;
              <br />
              Full-Stack Development
            </span>
            <span>Portfolio 2026</span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[2.8rem] font-bold leading-[0.95] tracking-tight sm:text-[4.2rem] md:text-[4.6rem] lg:text-[5.2rem]">
                ADITI RM
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
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="relative h-[96%] w-full">
                  <Image
                    src="/images/portrait/home.png"
                    alt="Aditi RM"
                    fill
                    sizes="420px"
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl border-t border-rule pt-16">
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
  );
}
