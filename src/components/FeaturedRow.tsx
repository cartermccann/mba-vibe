import { cn } from "@/lib/utils";

export function FeaturedRow({
  eyebrow,
  items,
  schemeClass = "color-scheme-3",
}: {
  eyebrow: string
  items: readonly {
    title: string
    detail: string
    href?: string
  }[]
  schemeClass?: string
}) {
  return (
    <section className={cn(schemeClass, "border-t bg-(--color-background) text-(--color-text)")}>
      <div className="border-b px-16 py-24 lg:px-64">
        <p className="font-apercu text-caption-25 uppercase text-gold-ink">{eyebrow}</p>
      </div>
      <div className="grid divide-y divide-dashed lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        {items.map((item) => (
          <article key={item.title} className="flex flex-col gap-12 px-16 py-40 lg:px-64 lg:py-64">
            <h2 className="text-title-70 text-balance">{item.title}</h2>
            <p className="text-body-30 text-quiet">{item.detail}</p>
            {item.href ? (
              <a
                href={item.href}
                className="font-apercu text-caption-25 uppercase underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the story
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
