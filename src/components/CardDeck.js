"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CardDeck({ name, tag, description, cards }) {
  const [cover, ...rest] = cards;

  return (
    <Reveal>
      <div className="rounded-2xl border border-rule bg-surface p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-2 border-b border-rule pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            {tag && <p className="text-[11px] uppercase tracking-wide text-muted">{tag}</p>}
            <h4 className="mt-1 font-display text-2xl font-bold">{name}</h4>
          </div>
          {description && (
            <p className="max-w-sm text-sm text-foreground/70">{description}</p>
          )}
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 md:flex-row">
          {/* Featured cover card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-xl border border-rule bg-surface-2 md:w-[46%]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
              <Image
                src={cover.src}
                alt={cover.label}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2 border-t border-rule px-4 py-3">
              <span className="font-display text-xs font-bold text-accent2">01</span>
              <span className="text-xs text-muted">{cover.label}</span>
            </div>
          </motion.div>

          {/* Supporting thumbnails */}
          <div className={`grid flex-1 gap-4 ${rest.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
            {rest.map((card, i) => (
              <motion.div
                key={card.src}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-xl border border-rule bg-surface-2"
              >
                <div className="relative aspect-square overflow-hidden bg-surface-2">
                  <Image
                    src={card.src}
                    alt={card.label}
                    fill
                    sizes="(min-width: 768px) 15vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-1.5 border-t border-rule px-2.5 py-2">
                  <span className="font-display text-[11px] font-bold text-accent2">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="truncate text-[11px] text-muted">{card.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
