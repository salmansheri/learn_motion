"use client";

import { motion, useMotionValue, useMotionTemplate } from "motion/react";

export default function Card() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = event;

    const xPosition = clientX - left;
    const yPosition = clientY - top;

    mouseX.set(xPosition);
    mouseY.set(yPosition);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative  overflow-hidden max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
    >
      <motion.div
        className="absolute transition-all group-hover:opacity-100 opacity-0 -inset-px "
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15),transparent) 80%`,
        }}
      />
      <div className="">
        <h3 className="text-base font-semibold leading-7 text-sky-500">
          Byline
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">
            Hero
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum
          eum ullam nostrum atque quam.
        </p>
      </div>
    </div>
  );
}
