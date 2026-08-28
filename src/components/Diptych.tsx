import Image from "next/image";

import { CtaButton } from "@/components/Button";
import { cn } from "@/lib/utils";

export function Diptych({
  eyebrow,
  title,
  body,
  href,
  linkLabel,
  imageSrc,
  imageAlt,
  reverse = false,
  schemeClass = "color-scheme-1",
}: {
  eyebrow?: string
  title: string
  body: string
  href?: string
  linkLabel?: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  schemeClass?: string
}) {
  return (
    <section className={cn(schemeClass, "bg-(--color-background) text-(--color-text)")}>
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-560">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-16 border-t border-(--color-line) px-16 py-40 lg:border-t-0 lg:border-l lg:border-dashed lg:px-64 lg:py-80">
          {eyebrow ? (
            <p className="font-apercu text-caption-25 uppercase text-gold-ink">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-title-75 text-balance">{title}</h2>
          <p className="max-w-560 text-body-35 text-pretty text-quiet">{body}</p>
          {href && linkLabel ? (
            <CtaButton label={linkLabel} href={href} variant="onLight" />
          ) : null}
        </div>
      </div>
    </section>
  )
}
