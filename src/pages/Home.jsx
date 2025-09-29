import React, { lazy, Suspense, useEffect, useState } from "react";
import { Loader } from "../components/ui/Loader";
import { NavbarDemo } from "../components/NavbarDemo";
import { Footer } from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";

const AboutSect = lazy(() => import("../components/AboutSect").then(m => ({ default: m.AboutSect })));
const TimelineDemo = lazy(() => import("../components/TimelineDemo").then(m => ({ default: m.TimelineDemo })));
const Eventspotlight = lazy(() => import("../components/Eventspotlight").then(m => ({ default: m.Eventspotlight })));
const TeamMember = lazy(() => import("../components/TeamMember").then(m => ({ default: m.TeamMember })));
const Contact = lazy(() => import("../components/Contact").then(m => ({ default: m.Contact })));

// Hero with Spline should not block first paint.
// We'll mount it after it's in view and signal when Spline is ready to hide the loader.
const HeroSection = lazy(() => import("../components/HeroSection"));

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  // Glitch loader stays until heroReady
  return (
    <div className="min-h-screen bg-black">
      <NavbarDemo />
      {!heroReady && (
        <div className="fixed inset-0 z-[9998]">
          <Loader text="E-Cell" />
        </div>
      )}
      <main className={heroReady ? "opacity-100" : "opacity-0 transition-opacity duration-500"}>
        <Suspense fallback={null}>
          <HeroSectionWrapper onReady={() => setHeroReady(true)} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}> <AboutSect /> </Suspense>
        <Suspense fallback={<SectionFallback />}> <TimelineDemo /> </Suspense>
        <Suspense fallback={<SectionFallback />}> <Eventspotlight /> </Suspense>
        <Suspense fallback={<SectionFallback />}> <TeamMember /> </Suspense>
        <Suspense fallback={<SectionFallback />}> <Contact /> </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function SectionFallback() {
  return <div className="py-20 text-center text-neutral-500">Loading…</div>;
}

// Lazy-init Spline inside Hero:
// We rely on a wrapper that waits until the Hero is in view, then mounts the heavy Spline.
function HeroSectionWrapper({ onReady }) {
  const [inView, setInView] = useState(false);
  const [splineReady, setSplineReady] = useState(false);

  useEffect(() => {
    const el = document.getElementById("hero-anchor");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (splineReady) {
      // Give a tiny delay for a smoother fade
      const t = setTimeout(() => onReady?.(), 150);
      return () => clearTimeout(t);
    }
  }, [splineReady, onReady]);

  return (
    <div id="hero-anchor">
      {inView ? (
          <Suspense fallback={<div className="h-[70vh]" />}>
            <HeroSection onSplineReady={() => setSplineReady(true)} />
        </Suspense>
      ) : (
        <div className="h-[70vh]" />
      )}
    </div>
  );
}

// Hero3D is used internally by HeroSection, readiness is signaled via onSplineReady
