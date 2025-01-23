"use client";
import { FiArrowRight } from "react-icons/fi";
import { SiSpacex } from "react-icons/si";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "motion/react";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
const SECTION_HEIGHT = 1500;

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs"
      >
        Launch Schedule
        <FiArrowRight />
      </button>
    </header>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

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

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  return (
    <motion.div
      className="sticky top-0 h-screen w-screen"
      style={{
        opacity,
        backgroundSize,
        clipPath: clipPath,
        backgroundImage: "url('/space/3.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImage = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <motion.img
      style={{
        opacity,
        transform,
      }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto relative z-10  max-w-5xl px-4 pt-[200px]">
      <ParallaxImage
        src="/space/2.png"
        alt="someimage"
        className="w-1/2"
        start={200}
        end={200}
      />
      <ParallaxImage
        src="/space/4.png"
        alt="someimage"
        className="w-2/3 mx-auto"
        start={200}
        end={250}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`,
      }}
      className="w-screen relative "
    >
      <CenterImage />
      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-900/0 to-zinc-900" />
    </div>
  );
};

const SheduleItem = ({
  title,
  date,
  location,
}: {
  title: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{
        y: 48,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
      }}
      className="border items-center  border-gray-300/10 rounded-lg p-3 grid grid-cols-[1fr,auto] "
    >
      <div className="grid grid-cols-1">
        <h4 className="text-xl">{title}</h4>
        <p className="text-lg text-gray-500">{date}</p>
      </div>
      <div>{location}</div>
    </motion.div>
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{
          y: 48,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
        }}
        className="mb-20 text-4xl uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <SheduleItem title="NG-21" date="Dec 9th" location="Chennai" />
    </section>
  );
};

export default function SmoothScroll() {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Header />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
}
