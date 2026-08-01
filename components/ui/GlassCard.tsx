import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

/** Base glassmorphism surface reused across cards, the phone mockup, and the waitlist form. */
export function GlassCard({ className, strong, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl shadow-card",
        strong ? "glass-strong" : "glass",
        className
      )}
      {...props}
    />
  );
}
