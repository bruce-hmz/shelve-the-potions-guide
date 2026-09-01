import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTrust } from "@/components/article-trust";
import { AdBox300 } from "@/components/ads";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shelve the Potions! All Puzzle Solutions — Every Board, One Page",
  description:
    "Every Shelve the Potions puzzle board in one place, grouped by how they are solved — numbered order, watched sequences, and pattern copying — with our verification status and guide links for each.",
  alternates: { canonical: "/walkthrough/all-puzzle-solutions/" },
  openGraph: {
    type: "article",
    title: "Shelve the Potions! All Puzzle Solutions — Every Board, One Page",
    description:
      "All 25+ puzzle boards grouped by solution type, with spoiler-controlled guide links and honest verification status.",
    url: "/walkthrough/all-puzzle-solutions/",
    images: ["/img/og-cover.jpg"],
    modifiedTime: `${site.researchedAt}T04:00:00Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelve the Potions! All Puzzle Solutions",
    description: "Every puzzle board, grouped by how it is solved, with guide status for each.",
    images: ["/img/og-cover.jpg"],
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Walkthrough", href: "/walkthrough/" },
  { label: "All puzzle solutions" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    ...(item.href ? { item: `${site.url}${item.href}` } : {}),
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shelve the Potions! All Puzzle Solutions — Every Board, One Page",
  description:
    "All 25+ puzzle boards grouped by solution type with verification status and spoiler-controlled guide links.",
  image: `${site.url}/img/og-cover.jpg`,
  mainEntityOfPage: `${site.url}/walkthrough/all-puzzle-solutions/`,
  dateModified: site.researchedAt,
  author: { "@type": "Organization", name: site.name },
};

type PuzzleStatus = {
  name: string;
  what: string;
  coverage: { label: "Guide live" | "Guide queued" | "Not yet covered"; href?: string; note: string };
};

const byNumber: PuzzleStatus[] = [
  { name: "Orbiting crystals", what: "Order crystals by an orbit/count value, lowest to highest.", coverage: { label: "Not yet covered", note: "Guide queued after our current batch — no verified sequence published yet." } },
  { name: "Cork size", what: "Sort bottles by cork size, smallest to largest.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
  { name: "Bottle size", what: "Sort bottles by physical size.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
  { name: "Number of corners (shapes)", what: "Count each polygon's corners and order by that count — zoom in, miscounts reject the shelf.", coverage: { label: "Guide live", href: "/puzzles/number-of-corners/", note: "Counting method documented; the answer is your own count, so no fixed sequence exists." } },
  { name: "Potion petals", what: "Order by a petal count on the flower-themed set.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
  { name: "Scales · harp · candelabra", what: "Three 'reveal the numbers' boards: a hidden readout gives each bottle its number first, then you order by it.", coverage: { label: "Guide live", href: "/puzzles/scales-numbers/", note: "Family guide live — the reveal step is where players get stuck; the sort is then trivial." } },
  { name: "Price documents", what: "Find the price list, then order bottles by price.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
];

const bySequence: PuzzleStatus[] = [
  { name: "Clock", what: "Restore missing clock pieces, then order bottles by the displayed times.", coverage: { label: "Guide live", href: "/puzzles/clock-puzzle/", note: "Clock-hand location tip + provisional 8-time sequence, each with its verification status." } },
  { name: "Moon orientation (telescope)", what: "Watch the telescope cycle and reproduce the moon-phase order on the shelf.", coverage: { label: "Guide live", href: "/puzzles/moon-orientation/", note: "Rule + the phone-photograph workaround; full sequence still unpublished." } },
  { name: "Compass", what: "Order bottles by a compass-direction sequence read from a clue.", coverage: { label: "Guide live", href: "/puzzles/compass/", note: "Community direction sequence published as a single-source lead; verification pending." } },
  { name: "Harp notes", what: "After the harp's hidden numbers are revealed, order by its note sequence.", coverage: { label: "Guide queued", note: "Planned inside the combined scales/harp/candelabra guide." } },
];

const byPattern: PuzzleStatus[] = [
  { name: "Test tube rack / vials (Greek letters)", what: "The symbols sit on the corks of vials resting on the workshop tables — two sets of vials in total.", coverage: { label: "Guide live", href: "/puzzles/greek-letters/", note: "Clue location confirmed in a developer-answered Steam thread; bottle order community-checked." } },
  { name: "Runes (four storybooks)", what: "The desk's four storybooks hold page-number symbols that order the rune bottles — not the Greek-letter vials.", coverage: { label: "Guide live", href: "/puzzles/runes-books/", note: "Community sequence from two agreeing sources; dedicated guide live with the Greek-letters mix-up explained." } },
  { name: "Solitaire cards", what: "A card display laid out like a solitaire hand is the answer key; transcribe it position by position.", coverage: { label: "Guide live", href: "/puzzles/solitaire-cards/", note: "Approach + the v1.0.9 readability fix documented; verified card order still unpublished." } },
  { name: "Basket symbols", what: "Match the symbol pattern shown on the baskets.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
  { name: "Chess pieces", what: "Find the displaced pieces, restore the board, then read the remaining-piece pattern.", coverage: { label: "Guide live", href: "/puzzles/chess-pieces/", note: "Location walkthrough live; final placement pending in-game reproduction." } },
  { name: "Weather forecast", what: "Order bottles by the forecast sequence on the wall display.", coverage: { label: "Guide live", href: "/puzzles/weather-forecast/", note: "Approach documented; full icon sequence deliberately unpublished until verified." } },
  { name: "Elements poster", what: "Match bottles to the element order on the poster.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
  { name: "Deities pamphlet", what: "Follow the deity order shown in the pamphlet.", coverage: { label: "Not yet covered", note: "No verified sequence published yet." } },
  { name: "Rainbow colors", what: "The color chart is the clue; a five-color order follows from it.", coverage: { label: "Guide live", href: "/puzzles/color-puzzle/", note: "Provisional five-color sequence published with its verification status." } },
  { name: "Flower ordering", what: "A two-part key: flower color plus leaf count from the wall display.", coverage: { label: "Guide live", href: "/puzzles/flower-ordering/", note: "Rule documented; exact sequence still unpublished." } },
];

function StatusBadge({ coverage }: { coverage: PuzzleStatus["coverage"] }) {
  if (coverage.label === "Guide live" && coverage.href) {
    return (
      <Link className="card-link" href={coverage.href}>
        Open guide <ArrowIcon />
      </Link>
    );
  }
  return (
    <p className="walkthrough-row__status">
      <span className="status-dot" /> {coverage.label}
    </p>
  );
}

function PuzzleTable({ id, title, intro, rows }: { id: string; title: string; intro: string; rows: PuzzleStatus[] }) {
  return (
    <section id={id} className="article-section">
      <h2>{title}</h2>
      <p>{intro}</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr><th>Board</th><th>What the shelf asks</th><th>Our coverage</th></tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td><strong>{row.name}</strong></td>
                <td>{row.what}</td>
                <td>
                  <p>{row.coverage.note}</p>
                  <StatusBadge coverage={row.coverage} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AllSolutionsPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd]) }} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow"><span /> Puzzle hub · spoiler-controlled</p>
            <h1>Shelve the Potions! All Puzzle Solutions</h1>
            <p className="page-dek">
              Every board in one place. The workshop holds 25+ handcrafted shelving puzzles; this page groups them by how they are solved and tells you honestly whether we have a checked answer yet.
            </p>
            <div className="quick-answer">
              <span>Quick answer</span>
              <p>
                Every puzzle belongs to one of three families: <strong>order by a number or size</strong>, <strong>follow a sequence you watch or read</strong>, or <strong>copy a pattern found in the room</strong>. Identify the family first, find the clue object second, and only then touch the bottles. Guides below link out for the six boards we cover in depth; the rest are queued and labelled.
              </p>
            </div>
            <ArticleTrust />
          </div>
        </header>

        <div className="container article-frame">
          <aside className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <nav>
              <a href="#how">How the three families work</a>
              <a href="#number">Order by number or size</a>
              <a href="#sequence">Follow the sequence</a>
              <a href="#pattern">Copy the pattern</a>
              <a href="#checking">Checking what is already done</a>
              <a href="#method">How we publish answers</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="how" className="article-section article-section--first">
              <h2>How the three families work</h2>
              <p>
                A rejected shelf almost always means one of two things: you sorted by the wrong attribute, or you never found the clue object. The tutorial shelves teach the basics — order bottles 1 to 5, sort by liquid amount, return powders — and everything after that is one of the three families below. The grouping itself comes from how community guides organise the boards; we adopted it because it matches what players are actually staring at when they get stuck.
              </p>
              <p>
                If a shelf keeps rejecting a seemingly correct order, re-read the clue object: several boards hide a second attribute (the flower shelf pairs color <em>and</em> leaf count, the storybook shelf hides its numbers in desk books).
              </p>
            </section>

            <PuzzleTable
              id="number"
              title="Order by number or size"
              intro="These boards look like pure sorting, and they are — the trick is finding which attribute counts and, for the readout boards, revealing the numbers first."
              rows={byNumber}
            />

            <PuzzleTable
              id="sequence"
              title="Follow the sequence"
              intro="Watch or read a sequence in order, then reproduce it. These are the boards where writing things down (or photographing the clue) matters most."
              rows={bySequence}
            />

            <PuzzleTable
              id="pattern"
              title="Copy the pattern"
              intro="The room shows you an ordered pattern somewhere — a chart, a wall display, a set of books — and the shelf asks you to reproduce it."
              rows={byPattern}
            />

            <section id="checking" className="article-section">
              <h2>Checking which shelves are already completed</h2>
              <p>
                Coming back after a break, the workshop gives no obvious per-shelf &quot;done&quot; marker — six players were discussing exactly this in one Steam thread at the end of August. Four signals currently work, and one of them matters if you are on a <Link href="/help/no-abilities-run/">no-abilities run</Link>:
              </p>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li><strong>The green/red flash on placement.</strong> The shelf flashes when bottles go down — the same accept/reject feedback you already know from sorting, read across the whole board.</li>
                <li><strong>Hold Tab with a potion in hand.</strong> Boards you have not finished bring up their solution overlay; if nothing appears for a shelf, that shelf is already done.</li>
                <li><strong>The Esc pause screen shows your progress.</strong> The least spoiler-prone option and the first one to try.</li>
                <li><strong>The third keybind ability</strong> — the one that unlocks at the 40-shelf milestone — can be used as the in-game check. This is the only method of the four that counts as an ability, so it is off the table while the <Link href="/help/abilities-and-hints/">disable-abilities toggle</Link> is on.</li>
              </ul>
              <p>
                There is no persistent completed-shelf indicator in the game yet — players have asked the developer for one in the same thread. Until that ships, the Tab hold is the quickest routine: sweep the room once with a bottle in hand and note which shelves stay silent.
              </p>
              <p className="source-note">
                Source: Steam discussion &quot;Completed shelf?&quot; (30 Aug 2026, six participants). Community-verified methods; we have not retested them in-game.
              </p>
            </section>

            <section id="method" className="article-section">
              <h2>How we publish answers</h2>
              <p>
                We only print a full sequence when a source is named next to it, and we mark whether it has been reproduced in the release build. Community-sourced sequences that we have not retested are labelled provisional; boards without a dependable answer say so instead of filling the gap with a guess. When a guide is listed as queued, it is next in production — the <Link href="/walkthrough/">walkthrough index</Link> always shows current coverage.
              </p>
              <p>
                Patch note for collectors: v1.0.9 (day-one patch) specifically made the solitaire card board more readable, v1.0.11 added the options toggle that disables magic abilities — relevant if you are attempting the no-abilities achievement on a fresh save — and v1.0.12 (28 Aug 2026) shipped 360-degree left-stick movement, the developer&apos;s fix for the too-sensitive stick reports.
              </p>
            </section>

            <aside className="ad-slot ad-slot--live article-ad" aria-label="Advertisement">
              <span>Advertisement</span>
              <AdBox300 />
            </aside>

            <section id="sources" className="article-section">
              <p className="article-label">Evidence</p>
              <h2>Where this information comes from</h2>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li>Board count (25+) and tutorial shelf contents: official Steam release announcement and store copy for app 4928820.</li>
                <li>Puzzle grouping and uncovered board names: community puzzle guides cross-checked against Steam discussion threads, Aug 2026.</li>
                <li>Greek-letter vial clue location and order: Steam discussion &quot;Where&apos;s the greek potions clue?&quot; with developer replies, cross-checked against community guides.</li>
                <li>Compass and runes sequences shown as community leads: public player guides — pending our own verification before they move to guide pages.</li>
                <li>Completed-shelf check (Tab hold, placement flash, pause screen, 40-shelf ability): Steam discussion &quot;Completed shelf?&quot; (30 Aug 2026).</li>
                <li>Patch readability change for the card board: official day-one patch notes v1.0.9.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <nav className="related-guides" aria-labelledby="all-solutions-next">
          <div className="related-guides__heading">
            <p className="eyebrow"><span /> Keep sorting</p>
            <h2 id="all-solutions-next">Next steps</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card related-card--primary" href="/walkthrough/">
              <small>Guide index</small>
              <strong>All walkthrough entries</strong>
              <span>Per-puzzle guides with hint ladders <ArrowIcon /></span>
            </Link>
            <Link className="related-card" href="/walkthrough/first-room/">
              <small>Beginner walkthrough</small>
              <strong>First room guide</strong>
              <span>The checklist the tutorial never points at <ArrowIcon /></span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
