import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Surabhi Healthy Foods — questions, bulk orders, or custom packs.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-brand text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Get in touch
          </p>
          <h1 className="max-w-3xl font-heading text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight">
            Let&apos;s talk healthy food
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            Questions, bulk orders or custom packs — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[32px] bg-brand text-cream">
            <div className="flex flex-wrap">
              {/* Info */}
              <div className="flex-1 basis-[380px] p-12">
                <h2 className="font-heading text-3xl font-bold">
                  Contact information
                </h2>
                <p className="mt-4 text-cream/70">
                  Reach out through any of the channels below, or fill in the
                  form and we&apos;ll get back to you.
                </p>

                <div className="mt-10 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <p className="text-cream/70">{CONTACT.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-cream/70">{CONTACT.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-cream/70">{CONTACT.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-cream/70">{CONTACT.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 basis-[380px] bg-brand-light p-12">
                <h3 className="mb-6 font-heading text-2xl font-bold">
                  Send us a message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
