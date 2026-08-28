import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Diptych } from "@/components/Diptych";
import { ExpertQuote } from "@/components/ExpertQuote";
import { FinalCta } from "@/components/FinalCta";
import { GoodNewsBanner } from "@/components/GoodNewsBanner";
import { Hero } from "@/components/Hero";
import { MarqueeBar } from "@/components/Marquee";
import { PhotoCards } from "@/components/PhotoCards";
import { ProtocolSteps } from "@/components/ProtocolSteps";
import { QuoteStrip } from "@/components/QuoteStrip";
import { SectionHeadline } from "@/components/SectionHeadline";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsPanel } from "@/components/StatsPanel";
import { ValuesRow } from "@/components/ValuesRow";
import {
  athletesParentsCopy,
  homeCopy,
  MARQUEE_OFFERINGS,
  MARQUEE_SYSTEM,
  programServices,
  programsCopy,
} from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <MarqueeBar
          items={[...MARQUEE_OFFERINGS]}
          durationSeconds={55}
          paddingY={4}
          schemeClass="color-scheme-marquee-light"
        />

        <Hero />
        <StatsPanel />
        <GoodNewsBanner />

        <ValuesRow
          ariaLabel={homeCopy.systemTitle}
          columns={homeCopy.systemNodes.map((title) => ({ title }))}
          schemeClass="color-scheme-1"
        />

        <MarqueeBar
          items={[...MARQUEE_SYSTEM]}
          durationSeconds={35}
          paddingY={20}
          schemeClass="color-scheme-8"
        />

        <SectionHeadline
          eyebrow="How it works"
          title={homeCopy.walkAway.body}
          as="h2"
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-0"
        />

        <ProtocolSteps />

        <SectionHeadline
          eyebrow={homeCopy.teasers[1].eyebrow}
          title={programsCopy.subhead}
          as="h2"
          bordered
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-32"
        />

        <PhotoCards
          cards={programServices.map((offering) => ({
            title: offering.name,
            body: offering.description,
            href: "/programs",
            photo: offering.photo,
            photoAlt: offering.photoAlt,
          }))}
        />

        <ValuesRow
          columns={programsCopy.trio.map((item) => ({
            title: item.title,
            description: item.body,
          }))}
        />

        <Diptych
          eyebrow={homeCopy.teasers[0].eyebrow}
          title={homeCopy.teasers[0].title}
          body={homeCopy.teasers[0].body}
          href={homeCopy.teasers[0].href}
          linkLabel={homeCopy.teasers[0].linkLabel}
          imageSrc="/photos/allie-bio.jpg"
          imageAlt="Allie Chapman, founder of Mind Body Athletes"
        />

        <SectionHeadline
          eyebrow={homeCopy.teasers[2].eyebrow}
          title={athletesParentsCopy.h1}
          subtitle={athletesParentsCopy.subhead}
          schemeClass="color-scheme-3"
          paddingClassName="pt-40 pb-32 lg:pt-80 lg:pb-32"
        />

        <Diptych
          reverse
          eyebrow={athletesParentsCopy.parentTitle}
          title={athletesParentsCopy.workbookTitle}
          body={athletesParentsCopy.workbookBody}
          href="/athletes-parents"
          linkLabel={homeCopy.teasers[2].linkLabel}
          imageSrc="/photos/athletes-workbook.jpg"
          imageAlt="Athletes writing in ACTIVE series workbooks on a turf field"
          schemeClass="color-scheme-3"
        />

        <MarqueeBar
          items={[...MARQUEE_OFFERINGS]}
          durationSeconds={35}
          paddingY={20}
          schemeClass="color-scheme-marquee-light"
        />

        <ExpertQuote />
        <QuoteStrip start={1} count={2} />
        <QuoteStrip start={3} count={2} className="border-t" />
        <FinalCta
          imageSrc="/photos/home-cta.jpg"
          imageAlt="Athletes and coaches gathered after a Mind Body Athletes session"
        />
      </main>

      <SiteFooter />
    </>
  );
}
