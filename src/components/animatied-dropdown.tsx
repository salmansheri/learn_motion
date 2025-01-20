"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

const Content = () => {
  return <div className="bg-indigo-200 h-28 w-64">Salman</div>;
};

const FlyoutLink = ({
  children,
  content: Content,
}: {
  children: React.ReactNode;
  content: React.ElementType;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      onMouseMove={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(true)}
      className="relative h-fit w-fit group/link"
    >
      <a href="#" className="relative">
        {children}
        <span className="absolute -bottom-2 -left-2 -right-2  group-hover/link:scale-100  h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out" />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{ translateX: "-50%" }}
              className="absolute left-1/2 top-12  bg-white text-black"
            >
              <div className="absolute left-1/2 top-0 h-4 w-4  -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <Content />
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
};

const AnimatedDropdown = () => {
  return (
    <div>
      <FlyoutLink content={Content}>Pricing</FlyoutLink>
    </div>
  );
};

export default AnimatedDropdown;
