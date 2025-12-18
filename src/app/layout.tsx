import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Manrope } from "next/font/google";

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

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html
      lang="en"
      className={`${manrope.className} tracking-wide font-light`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider
            className="flex justify-between"
            defaultOpen={defaultOpen}
          >
            <div className="flex w-full">
              <AppSidebar />
              <main className="flex-1 min-h-screen flex flex-col">
                <Navbar />
                <div className="px-4">{children}</div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
