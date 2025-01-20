"use client";

import { SiSpacex } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";

const SECTION_HEIGHT = 1500;

const Nav = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-10 py-3">
      <nav className="flex items-center justify-between">
        <SiSpacex className="text-3xl mix-blend-difference" />
        <button className="flex items-center gap-1 text-xs text-zinc-300">
          Launch Schedule <FiArrowRight />
        </button>
      </nav>
    </header>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0],
  );

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"],
  );

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      style={{
        opacity,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1735580825884-5b7ad8b5e551?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: backgroundSize,
        clipPath,
      }}
      className="sticky top-0 h-screen w-full"
    ></motion.div>
  );
};

const ParallaxImages = () => {
  return <div></div>;
};
const Hero = () => {
  return (
    <div
      className="relative w-full "
      style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`,
      }}
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const Parallax = () => {
  return (
    <main className="bg-zinc-950">
      <Nav />
      <Hero />
      <div className="bg-zinc-950 h-[50vh]"></div>
    </main>
  );
};

export default Parallax;
