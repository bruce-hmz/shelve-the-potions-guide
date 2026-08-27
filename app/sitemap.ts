import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/walkthrough/",
    "/puzzles/clock-puzzle/",
    "/puzzles/color-puzzle/",
    "/puzzles/chess-pieces/",
    "/puzzles/greek-letters/",
    "/puzzles/moon-orientation/",
    "/puzzles/flower-ordering/",
    "/help/abilities-and-hints/",
    "/help/achievements/",
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: "2026-08-27",
  }));
}
