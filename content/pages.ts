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
    title: "Shelve the Potions! All Puzzle Solutions",
    shortTitle: "All solutions",
    href: "/walkthrough/all-puzzle-solutions/",
    description:
      "Every puzzle board in one place, grouped by how it is solved, with our verification status and guide links for each.",
    image: "/img/og-cover.jpg",
    imageAlt: "Cover image for the all-puzzle-solutions hub.",
    eyebrow: "Puzzle hub",
    status: "Research ready",
  },
  {
    title: "Shelve the Potions! First Room Walkthrough",
    shortTitle: "First room",
    href: "/walkthrough/first-room/",
    description:
      "Just finished the movement tutorial? The checklist on the left is your real objective list — here is how the first room works.",
    image: "/img/hero-workshop-960.webp",
    imageAlt:
      "A wide view of the potion workshop used for the first room walkthrough cover.",
    eyebrow: "Beginner walkthrough",
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
      "The clue is drawn on the corks of vials sitting on the tables — not on the shelf, and not in the storybooks behind the desk.",
    image: "/img/hero-workshop-960.webp",
    imageAlt:
      "Wide view of the potion workshop used for the Greek letters puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Research ready",
  },
  {
    title: "Shelve the Potions! Solitaire Cards Puzzle",
    shortTitle: "Solitaire cards",
    href: "/puzzles/solitaire-cards/",
    description:
      "A pattern-copy board with a card display as the answer key — and why an unpatched build makes it look unreadable.",
    image: "/img/hero-workshop-960.webp",
    imageAlt: "Wide view of the potion workshop used for the solitaire cards puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Compass Puzzle",
    shortTitle: "Compass",
    href: "/puzzles/compass/",
    description:
      "Find the compass-rose clue, read the direction sequence, and check the community-reported order — labeled as a single-source lead.",
    image: "/img/hero-workshop-960.webp",
    imageAlt: "Wide view of the potion workshop used for the compass puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Runes Puzzle (Four Storybooks)",
    shortTitle: "Runes",
    href: "/puzzles/runes-books/",
    description:
      "The desk's four storybooks hold the page-number symbols that order the rune bottles — and why they are not the Greek letters clue.",
    image: "/img/hero-workshop-960.webp",
    imageAlt: "Wide view of the potion workshop used for the runes puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Weather Forecast Puzzle",
    shortTitle: "Weather",
    href: "/puzzles/weather-forecast/",
    description:
      "The forecast display is the answer key — transcribe its icon sequence. Full order deliberately unpublished until verified.",
    image: "/img/hero-workshop-960.webp",
    imageAlt: "Wide view of the potion workshop used for the weather forecast puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Scales, Harp & Candelabra Puzzles",
    shortTitle: "Numbers trio",
    href: "/puzzles/scales-numbers/",
    description:
      "Three boards, one trick: reveal the hidden number readout first, then sort lowest to highest.",
    image: "/img/hero-workshop-960.webp",
    imageAlt: "Wide view of the potion workshop used for the reveal-the-numbers puzzles overview.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
  },
  {
    title: "Shelve the Potions! Number of Corners Puzzle",
    shortTitle: "Shapes",
    href: "/puzzles/number-of-corners/",
    description:
      "Count corners, sort ascending — no clue object, just a counting method that avoids the miscounts that reject the shelf.",
    image: "/img/hero-workshop-960.webp",
    imageAlt: "Wide view of the potion workshop used for the number of corners puzzle overview.",
    eyebrow: "Puzzle guide",
    status: "Needs in-game check",
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
    title: "No Magical Abilities — Achievement Run Guide",
    shortTitle: "No-abilities run",
    href: "/help/no-abilities-run/",
    description:
      "The run plan for the rarest achievement: the v1.0.11 toggle, what counts as an ability, what stays safe, and how to unstick yourself mid-run.",
    image: "/img/hint-cat-960.webp",
    imageAlt: "The magical cat hint menu used for the no-abilities run guide cover.",
    eyebrow: "Achievement guide",
    status: "Research ready",
  },
  {
    title: "Lost a Potion? Respawn Missing Bottles",
    shortTitle: "Missing potions",
    href: "/help/missing-potions/",
    description:
      "The pause menu respawns every unshelved potion back to its spawn point — plus where bottles hide and how to make a cat point at the one you lack.",
    image: "/img/hint-cat-960.webp",
    imageAlt: "The magical cat hint menu used for the missing potions guide cover.",
    eyebrow: "Help guide",
    status: "Research ready",
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
