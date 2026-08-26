import Link from "next/link";
import { ExternalIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Potion Shelf <span>field guide</span></p>
          <p className="footer-note">
            An independent, evidence-aware guide. Not affiliated with Knight Owl Games or Steam.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/walkthrough/">Walkthrough</Link>
          <Link href="/help/abilities-and-hints/">Abilities &amp; Hints</Link>
          <Link href="/help/achievements/">Achievements</Link>
          <a href={site.steamUrl} target="_blank" rel="noreferrer">
            Official Steam page <ExternalIcon />
          </a>
        </nav>
      </div>
    </footer>
  );
}
