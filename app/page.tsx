import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { ComingSoon } from "@/components/ComingSoon";
import { Waitlist } from "@/components/Waitlist";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ComingSoon />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
