// src/app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import SpotlightGrid from "@/components/SpotLightGrid";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WebWorks | Intelligent Web Solutions",
  description:
    "Empowering Your Business Through Intelligent Web Solutions. We push boundaries to deliver exceptional results for clients and partners.",
  authors: [{ name: "Ronnel Santos" }],
  icons: "/icon.png",
  openGraph: {
    title: "WebWorks | Intelligent Web Solutions",
    description:
      "Empowering Your Business Through Intelligent Web Solutions. We consistently deliver exceptional results.",
    url: "https://ronnelsantos.vercel.app/",
    siteName: "WebWorks",
    images: [
      {
        url: "https://ronnelsantos.vercel.app/banner.png",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://ronnelsantos.vercel.app/"),
  verification: {
    google: "hXad928N_Fbw9v8giZ9hObYm3JF3JmV-WmjMUPLrsgY",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WVSCWYWTWB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WVSCWYWTWB');
          `}
        </Script>
      </head>
      <body className="relative bg-gray-50 interactive-bg overflow-y-auto">
        <SpotlightGrid />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
