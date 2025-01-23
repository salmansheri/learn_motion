"use client";
import { useEffect, useRef } from "react";

export default function SpotlightButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target;

      if (target instanceof HTMLElement) {
        const rect = target.getBoundingClientRect();
        const { width } = rect;

        const offset = event.offsetX;

        const left = `${(offset / width) * 100}%`;

        spanRef.current?.animate(
          {
            left,
          },
          {
            duration: 250,
            fill: "forwards",
          },
        );
      }
    };
    const handleMouseLeave = (event: MouseEvent) => {
      const target = event.target;

      if (target instanceof HTMLElement) {
        spanRef.current?.animate(
          {
            left: "50%",
          },
          {
            duration: 100,
            fill: "forwards",
          },
        );
      }
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-800 px-4">
      <button
        ref={btnRef}
        className="w-full max-w-xs relative overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
      >
        <span className="pointer-events-none relative z-10 mix-blend-difference">
          Hover me
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-900/50"
        ></span>
      </button>
    </div>
  );
}
