"use client";

import { useState, type FormEvent } from "react";
import { submitContactMessage } from "@/lib/api";
import { Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const result = await submitContactMessage({ name, phone, email, message });

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="font-heading text-xl font-bold text-cream">
          Message sent!
        </h3>
        <p className="text-cream/80">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-accent underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-cream/90">
        Your name
        <input
          type="text"
          name="name"
          required
          className="rounded-xl border-0 bg-white px-4 py-3.5 text-base text-brand outline-none ring-2 ring-transparent transition-shadow focus:ring-accent"
          placeholder="John Doe"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-cream/90">
        Phone number
        <input
          type="tel"
          name="phone"
          required
          className="rounded-xl border-0 bg-white px-4 py-3.5 text-base text-brand outline-none ring-2 ring-transparent transition-shadow focus:ring-accent"
          placeholder="+91 XXXXX XXXXX"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-cream/90">
        Email (optional)
        <input
          type="email"
          name="email"
          className="rounded-xl border-0 bg-white px-4 py-3.5 text-base text-brand outline-none ring-2 ring-transparent transition-shadow focus:ring-accent"
          placeholder="you@example.com"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-cream/90">
        Message
        <textarea
          name="message"
          required
          rows={3}
          className="resize-y rounded-xl border-0 bg-white px-4 py-3.5 text-base text-brand outline-none ring-2 ring-transparent transition-shadow focus:ring-accent"
          placeholder="Tell us what you'd like to order..."
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-300">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-brand transition-colors hover:bg-accent/90 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
