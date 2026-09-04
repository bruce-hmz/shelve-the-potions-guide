export type PuzzleGuide = {
  slug: "clock-puzzle" | "color-puzzle" | "chess-pieces" | "greek-letters" | "moon-orientation" | "flower-ordering" | "solitaire-cards" | "compass" | "runes-books" | "weather-forecast" | "scales-numbers" | "number-of-corners";
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
    seoTitle: "Shelve the Potions! Clock Puzzle Solution — Hint, Order & Clock Hand Location",
    description:
      "Solve the Shelve the Potions clock puzzle: where the second long clock hand hides, a spoiler-light hint, the ordering rule, and a clearly labeled provisional time sequence.",
    quickAnswer:
      "Restore the missing clock pieces before trying to order the shelf. Can't find the second long clock hand? Hold a time potion and ask a cat to show all the needed items — the developer's own tip — or check the room's columns first: the developer has confirmed the hand sits around one of them, leaning against it. The times are the clue; the proposed sequence below comes from one community guide and still needs release-build reproduction.",
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
      { title: "Can't find the second long clock hand?", text: "You are not alone — this exact question has come up on the Steam forum repeatedly, most recently 29 Aug, and the developer answered it again. The developer's tip: hold a time potion and ask the Cat to show all the needed items. The developer has also now confirmed the hand's hiding spot in two separate threads: it sits around one of the room's columns, leaning against it — so check the columns before sweeping the whole workshop." },
      { title: "Restore the clock", text: "Put the displaced clock pieces back so every required time can be read." },
      { title: "Write down the times", text: "Capture the complete sequence before moving potions; guessing while sorting makes errors harder to spot." },
      { title: "Check the proposed order", text: "Reveal the sequence below only after you have tried to derive the rule yourself. Finishing this board also unlocks the \"Proud Grandfather\" achievement." },
    ],
    mistakes: [
      "Assuming the bottles simply run from the earliest time to the latest.",
      "Trying to finish the shelf before every missing clock piece is restored.",
      "Rescanning the entire room by eye for the clock hand instead of holding a time potion and letting the cat mark the parts.",
      "Searching for the hand standing upright on a shelf — the developer places it around a column, leaning against it.",
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
      { title: "Colors look identical?", text: "Players repeatedly flag pink vs red, white vs beige and purple vs dark blue as hard to tell apart — the third pair surfaced in a 30 Aug Steam review. Before fighting the shelf, check the options menu — the developer's FAQ confirms colorblind support \"plus a lot more of accessibility options\" — and zoom in on the bottles (Ctrl on keyboard, right stick on controller; both developer-confirmed, and collected in our settings & comfort guide). Then lean on the chart, not your eyes, for the ambiguous pairs." },
      { title: "Check the proposed sequence", text: "Reveal the five-color lead only if your reconstructed clue still does not resolve the shelf." },
    ],
    mistakes: [
      "Sorting the colors as a conventional rainbow without checking the board.",
      "Trusting your eyes on the pink/red, white/beige and purple/dark-blue pairs that players report look nearly identical.",
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
    seoTitle: "Shelve the Potions! Greek Letters Puzzle — Where the Clue Actually Is",
    description:
      "The Greek letters clue is not on the shelf: it is drawn on the corks of vials sitting on the workshop tables. Hint, rule, and the community-checked bottle order — plus the storybook mix-up to avoid.",
    quickAnswer:
      "Scan the tables, not the shelf: small chemistry vials sitting on them carry the Greek-style symbols on their corks, and there are two sets of vials to find. The community-checked order is γ, ε, α, η, β, ζ, θ, δ. Watch out for a common mix-up — the four storybooks behind the desk belong to a different (runes) shelf, a mistake even Steam players make.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used when a specific Greek letters shelf screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop. The vial corks themselves are not shown in official screenshots; the clue location comes from a developer-answered Steam thread.",
    hint:
      "Stop looking at the shelf and the wall posters. Search the tables for something chemistry-related — small vials — and read their corks.",
    rule:
      "Each vial's cork carries one of the Greek-style symbols, and the vials come in two sets. Reading the corks across both sets gives you the shelf order; the symbols are not sorted by their place in the Greek alphabet.",
    proposedSolution: "γ, ε, α, η, β, ζ, θ, δ",
    solutionCaveat:
      "Community-checked order from a Steam thread where the developer also participated, and it matches independent community guides. We have not yet reproduced it in our own save, so treat it as a strong lead rather than a guaranteed answer.",
    steps: [
      { title: "Scan the tables for vials", text: "The developer's own hint points at \"some item over tables around the level\", and players narrow it further: small vials related to chemistry, sitting on the tables." },
      { title: "Read the corks", text: "Each symbol you need is drawn on a vial's cork, not on the bottles you are shelving." },
      { title: "Find both sets", text: "Players count two sets of vials; a shelf that rejects half a correct order usually means you read only one set." },
      { title: "Order the shelf", text: "Apply the cork order to the bottles instead of sorting the symbols as if they were the alphabet." },
      { title: "If stuck, hold a potion and ask the cat", text: "The developer's suggested fallback: hold a Greek potion, talk to a cat, and ask it to highlight helpful objects or reveal the full solution." },
    ],
    mistakes: [
      "Sorting the symbols by their position in the Greek alphabet — the shelf rejects that order.",
      "Using the four storybooks behind the desk: their page numbers solve the runes shelf, a different board. This mix-up happened on the Steam forum too.",
      "Hunting for a poster or scroll clue that does not exist for this shelf.",
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
      "Look through the telescope and note each moon phase in the order it appears then match that order on the shelf. The phase images are deliberately similar — players report being unable to memorise the pattern while shelving — so photograph each frame and zoom in (Ctrl on keyboard, right stick on controller) before comparing. If you cannot track orientations mentally several Steam players report the same difficulty; the phone-photo workaround works well. The game offers no built-in pause for this board.",
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
      { title: "Can't tell the phases apart?", text: "You are not alone — a 27 Aug Steam review calls the images 'too similar to each other to memorize the pattern when shelving'. Two things help: zoom in before comparing (Ctrl on keyboard, right stick on controller — both developer-confirmed, and collected in our settings & comfort guide), and compare the two attributes that actually change from phase to phase — how much of the disc is lit, and which side the light sits on — instead of judging each image as a whole. Keep your photo or notes next to you while you sort; that is what the review's 'memorize' struggle is asking you not to do." },
      { title: "Order the shelf", text: "Match the phases on the shelf in the same order you observed them through the telescope." },
    ],
    mistakes: [
      "Trying to memorise the whole cycle mentally without writing anything down.",
      "Trusting a quick glance between near-identical phase images — a 27 Aug Steam review calls the images 'too similar to memorize the pattern when shelving'; zoom in (Ctrl / right stick) or photograph each frame instead.",
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
      { title: "Certain the order is right but it keeps saying wrong?", text: "The developer confirmed this is the wrong-order rejection, not a bug: \"if it says its wrong then your solution to the puzzle is wrong\" — re-verify the two-part key (color plus leaf count for every flower) and try again, because one miscount rejects the whole shelf. The cat hint can help while the board is still unsolved, but not once flowers are placed — that is the missing-flower case below. The developer declined to share the sequence and pointed players to the cat or community guides, which is why this page stays methodology-only." },
      { title: "Already solved but a flower seems missing?", text: "That flower is not lost. Placed flowers cannot be picked back up and the cat hint only works while the board is unsolved — the week 7/8 flower is lying on its side near the weather globe, where it reads as a random potion. Our missing potions guide has the full story." },
    ],
    mistakes: [
      "Sorting by color alone without counting the leaves.",
      "Miscounting one flower by a single leaf and having the entire shelf reject.",
      "Assuming the shelf is bugged after a confident order is rejected — the developer confirmed a 'wrong' message always means the order is wrong, so re-count every flower's leaves instead of restarting the game.",
      "Ignoring the cat inspection fallback after repeated failures.",
      "Hunting for a lost week 7/8 flower after the shelf is already solved — it is on its side near the weather globe, not in a hiding spot.",
    ],
  },
  {
    slug: "solitaire-cards",
    name: "Solitaire Cards Puzzle",
    title: "Shelve the Potions! Solitaire Cards Puzzle",
    seoTitle: "Shelve the Potions! Solitaire Cards Puzzle — Hint & the Readability Fix",
    description:
      "The solitaire card shelf is a pattern-copy board. If the cards look illegible, patch v1.0.9 specifically made this board more readable — plus a gentle hint and how to approach it.",
    quickAnswer:
      "This shelf is a pattern-copy board: a card display somewhere in the workshop shows the order, and the shelf asks you to reproduce it. If the cards look too small or blurry to read, update your game first — the day-one patch (v1.0.9) specifically made this board more readable. No verified card order has been published yet, and we will not guess one.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used when a specific solitaire cards screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop. The card display itself is not captured in official screenshots; the board description comes from community puzzle guides and patch notes.",
    hint:
      "Do not stare at the shelf. Somewhere in the workshop there is a card display laid out like a solitaire hand — finding it is the whole puzzle.",
    rule:
      "The card layout is the answer key: each card position maps to a bottle slot. Your job is to transcribe the pattern, not to play solitaire rules.",
    proposedSolution: null,
    solutionCaveat:
      "No verified sequence is published anywhere we would cite. We will add the order only after reproducing it in the release build with a clear board-state screenshot.",
    steps: [
      { title: "Update the game first", text: "The day-one patch (v1.0.9) specifically \"made the cards puzzle a bit more readable\" — on the launch build this board was noticeably harder to read." },
      { title: "Find the card display", text: "Scan the workshop for a spread of cards laid out like a solitaire hand. It is your answer key." },
      { title: "Transcribe the pattern", text: "Note the card order position by position before touching any bottles; a phone photo of the display makes checking easier." },
      { title: "Reproduce it on the shelf", text: "Place the bottles to match the card pattern you recorded." },
      { title: "If stuck, hold a potion and ask the cat", text: "Hold a bottle from this set and ask a cat to highlight helpful objects or reveal the solution." },
    ],
    mistakes: [
      "Squinting at an unpatched build — install v1.0.9 or later before deciding the cards are unreadable.",
      "Applying actual solitaire rules; the layout is a static answer key, not a card game.",
      "Guessing an order to avoid the cat hint and then losing track of which position was wrong.",
    ],
  },
  {
    slug: "compass",
    name: "Compass Puzzle",
    title: "Shelve the Potions! Compass Puzzle Solution",
    seoTitle: "Shelve the Potions! Compass Puzzle — Hint, Rule & Direction Order",
    description:
      "A gentle hint for the Shelve the Potions compass shelf: find the compass-rose clue, read the direction sequence, and check the community-reported order — clearly labeled as a single-source lead.",
    quickAnswer:
      "The compass shelf is a sequence board: a compass-rose clue in the workshop gives you an order of directions, and the shelf asks you to reproduce it. A community guide reports the order E, W, NE, SE, N, NW, SW, S — a single-source lead we have not reproduced in-game yet, so treat it as a check rather than a guarantee.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used when a specific compass shelf screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop. The compass clue itself is not captured in official screenshots; the sequence comes from one community puzzle guide.",
    hint:
      "Look for a compass-rose style display in the workshop. The directions are read in a specific order — that order is the shelf order.",
    rule:
      "Reproduce the direction sequence exactly as the clue presents it. The bottles are not sorted by any property of their own; the clue display is the entire answer key.",
    proposedSolution: "E, W, NE, SE, N, NW, SW, S",
    solutionCaveat:
      "Single community-guide source. It is consistent with how the game's other sequence boards work, but we have not reproduced it in the release build — use it to check an order you derived yourself.",
    steps: [
      { title: "Find the compass clue", text: "Scan the workshop walls and desks for a compass-rose display before touching the shelf." },
      { title: "Read the direction order", text: "Note the sequence exactly as presented, first entry to last. Photographing it makes checking easier." },
      { title: "Apply it to the shelf", text: "Place the direction-marked bottles in the order you read — not by any visual pattern on the bottles." },
      { title: "Verify against the lead below", text: "If your own reading disagrees with the community sequence, trust your in-game reading and re-check the clue, not the shelf." },
    ],
    mistakes: [
      "Sorting bottles by north-to-south or clockwise instinct instead of the clue's presented order.",
      "Skipping the clue display and shuffling by eye.",
      "Treating the community sequence as verified — it is a single-source lead until reproduced.",
    ],
  },
  {
    slug: "runes-books",
    name: "Runes Puzzle (Four Storybooks)",
    title: "Shelve the Potions! Runes Puzzle Solution",
    seoTitle: "Shelve the Potions! Runes Puzzle — The Four Storybooks Behind the Desk",
    description:
      "The rune shelf's clue is the four storybooks behind the workshop desk: their page numbers are the symbols. Hint, rule, and the community-checked order — plus why this is not the Greek letters shelf.",
    quickAnswer:
      "The clue is not on the shelf: four storybooks behind the workshop desk sit open to different pages, and those page numbers are the symbols on the rune bottles. Two independent sources report the order F, FF, FFF, FR, R, RF, RFF, RFFF — community shorthand for the page-number sequence. Important: this is a different board from the Greek letters shelf, whose clue lives on the vials' corks.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used when a specific rune shelf screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop. The storybooks themselves are not captured in official screenshots; the clue description comes from a Steam thread and community guides.",
    hint:
      "Walk behind the workshop desk. Four storybooks sit there, open to different pages — that is your answer key.",
    rule:
      "Match each rune symbol on the bottles to a page number in the storybooks, then order the bottles by those numbers. The symbols are not sorted by shape; they are page markers.",
    proposedSolution: "F, FF, FFF, FR, R, RF, RFF, RFFF (community shorthand for the page-number order)",
    solutionCaveat:
      "Reported in a Steam discussion and matched by an independent community guide — the strongest community corroboration of any provisional sequence on this site, but still not reproduced by us in-game.",
    steps: [
      { title: "Go behind the desk", text: "The four storybooks sit on the desk surface behind the main working area; walk around if the camera blocks them." },
      { title: "Note the page numbers", text: "Each book sits open to a different page. Zoom or photograph so you can read every number." },
      { title: "Match runes to pages", text: "Treat each bottle's rune as a page marker and order the bottles by the storybooks' page numbers." },
      { title: "Check the shorthand below", text: "Reveal the community sequence only after deriving your own order from the books." },
      { title: "Solving the Greek letters shelf instead?", text: "Wrong guide — that board's clue is the corks of the vials on the tables. This mix-up is common enough that Steam players make it too." },
    ],
    mistakes: [
      "Using the storybooks for the Greek letters shelf — their vial corks, not these books, hold that answer.",
      "Sorting rune symbols by shape similarity instead of matching them to page numbers.",
      "Reading only part of the books; a rejected shelf usually means one page number was missed.",
    ],
  },
  {
    slug: "weather-forecast",
    name: "Weather Forecast Puzzle",
    title: "Shelve the Potions! Weather Forecast Puzzle",
    seoTitle: "Shelve the Potions! Weather Forecast Puzzle — Hint & Approach",
    description:
      "A gentle hint for the Shelve the Potions weather forecast shelf: find the forecast display, read its sequence, and reproduce it — with our verification status stated honestly.",
    quickAnswer:
      "The weather shelf is a pattern-copy board: a forecast display somewhere in the workshop lays out a sequence of weather icons, and the shelf asks you to reproduce that order. Community guides list the opening icons (a tornado leads the sequence), but we are not publishing a full order we cannot verify — no verified sequence appears below.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used when a specific weather forecast screenshot is unavailable.",
    heroCaption:
      "Store media showing the workshop. The forecast display itself is not captured in official screenshots; the board description comes from community puzzle guides.",
    hint:
      "Look for a forecast board or wall display with weather icons arranged in a row. That display is the answer key, not the shelf.",
    rule:
      "Reproduce the icon sequence from the forecast display exactly, first icon to last. Nothing about the bottles themselves tells you the order.",
    proposedSolution: null,
    solutionCaveat:
      "Community guides agree the sequence starts with a tornado icon, but we have not verified the complete order. We publish the full sequence only after reproducing it in the release build.",
    steps: [
      { title: "Find the forecast display", text: "Scan the workshop for a board of weather icons laid out in a row before touching any bottles." },
      { title: "Transcribe the order", text: "Write down or photograph the icons first-to-last; guesswork between two similar icons is what usually rejects the shelf." },
      { title: "Reproduce it on the shelf", text: "Match each weather-marked bottle to its icon position in the sequence." },
      { title: "If stuck, hold a potion and ask the cat", text: "Hold a bottle from this set and ask a cat to highlight helpful objects or reveal the solution." },
    ],
    mistakes: [
      "Sorting bottles by what weather feels adjacent (sun before rain, and so on) instead of reading the display's actual order.",
      "Misreading one icon in the middle of the sequence and trying to fix the shelf by shuffling both ends.",
      "Expecting the sequence below — for this board we deliberately publish none until it is verified.",
    ],
  },
  {
    slug: "scales-numbers",
    name: "Reveal-the-Numbers Puzzles (Scales · Harp · Candelabra)",
    title: "Shelve the Potions! Scales, Harp & Candelabra Puzzles",
    seoTitle: "Shelve the Potions! Scales, Harp & Candelabra — Reveal the Numbers, Then Sort",
    description:
      "Three Shelve the Potions boards share one trick: a hidden readout must be revealed first, then the bottles sort lowest to highest. How the family works and where players get stuck.",
    quickAnswer:
      "The scales, harp, and candelabra shelves are one family: each has a hidden number readout you must find and reveal first, and only then does the shelf become a simple lowest-to-highest sort. Players who reject these shelves almost always skipped the reveal step and tried to sort by eye.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used for the reveal-the-numbers puzzle family overview.",
    heroCaption:
      "Store media showing the workshop. The three readout objects are not captured in official screenshots; the family description comes from community puzzle guides.",
    hint:
      "Do not sort yet. Each of these boards hides a number readout somewhere in the room — a scale with a reading, a harp, a candelabra with a count. Find it first.",
    rule:
      "Reveal or read the hidden numbers, then order the bottles lowest to highest. The sort itself is trivial; the entire puzzle is surfacing the numbers.",
    proposedSolution: null,
    solutionCaveat:
      "No fixed sequence to publish — the correct order is whatever your readout shows, sorted ascending. We document the method because that reveal step is where players get stuck, not the sorting.",
    steps: [
      { title: "Identify the readout object", text: "For the scales board it is a scale with a reading; the harp and candelabra families work the same way with their own objects. Scan the room, not the shelf." },
      { title: "Reveal the numbers", text: "Interact or read carefully enough to note every value. Photographing the readout makes the next step error-proof." },
      { title: "Sort lowest to highest", text: "With the numbers in hand, order the bottles ascending. For the harp, community guides describe a note sequence after the numbers — read what your harp actually shows." },
      { title: "If a shelf rejects, re-read the numbers", text: "A rejected sort on these boards almost always means one value was misread, not that the sorting logic is different." },
    ],
    mistakes: [
      "Sorting by bottle appearance and treating a rejection as a wrong rule — the rule is always ascending; the numbers were just never read.",
      "Mixing up which readout belongs to which shelf when several of these boards are active at once.",
      "Skipping the photograph and misreading a single value mid-list.",
    ],
  },
  {
    slug: "number-of-corners",
    name: "Number of Corners Puzzle (Shapes)",
    title: "Shelve the Potions! Number of Corners Puzzle",
    seoTitle: "Shelve the Potions! Number of Corners (Shapes) Puzzle — Count, Then Sort",
    description:
      "The shapes shelf sorts by each polygon's corner count, lowest to highest. Why players miscount it, and the practical way to count bottle shapes without guessing.",
    quickAnswer:
      "Count the corners on each polygon bottle and sort lowest to highest — there is no hidden clue object on this board. The difficulty is pure counting: players report the shapes are hard to count even zoomed in, and a single miscount rejects the whole shelf. Work corner by corner and mark your count before placing anything.",
    hero: "/img/hero-workshop-960.webp",
    heroAlt:
      "A wide view of the potion workshop used for the number of corners puzzle overview.",
    heroCaption:
      "Store media showing the workshop. The polygon bottles are not captured in official screenshots; the counting difficulty is documented in the game's own feedback threads.",
    hint:
      "No clue hunt this time — the answer is on the bottles. What matters is how you count, not where you look.",
    rule:
      "Order the polygon bottles by corner count, lowest to highest. Polygons have as many corners as sides, so count either, but count corners deliberately: follow the outline and physically count each point.",
    proposedSolution: null,
    solutionCaveat:
      "No fixed sequence to publish — the correct order is your own count. The counting difficulty is real: the developer's feedback thread collected requests for a counter because shapes are hard to distinguish even zoomed.",
    steps: [
      { title: "Pick one bottle at a time", text: "Take the leftmost unplaced bottle and follow its outline corner by corner, counting out loud or on paper." },
      { title: "Write the counts down", text: "Note each bottle's count before placing anything. Correcting a miscount after the shelf rejects is far slower than writing four numbers down first." },
      { title: "Sort ascending", text: "Place the bottles from the lowest count to the highest." },
      { title: "If rejected, re-count the middle bottles", text: "Players report single miscounts reject the whole shelf; the middle of your order is the usual suspect because similar shapes sit there." },
    ],
    mistakes: [
      "Counting sides and corners interchangeably under time pressure and drifting off by one.",
      "Assuming two similar-looking bottles share a count — near-duplicates are exactly where miscounts happen.",
      "Shuffling multiple bottles after a rejection instead of re-counting one suspect.",
    ],
  },
];

export function getPuzzleGuide(slug: string) {
  return puzzleGuides.find((guide) => guide.slug === slug);
}
