"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initialState: WaitlistState = { status: "idle" };

const roles = [
  { value: "buyer", label: "Buyer" },
  { value: "seller", label: "Seller" },
  { value: "both", label: "Both" },
] as const;

export function Waitlist() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState);
  const [role, setRole] = useState<string>("buyer");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message ?? "You're on the list!");
      formRef.current?.reset();
      setRole("buyer");
    } else if (state.status === "error") {
      toast.error(state.message ?? "Something went wrong.");
    }
  }, [state]);

  return (
    <section id="waitlist" className="relative py-28 sm:py-36">
      <GradientBlobs className="opacity-70" />
      <div className="mx-auto max-w-xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard strong className="shimmer-border relative overflow-hidden p-8 sm:p-10">
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-blue">
                Early access
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Be first through the door
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Join the waitlist and we&apos;ll let you know the moment Bhaume opens in your city.
              </p>
            </div>

            <form ref={formRef} action={formAction} className="mt-8 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-accent-purple/50 focus:bg-white/[0.07] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-accent-purple/50 focus:bg-white/[0.07] focus:outline-none"
                />
              </div>

              <div>
                <span className="mb-1.5 block text-xs font-medium text-muted">I am a</span>
                <div className="grid grid-cols-3 gap-2">
                  {roles.map((r) => (
                    <label
                      key={r.value}
                      className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center text-sm font-medium transition-all ${
                        role === r.value
                          ? "border-accent-purple/60 bg-accent-purple/15 text-white"
                          : "border-white/10 bg-white/5 text-muted hover:bg-white/[0.07]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r.value}
                        checked={role === r.value}
                        onChange={() => setRole(r.value)}
                        className="sr-only"
                      />
                      {r.label}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3.5 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted">
                No spam. We&apos;ll only email you about launch.
              </p>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
