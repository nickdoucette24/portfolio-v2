"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

const personalData = {
  name: "Nick Doucette",
  title: "Full-Stack Developer",
  location: "Toronto, Ontario, Canada",
  dateOfBirth: "June 25th, 1996",
  yearsCoding: 3,
  totalProjects: 9,
};

const MainCard = () => {
  return (
    <Card className="flex flex-col overflow-hidden sm:flex-row sm:items-stretch bg-card-background">
      <div className="flex min-w-0 flex-col">
        <CardHeader className="pb-3">
          <CardDescription>Name</CardDescription>
          <CardTitle className="text-2xl font-semibold">
            {personalData.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="gap-3 flex flex-col">
          <div>
            <CardDescription>Title</CardDescription>
            <span className="text-md font-medium text-nowrap">
              {personalData.title}
            </span>
          </div>
          <div>
            <CardDescription>Location</CardDescription>
            <span className="text-md font-medium text-nowrap">
              {personalData.location}
            </span>
          </div>
          <div>
            <CardDescription>Date of Birth</CardDescription>
            <span className="text-md font-medium text-nowrap">
              {personalData.dateOfBirth}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          <div className="flex flex-col items-center gap-2">
            <CardDescription>Years Coding</CardDescription>
            <span className="text-3xl font-bold">
              {personalData.yearsCoding}
            </span>
          </div>
          <Separator
            orientation="vertical"
            className="mt-2 mx-3 border-l h-16 text-card-label rounded-full"
          />
          <div className="flex flex-col items-center gap-2">
            <CardDescription>Total Projects</CardDescription>
            <span className="text-3xl font-bold">
              {personalData.totalProjects}
            </span>
          </div>
        </CardFooter>
      </div>
      <div className="flex flex-1 min-w-0 justify-center lg:justify-end p-4">
        <div className="relative w-full max-w-[18rem] overflow-hidden rounded-lg min-h-64 sm:min-h-0 sm:max-w-[18rem] md:max-w-88 lg:max-w-104 xl:max-w-120">
          <Image
            src="/images/suit-headshot.jpeg"
            alt="Professional Headshot of Nick Doucette"
            fill
            className="object-cover object-top"
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 416px, (min-width: 768px) 352px, (min-width: 640px) 288px, 100vw"
          />
        </div>
      </div>
    </Card>
  );
};

export default MainCard;
