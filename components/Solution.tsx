"use client";

import { motion } from "framer-motion";
import { Zap, Handshake, Gavel } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
  {
    icon: Zap,
    title: "Buy Now",
    description:
      "See a price you like? Skip the back-and-forth and check out instantly, with the price locked in the moment you tap.",
    accent: "from-accent-purple to-accent-blue",
  },
  {
    icon: Handshake,
    title: "Make an Offer",
    description:
      "Propose your price and let the seller accept, counter, or decline — every negotiation kept in one clear thread.",
    accent: "from-accent-blue to-accent-purple",
  },
  {
    icon: Gavel,
    title: "Live Auctions",
    description:
      "Watch the bid climb in real time and win items at the price the market actually agrees they're worth.",
    accent: "from-accent-purple to-accent-blue",
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The solution"
          title="Meet Bhaume"
          description="Three ways to close a deal, one marketplace built around how people in Nepal actually buy and sell."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* glow on hover */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent-purple/0 to-accent-blue/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-40 group-hover:from-accent-purple/40 group-hover:to-accent-blue/40" />

              <GlassCard
                strong
                className="relative flex h-full flex-col p-8 transition-transform duration-300 group-hover:-translate-y-2"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-glow`}
                >
                  <feature.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
