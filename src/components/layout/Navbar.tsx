"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between h-16 border-b border-border">
      <SidebarTrigger className="hover:cursor-pointer" />
      <Link href="#contact" className="hidden md:inline-block">
        <Button
          variant="outline"
          size="sm"
          className="rounded-md border-none relative hover:cursor-pointer hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors duration-150"
        >
          Contact Me
        </Button>
      </Link>
    </nav>
  );
}
