"use client";

// import { motion } from "motion/react";
//
// const gridContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//
//     transition: {
//       duration: 2,
//       staggerChildren: 0.25,
//     },
//   },
// };
//
// const gridCardVariants = {
//   hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 2,
//     },
//   },
// };
//
// const StaggerChildren = () => {
//   return (
//     <motion.div
//       variants={gridContainerVariants}
//       initial="hidden"
//       animate="visible"
//       className="grid grid-cols-3 gap-3 place-items-center"
//     >
//       {Array.from({ length: 6 }).map((_, index) => (
//         <motion.div
//           key={index}
//           variants={gridCardVariants}
//           className="bg-indigo-500 size-72"
//         ></motion.div>
//       ))}
//
//       {/*<motion.div*/}
//       {/*  variants={gridCardVariants}*/}
//       {/*  className="bg-indigo-500 size-52"*/}
//       {/*></motion.div>*/}
//       {/*<motion.div*/}
//       {/*  variants={gridCardVariants}*/}
//       {/*  className="bg-indigo-500 size-52"*/}
//       {/*></motion.div>*/}
//       {/*<motion.div*/}
//       {/*  variants={gridCardVariants}*/}
//       {/*  className="bg-indigo-500 size-52"*/}
//       {/*></motion.div>*/}
//       {/*<motion.div*/}
//       {/*  variants={gridCardVariants}*/}
//       {/*  className="bg-indigo-500 size-52"*/}
//       {/*></motion.div>*/}
//     </motion.div>
//   );
// };
//
// export defaultimport React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Properly staggers the child animations
    },
  },

  exit: { opacity: 0, y: -20 },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StaggeredAnimatePresence = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => setItems((prev) => [...prev, prev.length + 1]);
  const removeItem = () => setItems((prev) => prev.slice(0, -1));

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item}
              variants={childVariants}
              style={{
                background: "lightblue",
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default StaggeredAnimatePresence;
