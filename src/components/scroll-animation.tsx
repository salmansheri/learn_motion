"use client";

import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const UseScrollBasic = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#6366f1"],
  );
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        background: background,
        x: "-50%",
        y: "-50%",
      }}
      className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500"
    ></motion.div>
  );
};
const UseScrollAdvancedScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <motion.div
      style={{
        rotate: rotate,
      }}
      ref={targetRef}
      className="mx-auto size-48 bg-indigo-500"
    ></motion.div>
  );
};

const UseScrollWithContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    axis: "x",
    offset: ["end start", "start start"],
  });

  return (
    <div
      ref={containerRef}
      className="flex w-screen overflow-x-scroll bg-indigo-500/50 py-8"
    >
      <div className="w-screen shrink-0" />
      <motion.div
        ref={targetRef}
        style={{
          opacity: scrollXProgress,
        }}
        className="mx-auto size-48 shrink-0 bg-zinc-50"
      ></motion.div>
      <div className="w-screen shrink-0" />
    </div>
  );
};

const ScrollAnimation = () => {
  return <UseScrollWithContainer />;
};

export default ScrollAnimation;
