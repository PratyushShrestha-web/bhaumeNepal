"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[92%] max-w-5xl"
    >
      <nav className="glass flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Bhaume
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#solution" className="transition-colors hover:text-white">
            Product
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-white">
            How it works
          </a>
          <a href="#coming-soon" className="transition-colors hover:text-white">
            Roadmap
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </div>
        <a
          href="#waitlist"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Join Waitlist
        </a>
      </nav>
    </motion.header>
  );
}
