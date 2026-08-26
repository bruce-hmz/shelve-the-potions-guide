import { site } from "@/lib/site";

export function TrustStrip() {
  return (
    <dl className="trust-strip" aria-label="Guide verification details">
      <div>
        <dt>Tested on</dt>
        <dd>PC · Steam</dd>
      </div>
      <div>
        <dt>Game version</dt>
        <dd>{site.gameVersion}</dd>
      </div>
      <div>
        <dt>Last researched</dt>
        <dd>
          <time dateTime={site.researchedAt}>{site.researchedAtLabel}</time>
        </dd>
      </div>
      <div>
        <dt>Guide status</dt>
        <dd><span className="status-dot" /> Provisional</dd>
      </div>
    </dl>
  );
}
