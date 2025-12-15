"use client";

import {
  Home,
  Briefcase,
  Info,
  MessageCircle,
  Moon,
  Sun,
  CodeXml,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
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
    icon: MessageCircle,
  },
];

export function AppSidebar() {
  const { setTheme } = useTheme();

  return (
    <Sidebar
      collapsible="icon"
      className="relative h-screen shrink-0 border-r-sidebar"
    >
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/#home">
                <span className="text-xl">nickdoucette.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
              <span className="relative inline-flex h-[1.2rem] w-[1.2rem] items-center">
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-200 dark:hidden" />
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-200 hidden dark:block" />
              </span>

              <span className="text-md">Theme</span>
              <span className="sr-only">Toggle theme</span>
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="">
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="hover:cursor-pointer hover:bg-(--hover-option)"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="hover:cursor-pointer hover:bg-(--hover-option)"
            >
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
