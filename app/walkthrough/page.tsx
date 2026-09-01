import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTrust } from "@/components/article-trust";
import { AdNativeBanner } from "@/components/ads";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowIcon, CheckIcon, PlayIcon } from "@/components/icons";
import { puzzleGuides } from "@/content/puzzles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shelve the Potions! Walkthrough — Puzzle Solutions",
  description:
    "A spoiler-controlled Shelve the Potions walkthrough covering Clock, Color, Chess Pieces, Greek Letters, Moon Orientation, and Flower Ordering puzzles with visible verification status.",
  alternates: { canonical: "/walkthrough/" },
  openGraph: {
    title: "Shelve the Potions! Walkthrough — Puzzle Solutions",
    description: "Find a gentle hint, understand the rule, or reveal a clearly labeled solution.",
    url: "/walkthrough/",
    images: ["/img/og-cover.jpg"],
  },
};

export default function WalkthroughPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Walkthrough" }];
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

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <header className="page-hero page-hero--listing">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="listing-hero-grid">
            <div>
              <p className="eyebrow"><span /> Guide listing</p>
              <h1>Shelve the Potions! Walkthrough</h1>
              <p className="page-dek">
                Browse the puzzle guides we can support with traceable research. We group the game&apos;s 20+ shelves by real search intent instead of generating a thin page for every bottle rack.
              </p>
              <div className="coverage-note">
                <strong>Current coverage</strong>
                <span>First-room starter · 12 puzzle guides · abilities &amp; hint system · full achievement checklist · settings &amp; comfort</span>
              </div>
            </div>
            <figure className="listing-hero-image">
              <img
                src="/img/hero-workshop-960.webp"
                width="960"
                height="540"
                alt="A wide overview of the potion workshop and its many sorting shelves."
                fetchPriority="high"
              />
              <figcaption>Official Steam screenshot · release-build store media</figcaption>
            </figure>
          </div>
          <ArticleTrust />
        </div>
      </header>

      <section className="section listing-section" aria-labelledby="coverage-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Verified route set</p>
              <h2 id="coverage-heading">Choose the clue you recognize</h2>
            </div>
            <p>
              Each article opens with a direct answer and then lets you stop at Hint, Rule, or Full Solution. Want every board at a glance? Open the{" "}
              <Link href="/walkthrough/all-puzzle-solutions/">all-puzzle-solutions hub</Link>.
            </p>
          </div>
          <div className="walkthrough-list">
            {puzzleGuides.map((guide, index) => (
              <article className="walkthrough-row" key={guide.slug}>
                <span className="walkthrough-row__number">{String(index + 1).padStart(2, "0")}</span>
                <img src={guide.hero} width="1200" height="675" loading="lazy" alt={guide.heroAlt} />
                <div>
                  <p className="walkthrough-row__status"><span className="status-dot" /> Provisional solution</p>
                  <h2>{guide.name}</h2>
                  <p>{guide.quickAnswer}</p>
                  <Link className="card-link" href={`/puzzles/${guide.slug}/`}>
                    Open guide <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <aside className="ad-slot ad-slot--live container" aria-label="Advertisement">
        <span>Advertisement</span>
        <AdNativeBanner />
      </aside>

      <section className="section listing-method" aria-labelledby="method-heading">
        <div className="container listing-method-grid">
          <div>
            <p className="eyebrow"><span /> How to use this walkthrough</p>
            <h2 id="method-heading">Keep the puzzle, lose the frustration</h2>
            <p className="page-dek">
              Start with the in-game evidence. Only move down the ladder when the current level is not enough. Brand new? Begin with the{" "}
              <Link href="/walkthrough/first-room/">first-room walkthrough</Link> — it explains the objective checklist the tutorial never points at.
            </p>
            <ul className="check-list">
              <li><CheckIcon /><span><strong>Hint first</strong> — locate the missing clue or item.</span></li>
              <li><CheckIcon /><span><strong>Rule second</strong> — understand what the shelf is testing.</span></li>
              <li><CheckIcon /><span><strong>Solution last</strong> — reveal the proposed order with its evidence status.</span></li>
            </ul>
          </div>
          <a className="trailer-card" href={site.steamUrl} target="_blank" rel="noreferrer">
            <span className="trailer-card__media">
              <img src="/img/gameplay-trailer-poster.webp" width="600" height="337" loading="lazy" alt="Official gameplay trailer preview." />
              <i aria-hidden="true"><PlayIcon /></i>
            </span>
            <span className="trailer-card__body">
              <small>Need an orientation first?</small>
              <strong>Watch the official gameplay trailer</strong>
              <span>Opens on Steam <ArrowIcon /></span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
