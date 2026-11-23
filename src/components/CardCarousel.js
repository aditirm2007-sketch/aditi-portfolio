"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function CardCarousel({ name, tag, description, cards }) {
  const [active, setActive] = useState(Math.floor((cards.length - 1) / 2));
  const [lightbox, setLightbox] = useState(null);

  const go = (dir) => {
    setActive((a) => Math.max(0, Math.min(cards.length - 1, a + dir)));
  };

  const onDragEnd = (_, info) => {
    const threshold = 60;
    if (info.offset.x < -threshold) go(1);
    else if (info.offset.x > threshold) go(-1);
  };

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

      <div className="relative">
        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={active === 0}
          aria-label="Previous"
          className="absolute left-0 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-surface text-foreground transition-opacity hover:border-foreground disabled:opacity-30"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={active === cards.length - 1}
          aria-label="Next"
          className="absolute right-0 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-surface text-foreground transition-opacity hover:border-foreground disabled:opacity-30"
        >
          →
        </button>

        <motion.div
          className="relative mx-auto flex w-full touch-pan-y items-start justify-center overflow-hidden"
          style={{ height: 460 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
        >
          {cards.map((card, i) => {
            const d = i - active;
            const abs = Math.abs(d);
            if (abs > 3) return null;
            const rotate = d * 5;
            const x = d * 155;
            const y = abs * 14;
            const scale = 1 - abs * 0.06;
            const z = 40 - abs * 10;

            return (
              <motion.div
                key={card.src}
                className="absolute cursor-pointer overflow-hidden rounded-2xl bg-[#f3f1ea] text-[#17161a] shadow-2xl shadow-black/40"
                style={{ zIndex: z, width: cardW }}
                animate={{ rotate, x, y, scale }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={abs === 0 ? { y: y - 10 } : { y: y - 16, scale: scale * 1.03 }}
                onClick={() => (abs === 0 ? setLightbox(card) : setActive(i))}
              >
                <div className="relative aspect-[16/10] w-full bg-[#e9e3d2]">
                  <Image
                    src={card.src}
                    alt={card.label}
                    fill
                    sizes="260px"
                    className="object-contain p-2"
                    draggable={false}
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
                      ⤢
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-1.5">
          {cards.map((card, i) => (
            <button
              key={card.src}
              type="button"
              aria-label={`Go to ${card.label}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-5 bg-brand" : "w-1.5 bg-rule"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-[#f3f1ea]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={lightbox.src}
                  alt={lightbox.label}
                  fill
                  sizes="800px"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <h5 className="font-display text-lg font-bold text-[#17161a]">
                  {lightbox.label}
                </h5>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="rounded-full bg-[#17161a] px-4 py-1.5 text-sm text-[#f3f1ea]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}
