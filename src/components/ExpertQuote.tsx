import Image from "next/image";

import { testimonials } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const CONTAINER_CLASS =
  "px-16 py-24 lg:p-32 max-lg:[&:has([data-media-block])]:px-0 max-lg:[&:has([data-media-block])]:py-0 [&_[data-media-block]]:aspect-square h-full flex flex-col gap-16 lg:gap-32";

export function ExpertQuote({ className }: { className?: string }) {
  const featured = testimonials[0];

  return (
    <section
      className={cn(
        "color-scheme-4 bg-(--color-background) text-(--color-text)",
        className,
      )}
    >
      <div className="grid grid-cols-1 divide-y-[1px] divide-dashed divide-(--color-text) lg:grid-cols-2 lg:divide-y-0 lg:[&>*:first-child]:order-2 lg:[&>*:nth-child(2)]:order-1 lg:[&>*:nth-child(2)]:border-r lg:[&>*:nth-child(2)]:border-dashed lg:[&>*:nth-child(2)]:border-(--color-text)">
        <div>
          <div className={CONTAINER_CLASS}>
            <div data-media-block className="relative overflow-hidden">
              <Image
                src="/photos/team-titans-circle.jpg"
                alt="Allie Chapman leading a Titans team circle during a Mind Body Athletes workshop"
                width={1200}
                height={1200}
                className="relative block aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className={CONTAINER_CLASS}>
            <div className="flex grow flex-col justify-between gap-40">
              <div className="flex flex-col gap-y-12">
                <h2 className="text-[24px] leading-[110%] md:text-title-70">
                  Allie Chapman is an exceptional blend of experience, education
                  and organization.
                </h2>
              </div>
              <div className="flex flex-col gap-24">
                <p className="text-body-45 leading-[110%]">
                  &#8220;{featured.quote}&#8221;
                </p>
                <div className="font-apercu text-[12px] md:text-[14px] uppercase">
                  <p>
                    {featured.name}
                    <br />
                    {featured.attribution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
