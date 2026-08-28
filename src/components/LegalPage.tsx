import Link from "next/link";
import type { ReactNode } from "react";

import { PageShell } from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site-content";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1} className="color-scheme-1 bg-canvas text-ink">
        <article className="mx-auto max-w-860 px-16 py-40 lg:px-64 lg:py-80">
          <p className="font-apercu text-caption-25 uppercase text-gold-ink">Mind Body Athletes</p>
          <h1 className="mt-12 text-title-80">{title}</h1>
          <p className="mt-16 text-body-30 text-quiet">Last updated: {updated}</p>
          <div className="legal-copy mt-40 flex flex-col gap-32 [&_h2]:font-apercu [&_h2]:text-caption-30 [&_h2]:uppercase [&_h3]:text-title-70 [&_h3]:text-[20px] [&_li]:text-body-30 [&_p]:text-body-35 [&_p]:text-pretty [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-8 [&_ul]:pl-20">
            {children}
          </div>
          <p className="mt-40 text-body-30">
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="mt-40 border-t border-(--color-line) pt-24">
            <Link href="/" className="font-apercu text-caption-25 uppercase underline">
              Back to Home
            </Link>
          </div>
        </article>
      </main>
    </PageShell>
  )
}
