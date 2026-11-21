"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { colorFor } from "@/lib/palette";

const BASE_ROTATION = [-10, -4, 3, 10, -7];
const BASE_OFFSET = [18, 10, 4, -2, 14];

export default function CardStack({ items }) {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center md:h-[480px]">
      {items.map((item, i) => {
        const c = colorFor(i);
        const rot = BASE_ROTATION[i % BASE_ROTATION.length];
        const offset = BASE_OFFSET[i % BASE_OFFSET.length];
        return (
          <motion.div
            key={item.slug}
            className="absolute h-[380px] w-[270px] cursor-pointer overflow-hidden rounded-3xl border-4 md:h-[430px] md:w-[300px]"
            style={{ borderColor: c.bg, zIndex: i }}
            initial={{ rotate: rot, y: offset, x: offset * 0.6 }}
            whileHover={{
              rotate: 0,
              y: -30,
              x: 0,
              scale: 1.04,
              zIndex: 50,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="300px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
              <p className="font-display text-sm font-bold text-white">{item.name}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
