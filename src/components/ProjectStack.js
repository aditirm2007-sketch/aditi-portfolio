"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectStack({ items }) {
  const [order, setOrder] = useState(items.map((_, i) => i));

  const bringToFront = (idx) => {
    setOrder((prev) => [...prev.filter((i) => i !== idx), idx]);
  };

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-sm md:h-[460px]">
      <AnimatePresence>
        {order.map((itemIdx, stackPos) => {
          const item = items[itemIdx];
          const depth = order.length - 1 - stackPos;
          const isTop = depth === 0;
          const content = (
            <motion.div
              key={item.name}
              className="group absolute inset-0 overflow-hidden rounded-3xl border-2 border-surface shadow-2xl shadow-black/30"
              style={{ zIndex: stackPos }}
              animate={{
                x: depth * 14,
                y: depth * 16,
                scale: 1 - depth * 0.045,
                rotate: depth === 0 ? 0 : depth * 1.5,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => !isTop && bringToFront(itemIdx)}
              whileHover={isTop ? { y: depth * 16 - 10 } : {}}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="384px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-white/60">{item.tag}</p>
                  <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
                </div>
                {isTop && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-black">
                    View ↗
                  </span>
                )}
              </div>
            </motion.div>
          );

          return isTop ? (
            <Link key={item.name} href={item.href} className="contents">
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </AnimatePresence>
    </div>
  );
}
