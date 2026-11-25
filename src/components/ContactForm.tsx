"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactMessage } from "@/lib/api";
import { Loader2, CheckCircle2, Send } from "lucide-react";

const ENQUIRY_TYPES = [
  "Home / Family Order",
  "Retail / Supermarket Stockist",
  "Bulk / Hotel / Catering Supply",
  "General Enquiry",
] as const;

const PRODUCT_OPTIONS = [
  "All Abhiram's Products",
  "Abhiram's Half Cooked Chappathi",
  "Abhiram's Ready-to-Fry Poori",
  "Abhiram's Fresh Dosa Batter",
] as const;

function resolveInitialProductInterest(initialProduct: string): string {
  const lower = initialProduct.toLowerCase();
  if (lower.includes("chappathi")) return "Abhiram's Half Cooked Chappathi";
  if (lower.includes("poori")) return "Abhiram's Ready-to-Fry Poori";
  if (lower.includes("batter") || lower.includes("dosa")) {
    return "Abhiram's Fresh Dosa Batter";
  }
  return PRODUCT_OPTIONS[0];
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") ?? "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [enquiryType, setEnquiryType] = useState<string>(ENQUIRY_TYPES[0]);
  const [productInterest, setProductInterest] = useState<string>(() =>
    resolveInitialProductInterest(initialProduct)
  );
  const [messageText, setMessageText] = useState<string>(() =>
    initialProduct
      ? `Hi Surabhi Healthy Foods team, I would like to enquire about ${initialProduct}.`
      : ""
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    const result = await submitContactMessage({
      name,
      phone,
      email,
      enquiry_type: enquiryType,
      product_interest: productInterest,
      message,
    });

    if (result.success) {
      setStatus("success");
      setMessageText("");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-sage-tint px-6 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <CheckCircle2 className="h-7 w-7 text-accent" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand">
          Enquiry received!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thank you for contacting Surabhi Healthy Foods. Our team will reach out
          shortly regarding your{" "}
          <span className="font-semibold text-brand">{productInterest}</span>{" "}
          enquiry.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Enquiry Type Pills */}
      <div>
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand">
          Enquiry Type
        </span>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {ENQUIRY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setEnquiryType(type)}
              className={`rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold transition-all ${
                enquiryType === type
                  ? "border-brand bg-brand text-white shadow-xs"
                  : "border-paper-dark bg-cream/60 text-muted hover:border-brand/40 hover:text-brand"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Product Interest */}
      <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
        Product Line
        <select
          value={productInterest}
          onChange={(e) => setProductInterest(e.target.value)}
          className="rounded-xl border border-paper-dark bg-cream/50 px-4 py-3 text-sm font-medium text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15"
        >
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
          Your Name *
          <input
            type="text"
            name="name"
            required
            className="rounded-xl border border-paper-dark bg-cream/50 px-4 py-3 text-sm font-normal text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15"
            placeholder="e.g. Rajesh Nair"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
          Phone / WhatsApp *
          <input
            type="tel"
            name="phone"
            required
            className="rounded-xl border border-paper-dark bg-cream/50 px-4 py-3 text-sm font-normal text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15"
            placeholder="+91 98XXX XXXXX"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
        Email Address (Optional)
        <input
          type="email"
          name="email"
          className="rounded-xl border border-paper-dark bg-cream/50 px-4 py-3 text-sm font-normal text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15"
          placeholder="you@example.com"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
        Message / Pack Quantities *
        <textarea
          name="message"
          required
          rows={4}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="resize-y rounded-xl border border-paper-dark bg-cream/50 px-4 py-3 text-sm font-normal text-ink outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15"
          placeholder="Tell us the pack quantities, delivery area, or wholesale details..."
        />
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-deep disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending enquiry...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 text-accent" />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}
