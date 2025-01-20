"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="h-screen z-50 w-screen absolute top-0 left-0 bg-black/40 flex items-center justify-center overflow-hidden scroll-m-0"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
