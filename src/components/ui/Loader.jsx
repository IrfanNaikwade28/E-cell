import React from "react";
import Logo from "../../assets/logo/logo.svg";

// Minimal glitch text loader inspired by Aceternity UI
export const Loader = ({ text = "Loading" }) => {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <img src={Logo} alt="E-Cell" className="h-10 w-10 opacity-90" />
        <div className="relative">
        <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest text-white select-none">
          {text}
        </span>
        {/* Glitch layers */}
        <span className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest text-blue-500 mix-blend-screen animate-[glitch1_1.2s_infinite] select-none">
          {text}
        </span>
        <span className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest text-fuchsia-500 mix-blend-screen animate-[glitch2_1.2s_infinite] select-none">
          {text}
        </span>
        </div>
        <div className="mt-2 h-1 w-40 bg-white/10 overflow-hidden rounded">
          <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-fuchsia-500 animate-[slide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes glitch1 {
          0% { transform: translate(0, 0); opacity: 0.7 }
          20% { transform: translate(-2px, 1px); opacity: 0.8 }
          40% { transform: translate(1px, -1px); opacity: 0.7 }
          60% { transform: translate(-1px, 2px); opacity: 0.9 }
          80% { transform: translate(1px, 1px); opacity: 0.8 }
          100% { transform: translate(0, 0); opacity: 0.7 }
        }
        @keyframes glitch2 {
          0% { transform: translate(0, 0); opacity: 0.7 }
          20% { transform: translate(2px, -1px); opacity: 0.9 }
          40% { transform: translate(-1px, 1px); opacity: 0.7 }
          60% { transform: translate(1px, -2px); opacity: 0.8 }
          80% { transform: translate(-1px, -1px); opacity: 0.9 }
          100% { transform: translate(0, 0); opacity: 0.7 }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
