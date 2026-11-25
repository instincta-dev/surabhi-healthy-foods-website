import type { Metadata } from "next";
import { Leaf, Home as HomeIcon, Heart, ShieldCheck, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Surabhi Healthy Foods — our story, values, and commitment to wholesome, natural food.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-brand text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Our story
          </p>
          <h1 className="max-w-3xl font-heading text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight">
            Bringing back the goodness of traditional food
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            Surabhi Healthy Foods was born from a simple belief — that food
            should be wholesome, natural, and made the way our grandmothers
            made it. No preservatives, no artificial colours, no shortcuts.
          </p>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-sand-dark/30 bg-white p-10">
            <Award className="mb-4 h-10 w-10 text-accent" strokeWidth={1.6} />
            <h2 className="font-heading text-3xl font-bold text-brand">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              To make healthy, traditional food accessible to every family.
              We source the finest natural ingredients and prepare them using
              time-tested methods — wood-pressed oils, stone-ground flours,
              and slow-roasted snacks — so you can trust every bite.
            </p>
          </div>

          <div className="rounded-3xl border border-sand-dark/30 bg-white p-10">
            <Users className="mb-4 h-10 w-10 text-accent" strokeWidth={1.6} />
            <h2 className="font-heading text-3xl font-bold text-brand">
              Our Vision
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              To be the most trusted name in healthy food — a brand that
              families turn to for nourishment they can feel good about. We
              envision a world where wholesome eating is the norm, not the
              exception.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            What we stand for
          </p>
          <h2 className="mb-12 font-heading text-[clamp(32px,4vw,48px)] leading-tight tracking-tight text-brand">
            Our core values
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Purity",
                desc: "Every product is free from chemicals, preservatives, and artificial additives.",
              },
              {
                icon: HomeIcon,
                title: "Tradition",
                desc: "We honour age-old recipes and methods that have nourished generations.",
              },
              {
                icon: Heart,
                title: "Care",
                desc: "Each batch is made with the same love and attention you'd give your own family.",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                desc: "What you see on the label is exactly what's inside — nothing more, nothing less.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-sand-dark/30 bg-white p-8"
              >
                <value.icon
                  className="mb-4 h-10 w-10 text-brand"
                  strokeWidth={1.6}
                />
                <h3 className="font-heading text-xl font-bold text-brand">
                  {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] bg-brand px-12 py-16 text-cream">
            <h2 className="mb-10 text-center font-heading text-3xl font-bold">
              Surabhi by the numbers
            </h2>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { value: "50+", label: "Products" },
                { value: "1000+", label: "Happy families" },
                { value: "100%", label: "Natural ingredients" },
                { value: "0", label: "Preservatives" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-4xl font-extrabold text-accent lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-cream/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
