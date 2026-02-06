"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { projects } from "@/constants/projects";
import type { ProjectCategory } from "@/types/project";

const categories: Array<ProjectCategory | "All"> = ["All", "AI", "Web", "Design"];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "All"
  >("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-novalis-yellow/80">
              Projects
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              A curated look at what we build.
            </h1>
          </div>
          <p className="max-w-md text-sm text-zinc-400">
            Filter by discipline to see AI, web, and design experiments crafted
            for ambitious partners.
          </p>
        </div>

        <LayoutGroup>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative overflow-hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:text-white"
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-novalis-orange/30 to-novalis-yellow/30"
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <div
                    className="h-44 w-full bg-cover bg-center transition duration-300 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${project.image_url})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 flex flex-col gap-4 p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-400">
                      <span>{project.category}</span>
                      <span className="text-novalis-yellow">Active</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                      {project.tech_stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
