import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import NumberedHeading from "@/components/NumberedHeading";
import { featuredWork } from "@/lib/content";

export function generateStaticParams() {
  return featuredWork.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  return { title: project ? `${project.name} — Aditi RM` : "Work — Aditi RM" };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <Link href="/work" className="text-sm text-muted hover:text-brand">
          ← Back to work
        </Link>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-brand">{project.tag}</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">{project.name}</h1>
        <p className="mt-2 text-sm text-muted">
          {project.role} · {project.period}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {project.overview}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-ink transition-transform hover:scale-105"
          >
            Visit live site ↗
          </a>
          <ul className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-rule px-3 py-1 text-xs text-muted">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-20 grid gap-16 md:grid-cols-2">
        <Reveal>
          <NumberedHeading index="01" title="The Problem" />
          <p className="mt-5 text-foreground/80 leading-relaxed">{project.problem}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <NumberedHeading index="02" title="My Role" />
          <p className="mt-5 text-foreground/80 leading-relaxed">{project.roleDetail}</p>
        </Reveal>
      </div>

      <div className="mt-20">
        <Reveal>
          <NumberedHeading index="03" title="Process & Solution" />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {project.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="rounded-xl border border-rule bg-surface p-6">
                <h4 className="font-display text-lg font-bold">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Reveal>
          <NumberedHeading index="04" title="Visuals" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl border border-rule bg-surface">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="border-t border-rule px-4 py-3 text-sm text-muted">{item.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-rule pt-12">
        <Reveal>
          <NumberedHeading index="05" title="Outcome" />
          <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">{project.outcome}</p>
        </Reveal>
      </div>
    </div>
  );
}
