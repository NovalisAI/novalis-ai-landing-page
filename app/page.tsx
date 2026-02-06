import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Team } from "@/components/sections/Team";
import { GlowButton } from "@/components/ui/GlowButton";
import GlassmorphismTrustHero from "@/components/glassmorphism-trust-hero";
import FutureNavbar from "@/components/future-navbar";
import AboutUsSection from "@/components/about-us-section";
import SyntheticHero from "@/components/synthetic-hero";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* <SiteHeader /> */}
      <FutureNavbar />
      <main>
        {/* <Hero /> */}
        <GlassmorphismTrustHero />
        {/* <ServicesBento /> */}

        <AboutUsSection />
        <SyntheticHero title="Novalis AI" description="les sites" />
        <Team />
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-novalis-orange/30 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-novalis-yellow/20 blur-3xl" />
              </div>
              <div className="relative z-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-novalis-yellow/80">
                  Let’s Build
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Ready to craft your next intelligent platform?
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-zinc-300">
                  We partner with founders and enterprise leaders to ship
                  products that feel like the future. Let’s map your next move.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <GlowButton href="mailto:hello@novalis.ai">
                    Start a Project
                  </GlowButton>
                  <Link
                    href="/projects"
                    className="text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:text-white"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
