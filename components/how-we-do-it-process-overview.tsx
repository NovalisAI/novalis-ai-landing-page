import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Interface for individual process card props
interface ProcessCardProps {
  icon: React.ElementType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => (
  <div
    className={cn(
      "group relative w-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-all cursor-pointer duration-500 hover:border-orange-500/40 hover:bg-white/10 backdrop-blur-sm",
      className,
    )}
  >
    {/* Decorative Line - Visible on larger screens */}
    <div className="absolute -left-[1px] top-1/2 hidden h-12 w-px -translate-y-1/2 bg-orange-500/20 transition-all duration-500 group-hover:bg-orange-500 group-hover:h-2/3 md:block" />
    <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-yellow-500/20 transition-all duration-500 group-hover:bg-yellow-500 group-hover:w-2/3 md:hidden" />

    {/* Icon Container */}
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-orange-500 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500/50">
      <Icon className="h-7 w-7" />
    </div>

    {/* Content */}
    <div className="flex flex-col">
      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed font-light">
        {description}
      </p>
    </div>
  </div>
);

// Interface for the main section props
interface ProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: ProcessCardProps[];
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  subtitle,
  title,
  description,
  buttonText,
  items,
}) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
          <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500/80 font-mono">
            {subtitle}
          </span>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl border-l-4 border-orange-500 pl-6">
            {title}
          </h2>
          <p className="mb-8 text-lg text-white/50 leading-relaxed font-light">
            {description}
          </p>
          <Button
            size="lg"
            className="bg-linear-to-r from-orange-500 to-yellow-500 text-white font-black hover:scale-105 duration-300 transition-all cursor-pointer px-10 py-6 rounded-xl shadow-[0_10px_20px_rgba(232,128,1,0.3)]"
          >
            {buttonText}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Content - Grid of Process Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-2">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
