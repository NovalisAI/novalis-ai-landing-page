"use client";

const logos = [
  { name: "TechNova", icon: "🚀" },
  { name: "CloudStream", icon: "☁️" },
  { name: "DataPulse", icon: "📊" },
  { name: "EcoGrid", icon: "🌱" },
  { name: "Quantum", icon: "⚛️" },
  { name: "Aether", icon: "✨" },
  { name: "Nexis", icon: "🔗" },
  { name: "Vortex", icon: "🌀" },
];

export const LogoSlider = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          We collaborate with the world's most innovative companies to build the
          future of AI.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="mx-12 flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default"
            >
              <span className="text-4xl">{logo.icon}</span>
              <span className="text-2xl font-bold tracking-tighter text-foreground/80">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
