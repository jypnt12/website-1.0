import { z } from "zod";
import { ctaSchema, iconNameSchema, imageSchema, linkSchema } from "./common";

export const heroSectionSchema = z.object({
  type: z.literal("hero"),
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  headline: z.string().min(1),
  subcopy: z.string().min(1),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
  trustLine: z.string().optional(),
  image: imageSchema,
  stats: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.string().min(1),
      }),
    )
    .optional(),
});

export const featuresSectionSchema = z.object({
  type: z.literal("features"),
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  items: z
    .array(
      z.object({
        icon: iconNameSchema,
        title: z.string().min(1),
        description: z.string().min(1),
        link: linkSchema.optional(),
        emphasized: z.boolean().optional(),
      }),
    )
    .min(1)
    .max(6),
});

export const benefitsSectionSchema = z.object({
  type: z.literal("benefits"),
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        image: imageSchema,
        checklist: z.array(z.string().min(1)).min(1),
        metric: z
          .object({
            label: z.string().min(1),
            value: z.number().min(0).max(100),
            display: z.string().min(1),
          })
          .optional(),
        imagePosition: z.enum(["left", "right"]).optional(),
      }),
    )
    .min(1),
});

export const testimonialsSectionSchema = z.object({
  type: z.literal("testimonials"),
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  items: z
    .array(
      z.object({
        quote: z.string().min(1),
        name: z.string().min(1),
        role: z.string().min(1),
        company: z.string().min(1),
        avatar: imageSchema,
        rating: z.number().min(1).max(5).optional(),
      }),
    )
    .min(1),
});

export const ctaSectionSchema = z.object({
  type: z.literal("cta"),
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
});

export const sectionSchema = z.discriminatedUnion("type", [
  heroSectionSchema,
  featuresSectionSchema,
  benefitsSectionSchema,
  testimonialsSectionSchema,
  ctaSectionSchema,
]);

export const pageSchema = z.object({
  slug: z.string().min(1),
  sections: z.array(sectionSchema).min(1),
});

export type HeroSection = z.infer<typeof heroSectionSchema>;
export type FeaturesSection = z.infer<typeof featuresSectionSchema>;
export type BenefitsSection = z.infer<typeof benefitsSectionSchema>;
export type TestimonialsSection = z.infer<typeof testimonialsSectionSchema>;
export type CtaSection = z.infer<typeof ctaSectionSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type PageContent = z.infer<typeof pageSchema>;
