import Link from "next/link";
import { ArrowIcon, CheckIcon, ExternalIcon, PlayIcon } from "@/components/icons";
import { GuideCard } from "@/components/guide-card";
import { TrustStrip } from "@/components/trust-strip";
import { guidePages } from "@/content/pages";
import { site } from "@/lib/site";

const gameJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Shelve the Potions!",
  url: site.steamUrl,
  gamePlatform: "PC",
  applicationCategory: "Game",
  genre: ["Puzzle", "Casual"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Shelve the Potions! have co-op or multiplayer?",
      acceptedAnswer: { "@type": "Answer", text: "No. The developer's FAQ answers \"Sadly, no\" for multiplayer, and no additional levels are planned either." },
    },
    {
      "@type": "Question",
      name: "Does Shelve the Potions! have cloud saves?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. The game supports Steam Cloud and autosaves every 2 minutes, per the developer's FAQ." },
    },
    {
      "@type": "Question",
      name: "Was AI used to make Shelve the Potions!?",
      acceptedAnswer: { "@type": "Answer", text: "No. The developer states that AI was not used at any stage of the game's development." },
    },
    {
      "@type": "Question",
      name: "How many puzzles and potions are in Shelve the Potions!?",
      acceptedAnswer: { "@type": "Answer", text: "The official listing counts 25+ handcrafted shelving puzzles and more than 2,000 unique potions to organize." },
    },
    {
      "@type": "Question",
      name: "How long does Shelve the Potions! take to finish?",
      acceptedAnswer: { "@type": "Answer", text: "Roughly 3.5 to 4 hours based on full community playthrough videos; expect longer at a relaxed sorting pace. No official figure exists." },
    },
    {
      "@type": "Question",
      name: "Will Shelve the Potions! get more updates?",
      acceptedAnswer: { "@type": "Answer", text: "Yes for bug patches and quality-of-life updates if needed — the v1.0.11 patch that disables magic abilities is one example — but no additional levels or multiplayer are planned." },
    },
  ],
};

export default function HomePage() {
  const [walkthrough, ...puzzles] = guidePages;

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, gameJsonLd, faqJsonLd]) }}
      />

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Independent field guide</p>
            <h1>Shelve the Potions! <em>Guide</em></h1>
            <p className="hero-dek">
              Stuck on a shelf? Start with a gentle hint, learn the sorting rule, and reveal the full placement only when you choose.
            </p>
            <div className="hero-answer" aria-label="Quick game summary">
              <p>
                <strong>The short answer:</strong> the workshop contains 20+ handcrafted sorting puzzles and 2,000+ potions. There are no timers or penalties, and the cats can reveal clues when you need help.
              </p>
            </div>
            <div className="button-row">
              <Link className="button button--primary" href="/walkthrough/">
                Browse the walkthrough <ArrowIcon />
              </Link>
              <a className="button button--quiet" href={site.steamUrl} target="_blank" rel="noreferrer">
                View on Steam <ExternalIcon />
              </a>
            </div>
          </div>

          <figure className="hero-figure">
            <picture>
              <source
                media="(max-width: 720px)"
                srcSet="/img/hero-workshop-960.webp 960w"
                sizes="100vw"
              />
              <source
                srcSet="/img/hero-workshop-960.webp 960w, /img/hero-workshop-1600.webp 1600w"
                sizes="(max-width: 1200px) 52vw, 640px"
              />
              <img
                src="/img/hero-workshop-1600.webp"
                width="1600"
                height="900"
                alt="A broad view of the Shelve the Potions workshop with sorted shelves, loose bottles, and clue boards."
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              <span>Workshop overview</span>
              Official in-game screenshot · Steam store media
            </figcaption>
          </figure>
        </div>
        <div className="container">
          <TrustStrip />
        </div>
      </section>

      <section className="section section--ruled" aria-labelledby="guide-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Find your shelf</p>
              <h2 id="guide-heading">Puzzle guides, organized by intent</h2>
            </div>
            <p>
              These routes come directly from the validated keyword matrix. Specific final answers remain clearly marked until they are reproduced in-game.
            </p>
          </div>

          <div className="guide-grid">
            <GuideCard page={walkthrough} featured />
            {puzzles.map((page) => <GuideCard key={page.href} page={page} />)}
          </div>
        </div>
      </section>

      <aside className="ad-slot container" aria-label="Advertisement placeholder">
        <span>Advertisement</span>
        <small>Reserved space · no ad before useful content</small>
      </aside>

      <section className="section help-section" aria-labelledby="help-heading">
        <div className="container help-grid">
          <div className="help-copy">
            <p className="eyebrow"><span /> Spoilers are your choice</p>
            <h2 id="help-heading">Help that stops where you want it to</h2>
            <p>
              Every puzzle article follows the same three-step ladder, so a search visitor can get unstuck without accidentally seeing the final shelf.
            </p>
            <ol className="spoiler-steps">
              <li>
                <span>01</span>
                <div><strong>Hint</strong><p>Points you toward the right object, shelf, or clue.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><strong>Rule</strong><p>Explains the sorting logic without giving every placement.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><strong>Full solution</strong><p>Shows the proposed order with screenshots and source status.</p></div>
              </li>
            </ol>
          </div>

          <figure className="hint-figure">
            <img
              src="/img/hint-cat-960.webp"
              width="960"
              height="540"
              loading="lazy"
              alt="The in-game cat hint panel offering to reveal a puzzle solution."
            />
            <figcaption>
              <strong>In-game fallback</strong>
              Magical cats can highlight clues, locate missing potions, or reveal part of a solution.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section facts-section" aria-labelledby="facts-heading">
        <div className="container facts-grid">
          <div>
            <p className="eyebrow"><span /> Officially confirmed</p>
            <h2 id="facts-heading">What kind of puzzle game is it?</h2>
            <p className="facts-intro">
              A cozy sorting game where each shelf is a handcrafted logic puzzle. Some rules are visible; others depend on hidden clues, special items, or information elsewhere in the workshop.
            </p>
            <ul className="check-list">
              <li><CheckIcon /><span><strong>20+ puzzles</strong> with individual rules</span></li>
              <li><CheckIcon /><span><strong>2,000+ unique potions</strong> to organize</span></li>
              <li><CheckIcon /><span><strong>No timer or penalty</strong> for experimenting</span></li>
            </ul>
          </div>

          <a className="trailer-card" href={site.steamUrl} target="_blank" rel="noreferrer">
            <span className="trailer-card__media">
              <img
                src="/img/gameplay-trailer-poster.webp"
                width="600"
                height="337"
                loading="lazy"
                alt="Official gameplay trailer preview showing potion shelves in the workshop."
              />
              <i aria-hidden="true"><PlayIcon /></i>
            </span>
            <span className="trailer-card__body">
              <small>Official gameplay trailer</small>
              <strong>See the workshop in motion</strong>
              <span>Watch on Steam <ExternalIcon /></span>
            </span>
          </a>
        </div>
      </section>

      <section className="section section--ruled" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Quick answers</p>
              <h2 id="faq-heading">Shelve the Potions! FAQ</h2>
            </div>
            <p>
              The questions players actually search for, answered from the developer&apos;s own FAQ and store listing — no guesswork.
            </p>
          </div>
          <ul className="check-list">
            <li><CheckIcon /><span><strong>Co-op or multiplayer?</strong> No — the developer&apos;s FAQ answers &quot;sadly, no&quot;, and no additional levels are planned either.</span></li>
            <li><CheckIcon /><span><strong>Cloud saves?</strong> Yes: Steam Cloud support with an autosave every 2 minutes.</span></li>
            <li><CheckIcon /><span><strong>Was AI used to make it?</strong> No — the developer states AI was not used at any stage of development.</span></li>
            <li><CheckIcon /><span><strong>How big is the game?</strong> 25+ handcrafted shelving puzzles and 2,000+ unique potions, per the official listing.</span></li>
            <li><CheckIcon /><span><strong>How long to finish?</strong> Roughly 3.5–4 hours based on full community playthroughs — expect longer at a relaxed pace (estimate, no official figure).</span></li>
            <li><CheckIcon /><span><strong>More updates coming?</strong> Bug patches and QOL updates, yes — the v1.0.11 disable-abilities toggle is one. More levels or multiplayer, no.</span></li>
          </ul>
        </div>
      </section>

      <section className="section update-section" aria-labelledby="update-heading">
        <div className="container update-inner">
          <div>
            <p className="eyebrow"><span /> Research log</p>
            <h2 id="update-heading">What we verified this week</h2>
          </div>
          <article className="update-card">
            <time dateTime="2026-08-26">Aug 26, 2026</time>
            <div>
              <h3>Official media and game structure mapped</h3>
              <p>
                We matched the live Steam listing, nine official screenshots, the gameplay trailer, and the initial Clock, Color, and Chess query set. Exact placements remain provisional until in-game reproduction.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
