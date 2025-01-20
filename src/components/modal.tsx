import { motion } from "motion/react";
import Backdrop from "@/components/backdrop";

const Modal = ({
  handleClose,
  text,
  isOpen,
}: {
  handleClose: () => void;
  text: string;
  isOpen: boolean;
}) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(event: MouseEvent) => event.stopPropagation()}
        className="w-[90%] md:w-[50%] m-auto py-0 px-[2rem] border border-violet-300/40 shadow-2xl flex items-center flex-col h-[50%] bg-violet-500/20 backdrop-blur-xl backdrop-saturate-150 rounded-lg"
      >
        <p>{text}</p>
        <button className="px-4 py-2 bg-violet-500" onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
