import Image from "next/image";
import type { CSSProperties } from "react";

import { CtaButton } from "@/components/Button";
import { CONTACT_EMAIL, homeCopy } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const INNER_STYLE = { "--maw-w-inner": "0px" } as CSSProperties;

export function FinalCta({
  title = homeCopy.closingTitle,
  body = homeCopy.closingBody,
  buttonLabel = homeCopy.closingButton,
  imageSrc = "/photos/team-group.jpg",
  imageAlt = "Allie Chapman with athletes after a Mind Body Athletes session",
  className,
}: {
  title?: string;
  body?: string;
  buttonLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "color-scheme-2 relative overflow-hidden text-(--color-text)",
        className,
      )}
    >
      <div className="relative flex aspect-[360/520] w-full flex-col items-center justify-center md:aspect-[4/3] lg:aspect-[16/9] desktop:aspect-[1440/568]">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-black-100/35" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-12 lg:px-32">
          <div className="mx-auto flex aspect-[329/267] w-full max-w-[1118px] flex-col items-center justify-center bg-white-100/10 px-13 py-29 text-center backdrop-blur-[24px] md:aspect-auto lg:px-32 lg:py-24 desktop:aspect-[1118/406]">
            <div
              className="flex flex-col items-center justify-center"
              style={INNER_STYLE}
            >
              <h2 className="mb-16 text-[32px] leading-[38px] text-balance text-white-100 lg:text-[48px] lg:leading-[110%]">
                {title}
              </h2>

              <p className="font-px text-[14px] leading-[18px] text-white-100 lg:text-[16px] lg:leading-[24px]">
                {body}
              </p>

              <div className="mt-24 w-full flex-col items-center lg:mx-auto lg:flex lg:max-w-[344px]">
                <CtaButton
                  label={buttonLabel}
                  href="/contact"
                  variant="onDark"
                  className="w-full! py-12! text-[16px]! leading-[140%]! lg:text-[20px]!"
                />

                <p className="mt-16 text-caption-20 tracking-widest text-white-100 uppercase">
                  {homeCopy.closingQuestions}{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
