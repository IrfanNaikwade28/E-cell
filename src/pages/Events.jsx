import React, { lazy, Suspense } from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import { Footer } from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";

const TimelineDemo = lazy(() => import("../components/TimelineDemo").then(m => ({ default: m.TimelineDemo })));
const Eventspotlight = lazy(() => import("../components/Eventspotlight").then(m => ({ default: m.Eventspotlight })));

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavbarDemo />
      <main>
        <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading…</div>}> <TimelineDemo /> </Suspense>
        <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading…</div>}> <Eventspotlight /> </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
