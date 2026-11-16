import Link from "next/link";
import type { FeaturesSection } from "@/types";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { IconWell } from "@/components/ui/IconWell";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FeaturesProps = {
  section: FeaturesSection;
};

export function Features({ section }: FeaturesProps) {
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

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => (
            <li
              key={item.title}
              className={
                item.emphasized
                  ? "sm:col-span-2 xl:col-span-1 xl:row-span-2"
                  : undefined
              }
            >
              <Reveal delayMs={index * 60}>
                <Card
                  as="article"
                  interactive
                  className={
                    item.emphasized
                      ? "flex h-full min-h-[100%] flex-col justify-between bg-[var(--accent-soft)]"
                      : "h-full"
                  }
                >
                  <div>
                    <IconWell
                      className={
                        item.emphasized
                          ? "bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))]"
                          : undefined
                      }
                    >
                      <Icon name={item.icon} className="h-5 w-5" />
                    </IconWell>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {item.link ? (
                    <Link
                      href={item.link.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                      {...(item.link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.link.label}
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </Link>
                  ) : null}
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
