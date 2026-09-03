import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTrust } from "@/components/article-trust";
import { AdBox300 } from "@/components/ads";
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
                  <a href="#cat-lady">Petting all 10 cats</a>
                  <a href="#hooman">"Hooman needs help :)"</a>
                  <a href="#no-abilities">No-abilities run</a>
                </>
              ) : (
                <>
                  <a href="#overview">Overview</a>
                  <a href="#three-levels">Three help levels</a>
                  <a href="#assemble">Assemble ability</a>
                  <a href="#when-to-use">When to ask</a>
                  <a href="#cooldown">Costs and cooldowns</a>
                  <a href="#disable">Disable abilities (v1.0.11)</a>
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
                  <p>
                    Separate from the menu, keybind-triggered abilities (highlight, Assemble, reveal) unlock as you complete shelves — players report they can appear without much fanfare, which is why the patch v1.0.11 option to disable them entirely matters for achievement runs.
                  </p>
                  <p className="source-note">Source: official Steam store description for Shelve the Potions!, patch notes v1.0.8–v1.0.11, and Steam Community threads.</p>
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
                        <tr><td>&quot;Hooman needs help :)&quot;</td><td>Use a cat hint for the first time — but the option only appears under conditions that trip a lot of players up. See the section below.</td></tr>
                        <tr><td>&quot;Welcome, Apprentice&quot;</td><td>Finish the tutorial. About 97% of players have this.</td></tr>
                        <tr><td>&quot;Hello improvements.&quot;</td><td>Buy your first upgrade.</td></tr>
                        <tr><td>&quot;I need all the help I can get ok!&quot;</td><td>Buy all the upgrades.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section id="cat-lady" className="article-section article-callout article-callout--hint">
                  <p className="article-label">The finicky one</p>
                  <h2>&quot;Cat lady&quot; — petting all 10 magical cats</h2>
                  <p>
                    About 35% of players have <em>&quot;Cat lady&quot;</em> (pet all 10 magical cats), and the two most common failures are both covered by developer replies in the Steam &quot;Catlady achievement&quot; thread (29–31 Aug 2026). First, the pet itself: <strong>petting means moving the cursor over a cat and holding it there — a single click does not count</strong>. The developer spelled the method out verbatim after one player counted ten pets with no achievement: &quot;you need to pet them, move and hold the mouse over the cats.&quot;
                  </p>
                  <p>
                    Second, the commonly missed cat: <strong>Sir Meowsir sits on a barrel in front of the fireplace</strong> — the developer&apos;s answer to the player who could not find the tenth cat on a second, no-magic playthrough. If the achievement still does not pop after a recount, redo the sweep using the hover-and-hold method rather than clicking; the counted-ten-but-nothing-happened report in the same thread was resolved by exactly that distinction. The method is community-verified, not retested by us in-game.
                  </p>
                  <p>
                    For the recount itself, here is the full set of ten. Nine names and locations come from one player&apos;s completed first-hand sweep in the same thread (3 Sep 2026, player-reported — we have not retested them in-game); Sir Meowsir&apos;s spot is the developer&apos;s own answer:
                  </p>
                  <ul className="mistake-list" style={{ listStyle: "none" }}>
                    <li><strong>Dipper</strong> — the tutorial room</li>
                    <li><strong>Cheddar</strong> — the chess board</li>
                    <li><strong>AbraCATabra</strong> — the solitaire board</li>
                    <li><strong>Jack</strong> — the price board</li>
                    <li><strong>Merlin the First</strong> — the broom</li>
                    <li><strong>Cerberus</strong> — the hearth</li>
                    <li><strong>Madam Tutu</strong> — the books</li>
                    <li><strong>The Destroyer</strong> — the scales</li>
                    <li><strong>Athena</strong> — the rainbow</li>
                    <li><strong>Sir Meowsir</strong> — the barrel in front of the fireplace (developer-confirmed)</li>
                  </ul>
                  <p>
                    Playing on Steam Deck? Simply interacting with a cat does nothing — one Deck player reported petting exactly one cat by accident and no others. The developer&apos;s 3 Sep answer in the same thread is garbled, so we keep it verbatim: &quot;Moving the UI controls while talking a cat to the heart on the left and right on top of it is how you start petting them&quot; — which reads as: stand near a cat and <strong>move the heart UI element left and right on top of the cat</strong> to start petting, rather than pressing the interact button. The developer has not rephrased it yet, so treat the reading as our interpretation.
                  </p>
                  <p className="source-note">
                    Source: Steam discussion &quot;Catlady achievement&quot; (29 Aug – 3 Sep 2026, three developer replies) — hold-to-pet method and Sir Meowsir&apos;s barrel from the developer, nine cat names/locations from the OP&apos;s 3 Sep first-hand list, Steam Deck petting wording quoted verbatim from the developer&apos;s 3 Sep reply — plus an independent 29 Aug Steam review about tracking down missed cats.
                  </p>
                </section>
                <section id="hooman" className="article-section article-callout article-callout--hint">
                  <p className="article-label">The confusing one</p>
                  <h2>&quot;Hooman needs help :)&quot; — why your hint attempt does nothing</h2>
                  <p>
                    Steam&apos;s official text says only &quot;use a cat hint for the first time&quot;, so players pet a cat, see nothing usable, and assume the achievement is broken. Two players posted the same problem on the Steam forum before the actual conditions emerged. Three things have to line up:
                  </p>
                  <ul className="mistake-list" style={{ listStyle: "none" }}>
                    <li><strong>Fill at least 30 shelves first.</strong> The cat&apos;s first help option does not exist before that point — the developer confirmed the threshold directly: &quot;you have to complete 30 shelves before asking the cat for a hint&quot; (accepted developer answer, Steam thread, 3 Sep 2026).</li>
                    <li><strong>Carry a potion whose puzzle you have not solved yet.</strong> The hint needs an unsolved board to work on.</li>
                    <li><strong>Interact with the cat, then switch from the Upgrade tab to the other tab of the menu</strong> and take the top option there — the one called &quot;Mark puzzle pieces&quot;. The menu opens on the Upgrade window, which is why the working option is easy to miss.</li>
                  </ul>
                  <p>
                    The greyed-out hint buttons themselves are not broken, either — the thread that drew the developer answer started because a player who had finished the game saw two locked options displaying <strong>&quot;12/30&quot;</strong> and <strong>&quot;12/50&quot;</strong>. Those counters are your completed-shelf count against each hint&apos;s unlock threshold: the highlight hint unlocks at 30 shelves, and the reveal hint at 50 (the 50 is read off the counter pair itself — the developer confirmed the 30; the 50 is our inference). If your buttons are grey with a low first number, the answer is simply more shelving.
                  </p>
                  <p>
                    One more warning: this achievement is effectively <strong>missable</strong>. If you have already solved every puzzle in the workshop, no unsolved board remains for the hint to act on — the player who shared the method notes you would have to wait for another playthrough. So if you are chasing all 24, use your first hint deliberately while puzzles are still open. Even completionists hit this wall from the other side: a 3 Sep 2026 review from a player who reached 100% in under seven hours without using a single skill says figuring out how to unlock <em>&quot;Hooman needs help :)&quot;</em> was the part that stumped them longest.
                  </p>
                  <p className="source-note">
                    Source: Steam discussions &quot;How do you unlock Hooman need help?&quot; (26–27 Aug 2026, accepted community answer plus a corroborating reply) and &quot;I can&apos;t ask cats for hints?&quot; (2–3 Sep 2026) — the 30-shelf rule is developer-confirmed in the latter via the accepted answer; the 50-shelf reveal threshold is inferred from the on-screen counters. Remaining steps are community-verified, not retested by us in-game.
                  </p>
                </section>
                <section id="no-abilities" className="article-section article-callout">
                  <p className="article-label">The hard one</p>
                  <h2>&quot;No magical abilities for me, thanks.&quot;</h2>
                  <p>
                    The rarest achievement in the list at about <strong>4.5%</strong> unlock rate, and the only one that demands a playstyle decision: finish the game without ever using an ability. At launch this run was genuinely risky — abilities unlocked silently as shelves filled, and one mispress plus autosave ended hours of work. Since patch v1.0.11 there is an options-menu toggle that disables magic abilities outright, and the developer&apos;s patch note says it exists &quot;to easily get the last achievement&quot;.
                  </p>
                  <p>
                    Short version: flip the toggle before you start, play on a save where you have never asked a cat for help, and keep petting cats — that part is safe. The full step-by-step plan, including what counts as an ability and what to do when stuck, lives in our <a href="/help/no-abilities-run/">no-abilities run guide</a>.
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
                <section id="assemble" className="article-section">
                  <h2>The Assemble ability</h2>
                  <p>
                    Assemble is the ability players ask about most, because unlike the three cat-menu actions it is not described anywhere in the store listing. The developer explained it directly on the Steam forum: Assemble pulls every unshelved potion from the same set into your hand, and it only works when two conditions hold.
                  </p>
                  <ul className="mistake-list" style={{ listStyle: "none" }}>
                    <li><strong>There is free space in your hand.</strong> If you are already holding every potion of that set, there is nothing for it to gather.</li>
                    <li><strong>The potions are not already shelved.</strong> Assemble never retrieves bottles you have already placed.</li>
                  </ul>
                  <p>
                    The developer&apos;s example: holding potion &quot;2&quot; and using Assemble teleports &quot;1&quot;, &quot;3&quot;, &quot;4&quot; and &quot;5&quot; to your hand if there is room for them. A cat upgrade modifies the behaviour. If Assemble seems to &quot;do nothing&quot;, you are almost certainly in one of the two cases above — the player who asked originally confirmed this was exactly her mistake.
                  </p>
                  <p>
                    Patch v1.0.10 added another upgrade level for Assemble (and for the highlight ability) that lowers its cooldown to 40 seconds, so a fully upgraded Assemble can fire roughly twice a minute.
                  </p>
                  <p className="source-note">
                    Source: developer reply in the Steam discussion &quot;How to use Assemble ability?&quot; (27 Aug 2026) and official patch notes v1.0.10. Not retested by us in-game.
                  </p>
                </section>
                <section id="when-to-use" className="article-section">
                  <h2>When to ask — and when to wait</h2>
                  <p>
                    The game never punishes you for asking, so the real question is what kind of stuck you are. Ask for a point if you are hunting a single missing bottle. Ask for a highlight if the puzzle is environmental. Save reveal for the moment you would otherwise tab out to a guide.
                  </p>
                  <p>
                    If you want to keep achievements interesting, do your first pass on each board without hints, then use them freely after that — the only achievement affected is{" "}
                    <em>&quot;No magical abilities for me, thanks.&quot;</em> See our achievements guide for details. And since patch v1.0.11 you can remove the temptation entirely with the <a href="#disable">disable-abilities toggle</a>.
                  </p>
                </section>

                <section id="cooldown" className="article-section">
                  <h2>Costs, cooldowns, penalties</h2>
                  <p>
                    The cat menu itself has no stated cost or penalty, and the game has no timer pressure anywhere. The keybind abilities are different: the official v1.0.10 patch notes confirm that the highlight and Assemble abilities run on a cooldown, and that a newly added upgrade level lowers it to 40 seconds.
                  </p>
                  <p>
                    Steam&apos;s global stats show about <strong>29.5%</strong> of players use a hint at least once (<em>&quot;Hooman needs help :)&quot;</em>), well below the completion rate of most board achievements — most players either solve without hints or do not realise the system exists.
                  </p>
                </section>

                <section id="disable" className="article-section article-callout">
                  <p className="article-label">New in patch v1.0.11</p>
                  <h2>Turn abilities off entirely</h2>
                  <p>
                    The most requested change is now in the game: patch v1.0.11 adds a toggle in the options menu that disables the magic abilities. Disabled abilities stay visible, but activating one only shows a message that it is turned off — it cannot trigger.
                  </p>
                  <p>
                    The developer&apos;s patch note states the intent directly: it exists &quot;to easily get the last achievement&quot;. If you are going for <em>&quot;No magical abilities for me, thanks.&quot;</em> (about 4.5% of players have it), flip the toggle before you start the run and an accidental keypress can no longer void hours of progress — before this patch, players reported losing three-hour runs to a single slip. The full run plan lives in our <a href="/help/no-abilities-run/">no-abilities run guide</a>.
                  </p>
                  <p>
                    The behaviour above is quoted from the official v1.0.11 patch notes (26 Aug 2026); we have not retested the toggle in-game yet.
                  </p>
                </section>

                <section id="steam-deck" className="article-section">
                  <h2>Steam Deck: d-pad remap workaround</h2>
                  <p>
                    On Steam Deck the d-pad down button is hard-wired to two actions at once — highlight a shelf and show part of a potion answer. The built-in remap UI only accepts keyboard and mouse input, so you cannot reassign it from controller mode alone. Before patch v1.0.11 this dual binding was the main way players accidentally voided a no-abilities run; the new <a href="#disable">disable-abilities toggle</a> removes most of that risk.
                  </p>
                  <p>
                    If you want to keep the abilities usable, the developer&apos;s suggested fix from Discord still applies: move the three ability keys further apart — from the default 1-2-3 to something like I-O-P. Force-killing the game after an accidental press remains a last-resort rollback because it also rewinds recent progress; with the toggle enabled you should not need it at all. If the Deck bother is stick sensitivity rather than bindings, that was addressed separately: patch v1.0.12 shipped 360-degree left-stick movement, and our <a href="/help/settings-and-comfort/">settings &amp; comfort guide</a> covers the follow-up tuning. And if the bother is <a href="/help/settings-and-comfort/#performance">stutter or a jittery mouse</a> instead, the same guide&apos;s performance section collects the community&apos;s frame-rate findings and the developer&apos;s vsync/FPS-cap advice.
                  </p>
                  <p className="source-note">
                    Source: Steam Community discussion thread &quot;I wish there to be a lock for abilities&quot;, developer advice relayed from Discord, and official patch notes v1.0.10–v1.0.11. Rebinding has not been retested by us; treat as community-verified workaround.
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

            <aside className="ad-slot ad-slot--live article-ad" aria-label="Advertisement">
              <span>Advertisement</span>
              <AdBox300 />
            </aside>

            <section id="sources" className="article-section">
              <p className="article-label">Evidence</p>
              <h2>Where this information comes from</h2>
              <ul className="mistake-list" style={{ listStyle: "none" }}>
                <li>Achievement names, descriptions, and global unlock percentages: Steam Community global stats page for app 4928820.</li>
                <li>Three-tier cat help description: official Steam store listing for Shelve the Potions!</li>
                <li>Assemble behaviour and ability cooldowns: developer reply in the Steam discussion &quot;How to use Assemble ability?&quot; and official patch notes v1.0.10–v1.0.11 (Steam Community announcements).</li>
                <li>Accidental-trigger reports and rebinding advice: Steam discussion thread &quot;I wish there to be a lock for abilities&quot;.</li>
                <li>&quot;Hooman needs help :)&quot; unlock steps: Steam discussion &quot;How do you unlock Hooman need help?&quot; (accepted community answer, 26–27 Aug 2026), with the Upgrade-tab / &quot;Mark puzzle pieces&quot; menu path from a 27 Aug reply in the same thread. The 30-shelf threshold is developer-confirmed: accepted developer answer in &quot;I can&apos;t ask cats for hints?&quot; (3 Sep 2026); the 50-shelf reveal threshold is inferred from that thread&apos;s X/50 counter.</li>
                <li>&quot;Cat lady&quot; petting method (hold the cursor) and Sir Meowsir&apos;s fireplace barrel: developer replies in the Steam discussion &quot;Catlady achievement&quot; (29 Aug – 3 Sep 2026). The nine other cat names/locations are the OP&apos;s 3 Sep player-reported first-hand list from that thread; the Steam Deck petting sentence is the developer&apos;s 3 Sep reply, quoted verbatim with our interpretation noted.</li>
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
