import Button from "./ui/Button";
import { Hero3D } from "./Hero3D";
import { Meteors } from "./ui/Meteors";
export default function Hero({ onSplineReady }) {
  return (
    <section className="relative isolate overflow-hidden bg-black top-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[60vh] sm:h-[60vh] opacity-80">
        <Hero3D className="w-full h-full" onReady={onSplineReady} />
      </div>
      {/* Edge fade overlay to hide Spline borders/outlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[9] h-[60vh] sm:h-[60vh]"
      >
        <div className="absolute top-0 inset-x-0 h-[10vh] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[8vh] bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-8xl flex-col items-center max-sm:text-start px-4 text-center z-20 pt-[15vh] max-md:pt-[10vh]">
        <Meteors number={40} className="opacity-50" />
        <h1 className="animate-fade-in text-6xl sm:text-6xl md:text-7xl font-extrabold tracking-wide text-white z-20 ">
          <span className="flex">IGNITE. INNOVATE. INSPIRE.</span>
        </h1>
        <p className="animate-fade-in-delay mt-2 max-w-2xl text-base sm:text-lg leading-7 text-gray-300 tracking-wide italic">
          Level Up Your Entrepreneurial Journey with E-Cell.
        </p>
        <div className="animate-fade-in-delay-2 mt-5">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Explore Events
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
