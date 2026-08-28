"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ANNOUNCEMENT_MESSAGES } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const AUTO_PLAY_DELAY = 4000;

const MESSAGE_CLASS =
  "font-apercu text-caption-20 uppercase max-w-[calc(100vw-(var(--spacing)*84))] truncate z-30";

export interface AnnouncementBarProps {
  messages?: string[];
}

export function AnnouncementBar({
  messages = [...ANNOUNCEMENT_MESSAGES],
}: AnnouncementBarProps) {
  const slides = messages.length > 0 ? messages : [...ANNOUNCEMENT_MESSAGES];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      data-announcement-bar
      className="color-scheme-1 relative z-30 block border-b bg-(--color-accent) text-(--color-text) [--announcement-bar-height:calc(var(--spacing)*24)] lg:[--announcement-bar-height:calc(var(--spacing)*32)]"
    >
      <div className="lg:hidden">
        <div className="overflow-hidden focus-visible:outline-none">
          <div
            className="flex h-(--announcement-bar-height) flex-col transition-transform duration-500 ease-out"
            style={{ transform: `translate3d(0, -${activeIndex * 100}%, 0)` }}
          >
            {slides.map((message, index) => (
              <div
                key={`${message}-${index}`}
                className="flex flex-[0_0_100%] items-center justify-center"
                aria-hidden={index !== activeIndex}
              >
                <Link className={MESSAGE_CLASS} href="/contact">
                  {message}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-8 flex h-16 -translate-y-1/2 items-center justify-center gap-4"
          >
            {slides.map((message, index) => (
              <div
                key={`dot-${message}-${index}`}
                className={cn(
                  "size-6 rounded-full transition-all duration-200",
                  index === activeIndex
                    ? "w-16! bg-(--color-button)"
                    : "bg-(--color-button)/16",
                )}
              />
            ))}
          </div>
        )}
      </div>

      <div className="hidden h-(--announcement-bar-height) grid-cols-3 items-center gap-16 px-16 lg:grid">
        <div className="max-w-full justify-self-start truncate">
          <p className={MESSAGE_CLASS} />
        </div>
        <div className="max-w-full justify-self-center truncate text-center">
          <Link
            className={cn(MESSAGE_CLASS, "hover:underline")}
            href="/contact"
          >
            {slides[0]}
          </Link>
        </div>
        <div className="max-w-full justify-self-end truncate text-right">
          <p className={MESSAGE_CLASS} />
        </div>
      </div>
    </div>
  );
}
