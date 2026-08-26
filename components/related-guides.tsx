import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { puzzleGuides } from "@/content/puzzles";
import { helpGuides } from "@/content/help-guides";

export function RelatedGuides({ currentSlug }: { currentSlug?: string }) {
  const related = [...helpGuides.filter((g) => g.slug !== currentSlug).map((g) => ({ key: g.slug, name: g.name, href: `/help/${g.slug}/` })), ...puzzleGuides.filter((guide) => guide.slug !== currentSlug).map((g) => ({ key: g.slug, name: g.name, href: `/puzzles/${g.slug}/` }))].slice(0, 2);

  return (
    <section className="related-guides" aria-labelledby="related-heading">
      <div className="related-guides__heading">
        <p className="eyebrow"><span /> Keep sorting</p>
        <h2 id="related-heading">Related guides</h2>
      </div>
      <div className="related-grid">
        <Link className="related-card related-card--primary" href="/walkthrough/">
          <small>Guide index</small>
          <strong>All walkthrough entries</strong>
          <span>Back to the verified coverage map <ArrowIcon /></span>
        </Link>
        {related.map((guide) => (
          <Link className="related-card" href={guide.href} key={guide.key}>
            <small>Related guide</small>
            <strong>{guide.name}</strong>
            <span>Open the spoiler-light guide <ArrowIcon /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
