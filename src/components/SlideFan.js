"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SlideFan({ name, tag, description, cards }) {
  const center = Math.floor((cards.length - 1) / 2);
  const cardW = 260;

  return (
    <Reveal>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          {tag && <p className="text-[11px] uppercase tracking-wide text-muted">{tag}</p>}
          <h4 className="mt-1 font-display text-2xl font-bold">{name}</h4>
        </div>
        {description && <p className="max-w-sm text-sm text-foreground/70">{description}</p>}
      </div>

      <div
        className="relative mx-auto flex w-full items-start justify-center"
        style={{ height: 460 }}
      >
        {cards.map((card, i) => {
          const d = i - center;
          const abs = Math.abs(d);
          const rotate = d * 5;
          const x = d * 155;
          const y = abs * 14;
          const scale = 1 - abs * 0.06;
          const z = 40 - abs * 10;

          return (
            <motion.div
              key={card.src}
              className="absolute overflow-hidden rounded-2xl bg-[#f3f1ea] text-[#17161a] shadow-2xl shadow-black/40"
              style={{ zIndex: z, width: cardW }}
              initial={{ rotate, x, y, scale }}
              whileHover={{ y: y - 16, scale: scale * 1.04, zIndex: 50 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] w-full bg-[#e9e3d2]">
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  sizes="260px"
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-wide text-black/50">
                  {String(i + 1).padStart(2, "0")} · {tag}
                </p>
                <h5 className="mt-1 font-display text-base font-bold">{card.label}</h5>
                <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3">
                  <div className="text-[11px] text-black/60">
                    <span className="font-semibold">Tool</span> · Figma
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#17161a] text-xs text-[#f3f1ea]">
                    ↗
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Reveal>
  );
}
