import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Example of how to use local fonts - replace these with your actual font files
const avenir = localFont({
  src: "../../public/fonts/avenir-next-demi-bold.ttf",
  variable: "--font-main",
});

const times = localFont({
  src: "../../public/fonts/times-new-roman-italic.ttf",
  variable: "--font-mono",
});

const interfont = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["200", "400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prune.co"),
  title: {
    default: "Prune | Weaponizing LLMs Against Digital Exploitation",
    template: "%s | Prune",
  },
  description:
    "AI-powered enforcement for the worst corners of the Internet.",
  keywords: [
    "takedown automation",
    "brand protection",
    "intellectual property",
    "AI takedowns",
    "online brand protection",
    "content removal",
    "DMCA automation",
  ],
  authors: [{ name: "Prune" }],
  creator: "Prune",
  publisher: "Prune",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prune.co",
    siteName: "Prune",
    title: "Prune | Weaponizing LLMs Against Digital Exploitation",
    description:
      "AI-powered enforcement for the worst corners of the Internet.",
    images: [
      {
        url: "https://prune.co/images/background.png",
        width: 1200,
        height: 630,
        alt: "Prune - Automating The Takedowns Lifecycles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prune | Weaponizing LLMs Against Digital Exploitation",
    description:
      "AI-powered enforcement for the worst corners of the Internet.",
    images: ["https://prune.co/images/background.png"],
    creator: "@prune",
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
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://prune.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Prune | Weaponizing LLMs Against Digital Exploitation</title>
        <meta name="theme-color" content="#18183B" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* OG tags */}
        <meta
          property="og:title"
          content="Prune | Weaponizing LLMs Against Digital Exploitation"
        />
        <meta
          property="og:description"
          content="AI-powered enforcement for the worst corners of the Internet."
        />
        <meta
          property="og:image"
          content="https://prune.co/images/background.png"
        />
        <meta property="og:url" content="https://prune.co" />
        <meta property="og:type" content="website" />

        {/* Twitter card fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prune | Weaponizing LLMs Against Digital Exploitation"
        />
        <meta
          name="twitter:description"
          content="AI-powered enforcement for the worst corners of the Internet."
        />
        <meta
          name="twitter:image"
          content="https://prune.co/images/background.png"
        />
        <meta name="twitter:creator" content="@prune" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${interfont.variable} ${avenir.variable} ${times.variable} antialiased overflow-x-clip`}
      >
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
