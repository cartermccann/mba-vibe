import { testimonials } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function QuoteStrip({
  start = 1,
  count = 2,
  className,
}: {
  start?: number
  count?: number
  className?: string
}) {
  const quotes = testimonials.slice(start, start + count)

  return (
    <section
      className={cn(
        "color-scheme-3 bg-soft text-ink",
        className,
      )}
    >
      <div className="grid divide-y divide-dashed lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        {quotes.map((item) => (
          <blockquote key={item.name} className="flex flex-col justify-between gap-32 px-16 py-40 lg:px-32 lg:py-64">
            <p className="text-body-45 leading-[130%]">
              &#8220;{item.quote}&#8221;
            </p>
            <footer className="font-apercu text-caption-25 uppercase text-gold-ink">
              {item.name}
              <br />
              {item.attribution}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
