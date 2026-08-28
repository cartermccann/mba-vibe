import Image from "next/image";
import type { Metadata } from "next";

import { Diptych } from "@/components/Diptych";
import { FinalCta } from "@/components/FinalCta";
import { MarqueeBar } from "@/components/Marquee";
import { PageShell } from "@/components/PageShell";
import { PhotoCards } from "@/components/PhotoCards";
import { QuoteStrip } from "@/components/QuoteStrip";
import { SectionHeadline } from "@/components/SectionHeadline";
import { TextAnimation } from "@/components/TextAnimation";
import { ValuesRow } from "@/components/ValuesRow";
import { athletesParentsCopy, MARQUEE_SYSTEM } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Athletes & Parents | Mind Body Athletes",
  description: athletesParentsCopy.subhead,
};

export default function AthletesParentsPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <section className="color-scheme-2 relative overflow-hidden text-white-100">
          <div className="relative flex min-h-560 flex-col justify-end px-16 py-40 lg:min-h-720 lg:px-64 lg:py-80">
            <Image
              src="/photos/athletes-hero.jpg"
              alt="Athletes practicing yoga on an outdoor court during a Mind Body Athletes session"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/50" />
            <div className="relative z-10 flex max-w-860 flex-col gap-16">
              <p className="font-apercu text-caption-25 uppercase text-gold">
                {athletesParentsCopy.parentTitle}
              </p>
              <TextAnimation as="h1" className="text-title-80 text-balance">
                {athletesParentsCopy.h1}
              </TextAnimation>
              <TextAnimation
                as="p"
                elementIndex={1}
                className="text-body-35 text-pretty"
              >
                {athletesParentsCopy.subhead}
              </TextAnimation>
            </div>
          </div>
        </section>

        <ValuesRow
          columns={athletesParentsCopy.tagline.map((item) => ({
            title: item.title,
          }))}
        />

        <MarqueeBar
          items={[...MARQUEE_SYSTEM]}
          durationSeconds={40}
          paddingY={16}
          schemeClass="color-scheme-8"
        />

        <Diptych
          eyebrow={athletesParentsCopy.h1}
          title={athletesParentsCopy.workbookTitle}
          body={athletesParentsCopy.workbookBody}
          imageSrc="/photos/athletes-workbook.jpg"
          imageAlt="Athletes writing in ACTIVE series workbooks on a turf field"
        />

        <SectionHeadline
          eyebrow={athletesParentsCopy.parentTitle}
          title={athletesParentsCopy.closingTitle}
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-32"
        />

        <PhotoCards
          columns={2}
          cards={[
            {
              title: "Free Parent Guide",
              body: `${athletesParentsCopy.parentGuideTitle} ${athletesParentsCopy.parentGuideBody}`,
              photo: "/photos/team-savasana.jpg",
              photoAlt: "Athletes resting in savasana during a Mind Body Athletes recovery session",
            },
            {
              title: athletesParentsCopy.podcastTitle,
              status: athletesParentsCopy.podcastStatus,
              photo: "/photos/team-group.jpg",
              photoAlt: "Allie Chapman with a team after a Mind Body Athletes session",
            },
            {
              title: athletesParentsCopy.recommendedTitle,
              body: athletesParentsCopy.recommendedLabel,
              href: athletesParentsCopy.recommendedHref,
              external: true,
              photo: "/photos/offering-coaches.jpg",
              photoAlt: "Athletes stretching together during a coach-supported training session",
            },
            {
              title: athletesParentsCopy.tipOffTitle,
              body: athletesParentsCopy.tipOffLabel,
              href: athletesParentsCopy.tipOffHref,
              external: true,
              photo: "/photos/athletes-cta.jpg",
              photoAlt: "Allie Chapman with a youth soccer team after a Mind Body Athletes session",
            },
          ]}
        />

        <QuoteStrip start={3} count={2} />

        <FinalCta
          title={athletesParentsCopy.closingTitle}
          buttonLabel={athletesParentsCopy.closingButton}
          imageSrc="/photos/athletes-cta.jpg"
          imageAlt="Allie Chapman with a youth soccer team after a Mind Body Athletes session"
        />
      </main>
    </PageShell>
  );
}
