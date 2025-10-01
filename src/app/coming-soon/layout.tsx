import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Prune - AI-Powered Enforcement Tools",
  description: "Exciting new AI-powered enforcement tools coming soon from Prune. Contact us to learn more about our upcoming features and early access.",
  keywords: [
    "Prune coming soon",
    "AI enforcement tools",
    "new features",
    "early access",
    "content moderation tools"
  ],
  openGraph: {
    title: "Coming Soon | Prune - AI-Powered Enforcement Tools",
    description: "Exciting new AI-powered enforcement tools coming soon from Prune. Contact us to learn more about our upcoming features and early access.",
    url: "https://prune.co/coming-soon",
    images: [
      {
        url: "https://prune.co/images/background.png",
        width: 1200,
        height: 630,
        alt: "Prune Coming Soon"
      }
    ]
  },
  twitter: {
    title: "Coming Soon | Prune - AI-Powered Enforcement Tools",
    description: "Exciting new AI-powered enforcement tools coming soon from Prune. Contact us to learn more about our upcoming features and early access.",
    images: ["https://prune.co/images/background.png"]
  }
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}