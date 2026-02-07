"use client";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { GlowButton } from "@/components/ui/GlowButton";
import GlassmorphismTrustHero from "@/components/glassmorphism-trust-hero";
import FutureNavbar from "@/components/future-navbar";
import AboutUsSection from "@/components/about-us-section";
import EarbudShowcase from "@/components/spatial-product-showcase";
import OrbitingSkills from "@/components/ui/radial-orbital-timeline";
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
import Cta from "@/components/sections/Cta";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="bg-[#050505] text-white">
        {/* <SiteHeader /> */}
        <main>
          {/* <Hero /> */}
          {/* <ServicesBento /> */}
          <div className="relative">
            <GlassmorphismTrustHero />
            <div className="z-500 w-full absolute -bottom-20 left-0 overflow-hidden">
              <svg
                id="visual"
                viewBox="0 0 2000 600"
                width="2000"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  d="M0 526L10.8 527.7C21.7 529.3 43.3 532.7 64.8 532.2C86.3 531.7 107.7 527.3 129.2 527.7C150.7 528 172.3 533 193.8 526C215.3 519 236.7 500 258.2 498.5C279.7 497 301.3 513 322.8 516.8C344.3 520.7 365.7 512.3 387.2 513C408.7 513.7 430.3 523.3 451.8 521.3C473.3 519.3 494.7 505.7 516.2 498.2C537.7 490.7 559.3 489.3 580.8 491.2C602.3 493 623.7 498 645.2 506.7C666.7 515.3 688.3 527.7 709.8 528.2C731.3 528.7 752.7 517.3 774.2 510.7C795.7 504 817.3 502 838.8 501.8C860.3 501.7 881.7 503.3 903.2 510.3C924.7 517.3 946.3 529.7 967.8 525.5C989.3 521.3 1010.7 500.7 1032.2 490C1053.7 479.3 1075.3 478.7 1096.8 483.5C1118.3 488.3 1139.7 498.7 1161.2 504.5C1182.7 510.3 1204.3 511.7 1225.8 508.3C1247.3 505 1268.7 497 1290.2 500.2C1311.7 503.3 1333.3 517.7 1354.8 522.3C1376.3 527 1397.7 522 1419.2 518.2C1440.7 514.3 1462.3 511.7 1483.8 506.2C1505.3 500.7 1526.7 492.3 1548.2 494C1569.7 495.7 1591.3 507.3 1612.8 511.8C1634.3 516.3 1655.7 513.7 1677.2 507.3C1698.7 501 1720.3 491 1741.8 494.2C1763.3 497.3 1784.7 513.7 1806.2 516.2C1827.7 518.7 1849.3 507.3 1870.8 502.5C1892.3 497.7 1913.7 499.3 1935.2 503.5C1956.7 507.7 1978.3 514.3 1989.2 517.7L2000 521L2000 601L1989.2 601C1978.3 601 1956.7 601 1935.2 601C1913.7 601 1892.3 601 1870.8 601C1849.3 601 1827.7 601 1806.2 601C1784.7 601 1763.3 601 1741.8 601C1720.3 601 1698.7 601 1677.2 601C1655.7 601 1634.3 601 1612.8 601C1591.3 601 1569.7 601 1548.2 601C1526.7 601 1505.3 601 1483.8 601C1462.3 601 1440.7 601 1419.2 601C1397.7 601 1376.3 601 1354.8 601C1333.3 601 1311.7 601 1290.2 601C1268.7 601 1247.3 601 1225.8 601C1204.3 601 1182.7 601 1161.2 601C1139.7 601 1118.3 601 1096.8 601C1075.3 601 1053.7 601 1032.2 601C1010.7 601 989.3 601 967.8 601C946.3 601 924.7 601 903.2 601C881.7 601 860.3 601 838.8 601C817.3 601 795.7 601 774.2 601C752.7 601 731.3 601 709.8 601C688.3 601 666.7 601 645.2 601C623.7 601 602.3 601 580.8 601C559.3 601 537.7 601 516.2 601C494.7 601 473.3 601 451.8 601C430.3 601 408.7 601 387.2 601C365.7 601 344.3 601 322.8 601C301.3 601 279.7 601 258.2 601C236.7 601 215.3 601 193.8 601C172.3 601 150.7 601 129.2 601C107.7 601 86.3 601 64.8 601C43.3 601 21.7 601 10.8 601L0 601Z"
                  fill="#050505"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                ></path>
              </svg>
            </div>
          </div>
          <AboutUsSection />
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
          <Testimonials />
          <div className="flex space-x-4">
            <div className="flex-2">
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
            </div>

            <div className="flex-1 flex items-center justify-center">
              <OrbitingSkills />
            </div>
          </div>
          {/* <EarbudShowcase /> */}
          <Cta />
          {/* <ThreeDMarquee images={images} /> */}
        </main>
        <HoverFooter />
      </div>
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
