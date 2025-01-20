"use client";
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";
import { motion } from "motion/react";

type PositionType = {
  left: number;
  width: number;
  opacity: number;
};

const SlideTabExample = () => {
  return (
    <div className="grid h-screen place-content-center 0">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<PositionType>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const handleMouseLeave = () => {
    setPosition((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };
  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white text-black p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: ReactNode;
  setPosition: Dispatch<SetStateAction<PositionType>>;
}) => {
  const handleMouseEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  };
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: PositionType;
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7   rounded-full bg-black md:h-12"
    />
  );
};
const AnimatedNavbar = () => {
  return (
    <div>
      <SlideTabExample />
    </div>
  );
};

export default AnimatedNavbar;
