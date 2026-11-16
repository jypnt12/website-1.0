import Image from "next/image";
import type { HeroSection } from "@/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

type HeroProps = {
  section: HeroSection;
};

export function Hero({ section }: HeroProps) {
  return (
    <section id={section.id} className="section-space" aria-labelledby={`${section.id}-title`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <div className="max-w-xl">
              {section.eyebrow ? (
                <p className="mb-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-3 py-1.5 text-sm font-semibold text-[var(--accent)] neu-inset">
                  <Icon name="spark" className="h-4 w-4" />
                  {section.eyebrow}
                </p>
              ) : null}
              <h1
                id={`${section.id}-title`}
                className="text-display text-[var(--foreground)]"
              >
                {section.headline}
              </h1>
              <p className="text-muted mt-5 text-[1.1rem] leading-relaxed">
                {section.subcopy}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={section.primaryCta.href} size="lg" external={section.primaryCta.external}>
                  {section.primaryCta.label}
                </Button>
                {section.secondaryCta ? (
                  <Button
                    href={section.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    external={section.secondaryCta.external}
                    icon={<Icon name="arrow-right" className="h-4 w-4" />}
                  >
                    {section.secondaryCta.label}
                  </Button>
                ) : null}
              </div>
              {section.trustLine ? (
                <p className="text-muted mt-6 text-sm">{section.trustLine}</p>
              ) : null}
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative">
              <div className="neu-raised-lg overflow-hidden rounded-[var(--radius-xl)] p-4 sm:p-5">
                <div className="neu-inset overflow-hidden rounded-[calc(var(--radius-xl)-12px)] bg-[var(--accent-soft)]">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={section.image.width ?? 640}
                    height={section.image.height ?? 520}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>

              {section.stats?.length ? (
                <div className="neu-inset mt-5 grid grid-cols-3 gap-2 rounded-[var(--radius-lg)] p-3 sm:p-4">
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[var(--radius-md)] px-2 py-3 text-center sm:px-3"
                    >
                      <p className="text-lg font-semibold tracking-tight sm:text-xl">
                        {stat.value}
                      </p>
                      <p className="text-muted mt-1 text-[0.7rem] leading-snug sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
