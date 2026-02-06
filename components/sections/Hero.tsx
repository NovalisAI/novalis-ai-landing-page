"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { GlowButton } from "@/components/ui/GlowButton";

const headlineWords = [
  "Engineering",
  "AI-native",
  "products",
  "with",
  "precision",
  "and",
  "velocity.",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24 border border-red-400"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-novalis-yellow/80">
            Premium High-Tech Dev Agency
          </p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            {headlineWords.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
                className={`mr-3 inline-block ${
                  word.includes("AI-native")
                    ? "bg-linear-to-r from-novalis-orange to-novalis-yellow bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
          >
            We design, build, and scale intelligent platforms for teams who want
            to outpace the market. Strategic thinking meets cinematic execution.
          </motion.p>
          <div className="flex flex-wrap items-center gap-4">
            <GlowButton href="/projects">Explore Projects</GlowButton>
            <Link
              href="/#contact"
              className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white"
            >
              Schedule a Call
            </Link>
          </div>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-xs uppercase tracking-[0.26em] text-zinc-300 backdrop-blur md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-novalis-yellow">01. Strategy</p>
            <p className="text-base font-semibold text-white">Vision Mapping</p>
          </div>
          <div className="space-y-2">
            <p className="text-novalis-yellow">02. Build</p>
            <p className="text-base font-semibold text-white">AI + Product</p>
          </div>
          <div className="space-y-2">
            <p className="text-novalis-yellow">03. Scale</p>
            <p className="text-base font-semibold text-white">
              Enterprise Ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
