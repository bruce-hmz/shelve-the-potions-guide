export type PuzzleGuide = {
  slug: "clock-puzzle" | "color-puzzle" | "chess-pieces";
  name: string;
  title: string;
  seoTitle: string;
  description: string;
  quickAnswer: string;
  hero: string;
  heroAlt: string;
  heroCaption: string;
  hint: string;
  rule: string;
  proposedSolution: string | null;
  solutionCaveat: string;
  steps: { title: string; text: string }[];
  mistakes: string[];
};

export const puzzleGuides: PuzzleGuide[] = [
  {
    slug: "clock-puzzle",
    name: "Clock Puzzle",
    title: "Shelve the Potions! Clock Puzzle Solution",
    seoTitle: "Shelve the Potions! Clock Puzzle Solution — Hint & Order",
    description:
      "Solve the Shelve the Potions clock puzzle with a spoiler-light hint, the ordering rule, and a clearly labeled provisional time sequence.",
    quickAnswer:
      "Restore the missing clock pieces before trying to order the shelf. The times are the clue; the proposed sequence below comes from one community guide and still needs release-build reproduction.",
    hero: "/img/clock-puzzle-1200.webp",
    heroAlt:
      "A clock-themed potion shelf with numbered bottles and a large clock face in Shelve the Potions.",
    heroCaption:
      "The clock shelf combines numbered bottles with time clues. Official Steam screenshot; exact order not independently verified.",
    hint:
      "Do not sort the visible bottles immediately. First look around the workshop for pieces that belong to the clock setup, return them, and then read the completed times.",
    rule:
      "Treat each restored time as part of the shelf sequence. The available evidence does not support ordinary numerical or clockwise sorting, so record the displayed times before moving bottles.",
    proposedSolution:
      "3:00 → 6:00 → 10:00 → 1:00 → 7:00 → 12:00 → 2:00 → 9:00",
    solutionCaveat:
      "Community-guide lead only. We have not reproduced this eight-time order in the release build, so use it as a check rather than a guaranteed answer.",
    steps: [
      { title: "Find the missing pieces", text: "Search nearby shelves and clue areas before changing the clock shelf." },
      { title: "Restore the clock", text: "Put the displaced clock pieces back so every required time can be read." },
      { title: "Write down the times", text: "Capture the complete sequence before moving potions; guessing while sorting makes errors harder to spot." },
      { title: "Check the proposed order", text: "Reveal the sequence below only after you have tried to derive the rule yourself." },
    ],
    mistakes: [
      "Assuming the bottles simply run from the earliest time to the latest.",
      "Trying to finish the shelf before every missing clock piece is restored.",
      "Treating the provisional community sequence as release-build verified.",
    ],
  },
  {
    slug: "color-puzzle",
    name: "Color Puzzle",
    title: "Shelve the Potions! Color Puzzle Solution",
    seoTitle: "Shelve the Potions! Color Puzzle Solution — Hint & Order",
    description:
      "Use the Shelve the Potions color chart with a gentle hint, rule explanation, and a provisional five-color sequence.",
    quickAnswer:
      "The color chart is the important clue. A community guide says to return the powders to the shelf and read a five-color order; that exact order is shown below as provisional, not verified.",
    hero: "/img/color-puzzle-1200.webp",
    heroAlt:
      "The in-game color reference board beside a cabinet of bright potions.",
    heroCaption:
      "Use the board as evidence for the color relationship instead of sorting by visual preference. Official Steam screenshot.",
    hint:
      "Look for the color reference board and any powders or objects that appear to belong with it. The shelf is asking you to apply a clue, not build a rainbow.",
    rule:
      "Return the clue items first, then use the board to translate them into a shelf order. The exact relationship still needs an in-game capture, so avoid claiming the sequence is simply hue, brightness, or alphabetic order.",
    proposedSolution: "Red → Blue → Yellow → Brown → Green",
    solutionCaveat:
      "Single-source solution lead. The official store confirms hidden-clue puzzles, but it does not publish this five-color sequence.",
    steps: [
      { title: "Find the reference board", text: "Use the chart beside the shelf as the primary clue instead of relying on bottle appearance alone." },
      { title: "Return the powders", text: "A community solution lead indicates that displaced powders complete the clue setup." },
      { title: "Read the relationship", text: "Match each clue item to the corresponding color before arranging the shelf." },
      { title: "Check the proposed sequence", text: "Reveal the five-color lead only if your reconstructed clue still does not resolve the shelf." },
    ],
    mistakes: [
      "Sorting the colors as a conventional rainbow without checking the board.",
      "Ignoring clue items that were moved elsewhere in the workshop.",
      "Publishing or sharing the proposed sequence without its provisional label.",
    ],
  },
  {
    slug: "chess-pieces",
    name: "Chess Pieces Puzzle",
    title: "Shelve the Potions! Chess Pieces Puzzle",
    seoTitle: "Shelve the Potions! Chess Pieces Puzzle — Hint & Solution Status",
    description:
      "Find the missing chess pieces in Shelve the Potions, restore the board, and understand what is known before revealing an unverified answer.",
    quickAnswer:
      "Return the displaced chess pieces to the board, then inspect the eight pieces that remain taken. Current research identifies that method but does not contain a reproducible final potion placement.",
    hero: "/img/chess-workshop-1200.webp",
    heroAlt:
      "A workshop shelf with bell jars, a white cat, and black chess pieces visible on the cabinet at upper right.",
    heroCaption:
      "The chess pieces are part of the workshop clue chain; the visible black piece sits near the cat in the upper-right cabinet. Official Steam screenshot.",
    hint:
      "Search outside the immediate shelf for lost chess pieces. The board state is incomplete, so solving it as a normal chess position too early will send you in the wrong direction.",
    rule:
      "Restore the missing pieces, then examine the eight pieces that are still taken. The available source describes this observation step, but not enough evidence exists to publish a dependable final placement.",
    proposedSolution: null,
    solutionCaveat:
      "No publishable full answer yet. We will add the exact placement only after it is reproduced in the release build with a clear board-state screenshot.",
    steps: [
      { title: "Locate displaced pieces", text: "Search the connected workshop area instead of limiting yourself to the chess board." },
      { title: "Restore the board", text: "Return the lost pieces before interpreting the position." },
      { title: "Inspect the eight taken pieces", text: "Use the remaining captured-piece pattern as the clue described by the current source." },
      { title: "Stop before guessing", text: "The final placement is not sufficiently documented; use the cat hint rather than inventing a conventional chess tactic." },
    ],
    mistakes: [
      "Assuming the incomplete board is already the intended puzzle state.",
      "Applying a familiar chess tactic without checking the workshop clue chain.",
      "Filling the evidence gap with an unverified final potion order.",
    ],
  },
];

export function getPuzzleGuide(slug: string) {
  return puzzleGuides.find((guide) => guide.slug === slug);
}
