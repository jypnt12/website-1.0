import { z } from "zod";
import { ctaSchema, iconNameSchema, imageSchema, linkSchema } from "./common";

export const siteSchema = z.object({
  brand: z.object({
    name: z.string().min(1),
    tagline: z.string().optional(),
    logo: imageSchema,
  }),
  metadata: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  theme: z
    .object({
      accent: z.string().optional(),
      surface: z.string().optional(),
      radiusScale: z.enum(["sm", "md", "lg"]).optional(),
    })
    .optional(),
  nav: z.object({
    links: z.array(linkSchema).min(1),
    cta: ctaSchema.optional(),
  }),
  footer: z.object({
    blurb: z.string().min(1),
    columns: z
      .array(
        z.object({
          title: z.string().min(1),
          links: z.array(linkSchema).min(1),
        }),
      )
      .min(1),
    social: z
      .array(
        z.object({
          label: z.string().min(1),
          href: z.string().min(1),
          icon: iconNameSchema,
        }),
      )
      .optional(),
    newsletter: z
      .object({
        title: z.string().min(1),
        description: z.string().min(1),
        placeholder: z.string().min(1),
        buttonLabel: z.string().min(1),
      })
      .optional(),
    legal: z.string().min(1),
  }),
});

export type SiteConfig = z.infer<typeof siteSchema>;
