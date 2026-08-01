import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bhaume.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bhaume — Nepal's next-generation marketplace",
    template: "%s | Bhaume",
  },
  description:
    "Buy instantly, negotiate fairly, or win through live auctions — all in one trusted marketplace built for Nepal.",
  keywords: [
    "Bhaume",
    "Nepal marketplace",
    "buy and sell Nepal",
    "online auction Nepal",
    "make an offer",
    "e-commerce Nepal",
  ],
  authors: [{ name: "Bhaume" }],
  creator: "Bhaume",
  applicationName: "Bhaume",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bhaume",
    title: "Bhaume — Nepal's next-generation marketplace",
    description:
      "Buy instantly, negotiate fairly, or win through live auctions — all in one trusted marketplace built for Nepal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaume — Nepal's next-generation marketplace",
    description:
      "Buy instantly, negotiate fairly, or win through live auctions — all in one trusted marketplace built for Nepal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} dark`}>
      <body className="min-h-screen bg-background font-sans">
        {children}
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: "rgba(20,20,23,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
