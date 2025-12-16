"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between h-16 border-b border-border">
      <SidebarTrigger className="hover:cursor-pointer" />
      <div>contactMeButton</div>
      {/* <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
        <SidebarTrigger className="absolute" />
        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden md:inline-block">
            <Button size="sm" className="rounded-full relative">
              Contact Me
            </Button>
          </Link>
        </div>
      </div> */}
    </nav>
  );
}
