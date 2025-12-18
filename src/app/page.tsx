"use client";

import { Button } from "@/components/ui/button";
import {} from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MainCard from "@/components/ui/MainCard"; // Adjust the path as needed

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold py-4">Dashboard</h1>
        <div className="flex items-center gap-3 py-4">
          <Button>View CV</Button>
          <Link
            href="https://www.linkedin.com/in/doucette-nick/"
            className="w-auto h-10 flex items-center justify-center opacity-50 hover:opacity-100 active:scale-95 transition-all duration-150"
          >
            <FaLinkedin className="w-8 h-8" />
          </Link>
          <Link
            href="https://github.com/nickdoucette24"
            className="w-auto h-10 flex items-center justify-center opacity-50 hover:opacity-100 active:scale-95 transition-all duration-150"
          >
            <FaGithub className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-4 gap-4">
        <MainCard />
        <div className="bg-card-background rounded-lg p-4">Test</div>
        <div className="bg-card-background rounded-lg p-4">Test</div>
        <div className="bg-card-background rounded-lg p-4">Test</div>
      </div>
    </div>
  );
}
