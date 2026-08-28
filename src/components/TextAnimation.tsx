"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { ElementType } from "react";

import { cn } from "@/lib/utils";

const DEFAULTS = {
  maxDelay: 390,
  fadeDuration: 50,
  wordThreshold: 10,
  elementStagger: 200,
  restoreTail: 100,
} as const;

type Piece = { text: string; delay: number };
type Group = { pieces: Piece[]; nowrap: boolean };

export interface TextAnimationProps {
  children: string;
  as?: ElementType;
  className?: string;
  elementIndex?: number;
  triggerOnIntersection?: boolean;
  animateWords?: boolean;
  maxDelay?: number;
  fadeDuration?: number;
  wordThreshold?: number;
  elementStagger?: number;
  replayKey?: number;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function buildGroups(
  text: string,
  byWord: boolean,
  baseDelay: number,
  maxDelay: number,
): Group[] {
  const words = text.split(" ").filter((w) => w.trim());
  return words.map((word) =>
    byWord
      ? {
          nowrap: true,
          pieces: [{ text: word, delay: baseDelay + Math.random() * maxDelay }],
        }
      : {
          nowrap: true,
          pieces: [...word].map((ch) => ({
            text: ch,
            delay: baseDelay + Math.random() * maxDelay,
          })),
        },
  );
}

export function TextAnimation({
  children,
  as: Tag = "span",
  className,
  elementIndex = 0,
  triggerOnIntersection = true,
  animateWords = true,
  maxDelay = DEFAULTS.maxDelay,
  fadeDuration = DEFAULTS.fadeDuration,
  wordThreshold = DEFAULTS.wordThreshold,
  elementStagger = DEFAULTS.elementStagger,
  replayKey = 0,
}: TextAnimationProps) {
  const hostRef = useRef<HTMLElement>(null);
  const [groups, setGroups] = useState<Group[] | null>(null);
  const runningRef = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

  const text = children;
  const isHeading = typeof Tag === "string" && /^h[1-6]$/i.test(Tag as string);

  useLayoutEffect(() => {
    if (reducedMotion || !text.trim()) return;

    const start = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      const words = text.split(" ").filter((w) => w.trim());
      const byWord = animateWords && !isHeading && words.length > wordThreshold;
      setGroups(
        buildGroups(text, byWord, elementIndex * elementStagger, maxDelay),
      );
    };

    if (!triggerOnIntersection) {
      start();
      return;
    }

    const node = hostRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, reducedMotion, triggerOnIntersection]);

  useEffect(() => {
    if (!groups) return;
    const total =
      elementIndex * elementStagger +
      maxDelay +
      fadeDuration +
      DEFAULTS.restoreTail;
    const id = window.setTimeout(() => {
      setGroups(null);
      runningRef.current = false;
    }, total);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  useEffect(() => {
    if (replayKey === 0 || reducedMotion || runningRef.current) return;
    runningRef.current = true;
    const words = text.split(" ").filter((w) => w.trim());
    const byWord = animateWords && !isHeading && words.length > wordThreshold;
    setGroups(buildGroups(text, byWord, 0, maxDelay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayKey]);

  const Component = Tag as ElementType;

  if (!groups) {
    return (
      <Component ref={hostRef} className={className}>
        {text}
      </Component>
    );
  }

  return (
    <Component ref={hostRef} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {groups.map((group, gi) => (
          <span key={gi}>
            {gi > 0 ? " " : null}
            <span className={cn("inline", group.nowrap && "whitespace-nowrap")}>
              {group.pieces.map((piece, pi) => (
                <span
                  key={pi}
                  style={{
                    opacity: 0,
                    animation: `fadeIn ${fadeDuration}ms ease-out forwards`,
                    animationDelay: `${piece.delay}ms`,
                  }}
                >
                  {piece.text}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}
