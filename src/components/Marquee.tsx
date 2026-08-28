import { cn } from "@/lib/utils";

const REPEATS_PER_LINE = 4;

export interface MarqueeBarProps {
  items: string[];
  durationSeconds: number;
  paddingY: number;
  schemeClass: string;
  className?: string;
}

function Diamond() {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{ width: "var(--marquee-icon-size)", height: "var(--marquee-icon-size)" }}
      aria-hidden
    >
      <span className="block size-[6px] rotate-45 bg-current" />
    </span>
  );
}

export function MarqueeBar({
  items,
  durationSeconds,
  paddingY,
  schemeClass,
  className,
}: MarqueeBarProps) {
  const line = Array.from({ length: REPEATS_PER_LINE }, () => items).flat();

  const renderLine = (lineIndex: number) => (
    <div
      key={lineIndex}
      aria-hidden={lineIndex > 0}
      className="marquee-line inline-flex shrink-0 items-center"
      style={{ animationDuration: `${durationSeconds}s` }}
    >
      {line.map((label, i) => (
        <div key={`${lineIndex}-${i}`} className="contents">
          <div
            className="inline-flex shrink-0 items-center"
            style={{ gap: "var(--marquee-item-gap)" }}
          >
            <Diamond />
          </div>
          <div
            className="inline-flex shrink-0 items-center"
            style={{ gap: "var(--marquee-item-gap)" }}
          >
            <p className="font-apercu text-body-25 whitespace-nowrap uppercase">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className={cn(
        schemeClass,
        "marquee-section bg-(--color-background) overflow-hidden text-(--color-text)",
        className,
      )}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
    >
      <div className="flex">{[0, 1].map(renderLine)}</div>
    </section>
  );
}
