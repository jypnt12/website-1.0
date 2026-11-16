"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { SiteConfig } from "@/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

type HeaderProps = {
  brand: SiteConfig["brand"];
  nav: SiteConfig["nav"];
};

export function Header({ brand, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-4">
      <Container>
        <div className="neu-raised flex items-center justify-between gap-4 rounded-[var(--radius-pill)] px-4 py-3 sm:px-5">
          <Link
            href="#hero"
            className="inline-flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width ?? 32}
              height={brand.logo.height ?? 32}
              className="h-8 w-8"
              priority
            />
            <span>{brand.name}</span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {nav.links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="rounded-[var(--radius-pill)] px-3.5 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {nav.cta ? (
              <Button href={nav.cta.href} size="md" external={nav.cta.external}>
                {nav.cta.label}
              </Button>
            ) : null}
          </div>

          <button
            type="button"
            className="neu-raised-sm neu-interactive inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>

        {open ? (
          <div
            id={menuId}
            className="neu-raised mt-3 rounded-[var(--radius-lg)] p-4 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {nav.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="rounded-[var(--radius-md)] px-4 py-3 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {nav.cta ? (
              <div className="mt-4" onClick={() => setOpen(false)}>
                <Button
                  href={nav.cta.href}
                  className="w-full"
                  external={nav.cta.external}
                >
                  {nav.cta.label}
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </header>
  );
}
