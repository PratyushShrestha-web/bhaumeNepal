"use client";

import { motion } from "framer-motion";
import { PackagePlus, Inbox, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: PackagePlus,
    title: "List your item",
    description:
      "Add photos, a description, and choose how you want to sell — fixed price, open to offers, or auction.",
  },
  {
    icon: Inbox,
    title: "Receive offers",
    description:
      "Buyers make offers or place bids in real time. Every proposal lands in one clean, organized inbox.",
  },
  {
    icon: CheckCircle2,
    title: "Complete the deal",
    description:
      "Accept the price you're happy with and close the deal — no more chasing replies across scattered chats.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to your next deal"
          description="From listing to a completed sale, Bhaume keeps the whole process in one place."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent-purple/50 via-white/10 to-accent-blue/50 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Node */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-background shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                  <step.icon className="h-5 w-5 text-accent-blue" strokeWidth={1.75} />
                </div>

                <div
                  className={`glass w-full rounded-2xl p-6 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-accent-purple">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
