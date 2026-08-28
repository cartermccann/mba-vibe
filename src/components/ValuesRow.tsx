import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import type { FeatureColumn } from "@/types/content";

export interface ValuesColumn extends FeatureColumn {}

export interface ValuesRowProps {
  columns?: readonly ValuesColumn[];
  schemeClass?: string;
  className?: string;
  ariaLabel?: string;
}

const COLUMN_CLASS =
  "flex flex-[0_0_calc(100%-50px)] flex-col gap-100 p-16 md:flex-[0_0_calc(100%/2-50px)] lg:flex-[0_0_calc(100%/var(--desktop-carousel-threshold))] lg:gap-88 lg:p-32";

function ValuesColumnBody({ column }: { column: ValuesColumn }) {
  return (
    <div className={COLUMN_CLASS}>
      <div className="flex flex-col gap-12">
        <h2 className="font-apercu text-caption-30 uppercase">
          {column.title}
        </h2>
        {column.description ? (
          <div className="text-body-30 text-(--color-text)">
            <p>{column.description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ValuesRow({
  columns,
  schemeClass = "color-scheme-3",
  className,
  ariaLabel,
}: ValuesRowProps) {
  const items = columns ?? [];
  const style = {
    "--count": items.length,
    "--desktop-carousel-threshold": 4,
  } as CSSProperties;

  return (
    <section
      className={cn(
        schemeClass,
        "bg-(--color-background) border-b text-(--color-text)",
        className,
      )}
      style={style}
      aria-label={ariaLabel}
    >
      <div className="divide-y divide-dashed lg:hidden">
        {items.map((column) => (
          <ValuesColumnBody key={column.title} column={column} />
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-[repeat(var(--count),minmax(0,1fr))] divide-x divide-dashed">
          {items.map((column) => (
            <ValuesColumnBody key={column.title} column={column} />
          ))}
        </div>
      </div>
    </section>
  );
}
