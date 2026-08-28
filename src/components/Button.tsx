"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { TextAnimation } from "@/components/TextAnimation";

const BASE =
  "min-h-34 lg:min-h-40 text-cta px-4 flex w-fit items-center justify-center " +
  "relative overflow-hidden uppercase disabled:opacity-60 disabled:pointer-events-none " +
  "focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";

export interface CtaButtonProps {
  label: string;
  href: string;
  className?: string;
  variant?: "onDark" | "onLight";
}

export function CtaButton({
  label,
  href,
  className,
  variant = "onDark",
}: CtaButtonProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [latched, setLatched] = useState(false);

  const replay = () => {
    if (latched) return;
    setLatched(true);
    setReplayKey((k) => k + 1);
  };
  const release = () => setLatched(false);

  return (
    <Link
      href={href}
      data-button
      onMouseEnter={replay}
      onMouseLeave={release}
      onFocus={replay}
      onBlur={release}
      className={cn(
        BASE,
        variant === "onDark"
          ? "bg-gold text-ink"
          : "bg-ink text-paper",
        className,
      )}
    >
      <TextAnimation
        className="pointer-events-none flex gap-2 text-center"
        triggerOnIntersection={false}
        replayKey={replayKey}
      >
        {label}
      </TextAnimation>
    </Link>
  );
}
