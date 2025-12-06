import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Nick Doucette – Software Engineer",
  description:
    "Personal portfolio of me, Nick Doucette, a software engineer specializing in React, TypeScript, Node.js, and MySQL (MERN Stack).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
