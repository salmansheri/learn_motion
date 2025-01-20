"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiHome,
  FiShoppingCart,
} from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const ExampleContent = () => {
  return <div className="h-[200vh] w-full">content</div>;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState<string>("Dashboard");
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      style={{
        width: isOpen ? "225px" : "fit-content",
      }}
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300/10 p-6"
    >
      <TitleSection isOpen={isOpen} />
      <div className="space-y-3">
        <Option
          isOpen={isOpen}
          title="Dashboard"
          Icon={FiHome}
          selected={selected}
          setSelected={setSelected}
          notifications={5}
        />
        <Option
          isOpen={isOpen}
          title="Sales"
          Icon={FaDollarSign}
          selected={selected}
          setSelected={setSelected}
          notifications={5}
        />
        <Option
          isOpen={isOpen}
          title="Products"
          Icon={FiShoppingCart}
          selected={selected}
          setSelected={setSelected}
          notifications={5}
        />
      </div>
      <ToggleClose isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};

const Option = ({
  Icon,
  title,
  selected,
  setSelected,
  isOpen,
  notifications,
}: {
  Icon: IconType;
  title: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  notifications?: number;
}) => {
  const isActive = title === selected;
  return (
    <motion.button
      onClick={() => setSelected(title)}
      className={cn(
        "relative flex  h-10 w-full items-center rounded-md transition-colors ",
        isActive
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100",
      )}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {isOpen && (
        <motion.span
          layout
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.125,
          }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
      {notifications && isOpen && (
        <motion.span
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          style={{
            y: `-50%`,
          }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifications}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div layout className="mb--3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors ">
        <motion.h1 layout>something</motion.h1>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            <motion.div className="block text-xs font-semibold">
              Salman
            </motion.div>
            <div className="block text-xs ">Pro plan</div>
          </motion.div>
        )}
        {isOpen && <FiChevronDown />}
      </div>
    </motion.div>
  );
};
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

const ToggleClose = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(isOpen);
  return (
    <motion.button
      layout
      onClick={() => setIsOpen((prev) => !prev)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100/50 hover:text-slate-900"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 grid-cols-[auto,1fr] place-content-center   text-lg"
        >
          <FiChevronRight
            className={cn(
              "transition-transform hover:text-black",
              isOpen && "rotate-180",
            )}
            color="white"
          />
          {isOpen && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              hide
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default Dashboard;
