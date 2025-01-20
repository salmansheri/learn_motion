"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const HorizontalScroll = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={ref} className="relative h-[300vh] bg-neutral-900">
      <div className="h-screen sticky top-0 flex items-center overflow-hidden  ">
        <motion.div style={{ x }} className="flex gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-72 w-96 bg-violet-500/10 backdrop-blur-lg backdrop-saturate-150 rounded-lg"
            >
              {" "}
              Card
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
