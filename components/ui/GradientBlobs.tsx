import { cn } from "@/lib/utils";

/**
 * Ambient, softly glowing blobs used behind hero/section content.
 * Pure CSS animation (see tailwind.config.ts `blob` keyframes) so it
 * never blocks the main thread — cheap enough to run continuously.
 */
export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute left-1/4 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-purple/30 blur-[120px] animate-blob" />
      <div className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-accent-blue/25 blur-[120px] animate-blob-slow" />
      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-accent-purple/20 blur-[110px] animate-blob-slow" />
    </div>
  );
}
