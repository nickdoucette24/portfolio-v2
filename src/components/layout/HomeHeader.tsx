"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-semibold py-4">Dashboard</h1>
      <div className="flex items-center gap-3 py-4">
        <Button asChild>
          <a
            href="/res/Nicholas%20Doucette%20-%20Software%20Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </Button>
        <Link
          href="https://www.linkedin.com/in/doucette-nick/"
          className="flex items-center justify-center opacity-50 active:scale-95 hover:opacity-100"
        >
          <FaLinkedin className="w-6 h-6 hover:fill-blue-500" />
        </Link>
        <Link
          href="https://github.com/nickdoucette24"
          className="flex items-center justify-center opacity-50 hover:opacity-100 active:scale-95 duration-150"
        >
          <FaGithub className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
