"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCard({ href, image, tag, name, offset = false }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={offset ? "md:mt-10" : ""}
    >
      <Link
        href={href}
        className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-rule shadow-xl shadow-black/40"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-white/60">{tag}</p>
            <h3 className="font-display text-xl font-bold text-white">{name}</h3>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-black">
            View ↗
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
