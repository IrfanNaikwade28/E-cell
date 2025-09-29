import React, { lazy, Suspense } from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import { Footer } from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";

const Contact = lazy(() => import("../components/Contact").then(m => ({ default: m.Contact })));

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavbarDemo />
      <main>
        <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading…</div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
