"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { TextGenerateEffectDemo } from "./ui/TextGenerateEffectDemo";
import leadership from "../assets/leadership.png";
import global from "../assets/global_collab.png";
export const AboutSect = () => {
  return (
    <div className="pt-[20vh]">
      <div className="min-h-screen w-full flex items-center justify-center">
        <TextGenerateEffectDemo />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full py-10">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Empowering Tomorrow’s Leaders
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              To build a future where every student has the skills, mindset, and network to lead impactful ventures.
            </p>
          </div>
          <img
            src={leadership}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute right-10 bottom-10 size-60 object-cover rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            A Thriving Innovation Ecosystem
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            To create a collaborative community where ideas are nurtured, risks are embraced, and startups are born.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Global Impact from Local Roots
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              To inspire students to innovate fearlessly and scale solutions that make a difference worldwide.
            </p>
          </div>
          <img
            src={global}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute right-10 bottom-0 size-80 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};
