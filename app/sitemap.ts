import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/walkthrough/",
    "/walkthrough/first-room/",
    "/walkthrough/all-puzzle-solutions/",
    "/puzzles/clock-puzzle/",
    "/puzzles/color-puzzle/",
    "/puzzles/chess-pieces/",
    "/puzzles/greek-letters/",
    "/puzzles/moon-orientation/",
    "/puzzles/flower-ordering/",
    "/puzzles/solitaire-cards/",
    "/puzzles/compass/",
    "/puzzles/runes-books/",
    "/puzzles/weather-forecast/",
    "/puzzles/scales-numbers/",
    "/puzzles/number-of-corners/",
    "/help/abilities-and-hints/",
    "/help/achievements/",
    "/help/missing-potions/",
    "/help/no-abilities-run/",
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: "2026-08-28",
  }));
}
