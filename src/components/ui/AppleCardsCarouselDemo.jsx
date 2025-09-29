"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-neutral-950">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
       Explore, Engage, Experience.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                Empowering students to innovate and lead.
              </span>{" "}
              Our club organizes events, workshops, and competitions that help
              you explore entrepreneurship, grow your skills, and connect with
              mentors and industry leaders.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Club Orientation",
    title: "Welcome to the E-Cell Journey 🚀",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-neutral-400 text-base md:text-2xl font-sans">
        Discover our vision, meet fellow innovators, and learn how to make the
        most of your E-Cell experience.
      </p>
    ),
  },
  {
    category: "Workshops",
    title: "Hands-On Startup Workshops 💡",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-neutral-400 text-base md:text-2xl font-sans">
        Learn ideation, business models, fundraising, and pitching from experts
        through interactive sessions.
      </p>
    ),
  },
  {
    category: "Competitions",
    title: "Pitch Battles & Hackathons 🎤",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-neutral-400 text-base md:text-2xl font-sans">
        Compete with peers to pitch innovative ideas, build prototypes, and win
        exciting prizes.
      </p>
    ),
  },
  {
    category: "Networking",
    title: "Meet Mentors & Alumni 🌐",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-neutral-400 text-base md:text-2xl font-sans">
        Connect with entrepreneurs, investors, and alumni who can guide your
        startup journey.
      </p>
    ),
  },
  {
    category: "Showcase",
    title: "Innovation & Startup Fair 🛰️",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-neutral-400 text-base md:text-2xl font-sans">
        A platform for students to showcase their ideas, prototypes, and
        products to a wider audience.
      </p>
    ),
  },
  {
    category: "Opportunities",
    title: "Internships & Hiring 💼",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <p className="text-neutral-400 text-base md:text-2xl font-sans">
        Get access to internship and job opportunities through our partnerships
        with startups and incubators.
      </p>
    ),
  },
];
