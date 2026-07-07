"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import "./admin.css";

type PanelKey = "dash" | "inbox" | "qb" | "products" | "orders" | "customers";

const TITLES: Record<PanelKey, string> = {
  dash: "Dashboard",
  inbox: "RFQ Inbox",
  qb: "Quote builder",
  products: "Products & inventory",
  orders: "Orders",
  customers: "Customers",
};

const NAV: { key: Exclude<PanelKey, "qb">; label: string; badge?: string; icon: React.ReactNode }[] = [
  {
    key: "dash",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
  {
    key: "inbox",
    label: "RFQ Inbox",
    badge: "7",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16v12H4z" />
        <path d="M4 8l8 5 8-5" />
      </svg>
    ),
  },
  {
    key: "products",
    label: "Products",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 7l-8-4-8 4 8 4 8-4zM4 7v10l8 4 8-4V7" />
      </svg>
    ),
  },
  {
    key: "orders",
    label: "Orders",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 2h9l4 4v16H6z" />
        <path d="M9 12h7M9 16h7" />
      </svg>
    ),
  },
  {
    key: "customers",
    label: "Customers",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M3 20a6 6 0 0112 0" />
        <circle cx="17" cy="9" r="2.5" />
      </svg>
    ),
  },
];

const num = (s: string) => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;
const grp = (n: number) => Math.round(n).toLocaleString("en-US");

type QBLine = {
  img: string;
  name: string;
  mode: "stock" | "mto" | "hy";
  modeLabel: string;
  spec: string;
  qty: string;
  unit: string;
  lead: string;
};

const INITIAL_LINES: QBLine[] = [
  {
    img: "/assets/product/tshirt-navy-v1.png",
    name: "Heavyweight Crew Tee",
    mode: "stock",
    modeLabel: "In stock",
    spec: "Cotton 220 GSM · Navy, Ecru · OEKO-TEX · Regular",
    qty: "2,000",
    unit: "6.40",
    lead: "45",
  },
  {
    img: "/assets/product/hoodie-slate-v1.png",
    name: "Brushed Pullover Hoodie",
    mode: "mto",
    modeLabel: "Made to order",
    spec: "Cotton/Poly 320 GSM · Slate · Private label",
    qty: "800",
    unit: "11.90",
    lead: "55",
  },
  {
    img: "/assets/product/baby-bodysuit-v1.png",
    name: "Organic Cotton Bodysuit",
    mode: "hy",
    modeLabel: "Hybrid",
    spec: "GOTS 180 GSM · Cream",
    qty: "1,500",
    unit: "3.47",
    lead: "50",
  },
];

export default function AdminPage() {
  const [panel, setPanel] = useState<PanelKey>("dash");
  const [inboxChip, setInboxChip] = useState("All · 23");
  const [productChip, setProductChip] = useState("All products");
  const [orderChip, setOrderChip] = useState("All orders");
  const [lines, setLines] = useState<QBLine[]>(INITIAL_LINES);

  function show(p: PanelKey) {
    setPanel(p);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const navActive = panel === "qb" ? "inbox" : panel;

  const totals = useMemo(() => {
    let totalQty = 0;
    let quoteTotal = 0;
    for (const l of lines) {
      const q = num(l.qty);
      const u = num(l.unit);
      totalQty += q;
      quoteTotal += q * u;
    }
    return { totalQty, quoteTotal };
  }, [lines]);

  function updateLine(i: number, field: "qty" | "unit" | "lead", value: string) {
    setLines((ls) => ls.map((l, idx) => (idx === i ? { ...l, [field]: value } : l)));
  }

  return (
    <div className="pg-admin">
      <div className="app">
        <aside className="sidebar">
          <div className="brand">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="#123A54" />
              <path
                d="M10 22V10h6a5 5 0 010 10h-4l6 6"
                stroke="#1E9E5C"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              KEYA<div className="tag">ADMIN CONSOLE</div>
            </div>
          </div>
          <div className="adm">Operations</div>
          <nav>
            {NAV.map((n) => (
              <button
                key={n.key}
                type="button"
                className={navActive === n.key ? "on" : ""}
                onClick={() => show(n.key)}
              >
                {n.icon}
                {n.label}
                {n.badge && <span className="b">{n.badge}</span>}
              </button>
            ))}
          </nav>
          <div className="user">
            <span className="av">S</span>
            <div>
              <b>S. Rahman</b>
              <span>Sales manager</span>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="topbar">
            <h1>{TITLES[panel]}</h1>
            <div className="search">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input placeholder="Search RFQs, orders, buyers…" />
            </div>
            <Link className="btn btn-outline" href="/">
              <svg viewBox="0 0 24 24">
                <path d="M3 12l9-9 9 9M5 10v10h14V10" />
              </svg>
              Storefront
            </Link>
          </div>

          <div className="content">
            {/* AD1 dashboard */}
            <section className={`panel${panel === "dash" ? " on" : ""}`}>
              <div className="kpis">
                <div className="kpi">
                  <div className="lab">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 4h16v12H4z" />
                      <path d="M4 8l8 5 8-5" />
                    </svg>
                    Open RFQs
                  </div>
                  <div className="n tnum">23</div>
                  <div className="d up">▲ 12% vs last week</div>
                </div>
                <div className="kpi">
                  <div className="lab">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3v18M6 8h9a3 3 0 010 6H6" />
                    </svg>
                    Quoted value
                  </div>
                  <div className="n tnum">$412K</div>
                  <div className="d up">▲ 8% MTD</div>
                </div>
                <div className="kpi">
                  <div className="lab">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Win rate
                  </div>
                  <div className="n tnum">34%</div>
                  <div className="d up">▲ 3 pts</div>
                </div>
                <div className="kpi">
                  <div className="lab">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    Avg. response
                  </div>
                  <div className="n tnum">31h</div>
                  <div className="d down">▼ under 48h SLA</div>
                </div>
              </div>
              <div className="chartrow">
                <div className="cbox">
                  <h3>RFQ funnel</h3>
                  <div className="cs">Conversion pipeline · last 30 days</div>
                  <div className="funnel">
                    <div className="fstage">
                      <span className="fl">Submitted</span>
                      <div className="bar" style={{ width: "100%" }}>
                        148
                      </div>
                    </div>
                    <div className="fstage">
                      <span className="fl">Under review</span>
                      <div className="bar" style={{ width: "78%" }}>
                        116
                      </div>
                    </div>
                    <div className="fstage">
                      <span className="fl">Quote sent</span>
                      <div className="bar" style={{ width: "61%" }}>
                        90
                      </div>
                    </div>
                    <div className="fstage">
                      <span className="fl">Accepted</span>
                      <div className="bar" style={{ width: "34%" }}>
                        50
                      </div>
                    </div>
                    <div className="fstage">
                      <span className="fl">Converted</span>
                      <div className="bar" style={{ width: "27%" }}>
                        40
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cbox">
                  <h3>Top export markets</h3>
                  <div className="cs">Quoted value share</div>
                  <div className="mklist">
                    {[
                      ["Germany", "82%", "24%"],
                      ["UK", "68%", "19%"],
                      ["USA", "55%", "16%"],
                      ["Sweden", "40%", "11%"],
                      ["France", "32%", "9%"],
                    ].map(([mk, w, pct]) => (
                      <div className="mk" key={mk}>
                        <span style={{ width: 74 }}>{mk}</span>
                        <div className="track">
                          <div className="fill" style={{ width: w }} />
                        </div>
                        <b className="tnum">{pct}</b>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cbox">
                <h3>Sales &amp; quoted value</h3>
                <div className="cs">Last 8 weeks (USD thousands)</div>
                <div className="bars">
                  {[
                    ["40%", "W1"],
                    ["55%", "W2"],
                    ["48%", "W3"],
                    ["70%", "W4"],
                    ["62%", "W5"],
                    ["85%", "W6"],
                    ["78%", "W7"],
                    ["96%", "W8"],
                  ].map(([h, w]) => (
                    <div className="col" key={w}>
                      <div className="bar" style={{ height: h }} />
                      <small>{w}</small>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AD2 RFQ inbox */}
            <section className={`panel${panel === "inbox" ? " on" : ""}`}>
              <div className="toolbar">
                {["All · 23", "New", "Under review", "Quote sent"].map((c) => (
                  <span
                    key={c}
                    className={`chip${inboxChip === c ? " on" : ""}`}
                    onClick={() => setInboxChip(c)}
                  >
                    {c}
                  </span>
                ))}
                <span className="chip">🌍 Country</span>
                <span className="chip">Buyer type</span>
                <span className="chip" style={{ marginLeft: "auto" }}>
                  Sort: SLA aging ▾
                </span>
              </div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Buyer</th>
                    <th>Country</th>
                    <th className="num">Lines / Qty</th>
                    <th className="num">Est. value</th>
                    <th>Status</th>
                    <th>SLA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["RFQ-2026-04871", "Nordic Apparel AB", "🇸🇪 Sweden", "3 · 4,300", "$27,520", "ready", "Quote ready", "ok", "On time · 6h left"],
                    ["RFQ-2026-04863", "Meridian Retail Group", "🇬🇧 UK", "5 · 12,000", "—", "review", "Under review", "warn", "Due in 4h"],
                    ["RFQ-2026-04858", "Atlas Clothing Co.", "🇺🇸 USA", "2 · 6,000", "—", "new", "New", "late", "Overdue · 3h"],
                    ["RFQ-2026-04851", "Hafen Textil GmbH", "🇩🇪 Germany", "4 · 9,500", "$61,750", "ready", "Quote ready", "ok", "On time"],
                    ["RFQ-2026-04844", "La Moda Sourcing", "🇫🇷 France", "1 · 2,500", "—", "new", "New", "ok", "On time · 22h"],
                    ["RFQ-2026-04839", "Southern Cross Wear", "🇦🇺 Australia", "6 · 18,000", "$94,200", "won", "Converted", "ok", "Closed"],
                  ].map((r) => (
                    <tr key={r[0]} onClick={() => show("qb")}>
                      <td className="ref">{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td className="num">{r[3]}</td>
                      <td className="num">{r[4]}</td>
                      <td>
                        <span className={`stat ${r[5]}`}>{r[6]}</span>
                      </td>
                      <td>
                        <span className={`sla ${r[7]}`}>{r[8]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* AD3 quote builder */}
            <section className={`panel${panel === "qb" ? " on" : ""}`}>
              <button type="button" className="qb-back" onClick={() => show("inbox")}>
                <svg viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to inbox
              </button>
              <div className="qb-head">
                <div className="m">
                  <div className="k">Reference</div>
                  <div className="v ref">RFQ-2026-04871</div>
                </div>
                <div className="m">
                  <div className="k">Buyer</div>
                  <div className="v">Nordic Apparel AB · 🇸🇪</div>
                </div>
                <div className="m">
                  <div className="k">Received</div>
                  <div className="v">4 Jul 2026</div>
                </div>
                <div className="m">
                  <div className="k">Version</div>
                  <div className="v ver">v2 · revised</div>
                </div>
                <div className="m" style={{ marginLeft: "auto" }}>
                  <div className="k">Buyer type</div>
                  <div className="v">
                    <span className="stat ready">Verified</span>
                  </div>
                </div>
              </div>
              <div className="qb-grid">
                <div>
                  {lines.map((l, i) => (
                    <div className="qb-line" key={l.name}>
                      <div className="lh">
                        <img src={l.img} alt="" />
                        <div>
                          <b>{l.name}</b> <span className={`fmode ${l.mode}`}>{l.modeLabel}</span>
                          <div className="sp">{l.spec}</div>
                        </div>
                      </div>
                      <div className="qb-inputs">
                        <div>
                          <label>Qty</label>
                          <input value={l.qty} onChange={(e) => updateLine(i, "qty", e.target.value)} />
                        </div>
                        <div>
                          <label>Unit price $</label>
                          <input value={l.unit} onChange={(e) => updateLine(i, "unit", e.target.value)} />
                        </div>
                        <div>
                          <label>Lead time (d)</label>
                          <input value={l.lead} onChange={(e) => updateLine(i, "lead", e.target.value)} />
                        </div>
                        <div>
                          <label>Line total</label>
                          <input value={grp(num(l.qty) * num(l.unit))} readOnly style={{ background: "var(--paper)" }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <aside className="qb-side">
                  <div className="box">
                    <div className="r">
                      <span>Total quantity</span>
                      <b className="tnum">{grp(totals.totalQty)} pcs</b>
                    </div>
                    <div className="r">
                      <span>Lines</span>
                      <b>{lines.length}</b>
                    </div>
                    <div className="r g">
                      <span>Quote total (FOB)</span>
                      <b className="tnum">${grp(totals.quoteTotal)}</b>
                    </div>
                  </div>
                  <div className="box">
                    <div className="field">
                      <label>Incoterms</label>
                      <select>
                        <option>FOB Chattogram</option>
                        <option>CIF</option>
                        <option>DDP</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Validity</label>
                      <select>
                        <option>14 days</option>
                        <option>30 days</option>
                        <option>7 days</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Payment terms</label>
                      <select>
                        <option>30% advance, 70% on B/L</option>
                        <option>L/C at sight</option>
                        <option>NET 30 (verified)</option>
                      </select>
                    </div>
                    <button type="button" className="btn btn-buy" style={{ width: "100%", marginTop: 6 }}>
                      Send quote to buyer
                    </button>
                    <button type="button" className="btn btn-outline" style={{ width: "100%", marginTop: 8 }}>
                      Save as v3 draft
                    </button>
                  </div>
                </aside>
              </div>
            </section>

            {/* AD4 products */}
            <section className={`panel${panel === "products" ? " on" : ""}`}>
              <div className="toolbar">
                {["All products", "In stock", "Made to order", "Hybrid"].map((c) => (
                  <span
                    key={c}
                    className={`chip${productChip === c ? " on" : ""}`}
                    onClick={() => setProductChip(c)}
                  >
                    {c}
                  </span>
                ))}
                <span className="chip" style={{ marginLeft: "auto" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add product
                </span>
                <span className="chip">Import CSV</span>
              </div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>SKU</th>
                    <th>Fulfilment</th>
                    <th className="num">MOQ</th>
                    <th className="num">Stock</th>
                    <th className="num">Retail $</th>
                    <th className="num">From $</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Heavyweight Crew Tee", "KKC-TEE-220", "stock", "In stock", "500", "4,200", "18.00", "6.40"],
                    ["Piqué Polo Shirt", "KKC-POL-210", "hy", "Hybrid", "500", "1,850", "24.00", "8.10"],
                    ["Brushed Pullover Hoodie", "KKC-HOO-320", "mto", "Made to order", "300", "—", "34.00", "11.90"],
                    ["Organic Cotton Bodysuit", "KKC-BBY-180", "hy", "Hybrid", "1,000", "900", "12.00", "3.30"],
                    ["Long-Sleeve Henley", "KKC-HEN-200", "stock", "In stock", "500", "2,600", "26.00", "8.90"],
                  ].map((r) => (
                    <tr key={r[1]}>
                      <td>{r[0]}</td>
                      <td className="ref">{r[1]}</td>
                      <td>
                        <span className={`fmode ${r[2]}`}>{r[3]}</span>
                      </td>
                      <td className="num">{r[4]}</td>
                      <td className="num">{r[5]}</td>
                      <td className="num">{r[6]}</td>
                      <td className="num">{r[7]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* AD5 orders */}
            <section className={`panel${panel === "orders" ? " on" : ""}`}>
              <div className="toolbar">
                {["All orders", "Processing", "In transit", "Delivered"].map((c) => (
                  <span
                    key={c}
                    className={`chip${orderChip === c ? " on" : ""}`}
                    onClick={() => setOrderChip(c)}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Buyer</th>
                    <th>Type</th>
                    <th className="num">Items</th>
                    <th className="num">Value</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["KKC-2026-18342", "Nordic Apparel AB", "Retail", "2", "$54.86", "review", "Processing"],
                    ["KKC-2026-15003", "Southern Cross Wear", "Bulk (RFQ)", "18,000", "$41,200", "new", "In production"],
                    ["KKC-2026-14880", "Hafen Textil GmbH", "Bulk (RFQ)", "9,500", "$61,750", "ready", "Shipped"],
                    ["KKC-2026-14002", "Atlas Clothing Co.", "Retail", "3", "$92.00", "won", "Delivered"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="ref">{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td className="num">{r[3]}</td>
                      <td className="num">{r[4]}</td>
                      <td>
                        <span className={`stat ${r[5]}`}>{r[6]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* customers */}
            <section className={`panel${panel === "customers" ? " on" : ""}`}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Type</th>
                    <th className="num">RFQs</th>
                    <th className="num">Lifetime value</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Nordic Apparel AB", "Anders Møller", "🇸🇪 Sweden", "Retailer", "4", "$68,720", "ready", "Verified"],
                    ["Hafen Textil GmbH", "K. Vogel", "🇩🇪 Germany", "Importer", "9", "$214,300", "ready", "Verified"],
                    ["Atlas Clothing Co.", "J. Rivera", "🇺🇸 USA", "Brand", "3", "$18,900", "new", "New"],
                    ["Meridian Retail Group", "P. Shah", "🇬🇧 UK", "Retailer", "6", "$142,050", "ready", "Verified"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td>{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td>{r[3]}</td>
                      <td className="num">{r[4]}</td>
                      <td className="num">{r[5]}</td>
                      <td>
                        <span className={`stat ${r[6]}`}>{r[7]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
