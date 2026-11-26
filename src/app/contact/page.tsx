import type { Metadata } from "next";
import { Suspense, ViewTransition } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Store,
  Building2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT, COMPANY_NAME, BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Surabhi Healthy Foods for retail orders, supermarket dealership, or bulk catering supply of Abhiram's Chappathi, Poori, and Dosa Batter.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hello ${COMPANY_NAME}, I would like to enquire about ${BRAND_NAME} Chappathi, Poori, and Dosa Batter.`
  )}`;

  return (
    <ViewTransition enter="page-blur-fade" exit="page-blur-fade" default="none">
      <div>
        {/* ─── Header ─── */}
        <section className="bg-cream px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
          <div className="mx-auto max-w-7xl">
            <span className="inline-block rounded-full border border-paper-dark/50 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Contact {COMPANY_NAME}
            </span>
            <h1 className="mt-4 max-w-3xl font-heading text-[clamp(32px,4.2vw,48px)] font-extrabold leading-[1.06] tracking-tight text-brand">
              Orders, store dealerships &amp; bulk enquiries
            </h1>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">
              Looking to stock{" "}
              <strong className="font-semibold text-brand">
                Abhiram&apos;s Chappathi, Poori, or Dosa Batter
              </strong>
              , place a family order, or arrange institutional supply? Send us a
              message below.
            </p>
          </div>
        </section>

        {/* ─── Contact Grid ─── */}
        <section className="px-5 pt-2 pb-14 sm:px-8 sm:pb-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
            {/* Left — Direct Contact */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-2xl bg-brand p-8 text-cream sm:p-10">
                <h2 className="font-heading text-xl font-bold text-white">
                  Direct Contact
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  Reach {COMPANY_NAME} during dispatch hours.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: "Phone / WhatsApp",
                      value: CONTACT.phone,
                    },
                    { icon: Mail, label: "Email", value: CONTACT.email },
                    {
                      icon: MapPin,
                      label: "Kitchen & Unit",
                      value: CONTACT.address,
                    },
                    {
                      icon: Clock,
                      label: "Dispatch Hours",
                      value: CONTACT.hours,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.08]">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-cream/50">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-white break-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-brand-deep transition-colors hover:bg-accent/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Supply Info */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-start gap-4 rounded-2xl border border-paper-dark/40 bg-white p-5">
                  <Store className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="font-heading text-sm font-bold text-brand">
                      Supermarket &amp; Retail
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Stock Abhiram&apos;s fresh packs in your chiller. Ask
                      about daily morning route deliveries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-paper-dark/40 bg-white p-5">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="font-heading text-sm font-bold text-brand">
                      Hotels, Hostels &amp; Catering
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Reliable bulk Chappathi and Dosa Batter for institutional
                      kitchens.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Enquiry Form */}
            <div className="rounded-2xl border border-paper-dark/40 bg-white p-8 sm:p-10 lg:col-span-7">
              <h2 className="font-heading text-xl font-bold text-brand sm:text-2xl">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill in your requirements and we&apos;ll respond promptly.
              </p>
              <div className="mt-7">
                <Suspense
                  fallback={
                    <div className="h-96 animate-pulse rounded-xl bg-paper" />
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ViewTransition>
  );
}
