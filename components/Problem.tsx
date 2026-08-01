"use client";

import { motion } from "framer-motion";
import { MessageCircleOff, UserX, HelpCircle, MessagesSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const problems = [
  {
    icon: MessageCircleOff,
    title: '"Last price?"',
    description:
      "Endless back-and-forth messages just to find out if a seller will budge — before anyone even agrees to talk.",
  },
  {
    icon: UserX,
    title: "Fake buyers",
    description:
      "Time-wasters who ask a dozen questions, ghost on delivery day, and never had any intention to buy.",
  },
  {
    icon: HelpCircle,
    title: "No fair price",
    description:
      "No way to know if you're overpaying — or underselling — because there's no shared sense of market value.",
  },
  {
    icon: MessagesSquare,
    title: "Messy negotiations",
    description:
      "Offers, counter-offers, and final prices scattered across chat threads with no record of what was agreed.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The problem"
          title="Marketplaces today are broken"
          description="Every online deal in Nepal runs into the same friction — one that costs buyers and sellers time, trust, and money."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-red-400/80 transition-colors group-hover:bg-white/10">
                  <problem.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {problem.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
