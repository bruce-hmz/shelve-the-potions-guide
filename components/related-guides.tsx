import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { puzzleGuides } from "@/content/puzzles";

export function RelatedGuides({ currentSlug }: { currentSlug?: string }) {
  const related = puzzleGuides.filter((guide) => guide.slug !== currentSlug).slice(0, 2);

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
          <Link className="related-card" href={`/puzzles/${guide.slug}/`} key={guide.slug}>
            <small>Next puzzle</small>
            <strong>{guide.name}</strong>
            <span>Open the spoiler-light guide <ArrowIcon /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
