"use client";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { GlowButton } from "@/components/ui/GlowButton";
import GlassmorphismTrustHero from "@/components/glassmorphism-trust-hero";
import FutureNavbar from "@/components/future-navbar";
import OrbitingSkills from "@/components/ui/radial-orbital-timeline";

import HoverFooter from "@/components/hover-footer";
import { ThreeDMarquee } from "@/components/3d-marquee";
import { ProcessSection } from "@/components/how-we-do-it-process-overview";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/sections/Cta";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { About3 } from "@/components/about-3";
import { ServiceCard } from "@/components/service-card";
import FUITestimonialWithSlide from "@/components/sliding-testimonial";
import { LogoSlider } from "@/components/sections/logo-slider";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SimpleTeamSection } from "@/components/team-section";
import TeamSection from "@/components/MeetOurTeams";
import { Footer7 } from "@/components/footer-7";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="">
        {/* <SiteHeader /> */}
        <main>
          {/* <Hero /> */}
          {/* <ServicesBento /> */}
          {/* <GlassmorphismTrustHero /> */}
          <About3
            title="About Us"
            description="Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age."
            mainImage={{
              src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
              alt: "placeholder",
            }}
            secondaryImage={{
              src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
              alt: "placeholder",
            }}
            breakout={{
              src: "https://shadcnblocks.com/images/block/block-1.svg",
              alt: "logo",
              title: "Hundreds of blocks at Shadcnblocks.com",
              description:
                "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
              buttonText: "Discover more",
              buttonUrl: "https://shadcnblocks.com",
            }}
          />
          <LogoSlider />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                href={service.href}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                variant={service.variant as "red" | "default" | "gray" | "blue"}
                className="min-h-[180px]"
              />
            ))}
          </div>
          <TestimonialsSection />
          <TeamSection />
          <ThreeDMarquee images={images} />
        </main>
        <Footer7 />
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
const teamMembers = [
  {
    name: "Johnathan Doe",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    role: "Lead Developer",
    bio: "Expert in full-stack development and AI integration.",
  },
  {
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    role: "UI/UX Designer",
    bio: "Specializes in user experience and interface design.",
  },
  {
    name: "Peter Jones",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    role: "Project Manager",
    bio: "Coordinates project timelines and client communications.",
  },
  {
    name: "Sarah Williams",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    role: "QA Engineer",
    bio: "Ensures product quality and testing coverage.",
  },
  {
    name: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    role: "DevOps Specialist",
    bio: "Manages cloud infrastructure and CI/CD pipelines.",
  },
  {
    name: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    role: "Frontend Developer",
    bio: "Builds responsive and interactive web interfaces.",
  },
  {
    name: "David Garcia",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    role: "Backend Developer",
    bio: "Designs scalable APIs and database systems.",
  },
];
const services = [
  {
    title: "Gamification Marketing",
    href: "/services/gamification",
    imgSrc:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-DFiJBJyUFg9QYTZOWEFeeza18HBnty.png&w=320&q=75",
    imgAlt: "Bowling pins and ball illustration",
    variant: "red",
  },
  {
    title: "Graphic Design",
    href: "/services/design",
    imgSrc:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SxvnIpN2RVwLK77XxK3MnVCU6Xgc29.png&w=320&q=75",
    imgAlt: "Paint bucket illustration",
    variant: "default",
  },
  {
    title: "Analytics and Tracking",
    href: "/services/analytics",
    imgSrc:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-J7XYh5Cix5CceVeAtkuVXYSGgrhjDL.png&w=320&q=75",
    imgAlt: "Megaphone illustration",
    variant: "gray",
  },
  {
    title: "Content Creation",
    href: "/services/content",
    imgSrc:
      "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-nY3Stc1545aP21dAi1IEbYlnc4rovS.png&w=320&q=75",
    imgAlt: "Notebook and pen illustration",
    variant: "blue",
  },
];
