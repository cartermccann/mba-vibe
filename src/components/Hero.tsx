import Image from "next/image";

import { CtaButton } from "@/components/Button";
import { TextAnimation } from "@/components/TextAnimation";
import { homeCopy } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const SECTION_ID = "hero";

const SCOPED_CSS = `
@media (max-width: 1023px) {
  #${SECTION_ID} img { object-position: center top; }
}
@media (min-width: 1024px) {
  #${SECTION_ID} > div { aspect-ratio: 16/9; height: auto; }
}
@media (min-width: 768px) {
  #${SECTION_ID} [data-link-button-block] a { min-width: 320px !important; }
}
`;

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />
      <div
        id={SECTION_ID}
        className={cn("color-scheme-2 relative text-(--color-text)", className)}
      >
        <div className="lg:grid [&>[data-media-block]]:absolute [&>[data-media-block]]:inset-0 [&>[data-media-block]]:-z-1 flex flex-col justify-between lg:grid-cols-3 [&>[data-hero-container-block]]:col-span-2 lg:[&>[data-media-block]]:w-full">
          <div data-media-block className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-full">
            <Image
              src="/photos/home-hero.jpg"
              alt="Mind Body Athletes session with athletes on the field"
              width={1920}
              height={1080}
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-[center_top] lg:object-center"
            />
          </div>

          <div
            data-hero-container-block
            className="relative mb-80 flex flex-col gap-16 px-16 py-24 lg:mb-0 lg:items-start lg:justify-end lg:p-32"
          >
            <p className="font-apercu uppercase text-[13px] 2xl:text-[16px]">
              {homeCopy.eyebrow}
            </p>

            <TextAnimation
              as="h1"
              elementIndex={0}
              className="text-title-80 text-balance lg:max-w-[768px]"
            >
              {homeCopy.h1}
            </TextAnimation>

            <TextAnimation
              as="p"
              elementIndex={1}
              className="text-body-35 text-pretty lg:max-w-[536px]"
            >
              {homeCopy.subhead}
            </TextAnimation>

            <div data-link-button-block>
              <CtaButton
                label={homeCopy.heroButton}
                href="/contact"
                className="w-full! py-12! px-24! text-[16px]! lg:text-[20px]! leading-[140%]! mr-auto!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
