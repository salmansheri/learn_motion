"use client";
import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "./command-menu";
import { useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className=" mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setIsOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="bg-transparent  w-full placeholder:text-stone-400 focus:outline-none"
        />
        <span className="p-1 text-xs  flex gap-0.5 items-center shadow rounded absolute right-1.5 top-1/2 -translate-y-1/2 ">
          <FiCommand />K
        </span>
      </div>
      <CommandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLoading={isLoading}
      />
    </>
  );
};

export default Search;
