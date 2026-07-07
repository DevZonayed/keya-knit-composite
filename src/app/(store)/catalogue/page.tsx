"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { MiniBuy, MiniQuote } from "@/components/MiniAdd";
import "./catalogue.css";

type BadgeKind = "hybrid" | "stock" | "mto";

type Product = {
  img: string;
  alt: string;
  badges: { kind: BadgeKind | "new"; label: string }[];
  cat: string;
  title: string;
  spec: string;
  priceLead: React.ReactNode;
  sub: string;
  action: "buy" | "quote";
};

const products: Product[] = [
  {
    img: "/assets/product/tshirt-navy-v1.png",
    alt: "Navy crew tee",
    badges: [{ kind: "hybrid", label: "Hybrid" }],
    cat: "Men · T-Shirt",
    title: "Heavyweight Crew Tee",
    spec: "100% Cotton · 220 GSM",
    priceLead: (
      <span className="price">
        <span className="cur">$</span>18.00
      </span>
    ),
    sub: "or MOQ 500 · from $6.40",
    action: "buy",
  },
  {
    img: "/assets/product/polo-green-v1.png",
    alt: "Green polo",
    badges: [{ kind: "stock", label: "In Stock" }],
    cat: "Men · Polo",
    title: "Classic Piqué Polo",
    spec: "Cotton Piqué · 200 GSM",
    priceLead: (
      <span className="price">
        <span className="cur">$</span>24.00
      </span>
    ),
    sub: "In stock · ships in 3 days",
    action: "buy",
  },
  {
    img: "/assets/product/hoodie-slate-v1.png",
    alt: "Slate hoodie",
    badges: [{ kind: "mto", label: "Made to Order" }],
    cat: "Unisex · Hoodie",
    title: "Brushed Pullover Hoodie",
    spec: "Cotton/Poly · 320 GSM",
    priceLead: (
      <span className="moq">
        <b>MOQ 300</b>
      </span>
    ),
    sub: "from $11.90 / pc",
    action: "quote",
  },
  {
    img: "/assets/product/sweatshirt-navy-v1.png",
    alt: "Navy sweatshirt",
    badges: [
      { kind: "hybrid", label: "Hybrid" },
      { kind: "new", label: "New" },
    ],
    cat: "Unisex · Sweatshirt",
    title: "Loopback Crew Sweatshirt",
    spec: "Cotton/Poly · 300 GSM",
    priceLead: (
      <span className="price">
        <span className="cur">$</span>29.00
      </span>
    ),
    sub: "or MOQ 300 · from $9.80",
    action: "buy",
  },
  {
    img: "/assets/product/henley-ecru-v1.png",
    alt: "Ecru henley",
    badges: [{ kind: "stock", label: "In Stock" }],
    cat: "Men · Henley",
    title: "Long-Sleeve Henley",
    spec: "100% Cotton · 180 GSM",
    priceLead: (
      <span className="price">
        <span className="cur">$</span>22.00
      </span>
    ),
    sub: "In stock · ships in 3 days",
    action: "buy",
  },
  {
    img: "/assets/product/women-rib-v1.png",
    alt: "Cream ribbed top",
    badges: [{ kind: "mto", label: "Made to Order" }],
    cat: "Women · Top",
    title: "Fine-Gauge Ribbed Top",
    spec: "Cotton/Elastane · 200 GSM",
    priceLead: (
      <span className="moq">
        <b>MOQ 500</b>
      </span>
    ),
    sub: "from $8.20 / pc",
    action: "quote",
  },
  {
    img: "/assets/product/baby-bodysuit-v1.png",
    alt: "Baby bodysuit",
    badges: [{ kind: "mto", label: "Made to Order" }],
    cat: "Baby · Bodysuit",
    title: "Organic Cotton Bodysuit",
    spec: "GOTS Organic · 180 GSM",
    priceLead: (
      <span className="moq">
        <b>MOQ 1,000</b>
      </span>
    ),
    sub: "Request quote for pricing",
    action: "quote",
  },
  {
    img: "/assets/home/cat-kids-v1.png",
    alt: "Kids tee",
    badges: [{ kind: "hybrid", label: "Hybrid" }],
    cat: "Kids · T-Shirt",
    title: "Kids Everyday Tee",
    spec: "100% Cotton · 160 GSM",
    priceLead: (
      <span className="price">
        <span className="cur">$</span>12.00
      </span>
    ),
    sub: "or MOQ 500 · from $4.20",
    action: "buy",
  },
  {
    img: "/assets/home/cat-women-v1.png",
    alt: "Women knit set",
    badges: [{ kind: "mto", label: "Made to Order" }],
    cat: "Women · Set",
    title: "Ribbed Lounge Set",
    spec: "Cotton/Modal · 220 GSM",
    priceLead: (
      <span className="moq">
        <b>MOQ 800</b>
      </span>
    ),
    sub: "Request quote for pricing",
    action: "quote",
  },
];

const categoryFilters = [
  { label: "Men's Wear", count: "48", checked: true },
  { label: "Women's Wear", count: "36" },
  { label: "Kids Wear", count: "22" },
  { label: "Babywear", count: "18" },
];
const typeFilters = [
  { label: "T-Shirts", count: "40" },
  { label: "Polo", count: "14" },
  { label: "Hoodies & Sweatshirts", count: "26" },
  { label: "Henley & Long-sleeve", count: "12" },
];
const modeFilters = [
  { label: "In Stock", count: "14" },
  { label: "Made to Order", count: "96" },
  { label: "Hybrid", count: "18" },
];
const fabricFilters = [
  "100% Cotton",
  "Cotton/Poly blend",
  "Organic (GOTS)",
  "140–180 GSM",
  "180–240 GSM",
  "240+ GSM",
];
const swatches = ["#0C2436", "#137A47", "#5A6B76", "#F1EDE4", "#B42318", "#8A5A0E"];
const certFilters = ["OEKO-TEX", "GOTS", "GRS Recycled", "WRAP"];
const moqFilters = ["No minimum (retail)", "Up to 500", "500–2,000", "2,000+"];

export default function CataloguePage() {
  const [mode, setMode] = useState(0);
  const [view, setView] = useState(0);

  return (
    <div className="pg-catalogue">
      <div className="cat-banner">
        <img src="/assets/catalogue/banner-v1.png" alt="Knitwear showroom rack" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / Products /{" "}
            <b style={{ color: "#fff" }}>All Knitwear</b>
          </div>
          <h1>All Knitwear</h1>
          <p>
            One catalogue, two ways to order. Filter by fulfilment mode to see
            ready-to-ship stock or made-to-order bulk.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="shop">
          {/* Filters */}
          <aside className="filters">
            <div className="mode-toggle">
              <button
                className={mode === 0 ? "on" : ""}
                onClick={() => setMode(0)}
              >
                All products
              </button>
              <button
                className={mode === 1 ? "on" : ""}
                onClick={() => setMode(1)}
              >
                Ready to ship
              </button>
            </div>

            <div className="fgroup">
              <h4>Category</h4>
              {categoryFilters.map((f) => (
                <label className="check" key={f.label}>
                  <input type="checkbox" defaultChecked={f.checked} />
                  {f.label}
                  <span className="ct">{f.count}</span>
                </label>
              ))}
            </div>

            <div className="fgroup">
              <h4>Product type</h4>
              {typeFilters.map((f) => (
                <label className="check" key={f.label}>
                  <input type="checkbox" />
                  {f.label}
                  <span className="ct">{f.count}</span>
                </label>
              ))}
            </div>

            <div className="fgroup">
              <h4>Fulfilment mode</h4>
              {modeFilters.map((f) => (
                <label className="check" key={f.label}>
                  <input type="checkbox" />
                  {f.label}
                  <span className="ct">{f.count}</span>
                </label>
              ))}
            </div>

            <div className="fgroup">
              <h4>Fabric &amp; GSM</h4>
              {fabricFilters.map((f) => (
                <label className="check" key={f}>
                  <input type="checkbox" />
                  {f}
                </label>
              ))}
            </div>

            <div className="fgroup">
              <h4>Colour</h4>
              <div className="swatches">
                {swatches.map((c) => (
                  <span
                    className="sw"
                    key={c}
                    style={{ background: c }}
                  ></span>
                ))}
              </div>
            </div>

            <div className="fgroup">
              <h4>Certification</h4>
              {certFilters.map((f) => (
                <label className="check" key={f}>
                  <input type="checkbox" />
                  {f}
                </label>
              ))}
            </div>

            <div className="fgroup" style={{ border: "none" }}>
              <h4>MOQ</h4>
              {moqFilters.map((f) => (
                <label className="check" key={f}>
                  <input type="checkbox" />
                  {f}
                </label>
              ))}
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="toolbar">
              <div className="res">
                Showing <b>1–9</b> of <b>124</b> products
              </div>
              <div className="sortbar">
                <div className="viewtog">
                  <button
                    className={view === 0 ? "on" : ""}
                    aria-label="Grid"
                    onClick={() => setView(0)}
                  >
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button
                    className={view === 1 ? "on" : ""}
                    aria-label="List"
                    onClick={() => setView(1)}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                    </svg>
                  </button>
                </div>
                <select defaultValue="Sort: Relevance">
                  <option>Sort: Relevance</option>
                  <option>Newest</option>
                  <option>Price: low to high</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>

            <div className="chips">
              <span className="chip">
                <b>Men&apos;s Wear</b>
                <span className="x">×</span>
              </span>
              <span className="chip">
                Category <b>T-Shirts</b>
                <span className="x">×</span>
              </span>
              <a href="#" className="chip" style={{ color: "var(--slate)" }}>
                Clear all
              </a>
            </div>

            <div className="prod-grid">
              {products.map((p) => (
                <Reveal className="card" as="article" key={p.title}>
                  <Link href="/product" className="thumb">
                    <div className="badge-row">
                      {p.badges.map((b) => (
                        <span className={`badge ${b.kind}`} key={b.label}>
                          {b.label}
                        </span>
                      ))}
                    </div>
                    <img src={p.img} alt={p.alt} />
                  </Link>
                  <div className="body">
                    <span className="cat-tag">{p.cat}</span>
                    <h3>{p.title}</h3>
                    <div className="spec">{p.spec}</div>
                    <div className="price-zone">
                      <div>
                        {p.priceLead}
                        <span className="from">{p.sub}</span>
                      </div>
                      {p.action === "buy" ? (
                        <MiniBuy title="Added to cart" message={p.title} />
                      ) : (
                        <MiniQuote
                          title="Added to Quote list"
                          message={`${p.title} · we'll price it in your RFQ`}
                        />
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="pager">
              <a>‹</a>
              <a className="on">1</a>
              <a>2</a>
              <a>3</a>
              <a>…</a>
              <a>14</a>
              <a>›</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
