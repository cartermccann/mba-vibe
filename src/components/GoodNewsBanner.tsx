import Image from "next/image";

import { CtaButton } from "@/components/Button";
import { homeCopy } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function GoodNewsBanner({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "color-scheme-marquee-light overflow-visible bg-(--color-background) px-16 pt-0 pb-32 text-(--color-text) lg:px-48 lg:pb-0",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-0 px-24 py-0 lg:flex-row lg:gap-40 lg:px-48 lg:pr-100">
        <div className="relative -top-23 z-2 w-156 shrink-0 overflow-hidden lg:top-0 lg:-mt-20 lg:w-204 lg:self-start">
          <Image
            src="/photos/home-system.jpg"
            alt="Athletes working through a Mind Body Athletes session together"
            width={600}
            height={750}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-8 text-center lg:my-45 lg:mr-24 lg:flex-1 lg:text-left">
          <p className="text-[28px] leading-[110%] lg:text-title-70">
            {homeCopy.systemTitle}
          </p>
          <p className="text-[16px] leading-[120%] lg:text-body-35">
            {homeCopy.systemLine}
          </p>
        </div>

        <div className="mt-24 shrink-0 lg:mt-0">
          <CtaButton
            label={homeCopy.heroButton}
            href="/contact"
            variant="onLight"
            className="py-12! px-24! text-[16px]! leading-[140%]! lg:text-[20px]!"
          />
        </div>
      </div>
    </section>
  );
}
