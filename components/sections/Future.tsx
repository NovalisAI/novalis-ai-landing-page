import { CreativeEyes } from "@/components/ui/creative-eyes-hero-section-1";

export default function Future() {
  return (
    <div className="h-screen w-screen bg-background text-foreground font-sans cursor-crosshair overflow-hidden">
      {/* Background 3D Eyes */}
      <CreativeEyes />

      {/* Foreground UI */}
      <div className="relative z-10 p-8 flex flex-col h-full box-border">
        <header
          role="banner"
          aria-label="Main Header"
          className="flex justify-between items-center w-full"
        >
          <div className="font-bold text-2xl animate-gradient">21st LOVE</div>
          <nav
            role="navigation"
            aria-label="Primary Navigation"
            className="hidden md:flex gap-8"
          >
            <a
              href="#"
              className="text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity"
            >
              COMPANY
            </a>
          </nav>
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-full font-semibold text-sm transition-colors hover:bg-gray-200"
          >
            CONTACT US
          </a>
        </header>

        <main className="flex-grow flex flex-col justify-end items-center text-center pb-32">
          <h1 className="text-4xl md:text-7xl font-bold animate-gradient animate-fade-in-up">
            The Future is Watching.
          </h1>
          <p className="text-lg md:text-xl mt-4 animate-gradient animate-fade-in-up animation-delay-300">
            Interactive experiences that captivate and convert.
          </p>
        </main>
      </div>
    </div>
}