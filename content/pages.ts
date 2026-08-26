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
];
