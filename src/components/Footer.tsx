import Link from "next/link";
import { Leaf } from "lucide-react";
import { NAV_LINKS, SITE_NAME, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-sand-dark/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-brand no-underline"
            >
              <Leaf className="h-7 w-7 text-accent" strokeWidth={1.8} />
              <span className="font-heading text-lg font-extrabold">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Wholesome, natural food made with simple ingredients and no
              shortcuts — for families who care about what they eat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brand">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brand">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>Phone: {CONTACT.phone}</li>
              <li>Email: {CONTACT.email}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brand">
              Visit Us
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              {CONTACT.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-sand-dark/30 pt-8 text-sm text-muted">
          <span>© 2026 {SITE_NAME}. All rights reserved.</span>
          <span>Eat well · Live well</span>
        </div>
      </div>
    </footer>
  );
}
