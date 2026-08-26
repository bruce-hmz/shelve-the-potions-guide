import Link from "next/link";
import type { GuidePage } from "@/content/pages";
import { ArrowIcon } from "@/components/icons";

export function GuideCard({ page, featured = false }: { page: GuidePage; featured?: boolean }) {
  return (
    <article className={`guide-card${featured ? " guide-card--featured" : ""}`}>
      <Link href={page.href} className="guide-card__media" tabIndex={-1} aria-hidden="true">
        <img src={page.image} alt={page.imageAlt} width="640" height="360" loading="lazy" />
      </Link>
      <div className="guide-card__body">
        <div className="guide-card__meta">
          <span>{page.eyebrow}</span>
          <span className={page.status === "Research ready" ? "status status--ready" : "status"}>
            {page.status}
          </span>
        </div>
        <h3>
          <Link href={page.href}>{page.title}</Link>
        </h3>
        <p>{page.description}</p>
        <Link className="card-link" href={page.href}>
          Open guide <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
