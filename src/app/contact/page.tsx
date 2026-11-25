import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Store, Building2 } from "lucide-react";
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
    <>
      {/* ─── Header ─── */}
      <section className="border-b border-paper-dark/70 bg-gradient-to-b from-cream to-paper/60 px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block rounded-full border border-paper-dark bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold">
            Contact {COMPANY_NAME}
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.06] tracking-tight text-brand">
            Orders, store dealerships &amp; bulk enquiries
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Looking to stock{" "}
            <strong className="font-semibold text-brand">
              Abhiram&apos;s Chappathi, Poori, or Dosa Batter
            </strong>
            , place a family order, or arrange daily institutional supply? Send
            us a message below.
          </p>
        </div>
      </section>

      {/* ─── Contact Layout ─── */}
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Channels + Supply Cards */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-[28px] bg-brand p-8 text-cream sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-white">
                Direct Contact
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                Reach {COMPANY_NAME} directly during kitchen &amp; dispatch
                hours.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Phone / WhatsApp
                    </p>
                    <p className="mt-0.5 text-base font-medium text-white">
                      {CONTACT.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Email
                    </p>
                    <p className="mt-0.5 break-all text-base font-medium text-white">
                      {CONTACT.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Kitchen &amp; Unit
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-cream/85">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Dispatch Hours
                    </p>
                    <p className="mt-0.5 text-sm text-cream/85">
                      {CONTACT.hours}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-brand-deep transition-colors hover:bg-accent/90"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Supply Channels Info */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-start gap-4 rounded-2xl border border-paper-dark/80 bg-white p-5">
                <Store className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-heading text-base font-bold text-brand">
                    Supermarket &amp; Retail Partnerships
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Interested in stocking Abhiram&apos;s fresh packs in your
                    chiller display? Ask about daily morning route deliveries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-paper-dark/80 bg-white p-5">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-heading text-base font-bold text-brand">
                    Catering, Hostels &amp; Hotels
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Reliable 50-piece bulk Chappathi packs and large Dosa Batter
                    supplies tailored for institutional kitchens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="rounded-[28px] border border-paper-dark/80 bg-white p-8 shadow-xs sm:p-10 lg:col-span-7">
            <h2 className="font-heading text-2xl font-bold text-brand sm:text-3xl">
              Send an enquiry
            </h2>
            <p className="mt-2 text-sm text-muted">
              Fill in your requirements below and we&apos;ll respond promptly.
            </p>
            <div className="mt-7">
              <Suspense
                fallback={
                  <div className="h-96 animate-pulse rounded-2xl bg-paper" />
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
