"use client";

import React, { Dispatch, SetStateAction, useState, DragEvent } from "react";
import { FaFire } from "react-icons/fa";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "motion/react";

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

type CardType = typeof DEFAULT_CARDS;

const DropIndicator = ({
  beforeId,
  column,
}: {
  beforeId: string;
  column: string;
}) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full  bg-violet-400 opacity-0"
    ></div>
  );
};

const Card = ({
  title,
  id,
  column,
  handleDragStart,
}: {
  title: string;
  id: string;
  column: string;
  handleDragStart: (
    event: DragEvent<HTMLDivElement>,
    card: { title: string; id: string; column: string },
  ) => void;
}) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(event: DragEvent<HTMLDivElement>) =>
          handleDragStart(event, { title, id, column })
        }
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

const Column = ({
  title,
  headingColor,
  column,
  cards,
  setCards,
}: {
  title: string;
  headingColor: string;
  column: string;
  cards: CardType;
  setCards: Dispatch<SetStateAction<CardType>>;
}) => {
  const [active, setActive] = useState(false);

  const filterCards = cards.filter((c) => c.column === column);

  const handleDragStart = (
    event: DragEvent<HTMLDivElement>,
    card: { title: string; column: string; id: string },
  ) => {
    event.dataTransfer.setData("cardId", card.id);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    highlightIndicator(event);
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = () => {
    setActive(false);
  };

  const highlightIndicator = (event: DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();
    const el = getNearestIndicator(event, indicators);
  };

  const getNearestIndicator = (
    event: DragEvent<HTMLDivElement>,
    indicators: Element[],
  ) => {
    // const el = indicators.reduce((closest, child) => {}, {
    //   offset: Number.
    // })
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filterCards.length}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragEnd}
        className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        {filterCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            column={card.column}
            handleDragStart={handleDragStart}
          />
        ))}
        <DropIndicator beforeId={"-1"} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const BurnBarrel = ({
  setCards,
}: {
  setCards: Dispatch<SetStateAction<CardType>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
    const cardId = event.dataTransfer.getData("cardId");
    setCards((prev) => prev.filter((c) => c.id !== cardId));
    setActive(false);
  };
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddCard = ({
  column,
  setCards,
}: {
  column: string;
  setCards: Dispatch<SetStateAction<CardType>>;
}) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((prev) => [...prev, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(event) => setText(event.target.value)}
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="flex items-center gap-2 ">
            <button
              type="button"
              onClick={() => setAdding(false)}
              className="border border-gray-300/30 transition-colors px-3 py-1.5 rounded text-gray-400 hover:text-gray-50"
            >
              Cancel
            </button>
            <button
              className="px-3 py-1.5 bg-gray-900 hover:bg-gray-900/50 rounded transition-colors border border-gray-200/20"
              type="submit"
            >
              Save
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add Card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const Board = () => {
  const [cards, setCards] = useState<CardType>(DEFAULT_CARDS);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emrald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const KanbanBoard = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};

export default KanbanBoard;
