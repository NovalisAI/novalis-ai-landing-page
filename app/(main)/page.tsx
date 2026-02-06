"use client";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { GlowButton } from "@/components/ui/GlowButton";
import GlassmorphismTrustHero from "@/components/glassmorphism-trust-hero";
import FutureNavbar from "@/components/future-navbar";
import AboutUsSection from "@/components/about-us-section";
import HorizonHero from "@/components/horizon-hero-section";
import EarbudShowcase from "@/components/spatial-product-showcase";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import {
  Clock,
  Calendar,
  FileText,
  Code,
  User,
  BrainCircuit,
  Target,
  PenTool,
  ShieldCheck,
  Megaphone,
  Facebook,
  Youtube,
  Instagram,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import HoverFooter from "@/components/hover-footer";
import { ThreeDMarquee } from "@/components/3d-marquee";
import { ProcessSection } from "@/components/how-we-do-it-process-overview";
import Testimonials from "@/components/testimonials";
import { TeamSection } from "@/components/team-section-1";
import Stats from "@/components/sections/Stats";
import Cta from "@/components/sections/Cta";

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

        <HorizonHero />

        <RadialOrbitalTimeline
          timelineData={[
            {
              id: 1,
              title: "Planning",
              date: "Jan 2024",
              content: "Project planning and requirements gathering phase.",
              category: "Planning",
              icon: Calendar,
              relatedIds: [2],
              status: "completed" as const,
              energy: 100,
            },
            {
              id: 2,
              title: "Design",
              date: "Feb 2024",
              content: "UI/UX design and system architecture.",
              category: "Design",
              icon: FileText,
              relatedIds: [1, 3],
              status: "completed" as const,
              energy: 90,
            },
            {
              id: 3,
              title: "Development",
              date: "Mar 2024",
              content: "Core features implementation and testing.",
              category: "Development",
              icon: Code,
              relatedIds: [2, 4],
              status: "in-progress" as const,
              energy: 60,
            },
            {
              id: 4,
              title: "Testing",
              date: "Apr 2024",
              content: "User testing and bug fixes.",
              category: "Testing",
              icon: User,
              relatedIds: [3, 5],
              status: "pending" as const,
              energy: 30,
            },
            {
              id: 5,
              title: "Release",
              date: "May 2024",
              content: "Final deployment and release.",
              category: "Release",
              icon: Clock,
              relatedIds: [4],
              status: "pending" as const,
              energy: 10,
            },
          ]}
        />

        <ProcessSection
          subtitle="Our Model"
          title="How We Do It"
          description="We work on a typical matrix of time, effort, and money, following Agile methodologies to deliver exceptional results."
          buttonText="Learn More"
          items={[
            {
              icon: BrainCircuit,
              title: "Brainstorming",
              description: "Ideas & Concepts",
            },
            {
              icon: Target,
              title: "Market Strategy",
              description: "Overall Planning",
            },
            {
              icon: PenTool,
              title: "Product Design",
              description: "UI/UX & Prototyping",
            },
            {
              icon: Code,
              title: "Development",
              description: "Full-Stack Engineering",
            },
            {
              icon: ShieldCheck,
              title: "Testing & QA",
              description: "Quality Assurance",
            },
            {
              icon: Megaphone,
              title: "Release & Marketing",
              description: "Launch Campaign",
            },
          ]}
        />
        <Stats />
        <Testimonials />
        <TeamSection
          title="CREATIVE TEAM"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
          members={[
            {
              name: "EMMA",
              designation: "Product Designer",
              imageSrc:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image for Emma
              socialLinks: [
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ],
            },
            {
              name: "HENRY",
              designation: "Lead Developer",
              imageSrc:
                "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image for Henry
              socialLinks: [
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
              ],
            },
            {
              name: "JOHN",
              designation: "Marketing Specialist",
              imageSrc:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image for John
              socialLinks: [
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ],
            },
          ]}
          registerLink="#"
          logo="RAVI" // You could pass an actual SVG or Image component here
          socialLinksMain={[
            { icon: Twitter, href: "#" },
            { icon: Facebook, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Youtube, href: "#" },
          ]}
        />
        <EarbudShowcase />
        <Cta />

        <ThreeDMarquee images={images} />
      </main>
      <HoverFooter />
    </div>
  );
}
// SHADER HERO + GLASSMORPHSIM + 3D MARQUEE

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
