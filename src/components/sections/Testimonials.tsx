import Image from "next/image";
import type { TestimonialsSection } from "@/types";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TestimonialsProps = {
  section: TestimonialsSection;
};

export function Testimonials({ section }: TestimonialsProps) {
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
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => (
            <li key={item.name + item.company}>
              <Reveal delayMs={index * 70}>
                <Card as="article" className="flex h-full flex-col">
                  {item.rating ? (
                    <div
                      className="mb-4 flex gap-1 text-[var(--accent)]"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, starIndex) => (
                        <Icon
                          key={starIndex}
                          name="star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                  ) : null}
                  <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-[var(--foreground)]">
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-3 border-t border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] pt-5">
                    <div className="neu-inset inline-flex rounded-full p-1">
                      <Image
                        src={item.avatar.src}
                        alt={item.avatar.alt}
                        width={item.avatar.width ?? 48}
                        height={item.avatar.height ?? 48}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div>
                      <cite className="not-italic font-semibold">
                        {item.name}
                      </cite>
                      <p className="text-muted text-sm">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </footer>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
