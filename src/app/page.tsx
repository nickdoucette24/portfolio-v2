"use client";

import {} from "lucide-react";
import MainCard from "@/components/ui/MainCard"; // Adjust the path as needed
import HomeHeader from "@/components/layout/HomeHeader";

export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-4 pt-0 gap-4">
        <MainCard />
        <div className="bg-card-background rounded-lg p-4">Test</div>
        <div className="bg-card-background rounded-lg p-4">Test</div>
        <div className="bg-card-background rounded-lg p-4">Test</div>
      </div>
    </div>
  );
}
