import Image from "next/image";
import type { BenefitsSection } from "@/types";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BenefitsProps = {
  section: BenefitsSection;
};

export function Benefits({ section }: BenefitsProps) {
  return (
    <section
      id={section.id}
      className="section-space"
      aria-labelledby={`${section.id}-title`}
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            titleId={`${section.id}-title`}
            description={section.description}
          />
        </Reveal>

        <div className="mt-12 space-y-14">
          {section.items.map((item, index) => {
            const imageLeft = (item.imagePosition ?? (index % 2 === 0 ? "right" : "left")) === "left";

            return (
              <Reveal key={item.title} delayMs={index * 80}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="neu-raised-lg overflow-hidden rounded-[var(--radius-xl)] p-4">
                      <div className="neu-inset overflow-hidden rounded-[calc(var(--radius-xl)-14px)]">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          width={item.image.width ?? 520}
                          height={item.image.height ?? 400}
                          className="h-auto w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                    <h3 className="text-title text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-muted mt-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {item.checklist.map((check) => (
                        <li key={check} className="flex items-start gap-3">
                          <span className="neu-inset mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--accent)]">
                            <Icon name="check" className="h-4 w-4" />
                          </span>
                          <span className="pt-0.5 text-[0.98rem]">{check}</span>
                        </li>
                      ))}
                    </ul>

                    {item.metric ? (
                      <div className="neu-inset mt-7 rounded-[var(--radius-lg)] p-4">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-[var(--muted)]">
                            {item.metric.label}
                          </span>
                          <span className="text-sm font-semibold text-[var(--accent)]">
                            {item.metric.display}
                          </span>
                        </div>
                        <div
                          className="h-2.5 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--shade)_25%,var(--surface))]"
                          role="meter"
                          aria-valuenow={item.metric.value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={item.metric.label}
                        >
                          <div
                            className="h-full rounded-full bg-[var(--accent)]"
                            style={{ width: `${item.metric.value}%` }}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
