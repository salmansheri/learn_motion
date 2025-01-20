"use client";
import { motion, AnimatePresence } from "motion/react";
import React from "react";
import Modal from "@/components/modal";
const AnimatedModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => setIsOpen(true);

  return (
    <section className="relative">
      <div className="container">
        <motion.button
          className="bg-violet-500 px-4 py-2 flex items-center justify-center"
          onClick={() => (isOpen ? handleClose() : handleOpen())}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          Launch Modal
        </motion.button>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {isOpen && (
            <Modal isOpen={isOpen} handleClose={handleClose} text="Drop in" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnimatedModal;
