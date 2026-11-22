"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function FeatureProject({ project, reverse = false }) {
  return (
    <Reveal>
      <div
        className={`grid items-center gap-10 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div whileHover="hover" className="relative">
          <Link
            href={`/work/${project.slug}`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-rule bg-surface"
          >
            <motion.div
              variants={{ hover: { scale: 1.06 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80 transition-opacity group-hover:opacity-40" />
            <motion.span
              variants={{ hover: { opacity: 1, y: 0 } }}
              initial={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-ink"
            >
              View case study ↗
            </motion.span>
          </Link>
        </motion.div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
            {project.tag}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">
            {project.role} · {project.period}
          </p>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-foreground/80">
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-rule px-3 py-1 text-xs text-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent2 underline-offset-4 hover:underline"
            >
              Read full case study →
            </Link>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              {project.link.replace("https://", "")} ↗
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
