"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Tile({ src, label, index, big = false }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-rule shadow-lg shadow-black/30 ${
        big ? "aspect-[4/3] md:w-[46%]" : "aspect-square flex-1"
      }`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={big ? "(min-width: 768px) 40vw, 90vw" : "(min-width: 768px) 15vw, 30vw"}
        className={`${big ? "object-contain p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-105 bg-surface-2`}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-3 pb-2.5 pt-6">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-[11px] font-bold text-white/70">{index}</span>
          <span className={`text-white ${big ? "text-sm font-semibold" : "text-[11px] truncate"}`}>
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

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
          <Tile src={cover.src} label={cover.label} index="01" big />
          <div className="flex flex-1 gap-4">
            {rest.map((card, i) => (
              <Tile key={card.src} src={card.src} label={card.label} index={String(i + 2).padStart(2, "0")} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
