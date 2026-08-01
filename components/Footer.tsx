import {Instagram} from "lucide-react";

const socials = [

  { icon: Instagram, href: "https://www.instagram.com/bhaumenepal?igsh=MTgzbTVnY2gyazFwaQ==", label: "Instagram" },


];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-display text-lg font-semibold">Bhaume</span>
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Bhaume. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <social.icon className="h-4 w-4" strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted">Made in Nepal 🇳🇵</p>
      </div>
    </footer>
  );
}
