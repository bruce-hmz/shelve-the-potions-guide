import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTrust } from "@/components/article-trust";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getHelpGuide } from "@/content/help-guides";
import { RelatedGuides } from "@/components/related-guides";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: "abilities-and-hints" }, { slug: "achievements" }];
}

function buildMetadata(guide: NonNullable<ReturnType<typeof getHelpGuide>>): Metadata {
  const canonical = `/help/${guide.slug}/`;
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getHelpGuide(slug);
  if (!guide) return {};
  return buildMetadata(guide);
}
export default async function HelpPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getHelpGuide(slug);
  if (!guide) notFound();

  const canonicalPath = `/help/${guide.slug}/`;
  const isAchievements = guide.slug === "achievements";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help", href: "/walkthrough/" },
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
            <p className="eyebrow"><span /> {isAchievements ? "Progress checklist" : "Game mechanics"} · no spoilers</p>
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
              {isAchievements ? (
                <>
                  <a href="#overview">Overview</a>
                  <a href="#shelf-milestones">Shelf milestones</a>
                  <a href="#puzzle-achievements">Puzzle achievements</a>
                  <a href="#named-shelves">Named boards</a>
                  <a href="#cats-and-upgrades">Cats · upgrades</a>
                  <a href="#no-abilities">No-abilities run</a>
                </>
              ) : (
                <>
                  <a href="#overview">Overview</a>
                  <a href="#three-levels">Three help levels</a>
                  <a href="#when-to-use">When to ask</a>
                  <a href="#cooldown">Costs and limits</a>
                  <a href="#steam-deck">Steam Deck controls</a>
                  <a href="#achievement-link">Achievement impact</a>
                </>
              )}
            </nav>
          </aside>

          <div className="article-body">
            <section id="overview" className="article-section article-section--first">
              <h2>What this covers</h2>
              <figure className="article-figure">
                <img src={guide.hero} width="1200" height="675" alt={guide.heroAlt} fetchPriority="high" />
                <figcaption>{guide.heroCaption}</figcaption>
              </figure>
              {isAchievements ? (
                <>
                  <p>
                    Shelve the Potions! has <strong>24 achievements</strong> on Steam. Most of them track natural progress: finish the tutorial, hit shelf-count milestones, clear every named board, and pet all ten magical cats. Only one —{" "}
                    <em>&quot;No magical abilities for me, thanks.&quot;</em> — requires a deliberate playstyle change. Every name below is quoted exactly as it appears on Steam.
                  </p>
                  <p className="source-note">Source: Steam Community global achievement stats for appid 4928820, checked {site.researchedAtLabel}.</p>
                </>
              ) : (
                <>
                  <p>
                    Shelve the Potions! has no fail state and no timer, so the hint system is a pacing tool rather than a rescue mechanism. Petting a magical cat opens a three-tier help menu that official store copy describes as: locate a missing potion, highlight important clues, or reveal part of a puzzle answer.
                  </p>
                  <p className="source-note">Source: official Steam store description for Shelve the Potions!, plus Steam achievement text that references using cat hints.</p>
                </>
              )}
            </section>

            {isAchievements && (
              <>
                <section id="shelf-milestones" className="article-section">
                  <h2>Shelf milestones — the backbone</h2>
                  <p>Eight achievements track how many shelves you complete. They unlock in order as you play, so you do not need to grind them separately.</p>
                  <div className="table-scroll">
                    <table>
                      <thead><tr><th>Achievement</th><th>Requirement</th></tr></thead>
                      <tbody>
                        <tr><td>&quot;First Shelf&quot;</td><td>Complete your first shelf.</td></tr>
                        <tr><td>&quot;Getting the hang of it&quot;</td><td>Complete 25 shelves.</td></tr>
                        <tr><td>&quot;It looks nicer already&quot;</td><td>Complete 50 shelves.</td></tr>
                        <tr><td>&quot;How long has it been&quot;</td><td>Complete 100 shelves.</td></tr>
                        <tr><td>&quot;I&apos;m going to feel my lower back tomorrow&quot;</td><td>Complete 150 shelves.</td></tr>
                        <tr><td>&quot;Almost there&quot;</td><td>Complete 200 shelves.</td></tr>
                        <tr><td>&quot;Ah, finally&quot;</td><td>Complete all shelves. Global unlock rate is about 17.7%, making this one of the rarest achievements in the list.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section id="puzzle-achievements" className="article-section">
                  <h2>Puzzle achievements</h2>
                  <p>Four achievements track how many unique puzzle orders you have solved. Steam&apos;s global stats show roughly half of players clear all ten.</p>
                  <div className="table-scroll">
                    <table>
                      <thead><tr><th>Achievement</th><th>Requirement</th></tr></thead>
                      <tbody>
                        <tr><td>&quot;First Discovery&quot;</td><td>Solve your first puzzle order. About 99.3% of players have this.</td></tr>
                        <tr><td>&quot;Puzzle Solver&quot;</td><td>Solve 5 unique puzzle orders. About 81.8% unlock rate.</td></tr>
                        <tr><td>&quot;I can see the patterns&quot;</td><td>Unlock 10 puzzle solutions. About 74.7% unlock rate.</td></tr>
                        <tr><td>&quot;I can see through the matrix&quot;</td><td>Unlock every puzzle solution. About 42% unlock rate — the game has more than ten orders, so this takes longer than the previous one.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section id="named-shelves" className="article-section">
                  <h2>Named boards</h2>
                  <p>Six achievements unlock the first time you complete a specific shelf. If you can read a clue well enough to solve one of these boards you get them automatically.</p>
                  <div className="table-scroll">
                    <table>
                      <thead><tr><th>Achievement</th><th>Which board</th></tr></thead>
                      <tbody>
                        <tr><td>&quot;Spicy&quot;</td><td>Complete the Spices Table. About 98.9% unlock rate — usually the very first board most players clear.</td></tr>
                        <tr><td>&quot;Restocking Board&quot;</td><td>Complete the ingredients board.</td></tr>
                        <tr><td>&quot;BEST STORY EVER!&quot;</td><td>Complete the Hero chronicles.</td></tr>
                        <tr><td>&quot;Proud Grandfather&quot;</td><td>Complete the clock.</td></tr>
                        <tr><td>&quot;Gardener&quot;</td><td>Complete the plant shelve. (Steam&apos;s typo — that&apos;s how the achievement is written.)</td></tr>
                        <tr><td>&quot;Grandmaster&quot;</td><td>Complete the chess board.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section id="cats-and-upgrades" className="article-section">
                  <h2>Cats and upgrades</h2>
                  <p>Six achievements reward you for using the game&apos;s comfort systems: petting cats and buying upgrades.</p>
                  <div className="table-scroll">
                    <table>
                      <thead><tr><th>Achievement</th><th>Requirement</th></tr></thead>
                      <tbody>
                        <tr><td>&quot;Curious Cat&quot;</td><td>Pet your first cat.</td></tr>
                        <tr><td>&quot;Cat lady&quot;</td><td>Pet all 10 magical cats. About 35.3% unlock rate.</td></tr>
                        <tr><td>&quot;Hooman needs help :)&quot;</td><td>Use a cat hint for the first time.</td></tr>
                        <tr><td>&quot;Welcome, Apprentice&quot;</td><td>Finish the tutorial. About 97% of players have this.</td></tr>
                        <tr><td>&quot;Hello improvements.&quot;</td><td>Buy your first upgrade.</td></tr>
                        <tr><td>&quot;I need all the help I can get ok!&quot;</td><td>Buy all the upgrades.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section id="no-abilities" className="article-section article-callout">
                  <p className="article-label">The hard one</p>
                  <h2>&quot;No magical abilities for me, thanks.&quot;</h2>
                  <p>
                    This is the rarest achievement in the list at about <strong>4.5%</strong> unlock rate, and the only one that demands a playstyle decision: finish the game without ever using an ability. In practice that means:
                  </p>
                  <ul className="mistake-list" style={{ listStyle: "none" }}>
                    <li>Never pet a cat to ask for hints — even one use ends the run for this achievement.</li>
                    <li>You can still pet cats for the <em>Curious Cat</em> and <em>Cat lady</em> achievements; petting is separate from asking a cat for help. If you are unsure on your save, do a dedicated no-hint run and keep petting out of it too.</li>
                    <li>Solve every puzzle from clue reading alone. Our walkthrough&apos;s Hint → Rule → Solution ladder is built for this.</li>
                  </ul>
                  <p>
                    Steam achievement text only says "any abilities", so we recommend being conservative: treat every interaction with a magical cat as off-limits during the run.
                  </p>
                </section>
              </>
            )}

            {!isAchievements && (
              <>
                <section id="three-levels" className="article-section">
                  <h2>The three help levels</h2>
                  <p>Official store copy lists three things a magical cat can do. They escalate from direction to answer.</p>
                  <div className="table-scroll">
                    <table>
                      <thead><tr><th>Level</th><th>What the cat does</th><th>When to use it</th></tr></thead>
                      <tbody>
                        <tr>
                          <td>Point</td>
                          <td>Points at a missing potion you still need to find.</td>
                          <td>You are one bottle short and have re-scanned the room twice without spotting it.</td>
                        </tr>
                        <tr>
                          <td>Highlight</td>
                          <td>Highlights important clue objects in the environment.</td>
                          <td>You suspect a board or painting is a clue but cannot tell which part matters.</td>
                        </tr>
                        <tr>
                          <td>Reveal</td>
                          <td>Reveals part of a puzzle solution.</td>
                          <td>Last resort — this is the closest thing to looking at our walkthrough&apos;s final solution.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>The escalation matches how we structure every guide on this site: hint first, then rule, then full solution.</p>
                </section>
                <section id="when-to-use" className="article-section">
                  <h2>When to ask — and when to wait</h2>
                  <p>
                    The game never punishes you for asking, so the real question is what kind of stuck you are. Ask for a point if you are hunting a single missing bottle. Ask for a highlight if the puzzle is environmental. Save reveal for the moment you would otherwise tab out to a guide.
                  </p>
                  <p>
                    If you want to keep achievements interesting, do your first pass on each board without hints, then use them freely after that — the only achievement affected is{" "}
                    <em>&quot;No magical abilities for me, thanks.&quot;</em> See our achievements guide for details.
                  </p>
                </section>

                <section id="cooldown" className="article-section">
                  <h2>Costs, cooldowns, penalties</h2>
                  <p>
                    Nothing official suggests cat hints have a cost, cooldown, or penalty. Steam&apos;s global stats show about <strong>29.5%</strong> of players use a hint at least once (<em>&quot;Hooman needs help :)&quot;</em>), which is well below the completion rate of most board achievements — most players either solve without hints or do not realise the system exists.
                  </p>
                </section>

                <section id="steam-deck" className="article-section">
                  <h2>Steam Deck: d-pad remap workaround</h2>
                  <p>
                    On Steam Deck the d-pad down button is hard-wired to two actions at once — highlight a shelf and show part of a potion answer. The built-in remap UI only accepts keyboard and mouse input, so you cannot reassign it from controller mode alone.
                  </p>
                  <p>
                    The developer&apos;s suggested fix on Discord is to move the three ability keys further apart — from the default 1-2-3 to something like I-O-P. Multiple players also recommend force-killing the game after an accidental press to undo a wrong reveal, though that is a last resort because it rolls back recent progress.
                  </p>
                  <p className="source-note">
                    Source: Steam Community discussion thread "I wish there to be a lock for abilities", plus official developer replies. Rebinding has not been retested by us; treat as community-verified workaround.
                  </p>
                </section>

                <section id="achievement-link" className="article-section article-callout article-callout--hint">
                  <p className="article-label">Related</p>
                  <h2>Achievements that touch this system</h2>
                  <ul className="mistake-list" style={{ listStyle: "none" }}>
                    <li><em>&quot;Curious Cat&quot;</em> — pet any cat.</li>
                    <li><em>&quot;Cat lady&quot;</em> — pet all 10 cats.</li>
                    <li><em>&quot;Hooman needs help :)&quot;</em> — use a hint once.</li>
                    <li><em>&quot;No magical abilities for me, thanks.&quot;</em> — finish with zero uses.</li>
                  </ul>
                  <p>Full list lives in the <a href="/help/achievements/">achievements guide</a>.</p>
                </section>
              </>
            )}

            <aside className="ad-slot article-ad" aria-label="Advertisement placeholder">
              <span>Advertisement</span>
              <small>Reserved after the useful answer</small>
            </aside>

            <section id="sources" className="article-section">
              <p className="article-label">Evidence</p>
              <h2>Where this information comes from</h2>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li>Achievement names, descriptions, and global unlock percentages: Steam Community global stats page for app 4928820.</li>
                <li>Three-tier cat help description: official Steam store listing for Shelve the Potions!</li>
                <li>No in-game retest has been done for this article; we label it accordingly and will update it once verified.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <div className="container">
        <RelatedGuides currentSlug={guide.slug} />
      </div>
    </main>
  );
}
