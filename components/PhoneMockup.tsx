"use client";

import { motion } from "framer-motion";
import { Gavel, Tag, Zap, Heart, Timer } from "lucide-react";
import { useEffect, useState } from "react";

/** Live-looking countdown for the auction card — purely cosmetic, resets on loop. */
function useCountdown(seconds: number) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? seconds : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const m = Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0");
  const s = (remaining % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function PhoneMockup() {
  const countdown = useCountdown(212);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 6 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[320px] animate-float"
    >
      {/* Glow behind the phone */}
      <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-accent-purple/40 to-accent-blue/30 blur-3xl" />

      {/* Phone frame */}
      <div className="relative rounded-[2.75rem] border border-white/10 bg-[#0c0c0f] p-3 shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-3 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-black" />
        <div className="glass-strong overflow-hidden rounded-[2.25rem] p-4 pt-8">
          {/* Status row */}
          <div className="mb-4 flex items-center justify-between text-[11px] text-muted">
            <span>Bhaume</span>
            <span className="flex items-center gap-1 text-accent-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              Live
            </span>
          </div>

          {/* Product listing image */}
          <div className="relative mb-3 h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-accent-purple/40 via-[#1a1a1f] to-accent-blue/30">
            <div className="absolute inset-0 bg-grid-pattern bg-[length:16px_16px] opacity-30" />
            <button
              aria-label="Save listing"
              className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm"
            >
              <Heart className="h-4 w-4 text-white" />
            </button>
            <div className="absolute bottom-2.5 left-2.5 rounded-lg bg-black/50 px-2 py-1 text-[10px] font-medium backdrop-blur-sm">
              Vintage Leather Jacket
            </div>
          </div>

          {/* Price + auction countdown */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-muted">Current bid</p>
              <p className="font-display text-lg font-semibold">Rs. 4,500</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-accent-purple/30 bg-accent-purple/10 px-2.5 py-1.5">
              <Timer className="h-3.5 w-3.5 text-accent-purple" />
              <span className="font-mono text-xs font-medium text-accent-purple tabular-nums">
                {countdown}
              </span>
            </div>
          </div>

          {/* Action buttons: Bid, Offer, Buy Now */}
          <div className="grid grid-cols-3 gap-2">
            <button className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-[11px] font-medium transition-colors hover:bg-white/10">
              <Gavel className="h-4 w-4 text-accent-purple" />
              Bid
            </button>
            <button className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-[11px] font-medium transition-colors hover:bg-white/10">
              <Tag className="h-4 w-4 text-accent-blue" />
              Offer
            </button>
            <button className="flex flex-col items-center gap-1 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue py-2.5 text-[11px] font-semibold text-white shadow-glow">
              <Zap className="h-4 w-4" />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Floating secondary card: new offer notification */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="glass absolute -left-10 top-16 hidden w-44 rounded-2xl p-3 sm:block animate-float-delayed"
      >
        <p className="text-[10px] text-muted">New offer received</p>
        <p className="font-display text-sm font-semibold text-accent-blue">Rs. 4,200</p>
      </motion.div>

      {/* Floating secondary card: bidders count */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="glass absolute -right-8 bottom-24 hidden w-36 rounded-2xl p-3 sm:block animate-float"
      >
        <p className="text-[10px] text-muted">Active bidders</p>
        <p className="font-display text-sm font-semibold text-accent-purple">18 people</p>
      </motion.div>
    </motion.div>
  );
}
