"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { DecisionType } from "@/data/projects";

const stars = [
  [21, 30], [31, 69], [43, 38], [50, 52],
  [60, 24], [66, 65], [77, 39], [82, 72],
];

const genreColors = ["bg-brand", "bg-accent", "bg-brand-t2"];

export default function DecisionAnimation({
  kind,
}: {
  kind: NonNullable<DecisionType["illustration"]>;
}) {
  const reduced = useReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { amount: 0.6 });
  const [playback, setPlayback] = useState(0);

  useEffect(() => {
    if (!isInView || reduced) return;

    const timer = window.setInterval(() => {
      setPlayback((current) => current + 1);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [isInView, reduced]);

  const transition = (duration: number, delay = 0) => ({
    duration: reduced ? 0 : duration,
    delay: reduced ? 0 : delay,
    ease: "easeInOut" as const,
  });

  return (
    <div ref={container} aria-hidden="true">
      <motion.div
        key={playback}
        className="relative h-28 overflow-hidden rounded-xl bg-brand-pale"
        initial={reduced ? false : "start"}
        animate={isInView || reduced ? "end" : "start"}
      >
        {kind === "sound-map" && (
          <>
            <motion.div
              className="absolute inset-x-[12%] inset-y-[16%] grid grid-cols-3 gap-1.5"
              variants={{ start: { opacity: 1 }, end: { opacity: 0 } }}
              transition={transition(0.55, 0.2)}
            >
              {genreColors.map((color) => (
                <div key={color} className="rounded-lg border border-brand-t3" />
              ))}
            </motion.div>
            {stars.map(([x, y], index) => (
              <motion.span
                key={index}
                className={`absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${genreColors[Math.floor(index / 3)]}`}
                variants={{
                  start: { left: `${24 + Math.floor(index / 3) * 26 + (index % 2 ? 4 : -4)}%`, top: `${32 + (index % 3) * 18}%` },
                  end: { left: `${x}%`, top: `${y}%` },
                }}
                transition={transition(1.05, 0.45)}
              />
            ))}
          </>
        )}

        {kind === "persistent-map" && (
          <>
            {stars.map(([x, y], index) => (
              <span key={index} style={{ left: `${x * 0.8}%`, top: `${y}%` }} className="absolute size-1.5 rounded-full bg-brand-t2" />
            ))}
            <span className="absolute left-[40%] top-[52%] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/25" />
            <motion.div
              className="absolute inset-y-[15%] right-[8%] w-[36%] rounded-lg border border-brand-t3 bg-white p-2"
              variants={{ start: { opacity: 0, x: 24 }, end: { opacity: 1, x: 0 } }}
              transition={transition(0.55, 0.2)}
            >
              <motion.div
                className="absolute inset-2 flex flex-col gap-1.5"
                variants={{ start: { opacity: 1 }, end: { opacity: 0 } }}
                transition={transition(0.25, 1.2)}
              >
                <span className="size-5 rounded-md bg-brand-t3" />
                <span className="h-1 w-3/4 rounded-full bg-brand-t2" />
                <span className="h-1 w-1/2 rounded-full bg-brand-t4" />
              </motion.div>
              <motion.div
                className="absolute inset-2 flex items-center justify-center"
                variants={{ start: { opacity: 0 }, end: { opacity: 1 } }}
                transition={transition(0.3, 1.45)}
              >
                <span className="size-2 rounded-full bg-brand" />
                <span className="w-1/2 border-t border-dashed border-brand-t2" />
                <span className="size-2 rounded-full bg-accent" />
              </motion.div>
            </motion.div>
          </>
        )}

        {kind === "zoom" && (
          <motion.div
            className="absolute inset-0"
            variants={{ start: { scale: 0.75 }, end: { scale: 1.35 } }}
            transition={transition(1.5, 0.2)}
          >
            <motion.div
              className="absolute inset-0"
              variants={{ start: { opacity: 1 }, end: { opacity: 0 } }}
              transition={transition(0.7, 0.65)}
            >
              {stars.map(([x, y], index) => (
                <span key={index} style={{ left: `${x}%`, top: `${y}%` }} className="absolute size-1.5 rounded-full bg-brand-t2" />
              ))}
            </motion.div>
            <motion.div
              className="absolute inset-0"
              variants={{ start: { opacity: 0 }, end: { opacity: 1 } }}
              transition={transition(0.8, 0.75)}
            >
              {stars.map(([x, y], index) => (
                <span key={index} style={{ left: `${100 - y}%`, top: `${x}%` }} className="absolute size-1.5 rounded-full bg-brand" />
              ))}
            </motion.div>
            <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/25" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
