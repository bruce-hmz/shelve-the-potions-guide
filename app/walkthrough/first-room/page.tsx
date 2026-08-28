import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTrust } from "@/components/article-trust";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shelve the Potions! First Room Walkthrough — What to Do After the Tutorial",
  description:
    "Stuck after the Shelve the Potions tutorial? The checklist on the left edge of the screen is your real objective list. How the first room works, what numbered bottles mean, and how to recover lost potions.",
  alternates: { canonical: "/walkthrough/first-room/" },
  openGraph: {
    type: "article",
    title: "Shelve the Potions! First Room Walkthrough — What to Do After the Tutorial",
    description:
      "The movement tutorial is only lesson one. Here is how the first room actually works and why players miss its objectives.",
    url: "/walkthrough/first-room/",
    images: ["/img/hero-workshop-960.webp"],
    modifiedTime: `${site.researchedAt}T04:00:00Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelve the Potions! First Room Walkthrough",
    description: "What to do after the tutorial: the checklist, the bottles, and the cat.",
    images: ["/img/hero-workshop-960.webp"],
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Walkthrough", href: "/walkthrough/" },
  { label: "First room" },
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
  headline: "Shelve the Potions! First Room Walkthrough — What to Do After the Tutorial",
  description:
    "How the first room works: the silent checklist, numbered bottles, potion respawning, and the cat hint system.",
  image: `${site.url}/img/hero-workshop-960.webp`,
  mainEntityOfPage: `${site.url}/walkthrough/first-room/`,
  dateModified: site.researchedAt,
  author: { "@type": "Organization", name: site.name },
};

export default function FirstRoomPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd]) }} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow"><span /> Beginner walkthrough · no spoilers</p>
            <h1>Shelve the Potions! First Room Walkthrough</h1>
            <p className="page-dek">
              &quot;How do you get out of the first room?&quot; is the most common early question on the game&apos;s Steam forum. The answer is usually not a hidden door — it is a checklist you were never taught to watch.
            </p>
            <div className="quick-answer">
              <span>Quick answer</span>
              <p>
                The opening movement tutorial is only lesson one. Your actual objectives live in the <strong>checklist on the left edge of the screen</strong>, and it refreshes silently — new steps appear with no fanfare, so keep glancing at it after every task you complete. You cannot get permanently stuck: there is no timer, no fail state, and the pause menu can respawn any potions left lying around.
              </p>
            </div>
            <ArticleTrust />
          </div>
        </header>

        <div className="container article-frame">
          <aside className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <nav>
              <a href="#checklist">The checklist is the real tutorial</a>
              <a href="#bottles">How bottles and shelves work</a>
              <a href="#lost">Lost or dropped a potion?</a>
              <a href="#cat">When you are stuck, ask a cat</a>
              <a href="#after">What the tutorial never tells you</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="checklist" className="article-section article-section--first">
              <h2>The checklist is the real tutorial</h2>
              <figure className="article-figure">
                <img src="/img/hero-workshop-960.webp" width="960" height="540" alt="A wide view of the Shelve the Potions workshop with sorted shelves and loose bottles." fetchPriority="high" />
                <figcaption>
                  Official Steam screenshot of the workshop. The tutorial room itself does not appear in official media, so this guide leans on Steam forum reports and the developer&apos;s own FAQ.
                </figcaption>
              </figure>
              <p>
                The game opens by teaching movement — walk around, that is about it. A dozen players on the Steam forum described the same trap afterwards: they assumed the movement lesson was the whole tutorial, because the <strong>objective checklist on the left side of the screen</strong> is easy to miss and refreshes without any visual cue. Players reported finishing objectives without noticing new ones had appeared, then standing in the room unsure what &quot;finishing the tutorial&quot; even means.
              </p>
              <p>
                The practical habit: after every task you complete, look back at the checklist. If it has grown, the game has quietly given you your next step. Finishing the listed objectives is what ends the tutorial — there is no separate exit puzzle to solve, which is exactly why the room confuses people.
              </p>
            </section>

            <section id="bottles" className="article-section">
              <h2>How bottles and shelves work</h2>
              <p>
                Once you reach the shelving part, bottles are not sorted by eye alone. Steam players who broke down the mechanic describe each bottle as carrying <strong>a number plus an element icon</strong>, and shelves asking for a specific placement order rather than a loose tidy-up. In other words: read the bottle before you place it.
              </p>
              <p>
                Expect the first shelves to ease you in with simple orderings, with the clue-driven boards (clock, colors, chess and the rest) appearing as you unlock more of the workshop. Opinions differ on how hard that gets — some players compare it to Myst-style puzzle boxes, others call it a relaxing organizing game — but the early rooms are deliberately gentle.
              </p>
            </section>

            <section id="lost" className="article-section">
              <h2>Lost or dropped a potion?</h2>
              <p>
                Potions get knocked around and end up in corners, and sooner or later every player loses track of one. The official FAQ answer: open the <strong>pause menu and respawn all unshelved potions</strong>. They return to their original spawn points, so nothing can be lost for good. Our <Link href="/help/missing-potions/">missing potions guide</Link> covers the respawn, common hiding spots, and the cat trick that points at the exact bottle you lack.
              </p>
              <p className="source-note">Source: pinned &quot;Frequently Asked Questions&quot; thread by Knight Owl Games on the Steam forum.</p>
            </section>

            <section id="cat" className="article-section">
              <h2>When you are stuck, ask a cat</h2>
              <p>
                Hold a potion and talk to any adult cat: you can ask it to <strong>highlight helpful puzzle objects or request the full solution</strong>. Using a hint once is also an achievement (<em>&quot;Hooman needs help :)&quot;</em>), though that one has unlock conditions that surprise people — our <Link href="/help/achievements/">achievements guide</Link> covers them.
              </p>
              <p>
                One early-game tip worth knowing before you search every corner yourself: Steam players repeatedly report that the <strong>final white chess bishop hides behind the white cat</strong> in the area just after the tutorial room. Full details live in our{" "}
                <Link href="/puzzles/chess-pieces/">chess pieces guide</Link>.
              </p>
            </section>

            <section id="after" className="article-section">
              <h2>What the tutorial never tells you</h2>
              <ul className="check-list">
                <li><CheckIcon /><span><strong>No timer, no fail state.</strong> You cannot lose the game by experimenting or placing wrongly.</span></li>
                <li><CheckIcon /><span><strong>The game autosaves every 2 minutes</strong> and supports Steam Cloud, per the developer&apos;s FAQ.</span></li>
                <li><CheckIcon /><span><strong>Finishing the tutorial is an achievement.</strong> <em>&quot;Welcome, Apprentice&quot;</em> unlocks for completing it — about 97% of Steam players have it.</span></li>
                <li><CheckIcon /><span><strong>Abilities unlock as you fill shelves</strong>, sometimes quietly. If you plan to attempt the no-abilities achievement, patch v1.0.11 adds a toggle to switch them off — see the <Link href="/help/abilities-and-hints/">abilities guide</Link>.</span></li>
              </ul>
            </section>

            <aside className="ad-slot article-ad" aria-label="Advertisement placeholder">
              <span>Advertisement</span>
              <small>Reserved after the useful answer</small>
            </aside>

            <section id="sources" className="article-section">
              <p className="article-label">Evidence</p>
              <h2>Where this information comes from</h2>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li>Checklist behaviour and the bottle number + element icon mechanic: Steam Community reports from new-player threads (Aug 2026).</li>
                <li>Potion respawning, cat hints, autosave interval, and Steam Cloud: pinned developer FAQ and official store copy, app 4928820.</li>
                <li>White chess bishop behind the white cat: multiple converging Steam discussion posts.</li>
                <li>We have not retested the tutorial room in-game; details are labelled accordingly and will be refined after a first-hand pass.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <nav className="related-guides" aria-labelledby="first-room-next">
          <div className="related-guides__heading">
            <p className="eyebrow"><span /> Keep sorting</p>
            <h2 id="first-room-next">Next steps</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card related-card--primary" href="/help/abilities-and-hints/">
              <small>System guide</small>
              <strong>Abilities &amp; hints</strong>
              <span>How the cat menu and keybind abilities work <span aria-hidden="true">→</span></span>
            </Link>
            <Link className="related-card" href="/walkthrough/">
              <small>Guide index</small>
              <strong>All walkthrough entries</strong>
              <span>Browse every puzzle guide <span aria-hidden="true">→</span></span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
