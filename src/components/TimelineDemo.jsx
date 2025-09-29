import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {

const data = [
  {
    title: "October 2025 – Illuminate Workshop",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Illuminate was a hands-on workshop designed to spark creativity and innovation among students. 
          Participants explored entrepreneurship basics, idea validation, and storytelling techniques.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Students in Workshop"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Students in Workshop"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "November 2025 – Hackathon Launch",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          The flagship Hackathon kicked off with hundreds of participants brainstorming and building 
          solutions overnight. It served as a platform for tech enthusiasts and problem solvers to 
          showcase their skills.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="Hackathon Team"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Hackathon Coding"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "December 2025 – Eureka",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Eureka celebrated innovative startups and entrepreneurial journeys. Teams pitched their ideas 
          to mentors and investors, receiving guidance and exposure for scaling their ventures.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Startup Pitch"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Startup Pitch"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2026 February – E-Summit",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          The Entrepreneurship Summit brought together industry leaders, startup founders, and 
          students for keynote talks, panel discussions, networking, and a showcase of entrepreneurial spirit.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="E-Summit Stage"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
            alt="Audience at Summit"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
