export type HelpGuide = {
  slug: "abilities-and-hints" | "achievements";
  name: string;
  title: string;
  seoTitle: string;
  description: string;
  quickAnswer: string;
  hero: string;
  heroAlt: string;
  heroCaption: string;
};

export const helpGuides: HelpGuide[] = [
  {
    slug: "abilities-and-hints",
    name: "Abilities & Hints",
    title: "Shelve the Potions! Abilities & Hint System",
    seoTitle: "Shelve the Potions! Abilities & Hints — How the Cat System Works",
    description:
      "How the magical cat hint system works in Shelve the Potions: locate missing potions, highlight clues, reveal partial solutions, and when to use each without over-spoiling.",
    quickAnswer:
      "Pet a cat, then pick a help level. The game can point at a missing potion, light up clue items, or show part of an answer — with no timer or penalty for asking.",
    hero: "/img/hint-cat-960.webp",
    heroAlt:
      "The cat hint menu in Shelve the Potions listing options to locate items, highlight clues, and reveal solutions.",
    heroCaption:
      "Official store media showing the hint flow. Ability usage has no recorded cost or cooldown.",
  },
  {
    slug: "achievements",
    name: "Achievements",
    title: "Shelve the Potions! Achievements Guide",
    seoTitle: "Shelve the Potions! Achievements — All 24 & How to Earn Them",
    description:
      "All 24 Shelve the Potions achievements explained with what each one actually asks you to do, which shelves they tie into, and how many cats you must pet.",
    quickAnswer:
      "There are 24 achievements. Most come from completing shelf counts (1 / 25 / 50 / 100 / 150 / 200 / all), puzzle-order milestones (1 / 5 / 10 / all solutions), named boards (chess, clock, plant, chronicles, ingredients, spices), and petting cats (first + all 10).",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used in the achievements overview.",
    heroCaption:
      "Shelf-count progress feeds most achievements in the list.",
  },
];

export function getHelpGuide(slug: string) {
  return helpGuides.find((guide) => guide.slug === slug);
}

