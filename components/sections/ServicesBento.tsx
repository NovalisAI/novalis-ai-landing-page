"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    title: "AI Systems",
    description:
      "LLM-native products, autonomous workflows, and intelligence layers that scale with your data.",
    icon: Cpu,
    span: "md:col-span-7",
    hover: { y: -8, boxShadow: "0 20px 45px rgba(232, 128, 1, 0.35)" },
  },
  {
    title: "Enterprise Digitalization",
    description:
      "Legacy-to-cloud migration, security-first architecture, and internal platforms built for resilience.",
    icon: Layers,
    span: "md:col-span-5",
    hover: { rotate: -1, scale: 1.02, boxShadow: "0 16px 40px rgba(255, 255, 63, 0.35)" },
  },
  {
    title: "Command Dashboards",
    description:
      "Real-time operational visibility with immersive data experiences and kinetic reporting.",
    icon: LayoutDashboard,
    span: "md:col-span-5",
    hover: { x: 6, y: -6, boxShadow: "0 16px 36px rgba(255, 255, 255, 0.2)" },
  },
  {
    title: "E-commerce Fusion",
    description:
      "High-conversion commerce experiences with modular storefronts and brand-forward UX.",
    icon: ShoppingBag,
    span: "md:col-span-7",
    hover: { scale: 1.03, boxShadow: "0 20px 45px rgba(232, 128, 1, 0.25)" },
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-novalis-yellow/80">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Bento-crafted capabilities for ambitious teams.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400">
            Modular, cinematic, and engineered for scale. Every deliverable is
            designed to be future-proof and performance-driven.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={service.hover}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur ${service.span}`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -top-12 right-0 h-28 w-28 rounded-full bg-novalis-orange/20 blur-2xl" />
                  <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-novalis-yellow/10 blur-2xl" />
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-novalis-yellow">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Explore
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
