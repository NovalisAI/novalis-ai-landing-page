import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500 font-mono">
            Testimonials
          </span>
          <h2 className="text-4xl font-orbitron font-black text-white lg:text-6xl tracking-tighter">
            LOVED BY <span className="text-orange-500">FORWARD-THINKING</span>{" "}
            LEADERS
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            Join the elite circle of businesses scaling with Novalis AI
            intelligence and design.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-white/5 border-white/10 rounded-3xl backdrop-blur-sm group hover:border-orange-500/40 transition-all duration-500 shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-2 w-8 bg-orange-500 rounded-full" />
                <span className="text-xs font-mono text-orange-500/50 uppercase font-bold tracking-widest">
                  Featured Client
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-2xl font-orbitron font-bold text-white leading-tight">
                  "Novalis AI didn't just build a product; they created an
                  entire experience. Their AI-native approach completely
                  transformed our operational efficiency."
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <Avatar className="size-14 border-2 border-orange-500/20">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
                      alt="Executive Profile"
                    />
                    <AvatarFallback className="bg-orange-500 text-white">
                      SK
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-bold text-white uppercase tracking-wider not-italic">
                      Sarah Kinsley
                    </cite>
                    <span className="text-orange-500/60 block text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                      CTO, Global Nexus
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 bg-white/5 border-white/10 rounded-3xl group hover:border-yellow-500/40 transition-all duration-500">
            <CardContent className="h-full pt-8">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-lg font-light text-white/80 leading-relaxed italic">
                  "The speed of delivery matched only by the precision of their
                  design. Novalis is our go-to for anything future-facing."
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-10 border border-white/10">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                      alt="Marcus Chen"
                    />
                    <AvatarFallback className="bg-yellow-500 text-black">
                      MC
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-xs font-bold text-white uppercase not-italic">
                      Marcus Chen
                    </cite>
                    <span className="text-yellow-500/60 block text-[9px] font-mono font-bold uppercase tracking-wider">
                      Lead Architect, Arca
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 rounded-2xl group hover:border-orange-500/40 transition-all duration-500">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  "High-fidelity interfaces that scale. A rare find in the AI
                  world."
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-10 border border-white/10">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                      alt="Yucel Profile"
                    />
                    <AvatarFallback className="bg-orange-500 text-white">
                      YF
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-xs font-bold text-white not-italic">
                      Elena Vos
                    </cite>
                    <span className="text-white/40 block text-[9px] uppercase font-bold">
                      Creative Lead, Flux
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 rounded-2xl group hover:border-yellow-500/40 transition-all duration-500">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  "They don't just write code; they engineer business success."
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-10 border border-white/10">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
                      alt="Rodrigo Aguilar"
                    />
                    <AvatarFallback className="bg-yellow-500 text-black">
                      RA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">
                      James Sterling
                    </p>
                    <span className="text-white/40 block text-[9px] uppercase font-bold">
                      Founder, Quantum Labs
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
