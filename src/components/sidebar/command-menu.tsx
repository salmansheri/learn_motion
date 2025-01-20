"use client";
import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

const CommandMenu = ({ isOpen, isLoading, setIsOpen }: CommandMenuProps) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, [setIsOpen]);

  return (
    <Command.Dialog
      className="fixed inset-0 bg-stone-950/50"
      open={isOpen}
      onOpenChange={setIsOpen}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="rounded-lg shadow-xl border-stone-300/20 border overflow-hidden w-full max-w-lg mx-auto mt-12"
        onClick={(event) => event.stopPropagation()}
      >
        <Command.Input
          onValueChange={setValue}
          value={value}
          className="relative border-b border-stone-300/20 p-3 text-lg w-full place:text-stone-400 focus:outline-none text-black"
          placeholder="what do you need"
        />

        <Command.List>
          {isLoading && <Command.Loading>Hang on…</Command.Loading>}

          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">{value}</span>
          </Command.Empty>

          <Command.Group heading="Fruits">
            <Command.Item>Apple</Command.Item>
            <Command.Item>Orange</Command.Item>
            <Command.Separator />
            <Command.Item>Pear</Command.Item>
            <Command.Item>Blueberry</Command.Item>
          </Command.Group>

          <Command.Item>Fish</Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
