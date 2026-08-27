export type GuidePage = {
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  status: "Research ready" | "Needs in-game check";
};

export const guidePages: GuidePage[] = [
  {
    title: "Shelve the Potions! Walkthrough",
    shortTitle: "Full walkthrough",
    href: "/walkthrough/",
    description:
      "Start with the clue, understand the sorting rule, then reveal the placement only when you need it.",
    image: "/img/hero-workshop-960.webp",
    imageAlt:
      "A wide view of the potion workshop with filled shelves, clue boards, and loose bottles on the floor.",
    eyebrow: "All puzzle help",
    status: "Research ready",
  },
  {
    title: "Clock Puzzle",
    shortTitle: "Clock puzzle",
    href: "/puzzles/clock-puzzle/",
    description:
      "Find the missing clock pieces, read the time clue, and check the proposed shelf order.",
    image: "/img/clock-puzzle-640.webp",
    imageAlt:
      "A clock-themed shelf in Shelve the Potions with numbered bottles and a clock face.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Color Puzzle",
    shortTitle: "Color puzzle",
    href: "/puzzles/color-puzzle/",
    description:
      "Use the workshop color chart to identify the rule before looking at the proposed sequence.",
    image: "/img/color-puzzle-640.webp",
    imageAlt:
      "The in-game color chart beside rows of colored potions in the workshop.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Chess Pieces Puzzle",
    shortTitle: "Chess pieces",
    href: "/puzzles/chess-pieces/",
    description:
      "Locate the displaced chess pieces, restore the board, and inspect the remaining pattern.",
    image: "/img/chess-pieces-640.webp",
    imageAlt:
      "A black chess piece beside a white cat and plant pots in the workshop.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Greek Letters Puzzle",
    shortTitle: "Greek letters",
    href: "/puzzles/greek-letters/",
    description:
      "Steam players keep asking where this clue lives. The answer is a set of four storybooks behind the desk.",
    image: "/img/hero-workshop-960.webp",
    imageAlt:
      "Wide view of the potion workshop used for the Greek letters puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Research ready",
  },
  {
    title: "Shelve the Potions! Moon Orientation Puzzle",
    shortTitle: "Moon orientation",
    href: "/puzzles/moon-orientation/",
    description:
      "The telescope clue changes faster than most players can track. Includes a community-recommended workaround.",
    image: "/img/steam-shot-03.jpg",
    imageAlt: "Workshop shelf used in the moon orientation guide cover.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Flower Ordering Puzzle",
    shortTitle: "Flower ordering",
    href: "/puzzles/flower-ordering/",
    description:
      "Color plus leaf count is the two-part key. Even after receiving the answer hint some players still reject the shelf.",
    image: "/img/steam-shot-05.jpg",
    imageAlt: "Workshop section used in the flower ordering guide cover.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Abilities & Hints",
    shortTitle: "Abilities & hints",
    href: "/help/abilities-and-hints/",
    description:
      "How the magical cat hint system works: locate missing potions, highlight clues, or reveal part of the answer.",
    image: "/img/hint-cat-960.webp",
    imageAlt:
      "The magical cat hint menu offering three tiers of help in Shelve the Potions!",
    eyebrow: "Help guide",
    status: "Research ready",
  },
  {
    title: "Shelve the Potions! Achievements Guide",
    shortTitle: "Achievements",
    href: "/help/achievements/",
    description:
      "All 24 achievements with real unlock percentages and how each one is earned, including the no-abilities run.",
    image: "/img/hero-workshop-960.webp",
    imageAlt:
      "A wide view of the potion workshop used in the achievements overview.",
    eyebrow: "Progress checklist",
    status: "Research ready",
  },
];
