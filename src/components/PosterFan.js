"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PosterFan({ items }) {
  const center = Math.floor((items.length - 1) / 2);
  const step = items.length > 5 ? 95 : 150;
  const cardW = items.length > 5 ? 190 : 240;
  const cardH = items.length > 5 ? 320 : 340;

  return (
    <div
      className="relative mx-auto flex w-full items-center justify-center"
      style={{ height: cardH + 140 }}
    >
      {items.map((item, i) => {
        const d = i - center;
        const abs = Math.abs(d);
        const rotate = d * 6;
        const x = d * step;
        const y = abs * 10;
        const scale = 1 - abs * 0.07;
        const opacity = 1 - abs * 0.12;
        const z = 40 - abs * 10;

        return (
          <motion.div
            key={item.slug}
            className="absolute overflow-hidden rounded-2xl border border-rule shadow-2xl shadow-black/50"
            style={{ zIndex: z, width: cardW, height: cardH }}
            initial={{ rotate, x, y, scale, opacity }}
            whileHover={{ y: y - 18, scale: scale * 1.05, zIndex: 50, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="240px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-3 pb-3 pt-8">
              <p className="font-display text-xs font-bold leading-tight text-white">
                {item.name}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
