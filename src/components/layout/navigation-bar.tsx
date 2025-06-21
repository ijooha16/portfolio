"use client";

import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Links from "./links";

export const Navigation = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const BtnRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      BtnRefs.current[0]?.focus();
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;

      const allItems = BtnRefs.current;
      const activeIndex = allItems.findIndex(
        (el) => el === document.activeElement
      );

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = allItems[activeIndex + 1] || allItems[0];
        next?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = allItems[activeIndex - 1] || allItems[allItems.length - 1];
        prev?.focus();
      }
    },
    [open, setOpen]
  );

  return (
    <div className="z-1000">
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={`bg-overlay fixed top-0 left-0 transition-opacity 0.3s ease-in-out opacity-${
            open ? 1 : 0
          } w-screen h-screen`}
        />
      )}
      <div
        onKeyDown={(e: KeyboardEvent) => handleKeyDown(e)}
        tabIndex={-1}
        className={`flex flex-col items-end gap-4 md:gap-8 text-md bg-white shadow-default fixed min-w-screen p-[110px_32px_42px_0] md:p-[140px_80px_48px_0] rounded-xl ${
          open ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-500`}
      >
        <Links />
      </div>
    </div>
  );
};
