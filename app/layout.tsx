import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import "../styles/globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-tech",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-tech",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohamad-ajmal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ajmal Riswan — Software Developer",
    template: "%s | Ajmal Riswan",
  },
  description:
    "Portfolio of Ajmal Riswan, Software Developer, Mobile Application Developer, and Web Apps Developer from Sri Lanka specializing in backend systems, REST APIs, .NET, Node.js, and Android.",
  keywords: [
    "Ajmal Riswan",
    "Software Developer",
    "Mobile Application Developer",
    "Web Apps Developer",
    "Sri Lanka",
    ".NET Developer",
    "Node.js",
    "REST APIs",
    "C#",
    "Java",
    "Portfolio",
  ],
  authors: [{ name: "Ajmal Riswan", url: siteUrl }],
  creator: "Ajmal Riswan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ajmal Riswan — Software Developer",
    description:
      "Software Developer, Mobile Application Developer, and Web Apps Developer specializing in backend systems, REST APIs, and native mobile applications.",
    siteName: "Ajmal Riswan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajmal Riswan — Software Developer",
    description:
      "Software Developer, Mobile Application Developer, and Web Apps Developer specializing in backend systems, REST APIs, and native mobile applications.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${bebasNeue.variable} ${caveat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#09090B] text-white font-sans relative antialiased selection:bg-[#D81E28] selection:text-white"
      >
        {/* Interactive Cyberpunk Tracking Cursor */}
        <CustomCursor />

        {/* Subtle Ambient Micro-Animations Canvas & Tech Background Video */}
        <BackgroundAnimation />

        {/* Subtle SVG Grain Overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        <SmoothScrollProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
