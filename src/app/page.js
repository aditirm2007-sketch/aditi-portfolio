import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f3f1ea] px-6 pb-20 pt-16 text-[#17161a] md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-48 h-[36rem] w-[36rem] rounded-full border border-black/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-6 h-80 w-80 rounded-full border border-black/10"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  {profile.role}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 font-display text-[3.4rem] font-bold leading-[0.92] tracking-tight sm:text-[5.2rem] md:text-[6rem] lg:text-[6.8rem]">
                  ADITI RM
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-6 max-w-md border-l-2 border-[#17161a] pl-4">
                  <p className="text-base leading-relaxed text-black/70">{profile.tagline}</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/work"
                    className="rounded-full bg-[#17161a] px-6 py-3 text-sm font-semibold text-[#f3f1ea] transition-transform hover:scale-105"
                  >
                    View Work
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-black hover:bg-black/5"
                  >
                    Get in Touch
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="hidden md:block">
              <div className="relative aspect-[4/5] w-full">
                <div className="absolute right-0 top-2 h-[88%] w-[88%] rounded-full bg-[#e3ddc9]" />
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/portrait/home.png"
                      alt="Aditi RM"
                      fill
                      sizes="460px"
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-rule px-6 py-16">
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
    </>
  );
}
