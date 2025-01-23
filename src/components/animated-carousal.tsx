"use client";

import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const images = ["/nature.png", "/tree.png", "/3.png", "/4.png", "/5.png"];

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const Images = ({ imageIndex }: { imageIndex: number }) => {
  return (
    <>
      {images.map((image, index) => (
        <motion.div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imageIndex === index ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video shrink-0 w-screen rounded-xl bg-neutral-800 object-cover"
          key={index}
        />
      ))}
    </>
  );
};

const Dots = ({
  imageIndex,
  setImageIndex,
}: {
  imageIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {images.map((_, index) => (
        <motion.button
          layout
          className={`h-3 w-3 rounded-full transition-colors ${index === imageIndex ? "bg-neutral-50" : "bg-neutral-500"} `}
          key={index}
          onClick={() => setImageIndex(index)}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0 top-0"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0 top-0"></div>
    </>
  );
};

export default function AnimatedCarousal() {
  const [imageIndex, setImageIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0);
    }
  });

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();
      if (x === 0) {
        setImageIndex((prev) => {
          if (prev === images.length - 1) {
            return 0;
          }

          return prev + 1;
        });
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, [dragXProgress]);

  const handleDragStart = () => {
    setDragging(true);
  };
  const handleDragEnd = () => {
    setDragging(false);
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imageIndex < images.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 py-8 ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        animate={{
          translateX: `-${imageIndex * 100}vw`,
        }}
        style={{
          x: dragX,
        }}
        transition={SPRING_OPTIONS}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        <Images imageIndex={imageIndex} />
      </motion.div>
      <Dots imageIndex={imageIndex} setImageIndex={setImageIndex} />
      <GradientEdges />
    </div>
  );
}
