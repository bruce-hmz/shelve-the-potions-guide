import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTrust } from "@/components/article-trust";
import { AdBox300 } from "@/components/ads";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "\u201cNo Magical Abilities for Me, Thanks.\u201d — Shelve the Potions! Run Guide",
  description:
    "How to earn Shelve the Potions' rarest achievement (4.5% unlock rate): the patch v1.0.11 toggle that disables abilities, what counts as an ability, what stays safe, and how to unstick yourself mid-run.",
  alternates: { canonical: "/help/no-abilities-run/" },
  openGraph: {
    type: "article",
    title: "\u201cNo Magical Abilities for Me, Thanks.\u201d — Shelve the Potions! Run Guide",
    description:
      "The toggle, the rules, and the run plan for Shelve the Potions' rarest achievement.",
    url: "/help/no-abilities-run/",
    images: ["/img/hint-cat-960.webp"],
    modifiedTime: `${site.researchedAt}T04:00:00Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelve the Potions! No-Abilities Run Guide",
    description: "How to earn the rarest achievement without losing your run to a mispress.",
    images: ["/img/hint-cat-960.webp"],
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Help", href: "/walkthrough/" },
  { label: "No-abilities run" },
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
  headline: "\u201cNo Magical Abilities for Me, Thanks.\u201d — Shelve the Potions! Run Guide",
  description:
    "The v1.0.11 toggle, what counts as an ability, and the run plan for the rarest achievement.",
  image: `${site.url}/img/hint-cat-960.webp`,
  mainEntityOfPage: `${site.url}/help/no-abilities-run/`,
  dateModified: site.researchedAt,
  author: { "@type": "Organization", name: site.name },
};

export default function NoAbilitiesRunPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd]) }} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow"><span /> Achievement guide · no spoilers</p>
            <h1>&quot;No magical abilities for me, thanks.&quot; — the Safe Run Guide</h1>
            <p className="page-dek">
              Shelve the Potions&apos; rarest achievement used to be a gamble: abilities unlocked themselves, one mispress ended hours of work, and autosave made it permanent. Patch v1.0.11 turned it into a plan.
            </p>
            <div className="quick-answer">
              <span>Quick answer</span>
              <p>
                About <strong>4.5%</strong> of players have it. The recipe: enable the <strong>disable-abilities toggle in the options menu</strong> (added in patch v1.0.11), play on a save where you have <strong>never asked a cat for help</strong>, and solve every shelf from clue reading alone. Petting cats stays safe. That is the whole run — the guide below explains why each rule exists.
              </p>
            </div>
            <ArticleTrust />
          </div>
        </header>

        <div className="container article-frame">
          <aside className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <nav>
              <a href="#what">What the achievement actually asks</a>
              <a href="#setup">Set up the run</a>
              <a href="#rules">What counts, what is safe</a>
              <a href="#midrun">Stuck mid-run?</a>
              <a href="#legacy">On an older build</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="what" className="article-section article-section--first">
              <h2>What the achievement actually asks</h2>
              <p>
                Steam&apos;s text says only &quot;finish the game without using any abilities&quot;. It does not define which interactions count, and the game itself never warns you — abilities simply unlock as you fill shelves, sometimes without much fanfare. The community consensus, and our recommendation, is the conservative reading: <strong>every magical-cat interaction counts except petting</strong>. The full achievement list lives in our <Link href="/help/achievements/">achievements guide</Link>.
              </p>
            </section>

            <section id="setup" className="article-section">
              <h2>Set up the run (three steps)</h2>
              <ol className="spoiler-steps">
                <li>
                  <span>01</span>
                  <div><strong>Update to v1.0.11 or later, then open the options menu</strong><p>Patch v1.0.11 added a toggle that disables the magic abilities. Disabled abilities stay visible but cannot trigger — the developer&apos;s patch note says it exists &quot;to easily get the last achievement&quot;. Flip it before you start; that is the entire defence against the mispresses that voided pre-patch runs.</p></div>
                </li>
                <li>
                  <span>02</span>
                  <div><strong>Start from a hint-free save</strong><p>The run requires never having used an ability on that save. If you already asked a cat for help in your current save, do this achievement on a fresh one — the opposite achievement, <em>&quot;Hooman needs help :)&quot;</em>, is a good reason to keep a second playthrough anyway (mind its own unlock conditions in our achievements guide).</p></div>
                </li>
                <li>
                  <span>03</span>
                  <div><strong>Plan to solve, not to survive</strong><p>With abilities disabled, the run is no longer about dodging mispresses — it is about reading clues. Every puzzle guide on this site follows a Hint → Rule → Solution ladder so you can learn the logic without a walkthrough spoiling the shelf.</p></div>
                </li>
              </ol>
            </section>

            <section id="rules" className="article-section">
              <h2>What counts as an ability — and what is safe</h2>
              <ul className="check-list">
                <li><CheckIcon /><span><strong>Safe: petting cats.</strong> <em>&quot;Curious Cat&quot;</em> and <em>&quot;Cat lady&quot;</em> only need petting, and players reliably earn both on no-ability runs. Keep petting.</span></li>
                <li><CheckIcon /><span><strong>Safe: buying upgrades.</strong> <em>&quot;Hello improvements.&quot;</em> and <em>&quot;I need all the help I can get ok!&quot;</em> are purchase achievements, not ability uses.</span></li>
                <li><CheckIcon /><span><strong>Not safe: asking a cat for anything.</strong> Point, highlight, reveal — the whole menu. One use ends the run.</span></li>
                <li><CheckIcon /><span><strong>Not safe: the keybind abilities</strong> (highlight, Assemble, reveal). With the v1.0.11 toggle on they cannot fire at all.</span></li>
              </ul>
            </section>

            <section id="midrun" className="article-section">
              <h2>Stuck mid-run?</h2>
              <p>
                Do not break the run — use the clue ladder instead. Open the relevant puzzle guide and stop at the first level that unsticks you: a <Link href="/walkthrough/">hint</Link> pointing at the right object, the sorting rule, and only then the (clearly labelled, often still provisional) solution. The <Link href="/walkthrough/all-puzzle-solutions/">all-puzzle-solutions hub</Link> tells you which boards have verified answers and which are still community leads.
              </p>
              <p>
                If you are one bottle short, our <Link href="/help/missing-potions/">missing potions guide</Link> covers the pause-menu respawn — no abilities required. And if a shelf keeps rejecting an order that looks right, the flower and runes boards are known for punishing a single miscount; the guide for each board lists its common mistakes.
              </p>
            </section>

            <section id="legacy" className="article-section">
              <h2>On an older build (or refusing the toggle)</h2>
              <p>
                Before v1.0.11 the standard precautions were rebinding the ability keys far from your movement hand — the community suggestion is I-O-P instead of the default 1-2-3 — and force-quitting the game before autosave lands if you slipped. The force-quit also rewinds recent progress, which is why it was a last resort. On patched builds the toggle makes both unnecessary, but the <Link href="/help/abilities-and-hints/#steam-deck">Steam Deck d-pad double-binding</Link> is a reason some players still rebind.
              </p>
              <p className="source-note">
                Source: official patch notes v1.0.10–v1.0.11, Steam global achievement stats, and the Steam thread &quot;I wish there to be a lock for abilities&quot;. Not retested by us in-game.
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
                <li>Achievement name, unlock rate, and related achievements: Steam Community global stats for app 4928820.</li>
                <li>Disable-abilities toggle behaviour and intent: official patch notes v1.0.11 (26 Aug 2026).</li>
                <li>Pre-patch failure modes (silent unlocks, lost runs, d-pad binding, force-quit rollback): Steam discussion thread &quot;I wish there to be a lock for abilities&quot;.</li>
                <li>Petting-vs-asking separation: community reports consistent with Steam achievement text; we label it conservative guidance rather than a datamined rule.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <nav className="related-guides" aria-labelledby="no-abilities-next">
          <div className="related-guides__heading">
            <p className="eyebrow"><span /> Keep sorting</p>
            <h2 id="no-abilities-next">Next steps</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card related-card--primary" href="/help/abilities-and-hints/">
              <small>System guide</small>
              <strong>Abilities &amp; hints</strong>
              <span>The toggle, Assemble, and cooldowns in detail <ArrowIcon /></span>
            </Link>
            <Link className="related-card" href="/help/achievements/">
              <small>Progress checklist</small>
              <strong>All 24 achievements</strong>
              <span>Unlock rates and the confusing Hooman run <ArrowIcon /></span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
