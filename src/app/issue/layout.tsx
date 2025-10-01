import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prune - Fighting Digital Exploitation",
  description: "Learn about the proliferation of illegal content online and how Prune's AI-powered tools combat CSAM, trafficking content, and shadow infrastructure.",
  keywords: [
    "digital exploitation",
    "CSAM removal",
    "shadow infrastructure", 
    "content enforcement",
    "illegal content takedown",
    "AI content moderation",
    "trafficking content removal"
  ],
  openGraph: {
    title: "Prune - Fighting Digital Exploitation",
    description: "Learn about the proliferation of illegal content online and how Prune's AI-powered tools combat CSAM, trafficking content, and shadow infrastructure.",
    url: "https://prune.co/issue",
    images: [
      {
        url: "https://prune.co/images/background.png",
        width: 1200,
        height: 630,
        alt: "Fighting Digital Exploitation"
      }
    ]
  },
  twitter: {
    title: "Prune - Fighting Digital Exploitation", 
    description: "Learn about the proliferation of illegal content online and how Prune's AI-powered tools combat CSAM, trafficking content, and shadow infrastructure.",
    images: ["https://prune.co/images/background.png"]
  }
};

export default function IssueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}