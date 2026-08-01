"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Lock,
  Video,
  Building2,
  Truck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const upcoming = [
  {
    icon: Sparkles,
    title: "AI Price Suggestions",
    description: "Get a fair market price recommendation before you list.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Sellers",
    description: "A trust badge for sellers with a track record of good deals.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Funds held safely until both sides confirm the deal.",
  },
  {
    icon: Video,
    title: "Video Listings",
    description: "Show items in motion for a truer sense of condition.",
  },
  {
    icon: Building2,
    title: "Business Accounts",
    description: "Bulk listings and storefronts built for shops, not just individuals.",
  },
  {
    icon: Truck,
    title: "Delivery Integration",
    description: "Book a courier straight from a completed deal.",
  },
];

export function ComingSoon() {
  return (
    <section id="coming-soon" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Roadmap"
          title="Coming soon to Bhaume"
          description="We're building this in the open — here's what's next on the roadmap."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="group flex h-full items-start gap-4 p-6 transition-colors hover:bg-white/[0.06]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-white/10">
                  <item.icon className="h-5 w-5 text-accent-purple" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
                      Soon
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
