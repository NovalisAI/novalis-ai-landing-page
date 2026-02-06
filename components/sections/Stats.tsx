import React from "react";
import { Building2, Clock, Globe2, Rocket } from "lucide-react";

const stats = [
  {
    label: "Projets realises",
    value: "120+",
    unit: "",
    description: "AI-native apps, SaaS, and data platforms shipped end-to-end.",
    tag: "Delivery cadence 6-8 weeks",
    icon: Rocket,
    glow: "from-novalis-orange/35 via-transparent to-transparent",
    iconColor: "text-novalis-orange",
  },
  {
    label: "Compagnies accompagnees",
    value: "48",
    unit: "",
    description: "Startups to enterprises across fintech, retail, and health.",
    tag: "98% retention rate",
    icon: Building2,
    glow: "from-novalis-yellow/30 via-transparent to-transparent",
    iconColor: "text-novalis-yellow",
  },
  {
    label: "Heures travaillees",
    value: "32k+",
    unit: "hrs",
    description: "UX, engineering, MLOps, QA, and product ops on call.",
    tag: "24/7 delivery ops",
    icon: Clock,
    glow: "from-white/25 via-transparent to-transparent",
    iconColor: "text-white",
  },
  {
    label: "Pays couverts",
    value: "12",
    unit: "",
    description: "Distributed teams and rollouts across multiple regions.",
    tag: "Remote-first by default",
    icon: Globe2,
    glow: "from-novalis-orange/25 via-transparent to-transparent",
    iconColor: "text-novalis-orange",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-hero-radial opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,63,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(232,128,1,0.14),transparent_50%)]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-novalis-orange/25 blur-[120px] animate-glow" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-novalis-yellow/15 blur-[140px] animate-glow" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-novalis-yellow/80">
              Impact metrics
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Des chiffres qui parlent
              <span className="block bg-gradient-to-r from-novalis-orange to-novalis-yellow bg-clip-text text-transparent">
                vraiment
              </span>
            </h2>
            <p className="text-base leading-relaxed text-zinc-300">
              Projets realises, compagnies accompagnees, heures travaillees.
              Concrete delivery, no fluff.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            {[
              "AI + Product",
              "Full-stack build",
              "Enterprise ready",
              "Design + MLOps",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.glow} opacity-0 transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex items-start justify-between gap-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glow ${stat.iconColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-novalis-yellow shadow-glow" />
                    {stat.tag}
                  </div>
                </div>

                <div className="relative mt-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
                    {stat.label}
                  </p>
                  <div className="flex items-end gap-3">
                    <span className="font-orbitron text-3xl text-white sm:text-4xl">
                      {stat.value}
                    </span>
                    {stat.unit ? (
                      <span className="pb-1 text-xs uppercase tracking-[0.3em] text-zinc-500">
                        {stat.unit}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-zinc-300">{stat.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
