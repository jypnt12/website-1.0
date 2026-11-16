import Image from "next/image";
import Link from "next/link";
import type { SiteConfig } from "@/types";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

type FooterProps = {
  brand: SiteConfig["brand"];
  footer: SiteConfig["footer"];
};

export function Footer({ brand, footer }: FooterProps) {
  return (
    <footer className="pb-[var(--section-y)]">
      <Container>
        <div className="neu-raised-lg overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2.5 font-semibold">
                <Image
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={brand.logo.width ?? 32}
                  height={brand.logo.height ?? 32}
                  className="h-8 w-8"
                />
                <span>{brand.name}</span>
              </div>
              <p className="text-muted max-w-sm leading-relaxed">
                {footer.blurb}
              </p>
              {footer.social?.length ? (
                <ul className="flex flex-wrap gap-3" aria-label="Social links">
                  {footer.social.map((item) => (
                    <li key={item.href + item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="neu-raised-sm neu-interactive inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--foreground)]"
                      >
                        <Icon name={item.icon} className="h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {footer.columns.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-4 text-sm font-semibold tracking-[0.06em] text-[var(--foreground)] uppercase">
                    {column.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-muted text-sm transition-colors hover:text-[var(--foreground)]"
                          {...(link.external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {footer.newsletter ? (
            <div className="mt-10 grid gap-4 border-t border-[color-mix(in_srgb,var(--foreground)_8%,transparent)] pt-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <h3 className="text-lg font-semibold">
                  {footer.newsletter.title}
                </h3>
                <p className="text-muted mt-2 text-sm">
                  {footer.newsletter.description}
                </p>
              </div>
              <NewsletterForm
                placeholder={footer.newsletter.placeholder}
                buttonLabel={footer.newsletter.buttonLabel}
              />
            </div>
          ) : null}

          <p className="text-muted mt-10 text-sm">{footer.legal}</p>
        </div>
      </Container>
    </footer>
  );
}
