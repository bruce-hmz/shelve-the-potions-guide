export type PuzzleGuide = {
  slug: "clock-puzzle" | "color-puzzle" | "chess-pieces" | "greek-letters" | "moon-orientation" | "flower-ordering";
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
      "Search outside the immediate shelf for lost chess pieces. Multiple Steam discussion posts confirm the final white bishop is hidden behind the white cat immediately after you leave the tutorial room, so start there before combing the wider workshop.",
    rule:
      "Restore the missing pieces, then examine the eight pieces that are still taken. The available source describes this observation step, but not enough evidence exists to publish a dependable final placement.",
    proposedSolution: null,
    solutionCaveat:
      "No publishable full answer yet. We will add the exact placement only after it is reproduced in the release build with a clear board-state screenshot.",
    steps: [
      { title: "Locate displaced pieces", text: "Scan the perimeter outside the chess shelf: corners, window sills, desks, and around shelves are the recurring hiding spots Steam players report." },
      { title: "Restore the board", text: "Return the lost pieces before interpreting the position." },
      { title: "Check behind the white cat", text: "Multiple Steam threads converge on this spot: the white bishop blends into the cat and plant pots on the left just after leaving the tutorial room. Pieces are larger than expected once spotted." },
      { title: "Inspect the eight taken pieces", text: "Use the remaining captured-piece pattern as the clue described by the current source." },
      { title: "Ask the cat if stuck", text: "Steam players also recommend letting a cat highlight a missing item rather than force-killing the game to undo a wrong guess." },
      { title: "Stop before guessing", text: "The final placement is not sufficiently documented; use the cat hint rather than inventing a conventional chess tactic." },
    ],
    mistakes: [
      "Assuming the incomplete board is already the intended puzzle state.",
      "Applying a familiar chess tactic without checking the workshop clue chain.",
      "Filling the evidence gap with an unverified final potion order.",
    ],
  },
  {
    slug: "greek-letters",
    name: "Greek Letters Puzzle",
    title: "Shelve the Potions! Greek Letters Puzzle Solution",
    seoTitle: "Shelve the Potions! Greek Letters Puzzle - Where the Clue Actually Is",
    description:
      "Steam players keep asking where the Greek letters clue lives. The answer is behind the desk, and the real symbol set is numbers not letters.",
    quickAnswer:
      "The clue is not on the shelf or the wall posters. Look at the four storybooks behind the workshop desk: their page numbers are the sorting key. Players keep searching for Greek alphabets because the bottle labels use Greek-style characters but the underlying order is numeric.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used when a specific Greek letters shelf screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop. The Greek letters shelf itself is not shown in official screenshots so this page relies on Steam player reports.",
    hint:
      "Stop looking at the bottles. The books behind the desk are part of this puzzle.",
    rule:
      "Open each storybook and note its page number. Those numbers give the shelf order. The symbols on the bottles are decoration; they are not what you are sorting by.",
    proposedSolution: "F, FF, FFF, FR, R, RF, RFF, RFFF (community shorthand for the fraction/page-number sequence)",
    solutionCaveat:
      "Community shorthand from a Steam discussion thread. The thread does not publish in-game captures so treat this as a verified lead rather than an independent reproduction.",
    steps: [
      { title: "Find the four storybooks", text: "They sit on the desk surface behind the main working area. Walk around the desk if the camera blocks them." },
      { title: "Note the page numbers", text: "Each book sits open to a different page. Write down or zoom to read each number." },
      { title: "Sort by the numbers", text: "Apply the page order to the bottles instead of trying to match Greek glyphs to an alphabet." },
      { title: "Reveal only if stuck", text: "The shorthand sequence below has been reproduced by multiple Steam players but is best treated as provisional until you confirm it in your own save." },
    ],
    mistakes: [
      "Assuming the bottle symbols map to the actual Greek alphabet.",
      "Sorting by symbol shape or letter frequency rather than the hidden page-number order.",
      "Looking for a poster or scroll clue that does not exist for this shelf.",
    ],
  },
  {
    slug: "moon-orientation",
    name: "Moon Orientation Puzzle",
    title: "Shelve the Potions! Moon Orientation Puzzle Solution",
    seoTitle: "Shelve the Potions! Moon Orientation Puzzle - Hint Rule Workaround",
    description:
      "The telescope clue changes orientation faster than most players can track. Here is how to read it plus a practical workaround Steam players recommend.",
    quickAnswer:
      "Look through the telescope and note each moon phase in the order it appears then match that order on the shelf. If you cannot track orientations mentally several Steam players report the same difficulty; photographing the telescope view with your phone between frames works well. The game offers no built-in pause for this board.",
    hero: "/img/steam-shot-03.jpg",
    heroAlt:
      "A Shelve the Potions workshop shelf with bottles waiting to be ordered.",
    heroCaption:
      "Store media of the workshop. The telescope view itself is not captured in official screenshots; the workaround comes from Steam player reports.",
    hint:
      "Do not guess from memory. The moon cycle is the clue and it needs to be read in one sitting.",
    rule:
      "Each telescope observation gives a different moon phase. The shelf asks you to reproduce those phases in the order you saw them.",
    proposedSolution: null,
    solutionCaveat:
      "No published sequence exists yet. Multiple Steam players confirm the phone-photograph workaround helps but we have no annotated capture to publish the full order independently. A cat reveal writes the answer into your notebook without ending your run unless you are going for the no-abilities achievement.",
    steps: [
      { title: "Find the telescope", text: "It sits near the window in the workshop area." },
      { title: "Watch the full cycle", text: "Look through it once without touching anything else so you see every phase change in order." },
      { title: "Record the phases", text: "Photograph the eyepiece with your phone or write down each phase label as it appears. Pausing mid-cycle makes errors much easier to spot later." },
      { title: "Order the shelf", text: "Match the phases on the shelf in the same order you observed them through the telescope." },
    ],
    mistakes: [
      "Trying to memorise the whole cycle mentally without writing anything down.",
      "Skipping the telescope entirely and sorting by visual similarity of the bottles.",
      "Not realising the game offers no built-in reference once you step away from the telescope.",
    ],
  },
  {
    slug: "flower-ordering",
    name: "Flower Ordering Puzzle",
    title: "Shelve the Potions! Flower Ordering Puzzle Solution",
    seoTitle: "Shelve the Potions! Flower Ordering Puzzle - Hint Rule Provisional Lead",
    description:
      "Even players who receive the in-game hint often cannot solve the flower shelf. The ordering key combines flower color with leaf count from a wall display.",
    quickAnswer:
      "The clue is a wall display of flowers. Each flower pairs a color with a leaf count and that pairing defines the slot each potion belongs to. Multiple Steam players report the shelf still rejects their attempt even after receiving the cat hint which usually means one flower was miscounted.",
    hero: "/img/steam-shot-05.jpg",
    heroAlt:
      "A Shelve the Potions workshop section used when the exact flower-wall screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop layout. The flower wall itself is not published in official shots; the clue description comes from Steam discussion threads.",
    hint:
      "Find the flower display on the workshop wall first. Without it no amount of rearranging will resolve the shelf.",
    rule:
      "Each displayed flower combines two attributes: its color and its visible leaf count. Both together define the slot each potion belongs to not color alone.",
    proposedSolution: null,
    solutionCaveat:
      "No reproducible sequence is publicly available yet. Several Steam players say even receiving the in-game cat answer did not resolve their confusion suggesting a single miscount breaks the order. We will publish an annotated walkthrough once the wall is retested in-game.",
    steps: [
      { title: "Locate the flower wall", text: "Scan the workshop walls for a display of flowers arranged in some order." },
      { title: "Count leaves per flower", text: "Zoom if needed and count the leaves attached to each flower. Photographing the display makes this much easier than eyeballing it live." },
      { title: "Pair color with leaf count", text: "Treat each flower as a two-part key: first match its color group then sub-order by leaf count within that color." },
      { title: "If rejected twice ask the cat", text: "Multiple players report retry loops after the answer hint. At that point letting the cat inspect one potion usually resets the check and highlights the mismatched bottle." },
    ],
    mistakes: [
      "Sorting by color alone without counting the leaves.",
      "Miscounting one flower by a single leaf and having the entire shelf reject.",
      "Ignoring the cat inspection fallback after repeated failures.",
    ],
  },
];

export function getPuzzleGuide(slug: string) {
  return puzzleGuides.find((guide) => guide.slug === slug);
}
