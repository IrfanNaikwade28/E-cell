import { HeroHighlightDemo } from "./ui/HeroHighlightDemo";
import { GroupPic } from "./ui/GroupPic";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "motion/react";
import { SparklesPreview } from "./ui/SparklesPreview";
import {ExpandableCardDemo} from "./ui/ExpandableCardDemo";

export const TeamMember = () => {
  // Section wrapper ref (tracks progress across the whole section height)
  const sectionRef = useRef(null);
  // Track scroll progress across the section instead of the sticky element
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Animate GroupPic in as the user scrolls through the sticky area (manual mapping)
  const [picStyle, setPicStyle] = useState({ opacity: 0, y: 64, scale: 1, blur: 0 });
  const [heroStyle, setHeroStyle] = useState({ opacity: 1 });
  const [dimStyle, setDimStyle] = useState({ opacity: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mm = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mm.matches);
    onChange();
    mm.addEventListener?.('change', onChange);
    return () => mm.removeEventListener?.('change', onChange);
  }, []);
  useEffect(() => {
    // Phases: reveal in, then fade out before leaving sticky
    const revealStart = isMobile ? 0.05 : 0.1;
    const revealEnd   = isMobile ? 0.4  : 0.6;  // earlier end on desktop
    const fadeOutStart = isMobile ? 0.5 : 0.68; // start fading earlier on desktop
    const fadeOutEnd   = isMobile ? 0.9 : 0.9;  // complete fade by 90%
    const heroFadeStart = isMobile ? 0.02 : 0.05; // fade hero out sooner on mobile
    const heroFadeEnd = isMobile ? 0.18 : 0.3;
    const dimStart = isMobile ? 0.05 : 0.1; // dim layer starts early
    const dimEnd = isMobile ? 0.2 : 0.3;    // reaches max quickly
    const unsub = scrollYProgress.on("change", (v) => {
      const inT = Math.min(1, Math.max(0, (v - revealStart) / (revealEnd - revealStart)));
      const outT = Math.min(1, Math.max(0, (v - fadeOutStart) / (fadeOutEnd - fadeOutStart)));
  const finalOpacity = inT * (1 - outT);
  const finalY = 64 * (1 - inT) + 36 * outT; // up then slightly away
  const finalScale = 1 - 0.08 * outT; // scale down up to 8%
  const finalBlur = 3 * outT; // blur up to 3px
  setPicStyle({ opacity: finalOpacity, y: finalY, scale: finalScale, blur: finalBlur });
      const heroT = Math.min(
        1,
        Math.max(0, (v - heroFadeStart) / (heroFadeEnd - heroFadeStart))
      );
      setHeroStyle({ opacity: 1 - heroT });
      const dimT = Math.min(
        1,
        Math.max(0, (v - dimStart) / (dimEnd - dimStart))
      );
      // Dim in early to block text, then fade out near the end alongside the image
      setDimStyle({ opacity: (1 * dimT) * (1 - outT) });
    });
    return () => unsub && unsub();
  }, [scrollYProgress, isMobile]);

  return (
    <>
  <section ref={sectionRef} className="relative h-[220vh] lg:h-[260vh]">
        {/* Sticky viewport section: Hero first, GroupPic overlays as you scroll */}
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          {/* Base layer: HeroHighlight visible initially */}
          <div className="absolute inset-0 z-0" style={{ opacity: heroStyle.opacity }}>
            <HeroHighlightDemo />
          </div>

          {/* Dim overlay to prevent background content showing through */}
          <div
            className="absolute inset-0 z-[5] bg-black"
            style={{ opacity: dimStyle.opacity, willChange: "opacity" }}
          />


          {/* Image overlay with enter/exit animation */}
          <div
            style={{
              opacity: picStyle.opacity,
              transform: `translateY(${picStyle.y}px) scale(${picStyle.scale})`,
              filter: `blur(${picStyle.blur}px)`,
              willChange: "transform, filter, opacity",
            }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black"
          >
            <GroupPic />
          </div>
        </div>

        {/* Spacer to ensure a clean handoff to the next section */}
        <div className="h-[20vh]" />
      </section>
      <SparklesPreview />
      <ExpandableCardDemo />
    </>
  );
};
