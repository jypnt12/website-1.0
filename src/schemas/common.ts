import { z } from "zod";

export const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

export const ctaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  external: z.boolean().optional(),
});

export const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

export const iconNameSchema = z.enum([
  "spark",
  "shield",
  "layers",
  "zap",
  "check",
  "arrow-right",
  "menu",
  "close",
  "star",
  "users",
  "chart",
  "clock",
  "globe",
  "heart",
  "twitter",
  "linkedin",
  "github",
  "mail",
]);

export type IconName = z.infer<typeof iconNameSchema>;
