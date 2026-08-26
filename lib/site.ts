export const site = {
  name: "Shelve the Potions! Guide",
  shortName: "Potion Shelf Guide",
  description:
    "A spoiler-controlled Shelve the Potions! walkthrough with clear puzzle hints, sorting rules, screenshots, and version-aware solution notes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shelvethepotions.guide",
  steamUrl: "https://store.steampowered.com/app/4928820/Shelve_the_Potions/",
  researchedAt: "2026-08-26",
  researchedAtLabel: "Aug 26, 2026",
  gameVersion: "Release build · numeric version not published",
} as const;
