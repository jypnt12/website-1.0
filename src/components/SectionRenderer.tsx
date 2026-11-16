import type { Section } from "@/types";
import { Benefits } from "@/components/sections/Benefits";
import { Cta } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";

type SectionRendererProps = {
  sections: Section[];
};

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section.type) {
          case "hero":
            return <Hero key={section.id} section={section} />;
          case "features":
            return <Features key={section.id} section={section} />;
          case "benefits":
            return <Benefits key={section.id} section={section} />;
          case "testimonials":
            return <Testimonials key={section.id} section={section} />;
          case "cta":
            return <Cta key={section.id} section={section} />;
          default: {
            const _exhaustive: never = section;
            return _exhaustive;
          }
        }
      })}
    </>
  );
}
