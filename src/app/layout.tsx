import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://nickdoucette.dev"),
  title: {
    default: "Nick Doucette | Software Engineer",
    template: "%s | Nick Doucette",
  },
  description:
    "Full-stack Software Engineer specializing in React, TypeScript, Node.js, and MySQL. Based in Toronto, ON. Open to full-time roles and freelance projects.",

  keywords: [
    "Nick Doucette",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Toronto Software Developer",
    "Mississauga Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Nick Doucette", url: "https://nickdoucette.dev" }],
  creator: "Nick Doucette",
  publisher: "Nick Doucette",

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://nickdoucette.dev",
    siteName: "Nick Doucette | Software Engineer",
    title: "Nick Doucette | Software Engineer",
    description:
      "Full-stack Software Engineer specializing in React, TypeScript, Node.js, MySQL, and building scalable web apps.",
    images: [
      {
        url: "https://nickdoucette.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nick Doucette Portfolio Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nick Doucette | Software Engineer",
    description:
      "Full-stack developer specializing in React, TypeScript, Node.js, MySQL, and building intuitive web apps.",
    images: ["https://nickdoucette.dev/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://nickdoucette.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
