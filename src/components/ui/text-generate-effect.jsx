"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: false, // 👈 replay when re-entering
    amount: 0.6,
  });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      // Animate in
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration: duration || 1, delay: stagger(0.2) }
      );
    } else {
      // Reset out of view
      animate(
        "span",
        { opacity: 0, filter: filter ? "blur(10px)" : "none" },
        { duration: 0.2 }
      );
    }
  }, [isInView, animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white text-2xl leading-snug tracking-wider">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="text-white opacity-0 uppercase text-7xl ps-5 sora10"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
