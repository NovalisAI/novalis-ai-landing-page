"use client";
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
import HorizonHero from "@/components/horizon-hero-section";
import EarbudShowcase from "@/components/spatial-product-showcase";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Clock, Calendar, FileText, Code, User } from "lucide-react";
import HoverFooter from "@/components/hover-footer";
import { ThreeDMarquee } from "@/components/3d-marquee";
import ShaderHero from "@/components/animated-shader-hero";

// export default function Home() {
//   return (
//     <div className="min-h-screen text-white">
//       {/* <SiteHeader /> */}
//       <FutureNavbar />
//       <main>
//         {/* <Hero /> */}
//         <GlassmorphismTrustHero />
//         {/* <ServicesBento /> */}

//         <AboutUsSection />
//         {/* <HorizonHero /> */}
//         <SyntheticHero title="Novalis AI" description="les sites" />
//         <Team />
//         <section id="contact" className="py-24">
//           <div className="mx-auto max-w-6xl px-4">
//             <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
//               <div className="pointer-events-none absolute inset-0 opacity-60">
//                 <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-novalis-orange/30 blur-3xl" />
//                 <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-novalis-yellow/20 blur-3xl" />
//               </div>
//               <div className="relative z-10 space-y-6">
//                 <p className="text-xs uppercase tracking-[0.4em] text-novalis-yellow/80">
//                   Let’s Build
//                 </p>
//                 <h2 className="text-3xl font-semibold text-white md:text-4xl">
//                   Ready to craft your next intelligent platform?
//                 </h2>
//                 <p className="mx-auto max-w-2xl text-sm text-zinc-300">
//                   We partner with founders and enterprise leaders to ship
//                   products that feel like the future. Let’s map your next move.
//                 </p>
//                 <div className="flex flex-wrap items-center justify-center gap-4">
//                   <GlowButton href="mailto:hello@novalis.ai">
//                     Start a Project
//                   </GlowButton>
//                   <Link
//                     href="/projects"
//                     className="text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:text-white"
//                   >
//                     View Projects
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// SHADER HERO + GLASSMORPHSIM + 3D MARQUEE
export default function Home() {
  return <div></div>;
}

const images = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
];
