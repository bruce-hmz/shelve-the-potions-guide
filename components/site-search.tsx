"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { guidePages } from "@/content/pages";
import { ArrowIcon, SearchIcon } from "@/components/icons";

export function SiteSearch() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return guidePages;
    return guidePages.filter((page) =>
      `${page.title} ${page.description}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  function openSearch() {
    dialogRef.current?.showModal();
    window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    });
  }

  function closeSearch() {
    dialogRef.current?.close();
    setQuery("");
  }

  return (
    <>
      <button
        className="search-trigger"
        type="button"
        aria-label="Search guides"
        onClick={openSearch}
      >
        <SearchIcon />
        <span>Search guides</span>
        <kbd>/</kbd>
      </button>

      <dialog className="search-dialog" ref={dialogRef} onClose={() => setQuery("")}>
        <div className="search-dialog__header">
          <div className="search-field">
            <SearchIcon />
            <label className="sr-only" htmlFor="site-search-input">
              Search guides
            </label>
            <input
              id="site-search-input"
              type="search"
              value={query}
              placeholder="Search clock, color, chess…"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button className="text-button" type="button" onClick={closeSearch}>
            Close
          </button>
        </div>

        <div className="search-results" aria-live="polite">
          <p className="search-results__count">
            {results.length} {results.length === 1 ? "guide" : "guides"}
          </p>
          {results.length ? (
            <ul>
              {results.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} onClick={closeSearch}>
                    <span>
                      <strong>{page.shortTitle}</strong>
                      <small>{page.eyebrow}</small>
                    </span>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="search-empty">No guide matches that search yet.</p>
          )}
        </div>
      </dialog>
    </>
  );
}
