import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | Prune - AI-Powered Content Enforcement",
  description: "Meet the team behind Prune's AI-powered enforcement tools. Led by CEO Justine Li, CTO Linus Mixson, and Lead Engineer Michael Smith.",
  keywords: [
    "Prune team",
    "AI enforcement team", 
    "takedown automation experts",
    "content moderation leadership",
    "digital enforcement professionals"
  ],
  openGraph: {
    title: "Meet Our Team | Prune - AI-Powered Content Enforcement",
    description: "Meet the team behind Prune's AI-powered enforcement tools. Led by CEO Justine Li, CTO Linus Mixson, and Lead Engineer Michael Smith.",
    url: "https://prune.co/team",
    images: [
      {
        url: "https://prune.co/images/background.png",
        width: 1200,
        height: 630,
        alt: "Prune Team"
      }
    ]
  },
  twitter: {
    title: "Meet Our Team | Prune - AI-Powered Content Enforcement",
    description: "Meet the team behind Prune's AI-powered enforcement tools. Led by CEO Justine Li, CTO Linus Mixson, and Lead Engineer Michael Smith.",
    images: ["https://prune.co/images/background.png"]
  }
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}