import Image from "next/image";
import type { Metadata } from "next";

import { CtaButton } from "@/components/Button";
import { Diptych } from "@/components/Diptych";
import { FinalCta } from "@/components/FinalCta";
import { MarqueeBar } from "@/components/Marquee";
import { PageShell } from "@/components/PageShell";
import { ProtocolSteps } from "@/components/ProtocolSteps";
import { QuoteStrip } from "@/components/QuoteStrip";
import { SectionHeadline } from "@/components/SectionHeadline";
import { TextAnimation } from "@/components/TextAnimation";
import { ValuesRow } from "@/components/ValuesRow";
import {
  homeCopy,
  MARQUEE_OFFERINGS,
  programServices,
  programsCopy,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Programs | Mind Body Athletes",
  description: programsCopy.subhead,
};

export default function ProgramsPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <section className="color-scheme-2 relative overflow-hidden text-white-100">
          <div className="relative flex min-h-520 flex-col justify-end px-16 py-40 lg:min-h-680 lg:px-64 lg:py-80">
            <Image
              src="/photos/programs-hero.jpg"
              alt="Athletes holding Warrior II on a turf field during a Mind Body Athletes session"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/45" />
            <div className="relative z-10 flex max-w-860 flex-col gap-16">
              <p className="font-apercu text-caption-25 uppercase text-gold">
                {homeCopy.teasers[1].eyebrow}
              </p>
              <TextAnimation as="h1" className="text-title-80 text-balance">
                {programsCopy.h1}
              </TextAnimation>
              <TextAnimation
                as="p"
                elementIndex={1}
                className="text-body-35 text-pretty"
              >
                {programsCopy.subhead}
              </TextAnimation>
              <CtaButton
                label={programsCopy.heroButton}
                href="/contact"
                className="py-12! px-24! text-[16px]! lg:text-[20px]!"
              />
            </div>
          </div>
        </section>

        <MarqueeBar
          items={[...MARQUEE_OFFERINGS]}
          durationSeconds={45}
          paddingY={16}
          schemeClass="color-scheme-marquee-light"
        />

        <SectionHeadline
          eyebrow={homeCopy.teasers[1].eyebrow}
          title={homeCopy.teasers[1].body}
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-32"
        />

        {programServices.map((offering, index) => (
          <Diptych
            key={offering.id}
            eyebrow={offering.name}
            title={offering.name}
            body={offering.description}
            href="/contact"
            linkLabel={programsCopy.heroButton}
            imageSrc={offering.photo}
            imageAlt={offering.photoAlt}
            reverse={index % 2 === 1}
            schemeClass={index % 2 === 0 ? "color-scheme-1" : "color-scheme-3"}
          />
        ))}

        <SectionHeadline
          eyebrow="PREVENT · NOTICE · RESPOND"
          title={programsCopy.subhead}
          schemeClass="color-scheme-3"
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-32"
        />

        <ValuesRow
          columns={programsCopy.trio.map((item) => ({
            title: item.title,
            description: item.body,
          }))}
        />

        <ProtocolSteps />
        <QuoteStrip start={2} count={2} />
        <QuoteStrip start={5} count={2} className="border-t" />

        <FinalCta
          title={programsCopy.ctaTitle}
          body={programsCopy.ctaBody}
          buttonLabel={programsCopy.ctaButton}
          imageSrc="/photos/programs-cta.jpg"
          imageAlt="Allie Chapman standing with athletes after a Mind Body Athletes session"
        />
      </main>
    </PageShell>
  );
}
