"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        {/* Left: logo / name */}
        <Link
          href="#home"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-primary"
        >
          nickdoucette<span className="text-primary">.</span>
        </Link>

        {/* Center: nav */}
        <nav className="hidden gap-6 text-xs font-medium text-muted-foreground md:flex">
          <Link href="#home" className="hover:text-primary">
            Home
          </Link>
          <Link href="#projects" className="hover:text-primary">
            Work
          </Link>
          <Link href="#about" className="hover:text-primary">
            About
          </Link>
        </nav>

        {/* Right: Contact + theme */}
        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden md:inline-block">
            <Button size="sm" className="rounded-full">
              Contact Me
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
