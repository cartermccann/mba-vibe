import Image from "next/image";
import type { CSSProperties } from "react";

import { homeCopy } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import type { ProtocolStep } from "@/types/content";

const SECTION_VARS = {
  "--iail-columns": "664fr 774fr",
  "--iail-index-width": "84px",
} as CSSProperties;

const STEPS: ProtocolStep[] = [
  { number: "01", title: homeCopy.whatWeKnow.title, description: homeCopy.whatWeKnow.body },
  { number: "02", title: homeCopy.howItWorks.title, description: homeCopy.howItWorks.body },
  {
    number: "03",
    title: homeCopy.whatChanges.title,
    description: homeCopy.whatChanges.items.join(" · "),
  },
  { number: "04", title: homeCopy.walkAway.title, description: homeCopy.walkAway.body },
];

export function ProtocolSteps({ className }: { className?: string }) {
  return (
    <section
      style={SECTION_VARS}
      className={cn(
        "color-scheme-4 bg-(--color-background) text-(--color-text)",
        className,
      )}
    >
      <div className="grid grid-cols-1 divide-(--color-button) lg:grid-cols-[var(--iail-columns)] lg:divide-x-[2.5px]">
        <div className="relative aspect-[360/328] lg:aspect-auto">
          <Image
            src="/photos/team-savasana.jpg"
            alt="Athletes resting in savasana during a Mind Body Athletes recovery session"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="min-h-80 divide-y-[2.5px] divide-(--color-button) border-t-[2.5px] border-(--color-button) bg-(--color-background) lg:border-t-0">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-16 px-24 py-32 md:items-center md:gap-24 lg:flex-nowrap lg:px-32"
            >
              <div className="flex w-(--iail-index-width) shrink-0 items-center font-display text-[64px]! leading-[110%] lg:text-[72px]!">
                {step.number}
              </div>
              <div className="flex flex-col gap-8">
                <p className="w-[86%] text-title-70 text-[24px]! md:w-full">
                  {step.title}
                </p>
                <div className="text-body-35 text-[16px]!">
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
