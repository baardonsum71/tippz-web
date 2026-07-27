import Link from "next/link";
import { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <header className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark">T</span>
          Tippz
        </Link>
        <nav className="nav-links" aria-label="Hovedmeny">
          <Link href="/vilkar">Vilkår</Link>
          <Link href="/personvern">Personvern</Link>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <nav aria-label="Bunnmeny">
          <Link href="/vilkar">Vilkår</Link>
          <Link href="/personvern">Personvern</Link>
          <a href="mailto:support@tippz.app">support@tippz.app</a>
        </nav>
        <p>© {new Date().getFullYear()} Tippz · Baard Onsum</p>
      </footer>
    </div>
  );
}
