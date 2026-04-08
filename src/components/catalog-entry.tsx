"use client";

import Link from "next/link";
import { Build } from "@/lib/data";

export function CatalogEntry({ build }: { build: Build }) {
  return (
    <Link
      href={`/builds/${build.slug}`}
      className="group block border-b border-border py-8 md:py-10 transition-colors hover:border-border-hover"
    >
      <div className="flex items-start gap-4 md:gap-8">
        {/* Number */}
        <span className="font-mono text-[11px] tracking-[0.15em] text-sage pt-1.5 md:pt-2 shrink-0 w-8">
          {build.number}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="font-display text-xl md:text-2xl text-ink group-hover:text-sage transition-colors duration-300">
                {build.name}
              </h2>
              <p className="mt-2 text-sm md:text-base text-stone leading-relaxed max-w-xl">
                {build.description}
              </p>
            </div>

            {/* Arrow */}
            <span
              className="shrink-0 mt-1.5 md:mt-2 text-stone opacity-0 -translate-x-2 
                         group-hover:opacity-100 group-hover:translate-x-0 
                         transition-all duration-300"
              aria-hidden="true"
            >
              →
            </span>
          </div>

          {/* Meta row */}
          <div className="mt-3 flex items-center gap-3">
            {build.status === "in-progress" && (
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-warm">
                In Progress
              </span>
            )}
            {build.url && (
              <span className="font-mono text-[10px] tracking-[0.1em] text-stone">
                {build.url.replace("https://", "").replace("www.", "")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Accent line on hover */}
      <div
        className="mt-6 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: build.accent }}
      />
    </Link>
  );
}
