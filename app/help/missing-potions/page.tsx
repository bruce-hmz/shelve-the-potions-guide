import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTrust } from "@/components/article-trust";
import { AdBox300 } from "@/components/ads";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lost a Potion in Shelve the Potions? How to Respawn Missing Bottles",
  description:
    "A potion rolled under a shelf and you cannot find it? The pause menu respawns every unshelved potion back to its spawn point — plus where bottles like to hide and how to make the cat point for you.",
  alternates: { canonical: "/help/missing-potions/" },
  openGraph: {
    type: "article",
    title: "Lost a Potion in Shelve the Potions? How to Respawn Missing Bottles",
    description:
      "The pause-menu respawn returns every unshelved potion to its spawn point. Nothing in the workshop is permanently losable.",
    url: "/help/missing-potions/",
    images: ["/img/hint-cat-960.webp"],
    modifiedTime: `${site.researchedAt}T04:00:00Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost a Potion in Shelve the Potions?",
    description: "Respawn missing bottles from the pause menu — here is how.",
    images: ["/img/hint-cat-960.webp"],
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Help", href: "/walkthrough/" },
  { label: "Missing potions" },
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
  headline: "Lost a Potion in Shelve the Potions? How to Respawn Missing Bottles",
  description:
    "How to respawn unshelved potions from the pause menu, where bottles like to hide, and how to make a cat point at the missing one.",
  image: `${site.url}/img/hint-cat-960.webp`,
  mainEntityOfPage: `${site.url}/help/missing-potions/`,
  dateModified: site.researchedAt,
  author: { "@type": "Organization", name: site.name },
};

export default function MissingPotionsPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd]) }} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow"><span /> Game mechanics · no spoilers</p>
            <h1>Lost a Potion in Shelve the Potions? Here is How to Get It Back</h1>
            <p className="page-dek">
              The witch&apos;s cats knocked two thousand bottles across an enchanted cellar, so losing track of one is a design feature, not a mistake you made.
            </p>
            <div className="quick-answer">
              <span>Quick answer</span>
              <p>
                Open the <strong>pause menu and respawn all unshelved potions</strong>. Every bottle you have not yet shelved returns to its original spawn point, so nothing in the workshop can be permanently lost. Potions you have already shelved stay exactly where they are. Hunting a <strong>flower after the flower board is already solved</strong>? That one is not lost — it is lying on its side near the weather globe (see below).
              </p>
            </div>
            <ArticleTrust />
          </div>
        </header>

        <div className="container article-frame">
          <aside className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <nav>
              <a href="#respawn">The pause-menu respawn</a>
              <a href="#hiding">Where bottles like to hide</a>
              <a href="#cat">Make the cat point at it</a>
              <a href="#flower">The flower that is not lost</a>
              <a href="#limits">What respawning does not do</a>
              <a href="#troubleshoot">When respawn is not enough</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="respawn" className="article-section article-section--first">
              <h2>The pause-menu respawn</h2>
              <p>
                The developer&apos;s own FAQ answers this directly, which tells you how many players ask it: &quot;Lost a potion? Respawn all unshelved potions via the pause menu.&quot; The respawn sends each unshelved bottle back to its original spawn point — the spot where you first picked it up — so you can retrace your route and collect them in one pass.
              </p>
              <p>
                Use it without guilt. There is no timer and no penalty anywhere in the game, and respawning does not undo shelving progress; it only affects bottles that are still loose in the world.
              </p>
            </section>

            <section id="hiding" className="article-section">
              <h2>Where bottles like to hide</h2>
              <p>
                Before you respawn, it is worth one slow lap of the room. The recurring hiding spots players report for loose objects are the edges of the workshop: <strong>corners, window sills, desks, and the shelves around the room&apos;s perimeter</strong> — the same places the displaced chess pieces turn up. Small items are also larger than they first look once you actually spot them, so check around the cats too: one white cat near the start of the workshop is famously hiding a chess bishop. Our <Link href="/puzzles/chess-pieces/">chess pieces guide</Link> has that one in detail.
              </p>
            </section>

            <section id="cat" className="article-section">
              <h2>Make the cat point at it</h2>
              <p>
                If you are one bottle short and a respawn would undo a half-sorted hand, the cat system is the precise tool: <strong>hold a potion and talk to any adult cat</strong>, then ask it to point at what you are missing. The developer describes exactly this use — holding the potion matters, because the cat responds to the set you are holding. A reminder before a no-abilities run: asking a cat counts as using an ability, so keep hint usage out of that playthrough (the <Link href="/help/abilities-and-hints/">abilities guide</Link> explains the toggle that prevents accidents).
              </p>
            </section>

            <section id="flower" className="article-section article-callout article-callout--hint">
              <p className="article-label">The special case</p>
              <h2>The week 7/8 flower that is not actually lost</h2>
              <p>
                Three players hit the same wall in one Steam thread in late August: the flower shelf is already solved, one flower for week 7 or 8 still seems missing, and nothing helps. The catch is that this flower is <strong>not a missing bottle</strong> — it has already been placed, and the community answer is where it ended up: <strong>the week 7/8 flower lies on its side near the weather globe, where it easily reads as a random potion</strong> instead of a flower.
              </p>
              <p>
                The tools on this page deliberately do not apply here. Placed flowers cannot be picked back up, and the developer&apos;s cat tip — carry the flower potion and ask a cat to highlight what you still need — only works while the board is <em>unsolved</em>. Once the puzzle is finished, the hint has nothing left to point at. So before you panic, walk to the weather globe and look low for a bottle tipped on its side; if you are still mid-puzzle, the <Link href="/puzzles/flower-ordering/">flower ordering guide</Link> covers the board itself.
              </p>
              <p className="source-note">
                Source: Steam discussion &quot;Missing flower&quot; (28 Aug 2026, five participants) — developer reply on the cat-highlight method plus the community-verified weather-globe location. Not retested by us in-game.
              </p>
            </section>

            <section id="limits" className="article-section">
              <h2>What respawning does not do</h2>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li><strong>It does not touch shelved potions.</strong> Only unshelved bottles return to spawn points.</li>
                <li><strong>It is not a progress rollback.</strong> Shelves, puzzle solutions, and achievements are unaffected — the force-quit rollback trick for accidental ability triggers is a separate (and now mostly obsolete, since patch v1.0.11) workaround.</li>
                <li><strong>It does not solve the shelf for you.</strong> A respawned bottle still needs the right slot — that is what our <Link href="/walkthrough/all-puzzle-solutions/">puzzle solutions hub</Link> is for.</li>
              </ul>
            </section>

            <section id="troubleshoot" className="article-section">
              <h2>When respawn is not enough</h2>
              <p>
                Two rarer failure modes have shown up in the Steam forum since launch. Both have a next step:
              </p>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li>
                  <strong>Respawn and Unstick both do nothing after a crash.</strong> One player&apos;s game crashed while a controller was being plugged in; after relaunch, five shelf spaces stopped responding and the needed potions sat stuck between shelves. In-game Unstick did nothing, and quitting and reopening was not enough either — <strong>a full restart of the game fixed it</strong>. The loss is bounded: Steam Cloud autosaves roughly every two minutes, per the developer&apos;s FAQ. This is a single player-reported fix, not retested by us.
                </li>
                <li>
                  <strong>One specific potion is gone and Assemble will not bring it back.</strong> A 3 Sep 2026 report describes a purple Greek-symbols potion missing from a save — nothing highlighted in the shop, and the <Link href="/help/abilities-and-hints/#assemble">Assemble ability</Link> (which pulls unshelved potions of a set into your hand) did not retrieve it. The developer&apos;s standing answer for a genuinely lost potion still applies: use the <a href="#respawn">pause-menu respawn of all unshelved potions</a>. Single report so far, unanswered on the forum — labelled accordingly.
                </li>
              </ul>
            </section>

            <aside className="ad-slot ad-slot--live article-ad" aria-label="Advertisement">
              <span>Advertisement</span>
              <AdBox300 />
            </aside>

            <section id="sources" className="article-section">
              <p className="article-label">Evidence</p>
              <h2>Where this information comes from</h2>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li>Pause-menu respawn and hold-a-potion cat behaviour: pinned &quot;Frequently Asked Questions&quot; thread by Knight Owl Games, Steam forum for app 4928820.</li>
                <li>Hiding spots and the white-cat chess bishop: converging reports in Steam discussion threads (Aug 2026).</li>
                <li>Week 7/8 flower location and the solved-puzzle hint limit: Steam discussion &quot;Missing flower&quot; (28 Aug 2026), developer and community replies.</li>
                <li>Crash-stuck shelf slots (full-restart fix) and the Assemble-fail missing-potion report: Steam discussions &quot;Potions stuck between shelves&quot; (1 Sep 2026) and &quot;missing potion&quot; (3 Sep 2026); the two-minute autosave interval is from the developer&apos;s pinned FAQ thread.</li>
                <li>No in-game retest has been done for this article; details are labelled accordingly.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <nav className="related-guides" aria-labelledby="missing-next">
          <div className="related-guides__heading">
            <p className="eyebrow"><span /> Keep sorting</p>
            <h2 id="missing-next">Next steps</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card related-card--primary" href="/help/abilities-and-hints/">
              <small>System guide</small>
              <strong>Abilities &amp; hints</strong>
              <span>The cat menu and the v1.0.11 disable toggle <ArrowIcon /></span>
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
