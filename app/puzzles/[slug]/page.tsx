import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTrust } from "@/components/article-trust";
import { AdBox300 } from "@/components/ads";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedGuides } from "@/components/related-guides";
import { getPuzzleGuide, puzzleGuides } from "@/content/puzzles";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return puzzleGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPuzzleGuide(slug);
  if (!guide) return {};
  const canonical = `/puzzles/${guide.slug}/`;

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: guide.seoTitle,
      description: guide.description,
      url: canonical,
      images: [{ url: guide.hero, width: 1200, height: 675, alt: guide.heroAlt }],
      modifiedTime: `${site.researchedAt}T04:00:00Z`,
    },
    twitter: { card: "summary_large_image", title: guide.seoTitle, description: guide.description, images: [guide.hero] },
  };
}

export default async function PuzzlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPuzzleGuide(slug);
  if (!guide) notFound();

  const canonicalPath = `/puzzles/${guide.slug}/`;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Walkthrough", href: "/walkthrough/" },
    { label: guide.name },
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: `${site.url}${item.href}` } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      image: `${site.url}${guide.hero}`,
      mainEntityOfPage: `${site.url}${canonicalPath}`,
      dateModified: site.researchedAt,
      author: { "@type": "Organization", name: site.name },
    },
  ];

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="eyebrow"><span /> Puzzle guide · spoiler controlled</p>
            <h1>{guide.title}</h1>
            <p className="page-dek">{guide.description}</p>
            <div className="quick-answer">
              <span>Quick answer</span>
              <p>{guide.quickAnswer}</p>
            </div>
            <ArticleTrust />
          </div>
        </header>

        <div className="container article-frame">
          <aside className="article-toc" aria-label="On this page">
            <strong>On this page</strong>
            <nav>
              <a href="#overview">Overview</a>
              <a href="#hint">Hint</a>
              <a href="#rule">Sorting rule</a>
              <a href="#steps">Steps</a>
              <a href="#solution">Full solution</a>
              <a href="#mistakes">Common mistakes</a>
              <a href="#cat-hint">Cat hint</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="overview" className="article-section article-section--first">
              <h2>What to look at first</h2>
              <figure className="article-figure">
                <img src={guide.hero} width="1200" height="675" alt={guide.heroAlt} fetchPriority="high" />
                <figcaption>{guide.heroCaption}</figcaption>
              </figure>
              <p>
                This is a clue-reading puzzle, not a speed challenge. The official store confirms that shelves can depend on hidden clues, special items, or information learned elsewhere in the workshop, so inspect the surrounding space before committing to an order.
              </p>
            </section>

            <section id="hint" className="article-section article-callout article-callout--hint">
              <p className="article-label">Spoiler level 1</p>
              <h2>Hint</h2>
              <p>{guide.hint}</p>
            </section>

            <section id="rule" className="article-section article-callout">
              <p className="article-label">Spoiler level 2</p>
              <h2>The sorting rule</h2>
              <p>{guide.rule}</p>
            </section>

            <section id="steps" className="article-section">
              <p className="article-label">Step by step</p>
              <h2>Work through the clue</h2>
              <ol className="article-steps">
                {guide.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="solution" className="article-section">
              <p className="article-label">Spoiler level 3</p>
              <h2>Full solution status</h2>
              <details className="solution-reveal">
                <summary>Reveal the {guide.proposedSolution ? "proposed order" : "current answer status"}</summary>
                <div>
                  {guide.proposedSolution ? <p className="solution-sequence">{guide.proposedSolution}</p> : <p className="solution-unavailable">Exact placement withheld — evidence is incomplete.</p>}
                  <p>{guide.solutionCaveat}</p>
                </div>
              </details>
            </section>

            <aside className="ad-slot ad-slot--live article-ad" aria-label="Advertisement">
              <span>Advertisement</span>
              <AdBox300 />
            </aside>

            <section id="mistakes" className="article-section">
              <p className="article-label">Troubleshooting</p>
              <h2>Common mistakes</h2>
              <ul className="mistake-list">
                {guide.mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}
              </ul>
            </section>

            <section id="cat-hint" className="article-section">
              <p className="article-label">In-game fallback</p>
              <h2>When to use the cat hint</h2>
              <p>
                If the missing object or clue still is not clear, pet a magical cat and ask for help. The game can point to missing potions, highlight clue objects, or reveal part of a solution without adding a timer or penalty.
              </p>
              <figure className="article-figure article-figure--compact">
                <img src="/img/hint-cat-960.webp" width="960" height="540" loading="lazy" alt="The cat hint menu with options to highlight items, locate them, or reveal a puzzle solution." />
                <figcaption>The built-in hint menu offers escalating help similar to this guide&apos;s Hint → Rule → Solution structure.</figcaption>
              </figure>
            </section>

            <aside className="evidence-note">
              <strong>Evidence note</strong>
              <p>
                Game mechanics and media come from the official Steam listing. Exact puzzle-answer leads come from a Steam Community guide and an independent guide; they remain provisional until reproduced in-game.
              </p>
            </aside>
          </div>
        </div>
      </article>

      <div className="container">
        <RelatedGuides currentSlug={guide.slug} />
      </div>
    </main>
  );
}
