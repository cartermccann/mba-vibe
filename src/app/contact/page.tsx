import Image from "next/image";
import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { CONTACT_EMAIL, contactCopy, homeCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Mind Body Athletes",
  description: contactCopy.lede,
};

export default function ContactPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1} className="color-scheme-1 bg-(--color-background) text-(--color-text)">
        <header className="border-b border-(--color-line) px-16 py-40 lg:px-64 lg:py-80">
          <h1 className="text-title-80">{contactCopy.h1}</h1>
          <p className="mt-16 max-w-640 text-body-35">{contactCopy.lede}</p>
        </header>

        <div className="grid lg:grid-cols-2">
          <aside className="flex flex-col justify-between gap-32 border-b border-(--color-line) bg-paper lg:border-b-0 lg:border-r lg:border-dashed lg:border-(--color-line)">
            <div className="relative aspect-[4/3]">
              <Image
                src="/photos/team-group.jpg"
                alt="Allie Chapman with athletes after a Mind Body Athletes session"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-24 px-16 pb-32 lg:px-64 lg:pb-64">
              <p className="text-body-35">{homeCopy.closingBody}</p>
              <p className="text-body-30">
                {contactCopy.questions}
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </aside>

          <section
            aria-labelledby="inquiry-heading"
            className="bg-canvas px-16 py-32 lg:px-64 lg:py-64"
          >
            <h2 id="inquiry-heading" className="mb-32 text-title-70">
              {contactCopy.formHeading}
            </h2>
            <ContactForm />
          </section>
        </div>
      </main>
    </PageShell>
  );
}
