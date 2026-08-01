"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 sm:pt-28"
    >
      <GradientBlobs />

      {/* Faint grid backdrop for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-grid-pattern bg-[length:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-blue" />
            Launching soon in Nepal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            Buying and selling online{" "}
            <span className="text-gradient-accent">shouldn&apos;t be a hassle.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            Buy instantly, negotiate fairly, or win through live auctions —
            all in one trusted marketplace built for Nepal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#waitlist"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3.5 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03]"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solution"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-xs text-muted"
          >
            <span>Buy Now</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Make an Offer</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Live Auctions</span>
          </motion.div>
        </div>

        {/* Right: phone mockup */}
        <PhoneMockup />
      </div>

      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted sm:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
