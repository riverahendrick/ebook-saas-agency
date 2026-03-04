import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Zero-Cost Agency | Build a 6-Figure Agency With Zero Overhead",
  description: "Stop paying for expensive SaaS tools. Learn how to deploy AI agents, automate client acquisition, and collect payments using open-source infrastructure.",
  keywords: ["Zero-Cost Agency", "AI Agents", "Automate Client Acquisition", "Open Source SaaS", "Playwright Scraping", "Stripe Integration", "B2B Lead Generation"],
  authors: [{ name: "Hendrick Rivera", url: "https://twitter.com/hendrickrivera" }],
  openGraph: {
    title: "The Zero-Cost Agency | Build a 6-Figure Agency With Zero Overhead",
    description: "Learn how to deploy AI agents, automate client acquisition with Playwright, and collect payments via Stripe—all using open-source and free-tier infrastructure.",
    url: "https://zerocostagency.com",
    siteName: "ZeroCost.",
    images: [
      {
        url: "https://zerocostagency.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Zero-Cost Agency eBook Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Zero-Cost Agency",
    description: "Build a 6-Figure Agency With Zero Overhead. Automate everything. Pay nothing.",
    creator: "@hendrickrivera",
    images: ["https://zerocostagency.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "The Zero-Cost Agency",
  author: {
    "@type": "Person",
    name: "Hendrick Rivera"
  },
  description: "Learn how to deploy AI agents, automate client acquisition with Playwright, and collect payments via Stripe—all using open-source and free-tier infrastructure.",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  },
  publisher: {
    "@type": "Organization",
    name: "ZeroCost"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
