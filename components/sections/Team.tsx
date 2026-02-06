const team = [
  {
    name: "Aline W.",
    role: "Chief Architect",
    focus: "AI Systems & Strategy",
  },
  {
    name: "Kaito R.",
    role: "Creative Technologist",
    focus: "Realtime Experiences",
  },
  {
    name: "Mira V.",
    role: "Product Director",
    focus: "Enterprise Platforms",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-novalis-yellow/80">
              Team
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              A small senior team with global impact.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400">
            We operate as a compact strike team of architects, designers, and
            engineers who integrate directly with your leadership.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-novalis-orange/40 to-novalis-yellow/40 blur" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition duration-300 group-hover:border-novalis-yellow/70" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      {member.role}
                    </p>
                  </div>
                  <span className="h-8 w-8 rounded-full border border-white/10 bg-white/5" />
                </div>
                <p className="text-sm text-zinc-300">{member.focus}</p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
