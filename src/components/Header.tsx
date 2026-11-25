"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, COMPANY_NAME, BRAND_NAME } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-paper-dark/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Brand + Parent Lockup */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 focus:outline-none"
          aria-label={`${BRAND_NAME} by ${COMPANY_NAME} — Home`}
        >
          <Image
            src="/images/abhirams-logo.png"
            alt={`${BRAND_NAME} logo`}
            width={140}
            height={66}
            priority
            className="h-10 w-auto shrink-0 object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:h-12"
          />
          <div className="hidden whitespace-nowrap border-l border-paper-dark pl-3 sm:block">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
              A Brand By
            </span>
            <span className="block font-heading text-sm font-bold tracking-tight text-brand">
              {COMPANY_NAME}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors ${
                  isActive
                    ? "bg-sage-tint font-semibold text-brand"
                    : "text-muted hover:bg-paper/70 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-brand-deep hover:shadow"
          >
            Order &amp; Enquire
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </Link>
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-paper-dark bg-cream text-brand transition-colors hover:bg-paper lg:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-paper-dark/80 bg-white px-5 pb-6 pt-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mb-3 rounded-xl bg-sage-tint px-3.5 py-2 text-xs font-medium text-brand">
            <span className="text-muted">Parent Company: </span>
            <span className="font-semibold">{COMPANY_NAME}</span>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-sage-tint font-semibold text-brand"
                      : "text-ink hover:bg-paper/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-base font-semibold text-white"
          >
            Order &amp; Enquire
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </Link>
        </nav>
      )}
    </header>
  );
}
