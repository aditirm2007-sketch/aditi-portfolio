import Image from "next/image";
import Reveal from "@/components/Reveal";
import NumberedHeading from "@/components/NumberedHeading";
import { skills, education, achievements, profile } from "@/lib/content";

export const metadata = {
  title: "About — Aditi RM",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent2">About</p>
          <h1 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight md:text-6xl">
            UI/UX designer &amp; full-stack developer, based in {profile.location}.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
            I take products from research and wireframes to a fully deployed, live
            codebase — covering interface design, frontend and backend development, and
            the business operations running on top of it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="hidden md:block">
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute right-0 top-4 h-[80%] w-[80%] rounded-full bg-surface-2" />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="relative h-[96%] w-full">
                <Image
                  src="/images/portrait/about.png"
                  alt="Aditi RM"
                  fill
                  sizes="380px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-16 border-t border-rule pt-16 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div>
            <NumberedHeading index="01" title="Education" />
            <h3 className="mt-5 font-display text-xl font-bold">{education.school}</h3>
            <p className="mt-1 text-foreground/70">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">
              {education.period} · {education.location}
            </p>
            <p className="mt-1 text-sm text-muted">GPA: {education.gpa}</p>
          </div>

          <div className="mt-14">
            <NumberedHeading index="02" title="Achievements" />
            <ul className="mt-5 flex flex-col gap-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <NumberedHeading index="03" title="Skills" />
          <div className="mt-6 flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.category} className="rounded-xl bg-brand p-5 text-brand-ink">
                <h4 className="font-display text-sm font-bold uppercase tracking-wide">
                  {group.category}
                </h4>
                <p className="mt-2 text-sm leading-relaxed">{group.items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
