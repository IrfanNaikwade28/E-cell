"use client";

import React, { useEffect, useId, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { useOutsideClick } from "../hooks/use-outside-click";
// Team leads images
import PresidentImg from "../../assets/images/Team_leads/President.png";
import VPImg from "../../assets/images/Team_leads/VP.png";
import TreasurerImg from "../../assets/images/Team_leads/Treasurer.png";
import TechImg from "../../assets/images/Team_leads/Tech.png";
import PRImg from "../../assets/images/Team_leads/PR.png";
import NECImg from "../../assets/images/Team_leads/NEC.png";
import HOImg from "../../assets/images/Team_leads/HO.png";
import FilmoImg from "../../assets/images/Team_leads/Filmo.png";
import EventManagementImg from "../../assets/images/Team_leads/EventManagement.png";
import ContentSocialMediaImg from "../../assets/images/Team_leads/ContentSocialMedia.png";
import CRImg from "../../assets/images/Team_leads/CR.png";
import Doc from "../../assets/images/Team_leads/Doc.png";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-800 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative overflow-hidden w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/40"
            >
              {/* Card-wide animated background */}
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-transparent absolute inset-0"
                colors={[[59,130,246],[139,92,246]]}
                opacities={[0.08,0.12,0.18,0.3,0.45]}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(520px_at_center,white,transparent)] bg-black/40" />
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative rounded-t-3xl overflow-hidden">
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent absolute inset-0"
                  colors={[[59, 130, 246], [139, 92, 246]]}
                  opacities={[0.2, 0.3, 0.4, 0.6, 1]}
                  dotSize={2}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/80" />
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="relative z-10 w-full h-80 lg:h-80 object-contain"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-neutral-100 text-lg"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.span
                      layoutId={`description-${active.description}-${id}`}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-neutral-300 mt-1"
                    >
                      {active.description}
                    </motion.span>
                  </div>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-900/30 border border-white/10"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul id="team-cards" className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 items-start gap-5">
        {cards.map((card, idx) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`${card.description}-${idx}`}
            onClick={() => setActive(card)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(card)}
            aria-label={`Open card for ${card.title}`}
            className={`relative overflow-hidden p-4 flex flex-col rounded-2xl cursor-pointer bg-neutral-900/30 border border-white/10 hover:bg-neutral-900/50 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${!showAllMobile && idx >= 4 ? 'hidden md:block' : ''}`}
          >
            {/* Card-wide animated background */}
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent absolute inset-0"
              colors={[[59,130,246],[139,92,246]]}
              opacities={[0.06,0.1,0.16,0.26,0.38]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(440px_at_center,white,transparent)] bg-black/40" />
            <div className="relative z-10 flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`} className="relative">
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent absolute inset-0"
                  colors={[[59, 130, 246], [139, 92, 246]]}
                  opacities={[0.2, 0.3, 0.4, 0.6, 1]}
                  dotSize={2}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/80" />
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="relative z-10 h-60 w-full rounded-2xl object-contain"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-neutral-100 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.span
                  layoutId={`description-${card.description}-${id}`}
                  className="mt-1 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-neutral-300"
                >
                  {card.description}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      {cards.length > 4 && (
        <div className="mt-4 md:hidden flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllMobile((s) => !s)}
            aria-expanded={showAllMobile}
            aria-controls="team-cards"
            className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 border border-white/10 shadow-md shadow-blue-900/30"
          >
            {showAllMobile ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "President",
    title: "Sucharith Akula",
    src: PresidentImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Provides vision and leadership, ensuring the E-Cell achieves its mission of fostering entrepreneurship.</p>
    ),
  },
  {
    description: "Vice President",
    title: "Sumit Powar",
    src: VPImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Supports leadership and oversees operations across initiatives and teams.</p>
    ),
  },
  {
    description: "Treasurer",
    title: "Atharva Mali",
    src: TreasurerImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Manages budgets, funding, and financial planning for events and programs.</p>
    ),
  },
  
  {
    description: "Public Relations",
    title: "Miloshka Jennifer George Lima",
    src: PRImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Builds brand presence and maintains strong relationships with partners and media.</p>
    ),
  },
  {
    description: "NEC Lead",
    title: "Gaurav Sutar",
    src: NECImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Coordinates campus engagement and core club operations.</p>
    ),
  },
  {
    description: "Head of Operations",
    title: "Rishika Singh",
    src: HOImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Oversees day-to-day execution, logistics, and cross-team coordination.</p>
    ),
  },
  {
    description: "Film & Media",
    title: "Shrikant Rathod",
    src: FilmoImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Creates visual storytelling and media content for events and campaigns.</p>
    ),
  },
  {
    description: "Event Management",
    title: "Shlok Shinde",
    src: EventManagementImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Plans and executes events that bring founders, mentors, and ideas together.</p>
    ),
  },
  {
    description: "Content & Social Media",
    title: "Soham Kore",
    src: ContentSocialMediaImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Crafts content and manages social channels to engage the community.</p>
    ),
  },
  {
    description: "Tech Lead",
    title: "Irfan Naikwade",
    src: TechImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Leads technical development and ensures our platforms are scalable and reliable.</p>
    ),
  },
  {
    description: "Corporate Relations",
    title: "Nihar Mahajan",
    src: CRImg,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Builds partnerships and strengthens outreach within and beyond campus.</p>
    ),
  },
  {
    description: "Documentation",
    title: "Rohit Jagtap",
    src: Doc,
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/",
    content: () => (
      <p>Maintains records and documentation to preserve knowledge for future teams.</p>
    ),
  },
];
