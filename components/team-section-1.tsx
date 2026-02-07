import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class concatenation

// Define interfaces for props
interface SocialLink {
  icon: React.ElementType<{ className?: string }>;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode; // For a custom logo, or you can use a string src
  socialLinksMain?: SocialLink[]; // Main social links for the company/section
}

// TeamSection Component
export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-[#050505] py-12 md:py-24 lg:py-32",
          className,
        )}
        {...props}
      >
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
          {/* Background Grid - for visual appeal */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid-team"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0L0 0 0 40"
                    fill="none"
                    stroke="rgba(232, 128, 1, 0.2)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-team)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-2 text-center md:text-left">
              <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-white">
                <span className="text-orange-500 block text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-2 font-mono">
                  THE MINDS BEHIND
                </span>
                {title.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "text-orange-500" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="max-w-[700px] text-white/50 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-light">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && (
                <div className="text-2xl font-black text-white">{logo}</div>
              )}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 px-8 text-sm font-black text-white shadow-[0_10px_20px_rgba(232,128,1,0.3)] transition-all hover:scale-105 active:scale-95"
                >
                  JOIN THE SQUAD
                </a>
              )}
            </div>
          </div>

          {/* Main Social Links */}
          <div className="relative z-10 flex w-full items-center justify-center gap-6 py-6 md:justify-center border-y border-white/5 my-8">
            {socialLinksMain.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
            <div className="h-4 w-px bg-white/10 mx-2" />
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest font-mono">
              novalis-ai.com
            </span>
          </div>

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 ease-in-out hover:border-orange-500/40"
              >
                {/* Background glow animation */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Member Image with mask and border animation */}
                <div className="relative z-10 h-44 w-44 overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 ease-out group-hover:border-orange-500 group-hover:scale-105 group-hover:-translate-y-2 shadow-2xl">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                <div className="relative z-10 mt-6 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none">
                    {member.name}
                  </h3>
                  <div className="mt-2 h-0.5 w-12 bg-orange-500 mx-auto transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  <p className="mt-3 text-xs font-mono font-bold uppercase tracking-[0.3em] text-orange-500/80">
                    {member.designation}
                  </p>
                </div>

                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-6 flex gap-4 opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors p-2 rounded-lg bg-white/5 hover:bg-orange-500 duration-300"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

TeamSection.displayName = "TeamSection";
