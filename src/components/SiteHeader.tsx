"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

import { TextAnimation } from "@/components/TextAnimation";
import { primaryNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";

const BUTTON_BASE =
  "min-h-20 text-caption-30 px-0 bg-transparent text-current flex w-fit items-center justify-center relative overflow-hidden uppercase disabled:opacity-60 disabled:pointer-events-none";

const LABEL_CLASS = "pointer-events-none flex gap-2 text-center";

function useLabelReplay() {
  const [replayKey, setReplayKey] = useState(0);
  const triggered = useRef(false);

  const trigger = () => {
    if (triggered.current) return;
    triggered.current = true;
    setReplayKey((key) => key + 1);
  };
  const reset = () => {
    triggered.current = false;
  };

  return {
    replayKey,
    handlers: {
      onMouseEnter: trigger,
      onMouseLeave: reset,
      onFocus: trigger,
      onBlur: reset,
    },
  };
}

function NavLink({ label, href }: { label: string; href: string }) {
  const { replayKey, handlers } = useLabelReplay();
  return (
    <div className="p-8">
      <Link
        href={href}
        className={cn(BUTTON_BASE, FOCUS_RING, "uppercase")}
        {...handlers}
      >
        <TextAnimation
          className={LABEL_CLASS}
          triggerOnIntersection={false}
          replayKey={replayKey}
        >
          {label}
        </TextAnimation>
      </Link>
    </div>
  );
}

function CtaLink({ className }: { className?: string }) {
  const { replayKey, handlers } = useLabelReplay();
  return (
    <Link
      href="/contact"
      className={cn(
        BUTTON_BASE,
        FOCUS_RING,
        "bg-gold px-12 text-ink uppercase font-apercu text-caption-30",
        className,
      )}
      {...handlers}
    >
      <TextAnimation
        className={LABEL_CLASS}
        triggerOnIntersection={false}
        replayKey={replayKey}
      >
        Get Started
      </TextAnimation>
    </Link>
  );
}

type MenuState = "closed" | "open" | "closing";

function MobileMenuPanel({
  state,
  panelRef,
  onExited,
  onNavigate,
  onClose,
}: {
  state: MenuState;
  panelRef: RefObject<HTMLDivElement | null>;
  onExited: () => void;
  onNavigate: () => void;
  onClose: () => void;
}) {
  if (state === "closed") return null;

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={state !== "open"}
      style={{ top: "var(--total-header-height)" }}
      className="fixed right-0 bottom-0 left-0 z-20 lg:hidden"
      onAnimationEnd={() => {
        if (state === "closing") onExited();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 animate-blur-in-fade-in bg-black-100/40 backdrop-blur-xl transition-[backdrop-filter,background-color] duration-300 [*[aria-hidden=true]>&]:bg-transparent [*[aria-hidden=true]>&]:backdrop-blur-none"
        onClick={onClose}
      />
      <nav className="color-scheme-4 bg-(--color-background) relative flex animate-in flex-col divide-y divide-(--color-line-light) border-b border-(--color-line-light) text-(--color-text) duration-300 slide-in-from-top slide-out-to-top [*[aria-hidden=true]>&]:animate-out">
        {primaryNav.map(({ label, href }) => (
          <Link
            key={label}
            className={cn(
              "flex h-56 items-center px-8 text-title-80",
              FOCUS_RING,
            )}
            href={href}
            onClick={onNavigate}
          >
            {label}
          </Link>
        ))}
        <Link
          className={cn("flex h-56 items-center px-8 text-title-80", FOCUS_RING)}
          href="/contact"
          onClick={onNavigate}
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}

export interface SiteHeaderProps {
  className?: string;
  skipLinkTarget?: string;
}

export function SiteHeader({
  className,
  skipLinkTarget = "#main-content",
}: SiteHeaderProps): ReactNode {
  const [menuState, setMenuState] = useState<MenuState>("closed");
  const menuOpen = menuState === "open";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setMenuState((value) => (value === "open" ? "closing" : value));
  };

  useEffect(() => {
    if (!menuOpen) return;

    const panel = menuPanelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <a
        href={skipLinkTarget}
        className={cn(
          "sr-only focus:not-sr-only focus:fixed focus:top-8 focus:left-8 focus:z-50 focus:bg-black-100 focus:px-12 focus:py-8 focus:text-white-100",
          FOCUS_RING,
        )}
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "color-scheme-4 bg-ink sticky top-0 inset-x-0 z-30 grid h-(--header-height) grid-cols-[1fr_9rem_1fr] border-b border-(--color-line-light) font-apercu text-caption-30 text-white-100 lg:grid-cols-[13rem_1fr_auto] lg:px-24",
          className,
        )}
      >
        <div className="order-1 lg:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            onClick={() =>
              setMenuState((value) => (value === "open" ? "closing" : "open"))
            }
            className={cn("flex h-full items-center px-16 uppercase", FOCUS_RING)}
          >
            Menu
          </button>
          <MobileMenuPanel
            state={menuState}
            panelRef={menuPanelRef}
            onExited={() => {
              setMenuState("closed");
              menuButtonRef.current?.focus();
            }}
            onNavigate={() => setMenuState("closing")}
            onClose={closeMenu}
          />
        </div>

        <Link
          className={cn(
            "order-2 flex h-full items-center px-8 lg:order-first lg:px-0",
            FOCUS_RING,
          )}
          href="/"
          aria-label="Mind Body Athletes home"
        >
          <Image
            src="/mind-body-athletes-logo-light.png"
            alt="Mind Body Athletes"
            width={220}
            height={40}
            className="h-28 w-auto object-contain lg:h-32"
            priority
          />
        </Link>

        <div className="order-3 flex h-full items-center justify-end lg:hidden">
          <CtaLink className="px-16" />
        </div>

        <nav
          className="hidden h-full lg:flex lg:items-center lg:justify-center"
          aria-label="Primary"
        >
          <div className="flex h-full items-center gap-16">
            {primaryNav.map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} />
            ))}
          </div>
        </nav>

        <nav
          className="hidden h-full items-center justify-end gap-16 lg:flex"
          aria-label="Secondary"
        >
          <CtaLink />
        </nav>
      </header>
    </>
  );
}
