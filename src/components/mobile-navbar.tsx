"use client";
import { AnimatePresence, motion, useCycle, MotionConfig } from "motion/react";
import { useEffect } from "react";
const MobileNavbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  useEffect(() => {
    console.log(mobileNav);
  }, [mobileNav]);

  return (
    <header className=" h-16 sticky top-0 inset-x-0 bg-gray-900 border-b border-gray-300/20 ">
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="relative z-10">
          <motion.button
            animate={mobileNav ? "visible" : "hidden"}
            onClick={() => {
              toggleMobileNav();
            }}
            className="grid gap-1"
          >
            <motion.span
              variants={{
                hidden: {
                  rotate: 0,
                  y: 0,
                },
                visible: {
                  rotate: 45,
                  y: 5,
                },
              }}
              className="w-5 h-px bg-white block"
            />
            <motion.span
              variants={{
                visible: {
                  opacity: 0,
                },
                hidden: {
                  opacity: 1,
                },
              }}
              className="w-5 h-px bg-white block"
            />
            <motion.span
              variants={{
                hidden: {
                  rotate: 0,
                  y: 0,
                },
                visible: {
                  rotate: -45,
                  y: -5,
                },
              }}
              className="w-5 h-px bg-white block"
            />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed flex justify-center flex-col  space-y-10 p-6 container mx-auto inset-0 bg-blue-500"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-4xl font-bold">
                      Link 1
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="w-full bg-white h-px"
              ></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center gap-x-5">
                  <li>
                    <div className="size-5 rounded bg-white"></div>
                  </li>
                  <li>
                    <div className="size-5 rounded bg-white"></div>
                  </li>
                  <li>
                    <div className="size-5 rounded bg-white"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
};
export default MobileNavbar;
