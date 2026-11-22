"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PosterCarousel({ items }) {
  const [active, setActive] = useState(2);
  const [lightbox, setLightbox] = useState(null);

  const go = (dir) => {
    setActive((a) => Math.max(0, Math.min(items.length - 1, a + dir)));
  };

  const onDragEnd = (_, info) => {
    const threshold = 60;
    if (info.offset.x < -threshold) go(1);
    else if (info.offset.x > threshold) go(-1);
  };

  const cardW = 252;
  const cardH = 330;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => go(-1)}
        disabled={active === 0}
        aria-label="Previous poster"
        className="absolute left-0 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-surface text-foreground transition-opacity hover:border-foreground disabled:opacity-30"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        disabled={active === items.length - 1}
        aria-label="Next poster"
        className="absolute right-0 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rule bg-surface text-foreground transition-opacity hover:border-foreground disabled:opacity-30"
      >
        →
      </button>

      <motion.div
        className="relative mx-auto flex w-full touch-pan-y items-center justify-center overflow-hidden"
        style={{ height: cardH + 120 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={onDragEnd}
      >
        {items.map((item, i) => {
          const d = i - active;
          const abs = Math.abs(d);
          if (abs > 2) return null;
          const rotateY = d * -28;
          const x = d * 150;
          const scale = abs === 0 ? 1 : 0.8;
          const z = 40 - abs * 10;
          const opacity = abs > 2 ? 0 : 1 - abs * 0.2;

          return (
            <motion.div
              key={item.slug}
              className="absolute cursor-pointer overflow-hidden rounded-2xl border-2 border-surface shadow-2xl shadow-black/50"
              style={{ zIndex: z, width: cardW, height: cardH, perspective: 1000 }}
              animate={{ x, scale, opacity, rotateY }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={abs === 0 ? { scale: 1.04 } : { scale: scale * 1.05 }}
              onClick={() => (abs === 0 ? setLightbox(item) : setActive(i))}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="252px"
                className="object-cover"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-4 pb-4 pt-10">
                <p className="font-display text-base font-bold leading-tight text-white">
                  {item.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            aria-label={`Go to ${item.name}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-5 bg-brand" : "w-1.5 bg-rule"
            }`}
          />
        ))}
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
              className="relative max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={lightbox.image}
                  alt={lightbox.name}
                  fill
                  sizes="600px"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <h5 className="font-display text-lg font-bold">{lightbox.name}</h5>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="rounded-full bg-brand px-4 py-1.5 text-sm text-brand-ink"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
