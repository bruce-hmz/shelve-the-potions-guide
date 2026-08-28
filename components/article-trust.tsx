import { site } from "@/lib/site";

export function ArticleTrust() {
  return (
    <dl className="article-trust">
      <div><dt>Platform</dt><dd>PC · Steam</dd></div>
      <div><dt>Version</dt><dd>{site.gameVersion}</dd></div>
      <div><dt>Updated</dt><dd><time dateTime={site.researchedAt}>{site.researchedAtLabel}</time></dd></div>
      <div><dt>Status</dt><dd><span className="status-dot" /> Provisional</dd></div>
    </dl>
  );
}
