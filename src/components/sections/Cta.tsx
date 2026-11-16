import type { CtaSection } from "@/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CtaProps = {
  section: CtaSection;
};

export function Cta({ section }: CtaProps) {
  return (
    <section
      id={section.id}
      className="section-space"
      aria-labelledby={`${section.id}-title`}
    >
      <Container>
        <Reveal>
          <div className="neu-inset rounded-[var(--radius-xl)] p-2 sm:p-3">
            <div className="neu-raised-lg rounded-[calc(var(--radius-xl)-8px)] px-6 py-10 text-center sm:px-10 sm:py-14">
              <h2 id={`${section.id}-title`} className="text-title mx-auto max-w-2xl">
                {section.title}
              </h2>
              <p className="text-muted mx-auto mt-4 max-w-xl leading-relaxed">
                {section.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={section.primaryCta.href}
                  size="lg"
                  external={section.primaryCta.external}
                >
                  {section.primaryCta.label}
                </Button>
                {section.secondaryCta ? (
                  <Button
                    href={section.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    external={section.secondaryCta.external}
                  >
                    {section.secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
