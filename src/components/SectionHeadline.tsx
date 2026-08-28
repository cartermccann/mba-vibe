import { TextAnimation } from "@/components/TextAnimation";
import { cn } from "@/lib/utils";

export interface SectionHeadlineProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  schemeClass?: string;
  bordered?: boolean;
  paddingClassName: string;
  as?: "h2" | "p";
  className?: string;
}

export function SectionHeadline({
  eyebrow,
  title,
  subtitle,
  schemeClass = "color-scheme-1",
  bordered = false,
  paddingClassName,
  as = "h2",
  className,
}: SectionHeadlineProps) {
  return (
    <section
      className={cn(
        schemeClass,
        "bg-(--color-background) text-(--color-text)",
        bordered && "border-b",
        paddingClassName,
        className,
      )}
    >
      <div className="relative flex flex-col gap-16 px-31 text-center">
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute top-1/2 left-0 h-[0.5rem] w-[1rem] -translate-y-1/2 bg-current" />
          <span className="absolute top-1/2 right-0 h-[0.5rem] w-[1rem] -translate-y-1/2 bg-current" />
        </div>

        <TextAnimation
          as="p"
          elementIndex={0}
          className="font-apercu text-caption-25 leading-[140%] uppercase"
        >
          {eyebrow}
        </TextAnimation>

        <div className="headline mx-auto max-w-1024 text-center text-title-75 leading-[110%] text-pretty">
          <TextAnimation as={as} elementIndex={1}>
            {title}
          </TextAnimation>
        </div>

        {subtitle ? (
          <div className="mx-auto max-w-860 text-center text-body-35 leading-[120%] text-pretty">
            <TextAnimation as="p" elementIndex={2}>
              {subtitle}
            </TextAnimation>
          </div>
        ) : null}
      </div>
    </section>
  );
}
