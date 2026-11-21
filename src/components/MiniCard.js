"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MiniCard({ name, tag, description, image, index }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-xl border border-rule bg-surface shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {index && (
          <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand font-display text-xs font-bold text-brand-ink">
            {index}
          </span>
        )}
      </div>
      <div className="p-4">
        {tag && <p className="text-[11px] font-semibold uppercase tracking-wide text-accent2">{tag}</p>}
        <h4 className="mt-1 font-display text-lg font-bold">{name}</h4>
        {description && <p className="mt-1 text-sm text-foreground/70">{description}</p>}
      </div>
    </motion.div>
  );
}
