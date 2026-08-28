import Image from "next/image";
import type { Metadata } from "next";

import { Diptych } from "@/components/Diptych";
import { FeaturedRow } from "@/components/FeaturedRow";
import { FinalCta } from "@/components/FinalCta";
import { PageShell } from "@/components/PageShell";
import { SectionHeadline } from "@/components/SectionHeadline";
import { TextAnimation } from "@/components/TextAnimation";
import { aboutCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About | Mind Body Athletes",
  description: aboutCopy.intro,
};

export default function AboutPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <section className="color-scheme-2 relative overflow-hidden text-(--color-text)">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-720">
              <Image
                src="/photos/allie-bio.jpg"
                alt="Allie Chapman, founder of Mind Body Athletes"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end gap-16 px-16 py-40 lg:p-64">
              <p className="font-apercu text-caption-25 uppercase text-gold">
                {aboutCopy.credentialsRole}
              </p>
              <TextAnimation as="h1" className="text-title-80 text-balance">
                {aboutCopy.h1}
              </TextAnimation>
              <TextAnimation
                as="p"
                elementIndex={1}
                className="max-w-560 text-body-35 text-pretty text-white-100/85"
              >
                {aboutCopy.intro}
              </TextAnimation>
            </div>
          </div>
        </section>

        <SectionHeadline
          eyebrow={aboutCopy.storyEyebrow}
          title={aboutCopy.storyTitle}
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-32"
        />

        <section className="color-scheme-1 bg-(--color-background) text-(--color-text)">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/photos/about-story-1.jpg"
                alt="Mind Body Athletes session in progress"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-24 border-t border-(--color-line) px-16 py-32 lg:border-t-0 lg:border-l lg:border-dashed lg:border-(--color-line) lg:p-64">
              {aboutCopy.story.map((paragraph) => (
                <p key={paragraph} className="text-body-35 text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Diptych
          reverse
          eyebrow={aboutCopy.storyEyebrow}
          title={aboutCopy.storyTitle}
          body={aboutCopy.story[2]}
          imageSrc="/photos/about-story-2.jpg"
          imageAlt="Mind Body Athletes team session"
          schemeClass="color-scheme-3"
        />

        <section className="color-scheme-1 border-t bg-(--color-background) px-16 py-40 text-(--color-text) lg:px-64 lg:py-80">
          <p className="font-apercu text-caption-25 uppercase">
            {aboutCopy.credentialsRole}
          </p>
          <h2 className="mt-12 mb-32 text-title-75">{aboutCopy.credentialsName}</h2>
          <ul className="grid gap-16 border-t divide-y md:grid-cols-2 md:divide-y-0">
            {aboutCopy.credentials.map((item) => (
              <li
                key={item}
                className="border-t py-16 font-apercu text-caption-30 uppercase md:border-t md:pr-24"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <FeaturedRow
          eyebrow="As Featured In"
          items={aboutCopy.featured}
        />

        <FinalCta
          title={`${aboutCopy.closingTitle} ${aboutCopy.closingGold}`}
          buttonLabel={aboutCopy.closingButton}
          imageSrc="/photos/about-cta.jpg"
          imageAlt="Allie Chapman standing with athletes after a Mind Body Athletes session"
        />
      </main>
    </PageShell>
  );
}
