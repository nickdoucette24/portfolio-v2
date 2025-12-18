"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const MainCard = () => {
  return (
    <Card className=" flex bg-card-background rounded-lg border-none shadow-none hover:shadow-sm transition-all duration-250 ease-in-out">
      <div>
        <CardHeader>
          <CardDescription>Name</CardDescription>
          <CardTitle className="text-2xl font-semibold">
            Nick Doucette
          </CardTitle>
        </CardHeader>
        <CardContent className="gap-3 flex flex-col">
          <div>
            <CardDescription>Title</CardDescription>
            <span className="text-md font-medium text-nowrap">
              Full-Stack Developer
            </span>
          </div>
          <div>
            <CardDescription>Location</CardDescription>
            <span className="text-md font-medium text-nowrap">
              Toronto, Ontario, Canada
            </span>
          </div>
          <div>
            <CardDescription>Date of Birth</CardDescription>
            <span className="text-md font-medium text-nowrap">
              June 25th, 1996
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          <div className="flex flex-col items-center gap-2">
            <CardDescription>Years Coding</CardDescription>
            <span className="text-3xl font-bold">3</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CardDescription>Total Projects</CardDescription>
            <span className="text-3xl font-bold">9</span>
          </div>
        </CardFooter>
      </div>
      <Image
        src="/images/suit-headshot.jpeg"
        alt="Professional Headshot of Nick Doucette"
        width={250}
        height={250}
        className="p-4 rounded-3xl object-cover"
      />
    </Card>
  );
};

export default MainCard;
