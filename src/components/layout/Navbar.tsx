"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { CircleSmall } from "lucide-react";

export function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between h-16 border-b border-border">
      <SidebarTrigger className="hover:cursor-pointer" />
      <div className="flex gap-4 items-center">
        <Badge
          variant="outline"
          className="hidden sm:flex border-2 h-7.5 px-2 border-navbar-badge text-background dark:text-navbar-badge bg-navbar-badge shadow-0 dark:bg-sidebar hover:cursor-default rounded-full"
        >
          <CircleSmall
            fill="lightgreen"
            className="mr-0.5 h-5 w-6 animate-pulse"
          />
          <span className="mr-1">Open to Work</span>
        </Badge>
        <Link href="#contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </nav>
  );
}
