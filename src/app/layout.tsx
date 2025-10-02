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
    default: "Prune | Using Frontier AI to Enforce the Law Online",
    template: "%s | Prune",
  },
  description:
    "AI-powered enforcement for the worst corners of the Internet.",
  keywords: [
    // Core enforcement terms
    "takedown automation",
    "AI takedowns",
    "content removal",
    "DMCA automation",
    "digital enforcement",
    "CSAM removal",
    "automated takedowns",
    "LLM enforcement",
    // Victim-focused terms (CSAM, NCII, etc.)
    "NCII takedown",
    "IBSA removal", 
    "Image Based Sexual Abuse",
    "NCM enforcement",
    "Sextortion response",
    "nonconsensual images removal",
    "revenge porn takedown service",
    "deepfake removal online",
    // Search behavior keywords
    "remove deepfake online",
    "how to report CSAM website",
    "lawyer for nonconsensual images",
    "stop harassment content online",
    "image removal from Google search",
    "child exploitation content reporting tool",
    "compliance tool for online platforms",
    "nudes leaked removal",
    "deepfake removal",
    "remove my pictures from site",
    "stop revenge porn",
    // Professional/legal terms
    "CSAM litigation support tools",
    "revenge porn lawyer tech",
    "ICAC task force tools",
    "cybercrime enforcement",
    "online safety compliance",
    "platform content moderation"
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
    title: "Prune | Using Frontier AI to Enforce the Law Online",
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
    title: "Prune | Using Frontier AI to Enforce the Law Online",
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
  // verification: {
  //   google: "your-google-site-verification-code-here",
  // },
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
        <title>Prune | Using Frontier AI to Enforce the Law Online</title>
        <meta name="theme-color" content="#18183B" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        {/* OG tags */}
        <meta
          property="og:title"
          content="Prune | Using Frontier AI to Enforce the Law Online"
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
          content="Prune | Using Frontier AI to Enforce the Law Online"
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

        {/* Schema.org JSON-LD markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://prune.co/#organization",
                  "name": "Prune",
                  "url": "https://prune.co",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://prune.co/images/logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "AI-powered enforcement for the worst corners of the Internet. Prune maps the infrastructure that enables and monetizes illegal content online.",
                  "foundingDate": "2023",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@prune.co",
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://twitter.com/prune"
                  ],
                  "areaServed": "Worldwide",
                  "knowsAbout": [
                    "AI enforcement",
                    "Digital exploitation",
                    "Content takedown automation",
                    "CSAM removal",
                    "NCII takedown",
                    "IBSA removal",
                    "Image Based Sexual Abuse",
                    "NCM enforcement", 
                    "Sextortion response",
                    "Shadow infrastructure mapping",
                    "Digital forensics",
                    "Revenge porn takedown",
                    "Deepfake removal",
                    "Nonconsensual images removal",
                    "Legal technology for prosecutors",
                    "ICAC task force support",
                    "Platform compliance tools"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://prune.co/#website",
                  "url": "https://prune.co",
                  "name": "Prune | Using Frontier AI to Enforce the Law Online",
                  "description": "AI-powered enforcement for the worst corners of the Internet.",
                  "publisher": {
                    "@id": "https://prune.co/#organization"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Service",
                  "@id": "https://prune.co/#service",
                  "name": "AI-Powered Content Enforcement",
                  "description": "Automated takedown tools that weaponize frontier AI models against illegal content proliferation, supporting law enforcement and litigators with digital forensics.",
                  "provider": {
                    "@id": "https://prune.co/#organization"
                  },
                  "areaServed": "Worldwide",
                  "serviceType": "Digital Enforcement Technology",
                  "audience": [
                    "Law Enforcement",
                    "Legal Professionals",
                    "Platform Operators",
                    "Digital Forensics Teams"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Prune Enforcement Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Automated Takedown Processing",
                          "description": "AI-powered tools for processing large-scale content takedowns with 97% faster removal times"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Infrastructure Mapping",
                          "description": "Digital forensics tools that map the financial infrastructure enabling illegal content online"
                        }
                      },
                      {
                        "@type": "Service",
                        "name": "Compliance Tools",
                        "description": "Platform and compliance tools for detecting and removing illegal content at scale"
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
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
