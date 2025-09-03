// src/app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import SpotlightGrid from "@/components/SpotLightGrid";
import Script from "next/script";
import { Alumni_Sans_Pinstripe, Russo_One } from "next/font/google";

const alumni = Alumni_Sans_Pinstripe({
  weight: "400", // this font only has 400
  style: ["normal", "italic"], // include italics
  subsets: ["latin"],
  variable: "--font-alumni",
});

const russo = Russo_One({
  weight: "400", // Russo One only comes in 400
  subsets: ["latin"],
  variable: "--font-russo",
});

export const metadata: Metadata = {
  title: "WebWorks | Intelligent Web Solutions",
  description:
    "Empowering Your Business Through Intelligent Web Solutions. We push boundaries to deliver exceptional results for clients and partners.",
  authors: [{ name: "Ronnel Santos" }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "WebWorks | Intelligent Web Solutions",
    description:
      "Empowering Your Business Through Intelligent Web Solutions. We consistently deliver exceptional results.",
    url: "https://ronnelsantos.vercel.app/",
    siteName: "WebWorks",
    images: [
      {
        url: "https://ronnelsantos.vercel.app/banner.webp",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://ronnelsantos.vercel.app/"),
  verification: {
    google: "hXad928N_Fbw9v8giZ9hObYm3JF3JmV-WmjMUPLrsgY",
  },
  appleWebApp: {
    title: "WebWorks",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${alumni.variable} ${russo.variable}`}
    >
      <head>
        {/* Favicon set */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Webworks" />


        {/* Manual meta description (for Lighthouse fallback) */}
        <meta
          name="description"
          content="Empowering Your Business Through Intelligent Web Solutions. We push boundaries to deliver exceptional results for clients and partners."
        />

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
