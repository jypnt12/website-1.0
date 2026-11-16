import { pageSchema, siteSchema, type PageContent, type SiteConfig } from "@/schemas";
import siteJson from "@/content/site.json";
import homeJson from "@/content/pages/home.json";

export function getSiteConfig(): SiteConfig {
  return siteSchema.parse(siteJson);
}

export function getHomePage(): PageContent {
  return pageSchema.parse(homeJson);
}

export function getPageBySlug(slug: string): PageContent | null {
  if (slug === "home") {
    return getHomePage();
  }
  return null;
}
