// src/components/home/Hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="border-b bg-gradient-to-b from-background to-background/80"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Software Engineer · Mississauga, ON
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Nick Doucette
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            I build reliable, data-driven web applications with{" "}
            <span className="font-semibold text-primary">
              React, TypeScript, Node.js, and SQL
            </span>
            .
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Recent experience on an integrations team working with POS partners,
            sales dispute tooling, Dockerized services, and Datadog
            observability.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="#projects">
              <Button className="rounded-full">View my work</Button>
            </Link>
            <Link href="/Nick-Doucette-Resume.pdf">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-muted-foreground/40"
              >
                Download resume
              </Button>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
              Contact me
            </Link>
          </div>

          {/* Tech stack */}
          <div className="mt-7 space-y-3 text-xs text-muted-foreground">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              Tech stack
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="rounded-xl border bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Frontend
                </p>
                <p className="mt-1 text-xs">
                  React, TypeScript, HTML, CSS, Tailwind/SCSS
                </p>
              </div>
              <div className="rounded-xl border bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Backend
                </p>
                <p className="mt-1 text-xs">Node.js, Express, PHP, REST APIs</p>
              </div>
              <div className="rounded-xl border bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Data & tooling
                </p>
                <p className="mt-1 text-xs">
                  MySQL, MongoDB, Docker, Datadog, Git
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side card */}
        <div className="mt-4 md:mt-0">
          <div className="rounded-2xl border bg-card/80 px-6 py-5 text-sm text-muted-foreground shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Currently
            </p>
            <p className="mt-2">
              Open to full-time software engineering roles and freelance web
              projects.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-background/80 px-3 py-2">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-1">Full-stack web apps</p>
              </div>
              <div className="rounded-lg bg-background/80 px-3 py-2">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Strengths
                </p>
                <p className="mt-1">Integrations & dashboards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
