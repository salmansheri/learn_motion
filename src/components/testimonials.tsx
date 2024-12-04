"use client";
import { testimonials } from "@/lib/constant";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const isActive = (idx: number) => {
    return idx === active;
  };

  const randomRotate = () => Math.floor(Math.random() * 21 - 10);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div className="relative h-80 w-full">
        <AnimatePresence>
          {testimonials.map((testimonial, idx) => (
            <motion.div
              className="absolute inset-0 origin-bottom"
              key={testimonial.name}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotate(),
              }}
              animate={{
                opacity: isActive(idx) ? 1 : 0.7,
                scale: isActive(idx) ? 1 : 0.95,
                rotate: isActive(idx) ? 0 : randomRotate(),
                z: isActive(idx) ? 0 : -100,
                zIndex: isActive(idx) ? 999 : testimonials.length + 2 - idx,
                y: isActive(idx) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                rotate: randomRotate(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <img
                src={testimonial.src}
                alt={testimonial.name}
                className="rounded-3xl h-full w-full"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="">
        <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <h2 className="font-bold text-2xl">{testimonials[active].name}</h2>
          <p className="text-base text-neutral-400">
            {testimonials[active].designation}
          </p>
          <p className="text-lg pt-10 text-neutral-300">
            {testimonials[active].quote}
          </p>
          <div className=" mt-5 flex gap-10">
            <button onClick={handlePrev} className="btn text-black">
              <ArrowLeftIcon />
            </button>
            <button onClick={handleNext} className="btn text-black">
              <ArrowRightIcon />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
