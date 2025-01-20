"use client";

import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";

const Basic = () => {
  const [scope, animate] = useAnimate();
  const handleAnimate = async () => {
    await animate("#target", { x: 150 });
    await animate(
      "#target",
      { y: 150, rotate: "360deg" },
      {
        duration: 0.5,
      },
    );
    await animate("button", { rotate: "360deg" });
    await animate("#target", {
      x: -150,
      borderRadius: "25px",
      rotate: "180deg",
      background: "#f59c0b",
    });
    await animate(
      "#target",
      {
        y: 0,
        borderRadius: "0px",
        rotate: "0deg",
      },
      {
        duration: 0.5,
      },
    );
    await animate("#target", {
      x: 0,
      background: "#4f46e5",
    });
    await animate("button", { rotate: "0deg" });
  };

  useEffect(() => {}, []);
  return (
    <div ref={scope}>
      <motion.div id="target" className="size-24 bg-violet-500" />
      <button
        onClick={handleAnimate}
        className="mt-4 rounded-md bg-amber-900 px-4 py-2"
      >
        Trigger
      </button>
    </div>
  );
};

const UseAnimate = () => {
  return (
    <div className="grid h-screen place-content-center ">
      <Basic />
    </div>
  );
};

export default UseAnimate;
