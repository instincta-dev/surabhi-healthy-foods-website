import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import {
  NAV_LINKS,
  COMPANY_NAME,
  BRAND_NAME,
  CONTACT,
  BRAND_LINES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Parent Identity */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-2xl bg-white px-4 py-2.5 shadow-sm"
            >
              <Image
                src="/images/abhirams-logo.png"
                alt={`${BRAND_NAME} logo`}
                width={132}
                height={62}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {COMPANY_NAME}
            </p>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-cream/75">
              Crafting wholesome, preservative-free everyday Indian food
              essentials under the{" "}
              <span className="font-medium text-white">{BRAND_NAME}</span>{" "}
              brand — fresh from our hygienic kitchen to households and retail
              shelves.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Brands */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Our Signature Brands
            </h4>
            <ul className="space-y-2.5">
              {BRAND_LINES.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={`/products?category=${encodeURIComponent(brand.category)}`}
                    className="group block text-sm text-cream/85 transition-colors hover:text-white"
                  >
                    <span className="font-medium">{brand.brandName}</span>
                    <span className="block text-xs text-cream/55 group-hover:text-cream/75">
                      {brand.tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="break-all">{CONTACT.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{CONTACT.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/60">
          <span>
            © 2026 {COMPANY_NAME}. All rights reserved.
          </span>
          <span>
            {BRAND_NAME} Chappathi · {BRAND_NAME} Poori · {BRAND_NAME} Dosa Batter
          </span>
        </div>
      </div>
    </footer>
  );
}
