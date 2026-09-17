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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do ability upgrades count as using abilities in Shelve the Potions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — and it is developer-confirmed: asked in the Steam 'no magic run for the achievement' thread (7 Sep 2026) whether buying skill upgrades is allowed during the run, the developer answered, 'you can upgrade whatever you like just don't use magic'. Buying an upgrade is a purchase, not a use. The developer also recommends the v1.0.11 disable-abilities toggle so a misclick cannot fire an ability mid-run.",
      },
    },
    {
      "@type": "Question",
      name: "Can the no-abilities achievement be voided by a keybind that is not an ability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On controller, one player reports exactly that: the binding that shows a completed puzzle's solution shares a button with a magic ability, so checking a solved board triggered the ability and ended the run. Verify your bindings before starting — move ability keys away from anything you press routinely — or remove the risk entirely with the v1.0.11 disable-abilities toggle.",
      },
    },
    {
      "@type": "Question",
      name: "Does asking a cat for a hint void the no-abilities achievement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — developer-confirmed on 17 Sep 2026 in the Steam 'no abilities achievement' thread: asked whether getting help from the cat counts as an ability, the developer answered, 'no it doesn't count as an ability, and make sure to toggle disable abilities in the options to make it easier to get'. Cat hints are safe on a no-abilities run, so 'Hooman needs help :)' and the no-abilities achievement can be earned on the same save. One untested edge: how the cat menu behaves while the disable-abilities toggle is switched on — keep the toggle on and ask normally; if the menu appears blocked, ask before enabling it.",
      },
    },
  ],
};

export default function NoAbilitiesRunPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd, faqJsonLd]) }} />
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
                About <strong>4.5%</strong> of players have it. The recipe: enable the <strong>disable-abilities toggle in the options menu</strong> (added in patch v1.0.11), never fire a keybind ability, and solve every shelf from clue reading alone. Asking cats for hints is safe too — the developer confirmed cat help &quot;doesn&apos;t count as an ability&quot; (17 Sep 2026). That is the whole run — the guide below explains why each rule exists.
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
              <a href="#faq">FAQ</a>
            </nav>
          </aside>

          <div className="article-body">
            <section id="what" className="article-section article-section--first">
              <h2>What the achievement actually asks</h2>
              <p>
                Steam&apos;s text says only &quot;finish the game without using any abilities&quot;. It does not define which interactions count, and the game itself never warns you — abilities simply unlock as you fill shelves, sometimes without much fanfare. Two developer rulings (Aug–Sep 2026) have now settled the question: the <strong>keybind spells count</strong> (highlight, Assemble, reveal), while <strong>asking a cat for hints does not</strong> — &quot;no it doesn&apos;t count as an ability.&quot; The full achievement list lives in our <Link href="/help/achievements/">achievements guide</Link>.
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
                  <div><strong>Pair it with &quot;Hooman needs help :)&quot; on one save</strong><p>The run requires never having fired an ability on that save — but cat help no longer forces a fresh one. The developer confirmed (17 Sep 2026) that asking a cat &quot;doesn&apos;t count as an ability&quot;, so no-abilities and <em>&quot;Hooman needs help :)&quot;</em> can be earned on the same playthrough — ask away, then get back to sorting. Mind Hooman&apos;s own rules when you do: 30 completed shelves before the cat will help, and ask while holding a potion whose puzzle is still unsolved (both covered in our achievements guide). A save where a keybind ability has already fired is still out — that part has not changed.</p></div>
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
                <li><CheckIcon /><span><strong>Safe: buying upgrades.</strong> <em>&quot;Hello improvements.&quot;</em> and <em>&quot;I need all the help I can get ok!&quot;</em> are purchase achievements, not ability uses — and the developer confirmed the rule directly: &quot;you can upgrade whatever you like just don&apos;t use magic.&quot;</span></li>
                <li><CheckIcon /><span><strong>Safe: asking a cat for hints.</strong> Point, highlight, reveal — the whole cat menu is fine. Developer-confirmed 17 Sep 2026: asked whether getting help from the cat counts as an ability, the developer answered, &quot;no it doesn&apos;t count as an ability.&quot; A bonus: this also means <em>&quot;Hooman needs help :)&quot;</em> and this achievement can share one save (see <a href="#setup">step 2</a>).</span></li>
                <li><CheckIcon /><span><strong>Not safe: the keybind abilities</strong> (highlight, Assemble, reveal). The highlight one is developer-confirmed — asked whether the shelf-highlight voids the achievement, the developer answered, &quot;Sadly it&apos;ll block the achievement, as it&apos;s a magic ability&quot; — and with the v1.0.11 toggle on none of them can fire at all.</span></li>
              </ul>
            </section>

            <section id="midrun" className="article-section">
              <h2>Stuck mid-run?</h2>
              <p>
                Being stuck no longer forces a choice: asking the in-game cat for a hint is achievement-safe (developer-confirmed — see <a href="#faq">the FAQ</a>). If you would rather not be spoiled, use the clue ladder instead. Open the relevant puzzle guide and stop at the first level that unsticks you: a <Link href="/walkthrough/">hint</Link> pointing at the right object, the sorting rule, and only then the (clearly labelled, often still provisional) solution. The <Link href="/walkthrough/all-puzzle-solutions/">all-puzzle-solutions hub</Link> tells you which boards have verified answers and which are still community leads.
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

            <section id="faq" className="article-section">
              <p className="article-label">FAQ</p>
              <h2>Frequently asked questions</h2>
              <ul className="check-list">
                <li>
                  <CheckIcon />
                  <span>
                    <strong>Do ability upgrades count as using abilities?</strong> <strong>No</strong> — and this is now <em>developer-confirmed</em>, not just community consensus: asked in the Steam &quot;no magic run for the achievement&quot; thread (7 Sep 2026) whether buying skill upgrades is allowed during the run, the developer answered, &quot;you can upgrade whatever you like just don&apos;t use magic.&quot; Buying an upgrade is a purchase, the same category as the two purchase achievements, while a &quot;use&quot; means actually firing one of the keybind abilities — asking a cat for help is <em>not</em> a use, as the developer confirmed on 17 Sep 2026 (<a href="#faq">next question</a>). One warning survives from the earlier &quot;ability usage?&quot; thread (28 Aug 2026): a player there lost the achievement to a single accidental use on an unpatched run, so on an unprotected run the margin for error is still zero. The disable toggle (see <a href="#setup">step 1</a>) removes the risk entirely — the developer recommends it in the same reply, &quot;there is also an option in to toggle magic off to not misclick it.&quot;
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    <strong>On controller, can a run die to a keybind that is not an ability?</strong> One 27 Aug Steam review says yes: the binding that <strong>shows a completed puzzle&apos;s solution shares a button with a magic ability</strong>, so simply checking a solved board fired the ability and voided a 12-hour run. This is a single player report, not a developer-confirmed binding table — but the insurance is cheap either way: before starting, open the control options and confirm no ability shares a button you press for anything routine (the community&apos;s I-O-P spread in <a href="#legacy">the pre-patch notes</a> is exactly this insurance), or remove the possibility entirely with the v1.0.11 <a href="#setup">disable toggle</a>.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span>
                    <strong>Does asking a cat for a hint void the no-abilities achievement?</strong> <strong>No.</strong> Asked directly in the Steam &quot;no abilities achievement&quot; thread (17 Sep 2026), the developer answered, &quot;no it doesn&apos;t count as an ability, and make sure to toggle disable abilities in the options to make it easier to get.&quot; Cat hints are safe on this run — and pairing it with <em>&quot;Hooman needs help :)&quot;</em> on one save works (<a href="#setup">step 2</a>). One edge we have not tested: how the cat menu behaves while the disable-abilities toggle is switched on. The sensible play is to keep the toggle on and ask normally; if the menu turns out to be blocked on your build, ask before enabling the toggle — untested by us either way.
                  </span>
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
                <li>Achievement name, unlock rate, and related achievements: Steam Community global stats for app 4928820.</li>
                <li>Disable-abilities toggle behaviour and intent: official patch notes v1.0.11 (26 Aug 2026).</li>
                <li>Highlight-ability ruling (&quot;Sadly it&apos;ll block the achievement, as it&apos;s a magic ability&quot;): developer reply in the official Steam feedback sticky, 25 Aug 2026.</li>
                <li>Pre-patch failure modes (silent unlocks, lost runs, d-pad binding, force-quit rollback): Steam discussion thread &quot;I wish there to be a lock for abilities&quot;.</li>
                <li>Upgrade-vs-use boundary: the community &quot;No&quot; answer in Steam thread &quot;ability usage?&quot; (28–30 Aug 2026), now developer-confirmed in Steam thread &quot;no magic run for the achievement&quot; (7 Sep 2026) — &quot;you can upgrade whatever you like just don&apos;t use magic&quot;, with the disable toggle recommended against misclicks. The accidental-use loss reported in the 28 Aug thread stands as the warning case.</li>
                <li>Cat-hint ruling (&quot;no it doesn&apos;t count as an ability, and make sure to toggle disable abilities in the options to make it easier to get&quot;): developer reply in the Steam thread &quot;no abilities achievement&quot;, 17 Sep 2026. This ruling supersedes this page&apos;s earlier conservative guidance to never ask a cat; how the cat menu interacts with the disable-abilities toggle is not tested by us.</li>
                <li>Controller keybind conflict (solution view sharing a button with a magic ability): negative Steam review, 27 Aug 2026 — single player report, not developer-confirmed; we label it as such and point to the toggle as the guaranteed fix.</li>
                <li>Petting safety: community reports consistent with Steam achievement text. Cat hints: developer-confirmed safe per the 17 Sep 2026 ruling above — the earlier &quot;ask nothing of a cat&quot; framing on this page has been retired.</li>
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
