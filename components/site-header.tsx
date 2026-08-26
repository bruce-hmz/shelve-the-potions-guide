import Link from "next/link";
import { MenuIcon } from "@/components/icons";
import { SiteSearch } from "@/components/site-search";

const navItems = [
  { href: "/walkthrough/", label: "Walkthrough" },
  { href: "/help/abilities-and-hints/", label: "Help" },
  { href: "/puzzles/clock-puzzle/", label: "Clock" },
  { href: "/puzzles/color-puzzle/", label: "Color" },
  { href: "/puzzles/chess-pieces/", label: "Chess" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Potion Shelf Guide home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Potion Shelf</strong>
            <small>field guide</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <SiteSearch />
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <MenuIcon />
            </summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
