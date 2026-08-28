import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type PhotoCard = {
  title: string
  body?: string
  href?: string
  external?: boolean
  photo: string
  photoAlt: string
  status?: string
}

export function PhotoCards({
  cards,
  columns = 2,
  className,
}: {
  cards: readonly PhotoCard[]
  columns?: 2 | 3 | 4
  className?: string
}) {
  const grid =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2"

  return (
    <section className={cn("color-scheme-1 bg-canvas text-ink", className)}>
      <div className={cn("grid divide-y divide-(--color-line) lg:divide-x lg:divide-y-0", grid)}>
        {cards.map((card) => {
          const inner = (
            <>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={card.photo}
                  alt={card.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-12 px-16 py-32 lg:px-32">
                {card.status ? (
                  <p className="w-fit bg-gold px-10 py-4 font-apercu text-caption-20 uppercase text-ink">
                    {card.status}
                  </p>
                ) : null}
                <h3 className="text-title-70">{card.title}</h3>
                {card.body ? <p className="text-body-30 text-quiet">{card.body}</p> : null}
              </div>
            </>
          )

          if (card.href) {
            return (
              <Link
                key={card.title}
                href={card.href}
                className="flex flex-col border-b border-(--color-line) last:border-b-0 hover:bg-paper"
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {inner}
              </Link>
            )
          }

          return (
            <article
              key={card.title}
              className="flex flex-col border-b border-(--color-line) last:border-b-0"
            >
              {inner}
            </article>
          )
        })}
      </div>
    </section>
  )
}
