"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Circle, CircleSmall } from "lucide-react";

export function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between h-16 border-b border-border">
      <SidebarTrigger className="hover:cursor-pointer" />
      <div className="flex gap-4">
        <Badge
          variant="outline"
          className="border-2 p-0.5 px-2 text-navbar-badge hover:cursor-default rounded-full"
        >
          <CircleSmall
            fill="lightgreen"
            className="mr-0.5 h-6 w-6 animate-pulse"
          />
          <span className="mr-1">Open to Work</span>
        </Badge>
        <Link href="#contact" className="hidden md:inline-block">
          <Button
            variant="outline"
            size="sm"
            className="rounded-md border-none relative hover:cursor-pointer hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors duration-150"
          >
            Contact Me
          </Button>
        </Link>
      </div>
    </nav>
  );
}
