import Image from "next/image";

import { TextAnimation } from "@/components/TextAnimation";
import { homeCopy } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const SECTION_VARS = {
  "--iail-columns": "664fr 774fr",
  "--iail-index-width": "200px",
} as React.CSSProperties;

export function StatsPanel({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "color-scheme-gold-alt border-b-[2.5px] border-(--color-button) text-(--color-text)",
        className,
      )}
      style={SECTION_VARS}
    >
      <div className="border-b border-(--color-button) pt-40 pb-40 lg:pt-80 lg:pb-64">
        <div className="relative flex flex-col gap-16 px-31 text-center">
          <div className="pointer-events-none absolute inset-0 z-20">
            <span className="absolute top-1/2 left-0 h-[0.5rem] w-[1rem] -translate-y-1/2 bg-current" />
            <span className="absolute top-1/2 right-0 h-[0.5rem] w-[1rem] -translate-y-1/2 bg-current" />
          </div>
          <div className="headline mx-auto max-w-1024 text-center text-title-75 leading-[110%] text-pretty">
            <TextAnimation as="p" elementIndex={0}>
              {homeCopy.statsHeadline}
            </TextAnimation>
          </div>
          <div className="mx-auto max-w-860 text-center text-body-35 leading-[120%] text-pretty">
            <TextAnimation as="p" elementIndex={1}>
              {homeCopy.statsSubtitle}
            </TextAnimation>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-(--color-button) lg:grid-cols-[var(--iail-columns)] lg:divide-x-[2.5px]">
        <div className="relative aspect-[360/328] lg:aspect-auto">
          <div className="absolute inset-0">
            <Image
              src="/photos/team-session-mats.jpg"
              width={1920}
              height={1280}
              alt="Allie Chapman leading athletes on yoga mats during an ACTIVE series session"
              sizes="100vw"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="mx-16 mb-24 min-h-80 divide-y-[2.5px] divide-(--color-button) border-t-[2.5px] border-(--color-button) bg-(--color-background) lg:mx-0 lg:mb-0 lg:border-t-0">
          <div className="px-60 py-24 text-center font-apercu text-[14px] uppercase lg:text-[16px]">
            {homeCopy.statsBadge}
          </div>
          {homeCopy.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-wrap items-start gap-16 px-24 py-32 md:items-center md:gap-24 lg:flex-nowrap lg:px-32"
            >
              <div className="flex w-(--iail-index-width) shrink-0 items-center font-display text-[64px] leading-[110%] lg:text-[72px]">
                {stat.value}
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-body-35" style={{ fontSize: "16px" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
          <p className="px-24 py-16 text-caption-20 text-(--color-text)/80 lg:px-32">
            {homeCopy.statsFootnote}
          </p>
        </div>
      </div>
    </section>
  );
}
