import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md"
        >
          <Sparkles className="w-3 h-3 text-orange-500" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase font-mono">
            Ready to scale?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-orbitron font-black text-white text-center mb-8 tracking-tighter"
        >
          BUILD <span className="text-orange-500">AWESOME</span> APPS <br />
          WITH NOVALIS{" "}
          <span className="bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            AI.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-center text-white/50 text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          The road to digital excellence starts here. We combine elite
          engineering with cinematic design to build products that define the
          future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="group relative px-10 py-5 rounded-2xl bg-orange-500 text-white font-black hover:scale-105 transition-all duration-300 shadow-[0_15px_35px_rgba(232,128,1,0.4)] flex items-center gap-3 overflow-hidden">
            <span className="relative z-10 uppercase tracking-wider">
              Start Your Project
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all duration-300 group backdrop-blur-xl">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
