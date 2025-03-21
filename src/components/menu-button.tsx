"use client";
import { ComponentProps } from "react";

type Props = {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
} & ComponentProps<"button">;

export function MenuButton({ children, type = "button", onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "text-white text-clampTitles font-mono fixed top-8 right-8 z-50 mix-blend-difference"
      }
    >
      {children}
    </button>
  );
}
