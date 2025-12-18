"use client";

import {
  Home,
  Briefcase,
  Info,
  Mail,
  Moon,
  Sun,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/#home",
    icon: Home,
  },
  {
    title: "Work",
    url: "/#work",
    icon: Briefcase,
  },
  {
    title: "About",
    url: "/#about",
    icon: Info,
  },
  {
    title: "Contact",
    url: "/#contact",
    icon: Mail,
  },
];

export function AppSidebar() {
  const { setTheme } = useTheme();

  return (
    <Sidebar
      collapsible="icon"
      className="rounded-br-lg relative h-screen shrink-0 border-none"
    >
      <SidebarHeader className="py-4 bg-sidebar-primary-header text-sidebar dark:text-sidebar-foreground rounded-tr-lg">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#home">
                <span className="text-xl tracking-normal">nickdoucette.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="ml-1.5">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="hover:cursor-pointer">
              <span className="relative inline-flex h-5 w-5 items-center">
                <Sun className="h-4 w-4 dark:hidden" />
                <Moon className="h-4 w-4 hidden dark:block" />
              </span>

              <span>Theme</span>
              <span className="sr-only">Toggle theme</span>
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-sidebar border-sidebar-border p-1.5"
          >
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="hover:cursor-pointer hover:bg-sidebar-accent"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="hover:cursor-pointer hover:bg-sidebar-accent"
            >
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
