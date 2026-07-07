"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/store";
import {
  SearchIcon,
  CartIcon,
  QuoteIcon,
  BurgerIcon,
  LoopMark,
} from "./icons";

const links = [
  { href: "/catalogue", label: "Products" },
  { href: "/company", label: "Company" },
  { href: "/quote", label: "Request a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const { cartCount, quoteCount } = useStore();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <nav className="nav wrap">
        <Link className="brand" href="/">
          <span className="mark">
            <LoopMark className="loop" />
            KEYA
          </span>
          <span className="sub">Knit Composite</span>
        </Link>
        <div
          className="nav-links"
          style={
            open
              ? {
                  display: "flex",
                  position: "absolute",
                  flexDirection: "column",
                  top: 72,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  padding: "16px 24px",
                  borderBottom: "1px solid var(--border)",
                  gap: 4,
                }
              : undefined
          }
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <button className="icon-btn" aria-label="Search" type="button">
            <SearchIcon />
          </button>
          <Link className="icon-btn" href="/cart" aria-label="Shopping cart">
            <CartIcon />
            <span className="count-dot cart">{cartCount}</span>
          </Link>
          <Link className="icon-btn" href="/quote" aria-label="Quote list">
            <QuoteIcon />
            <span className="count-dot quote">{quoteCount}</span>
          </Link>
          <button
            className="burger"
            aria-label="Menu"
            type="button"
            onClick={() => setOpen((o) => !o)}
          >
            <BurgerIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
