import React, { lazy, Suspense } from "react";
import { NavbarDemo } from "../components/NavbarDemo";
import { Footer } from "../components/Footer";
import BackToTop from "../components/ui/BackToTop";

const TeamMember = lazy(() => import("../components/TeamMember").then(m => ({ default: m.TeamMember })));

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black">
      <NavbarDemo />
      <main>
        <Suspense fallback={<div className="py-20 text-center text-neutral-500">Loading…</div>}>
          <TeamMember />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
