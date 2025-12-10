// src/components/ui/ProjectCard.tsx
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-50">
            {project.name}
          </h3>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            {project.role} · {project.category}
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-300">{project.shortDescription}</p>

      <ul className="mt-1 space-y-1.5 text-sm text-slate-300">
        {project.bullets.map((b, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-1 h-[6px] w-[6px] flex-none rounded-full bg-emerald-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
