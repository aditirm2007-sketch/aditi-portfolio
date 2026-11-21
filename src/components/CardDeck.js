"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CardDeck({ name, tag, description, cards }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-rule bg-surface p-6 md:p-8">
        <div className="flex flex-col gap-2 border-b border-rule pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            {tag && <p className="text-[11px] uppercase tracking-wide text-muted">{tag}</p>}
            <h4 className="mt-1 font-display text-2xl font-bold">{name}</h4>
          </div>
          {description && (
            <p className="max-w-sm text-sm text-foreground/70">{description}</p>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.src}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-lg border border-rule bg-surface-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  sizes="(min-width: 768px) 25vw, 45vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 border-t border-rule px-3 py-2">
                <span className="font-display text-xs font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-muted">{card.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
