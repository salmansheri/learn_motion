"use client";
import { cn } from "@/lib/utils";
import {
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FiClock, FiPlus, FiTrash2 } from "react-icons/fi";
import { motion, AnimatePresence, usePresence, useAnimate } from "motion/react";

type TodoListType = {
  id: number;
  text: string;
  checked: boolean;
  time: string;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Array<TodoListType>>([
    {
      id: 1,
      text: "Take out trash",
      checked: false,
      time: "5 mins",
    },
    {
      id: 2,
      text: "Do laundry",
      checked: false,
      time: "5 mins",
    },
    {
      id: 3,
      text: "Have existential crisis",
      checked: false,
      time: "5 mins",
    },
    {
      id: 4,
      text: "Get dog food",
      checked: false,
      time: "5 mins",
    },
  ]);

  const handleCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
  };

  const removeElement = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <section className="min-h-screen bg-zinc-950 py-24">
      <div className="mx-auto w-full max-w-xl px-4">
        <Todos
          removeElement={removeElement}
          todos={todos}
          handleCheck={handleCheck}
        />
        <Form setTodos={setTodos} />
      </div>
    </section>
  );
};

interface TodosProps {
  removeElement: (id: number) => void;
  todos: Array<TodoListType>;
  handleCheck: (id: number) => void;
}

const Todos = ({ removeElement, todos, handleCheck }: TodosProps) => {
  return (
    <div className="w-full space-y-3">
      <AnimatePresence>
        {todos.map((t) => (
          <Todo
            handleCheck={handleCheck}
            removeElement={removeElement}
            id={t.id}
            key={t.id}
            checked={t.checked}
            time={t.time}
          >
            {t.text}
          </Todo>
        ))}
      </AnimatePresence>
    </div>
  );
};

interface TodoProps {
  removeElement: (id: number) => void;
  handleCheck: (id: number) => void;
  id: number;
  checked: boolean;
  children: ReactNode;
  time: string;
}

const Todo = ({
  removeElement,
  children,
  handleCheck,
  id,
  checked,
  time,
}: TodoProps) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        animate(
          "p",
          {
            color: checked ? "#6ee7b7" : "#fca5a5",
          },
          {
            ease: "easeIn",
            duration: 0.125,
          },
        );

        await animate(
          scope.current,
          {
            scale: 1.025,
          },
          {
            ease: "easeIn",
            duration: 0.125,
          },
        );
        await animate(
          scope.current,
          {
            opacity: 0,
            x: checked ? 24 : -24,
          },
          {
            delay: 0.75,
          },
        );

        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, safeToRemove, checked, scope, animate]);
  return (
    <motion.div
      ref={scope}
      layout
      className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
        className="size-4 accent-indigo-400"
      />

      <p
        className={cn(
          "text-white transition-colors",
          checked && "text-zinc-400",
        )}
      >
        {children}
      </p>

      <div className="ml-auto flex gap-1.5 ">
        <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
          <FiClock />
          <span>{time}</span>
        </div>
        <button
          onClick={() => removeElement(id)}
          className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

interface FormProps {
  setTodos: Dispatch<SetStateAction<Array<TodoListType>>>;
}

const Form = ({ setTodos }: FormProps) => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(15);
  const [text, setText] = useState("");
  const [unit, setUnit] = useState("mins");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!text.length) {
      return;
    }

    setTodos((prev) => [
      {
        id: Math.random(),
        text: text,
        checked: false,
        time: `${time} ${unit}`,
      },
      ...prev,
    ]);

    setTime(15);
    setText("");
    setUnit("mins");
  };

  return (
    <div className="fixed bottom-6 left-1/2 w-full max-w-xl -translate-x-1/2 px-4">
      <AnimatePresence>
        {visible && (
          <motion.form
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 25,
            }}
            onSubmit={handleSubmit}
            className="mb-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
          >
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="what do you need to do?"
              className="h-24 w-full resize-none rounded bg-zinc-900 p-3 text-sm text-zinc-50 placeholder-zinc-500 caret-zinc-50 focus:outline-0"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <input type="number" className="w-24 rounded bg-zinc-700 p-2" />
                <button
                  type="button"
                  onClick={() => setUnit("mins")}
                  className={cn(
                    "border border-zinc-300/20 transition-colors  rounded p-1",
                    unit === "mins"
                      ? "bg-zinc-300 text-zinc-900"
                      : "bg-zinc-800 text-zinc-300",
                  )}
                >
                  mins
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("hrs")}
                  className={cn(
                    "border border-zinc-300/20  rounded p-1 transition-colors",
                    unit === "hrs"
                      ? "bg-zinc-300 text-zinc-900"
                      : "bg-zinc-800 text-zinc-300",
                  )}
                >
                  hrs
                </button>
              </div>

              <button className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-500/80 transition-opacity">
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <button
        className="rounded-full focus:outline-none border hover:bg-zinc-800/80 transition-opacity  border-zinc-300/20 bg-zinc-800 w-full p-2 flex items-center justify-center"
        onClick={() => setVisible((prev) => !prev)}
      >
        <FiPlus
          className={cn(
            "transition-transform",
            visible ? "rotate-45" : "rotate-0",
          )}
        />
      </button>
    </div>
  );
};

export default TodoList;
