import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTrust } from "@/components/article-trust";
import { AdBox300 } from "@/components/ads";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shelve the Potions! Settings & Comfort Guide — Motion Sickness, Zoom & Deck Fixes",
  description:
    "The comfort settings Shelve the Potions players actually ask about: the developer-advised FOV and colorblind-assist combo for motion sickness, the zoom keys, Steam Deck stick sensitivity after v1.0.12, the A-button rebind bug workaround, and reading the small solution panel.",
  alternates: { canonical: "/help/settings-and-comfort/" },
  openGraph: {
    type: "article",
    title: "Shelve the Potions! Settings & Comfort Guide",
    description:
      "Motion sickness (developer-advised FOV + colorblind assist), zoom keys, Steam Deck sensitivity after v1.0.12, and the A-button rebind workaround.",
    url: "/help/settings-and-comfort/",
    images: ["/img/hero-workshop-960.webp"],
    modifiedTime: `${site.researchedAt}T04:00:00Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelve the Potions! Settings & Comfort Guide",
    description: "FOV for motion sickness, zoom keys, Deck sensitivity, and the A-rebind bug workaround.",
    images: ["/img/hero-workshop-960.webp"],
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Help", href: "/walkthrough/" },
  { label: "Settings & comfort" },
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
  headline: "Shelve the Potions! Settings & Comfort Guide",
  description:
    "Motion sickness advice straight from the developer, zoom keys, Steam Deck stick sensitivity after v1.0.12, the A-button rebind workaround, and the small solution panel.",
  image: `${site.url}/img/hero-workshop-960.webp`,
  mainEntityOfPage: `${site.url}/help/settings-and-comfort/`,
  dateModified: site.researchedAt,
  author: { "@type": "Organization", name: site.name },
};

export default function SettingsAndComfortPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd]) }} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow"><span /> Settings &amp; comfort · no spoilers</p>
            <h1>Shelve the Potions! Settings &amp; Comfort Guide</h1>
            <p className="page-dek">
              A sorting game should not be a struggle to look at or to steer. These are the five comfort questions players asked most in late August — answered, wherever possible, with the developer&apos;s own words.
            </p>
            <div className="quick-answer">
              <span>Quick answer</span>
              <p>
                Feeling motion sick? <strong>Raise the FOV and turn on the colorblind assist mode</strong> — the developer&apos;s own suggestion. <strong>Zoom</strong> is <strong>Ctrl</strong> on keyboard / <strong>right stick</strong> on controller. Steam Deck <strong>stick sensitivity improved in v1.0.12</strong> (fine-tune via Steam Input). For the <strong>A-button rebind bug</strong>: reset to defaults and assign A last.
              </p>
            </div>
            <ArticleTrust />
          </div>
        </header>

        <div className="container article-frame">
          <aside className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <nav>
              <a href="#motion">Motion sickness: FOV &amp; comfort</a>
              <a href="#zoom">Zoom in on labels and clues</a>
              <a href="#deck">Steam Deck stick sensitivity</a>
              <a href="#rebind">The A-button rebind bug</a>
              <a href="#panel">The small solution panel</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="motion" className="article-section article-section--first">
              <h2>Motion sickness: the developer&apos;s FOV advice</h2>
              <p>
                This is the one comfort topic with real stakes: one player reported getting motion sick within twenty minutes in the Steam thread that covers it, and a separate 30 August Steam review says the game causes nausea that settings alone did not fully fix. The workshop camera is not Adjustable-in-every-way comfort mode, but the developer did give a concrete two-step suggestion in that thread:
              </p>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li><strong>Raise the FOV.</strong> Wider field of view reduces the swimming feeling while you move around the workshop.</li>
                <li><strong>Turn on the colorblind assist mode</strong> and see whether it helps you too — the developer suggested it as part of the same comfort answer.</li>
              </ul>
              <p>
                One trade-off is worth knowing before you max the slider: the developer himself notes that a higher FOV makes the bottle labels harder to read. That is exactly what the <a href="#zoom">zoom controls</a> below are for — set the FOV for comfort first, then zoom in when you actually need to read a sticker.
              </p>
              <p className="source-note">
                Source: Steam discussion on stick sensitivity / motion sickness (active 24–30 Aug 2026) with developer replies, plus an independent 30 Aug Steam review. Comfort responses vary by person; we cannot retest nausea on your behalf.
              </p>
            </section>

            <section id="zoom" className="article-section">
              <h2>Zoom in on labels and small clues</h2>
              <p>
                Zooming is built in, and the developer has now confirmed the controls twice in separate threads: <strong>hold Ctrl on keyboard, or use the right stick on a controller</strong>. The first confirmation came from a player whose bottle stickers were hard to read in a non-English language setting; the second from the FOV discussion above.
              </p>
              <p>
                It is the right tool whenever the game shows you something small: potion labels, clue objects across the room, and the answer panel after a solve — players specifically report struggling to <strong>count leaves in the flower answer display</strong> without it (see <a href="#panel">below</a>).
              </p>
            </section>

            <section id="deck" className="article-section">
              <h2>Steam Deck / controller stick sensitivity</h2>
              <p>
                Through late August the most-upvoted comfort complaint was simple: the left stick felt far too sensitive, making precise walks past crowded shelves frustrating. The developer promised a fix in the next patch — and shipped it: <strong>patch v1.0.12 (28 Aug 2026) adds 360-degree left-stick movement</strong>, which is exactly the analog-walking fix those reports were asking for.
              </p>
              <p>
                If the stick still feels too hot for your taste after updating, the interim workaround from the same thread remains available and is good for fine-tuning: <strong>lower the stick sensitivity in Steam Input</strong> (controller configuration, per-game). And for the separate Deck issue of hard-wired d-pad ability keys, our <Link href="/help/abilities-and-hints/">abilities &amp; hints guide</Link> keeps the full remap workaround.
              </p>
              <p className="source-note">
                Source: Steam sensitivity thread with developer replies (24–30 Aug 2026) and the official patch notes v1.0.12 (28 Aug 2026).
              </p>
            </section>

            <section id="rebind" className="article-section article-callout">
              <p className="article-label">Bug workaround</p>
              <h2>The A-button rebind bug (and the safe order to rebind in)</h2>
              <p>
                Reported 30 August: a player rebound <strong>pick up / interact to the A button</strong> and found themselves locked out of the rebind menu afterwards — the cursor jumps to the Display entry and the bindings can no longer be edited from controller mode.
              </p>
              <p>
                The developer&apos;s workaround is a two-step escape: <strong>reset the controls to defaults, then make A the last binding you assign</strong>. With A set at the end of the process the menu keeps working, and you avoid the lock-out entirely. This is a live bug rather than a settings mistake, so expect it to be patched — we will update this section when it is.
              </p>
              <p className="source-note">
                Source: Steam discussion (30 Aug 2026) with the developer&apos;s reset-and-rebind-last workaround. Not retested by us in-game.
              </p>
            </section>

            <section id="panel" className="article-section">
              <h2>The solution panel is too small — what helps today</h2>
              <p>
                After solving a board, the answer display is what you sort the remaining sets against, and players keep reporting that it runs small. The v1.0.9 day-one patch already improved one variant specifically (the solitaire card board), but the complaint resurfaced on 30 August with the flower board: <strong>the leaf counts in the answer panel are hard to tell apart while sorting</strong>.
              </p>
              <p>
                Until a patch addresses the panel size directly, the practical combo is the <a href="#zoom">zoom keys</a> plus the classic trick of photographing the clue wall before you start shelving. Both cost seconds and beat miscounting a leaf — the single most common reason the flower shelf rejects an order, as our <Link href="/puzzles/flower-ordering/">flower ordering guide</Link> documents.
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
                <li>Motion sickness reports and the developer&apos;s FOV + colorblind-assist suggestion: Steam discussion on stick sensitivity / motion sickness (active 24–30 Aug 2026), developer replies; corroborated by a 30 Aug Steam review citing nausea.</li>
                <li>Zoom controls (Ctrl / right stick): developer confirmations in two separate Steam threads (24 Aug and 28 Aug 2026).</li>
                <li>Steam Deck stick sensitivity and the v1.0.12 fix: same 24–30 Aug thread plus official patch notes v1.0.12, &quot;360 Controller Movement&quot; (28 Aug 2026).</li>
                <li>A-button rebind lock-out and the reset-defaults workaround: Steam discussion (30 Aug 2026), developer reply.</li>
                <li>Small solution panel reports: Steam discussion (30 Aug 2026, flower/leaf variant); earlier card-board readability change: official patch notes v1.0.9.</li>
                <li>No in-game retest has been done for this article; settings guidance is labelled with its source and will be updated after patches.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <nav className="related-guides" aria-labelledby="settings-next">
          <div className="related-guides__heading">
            <p className="eyebrow"><span /> Keep sorting</p>
            <h2 id="settings-next">Next steps</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card related-card--primary" href="/help/abilities-and-hints/">
              <small>System guide</small>
              <strong>Abilities &amp; hints</strong>
              <span>The cat menu, Deck bindings, and the disable toggle <ArrowIcon /></span>
            </Link>
            <Link className="related-card" href="/walkthrough/all-puzzle-solutions/">
              <small>Puzzle hub</small>
              <strong>All puzzle solutions</strong>
              <span>Every board, grouped by how it is solved <ArrowIcon /></span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
