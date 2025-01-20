"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const StaggeredAnimation = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });
  const defaultVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const content =
    "Salman Sheriff sdkfjsdfksda fjsdakfjsdf kjsdkfj sdkfjsdkfj dskfjksf djskjfksjfksdfjsdklfj dklfjklsjfklsjklsjflsdk fklsda";
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="w-[50%] ">
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            staggerChildren: 0.1,
          }}
          className="text-6xl text-balance font-bold max-w-[50%]"
        >
          {content.split("").map((char, index) => (
            <motion.span
              className="inline-block"
              variants={defaultVariant}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </main>
  );
};

export default StaggeredAnimation;
