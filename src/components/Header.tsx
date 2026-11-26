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
    <header
      className="sticky top-0 z-50 border-b border-paper-dark/60 bg-cream/92 backdrop-blur-xl"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8">
        {/* Logo + Parent */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex shrink-0 items-center gap-3.5 focus:outline-none"
          aria-label={`${BRAND_NAME} by ${COMPANY_NAME} — Home`}
        >
          <Image
            src="/images/abhirams-logo.png"
            alt={`${BRAND_NAME} logo`}
            width={140}
            height={66}
            priority
            className="h-9 w-auto shrink-0 object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:h-10"
          />
          <div className="hidden border-l border-paper-dark/60 pl-3.5 sm:block">
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
              A Brand By
            </span>
            <span className="block font-heading text-[13px] font-semibold tracking-tight text-brand">
              {COMPANY_NAME}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-brand/[0.06] font-semibold text-brand"
                    : "text-muted hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white transition-all duration-150 hover:bg-brand-deep hover:shadow-sm"
          >
            Get in Touch
            <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-paper-dark/60 text-brand transition-colors hover:bg-paper lg:hidden"
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-[18px] w-[18px]" />
          ) : (
            <Menu className="h-[18px] w-[18px]" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-paper-dark/60 bg-cream px-5 pb-6 pt-4 lg:hidden"
          aria-label="Mobile navigation"
        >
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
                  className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-brand/[0.06] font-semibold text-brand"
                      : "text-ink hover:bg-paper/70"
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
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-white"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </Link>
        </nav>
      )}
    </header>
  );
}
