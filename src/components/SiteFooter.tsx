"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";

import { CONTACT_EMAIL, clinicalBoundary } from "@/lib/site-content";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Athletes & Parents", href: "/athletes-parents" },
  { label: "Contact", href: "/contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

const COLUMN_CLASS =
  "flex h-full flex-col gap-24 border-b px-16 py-24 last:border-r-0 last:border-b-0 lg:min-h-300 lg:justify-between lg:border-r lg:border-b-0 lg:border-dashed lg:p-32";

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="color-scheme-4 border-t border-(--color-line-light) bg-ink text-white-100">
      <div className="border-b border-(--color-line-light) px-16 py-24 lg:px-32">
        <Link href="/" aria-label="Mind Body Athletes home" className="block w-full max-w-420">
          <Image
            src="/mind-body-athletes-logo-light.png"
            alt="Mind Body Athletes"
            width={720}
            height={120}
            className="h-auto w-full object-contain object-left"
          />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className={COLUMN_CLASS}>
          <nav className="flex flex-col gap-16" aria-label="Footer">
            <h3 className="font-apercu text-caption-30 text-gold">
              {clinicalBoundary}
            </h3>
            <ul className="flex flex-col gap-16 text-body-30">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link className="hover:opacity-60" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={COLUMN_CLASS}>
          <div className="@container">
            <div className="flex flex-col gap-16 lg:gap-32">
              <p className="font-apercu text-caption-30 uppercase">
                Questions first?
              </p>
              {submitted ? (
                <p className="text-body-30" role="status" aria-live="polite">
                  We will follow up soon.
                </p>
              ) : (
                <form className="relative" onSubmit={handleSubmit}>
                  <label htmlFor="email-signup" className="sr-only">
                    Your Email Address
                  </label>
                  <input
                    id="email-signup"
                    autoComplete="email"
                    name="email"
                    className="h-40 w-full bg-white-100 px-8 text-[16px] text-black-100 focus:ring-2 focus:ring-(--color-text) focus:outline-none"
                    type="email"
                    placeholder="Your Email Address"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 right-8 -translate-y-1/2 font-apercu text-caption-20 uppercase"
                    aria-label="Submit email"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>

          <p className="text-body-30">
            For all inquiries:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:opacity-60">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16 border-t p-24 lg:flex-row lg:justify-between">
        <p className="text-center text-caption-20 text-(--color-text)/60">
          © {new Date().getFullYear()} Mind Body Athletes. All rights reserved.
        </p>
        <nav className="flex gap-16 font-apercu text-caption-20 uppercase" aria-label="Legal">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} className="hover:opacity-60" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
