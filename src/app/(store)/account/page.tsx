"use client";

import { useState, type ReactNode } from "react";
import "./account.css";

type Tab = "orders" | "quotes" | "qd" | "addresses" | "profile" | "settings";

const navItems: { p: Exclude<Tab, "qd">; label: string; count?: string; icon: ReactNode }[] = [
  {
    p: "orders",
    label: "Orders",
    count: "6",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 2h9l4 4v16H6z" />
        <path d="M9 12h7M9 16h7M9 8h4" />
      </svg>
    ),
  },
  {
    p: "quotes",
    label: "Quotes / RFQs",
    count: "4",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M13 3v6h6" />
      </svg>
    ),
  },
  {
    p: "addresses",
    label: "Addresses",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    p: "profile",
    label: "Business profile",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21v-2a6 6 0 0112 0v2" />
        <circle cx="9" cy="7" r="3.5" />
        <path d="M17 11h4M17 15h4" />
      </svg>
    ),
  },
  {
    p: "settings",
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 00-.2-1.6l2-1.5-2-3.4-2.3 1a7 7 0 00-2.8-1.6L15 2H9l-.7 2.3A7 7 0 005.5 6L3.2 5l-2 3.4 2 1.5A7 7 0 003 12l-2 1.5 2 3.4 2.3-1a7 7 0 002.8 1.6L9 22h6l.7-2.3a7 7 0 002.8-1.6l2.3 1 2-3.4-2-1.5c.1-.5.2-1 .2-1.6z" />
      </svg>
    ),
  },
];

const trackLabels = ["Submitted", "Under review", "Quote ready", "Accepted", "Converted"];

function Track({ current }: { current: number }) {
  return (
    <div className="track">
      {trackLabels.map((label, i) => {
        const cls = i < current ? "node done" : i === current ? "node cur" : "node";
        return (
          <div className={cls} key={label}>
            <div className="d" />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("orders");
  const activeNav = tab === "qd" ? "quotes" : tab;

  return (
    <div className="pg-account">
      <div className="acc-head">
        <div className="wrap row">
          <div className="avatar">N</div>
          <div>
            <h1>Nordic Apparel AB</h1>
            <div className="who">
              Anders Møller · buyer@brand.com{" "}
              <span className="vbadge">
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Verified buyer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="acc-grid">
          <aside className="side">
            <div className="navi">
              {navItems.map((n) => (
                <button
                  key={n.p}
                  type="button"
                  className={activeNav === n.p ? "on" : undefined}
                  onClick={() => {
                    setTab(n.p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {n.icon}
                  {n.label}
                  {n.count && <span className="c">{n.count}</span>}
                </button>
              ))}
            </div>
            <button className="btn btn-outline signout" type="button">
              <svg viewBox="0 0 24 24">
                <path d="M16 17l5-5-5-5M21 12H9M9 21H4V3h5" />
              </svg>
              Sign out
            </button>
          </aside>

          <div>
            {/* Orders */}
            <section className={`panel${tab === "orders" ? " on" : ""}`}>
              <h2>Orders</h2>
              <p className="sub">Retail purchases and their fulfilment status.</p>
              <div className="card">
                <div className="orow">
                  <div className="thumb">
                    <img src="/assets/product/tshirt-navy-v1.png" alt="" />
                    <img src="/assets/product/polo-green-v1.png" alt="" />
                  </div>
                  <div>
                    <div className="oid">KKC-2026-18342</div>
                    <div className="ot">2 items · Crew Tee, Piqué Polo</div>
                    <div className="meta">Placed 6 Jul 2026 · $54.86</div>
                  </div>
                  <div className="right">
                    <span className="pill processing">Processing</span>
                    <div style={{ marginTop: 10 }}>
                      <button className="btn btn-outline" type="button">Track</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="orow">
                  <div className="thumb">
                    <img src="/assets/product/hoodie-slate-v1.png" alt="" />
                  </div>
                  <div>
                    <div className="oid">KKC-2026-17920</div>
                    <div className="ot">1 item · Pullover Hoodie</div>
                    <div className="meta">Placed 28 Jun 2026 · $34.00</div>
                  </div>
                  <div className="right">
                    <span className="pill transit">In transit</span>
                    <div style={{ marginTop: 10 }}>
                      <button className="btn btn-outline" type="button">Track</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="orow">
                  <div className="thumb">
                    <img src="/assets/product/henley-ecru-v1.png" alt="" />
                    <img src="/assets/product/sweatshirt-navy-v1.png" alt="" />
                  </div>
                  <div>
                    <div className="oid">KKC-2026-16558</div>
                    <div className="ot">3 items · Henley, Sweatshirt +1</div>
                    <div className="meta">Placed 11 Jun 2026 · $92.00</div>
                  </div>
                  <div className="right">
                    <span className="pill delivered">Delivered</span>
                    <div style={{ marginTop: 10 }}>
                      <button className="btn btn-outline" type="button">Reorder</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quotes list */}
            <section className={`panel${tab === "quotes" ? " on" : ""}`}>
              <h2>Quotes &amp; RFQs</h2>
              <p className="sub">
                Track every request through the pipeline: Submitted → Under review →
                Quote ready → Accepted → Converted.
              </p>

              <div className="rfqcard" onClick={() => { setTab("qd"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <div className="top">
                  <span className="ref">RFQ-2026-04871</span>
                  <span className="stat ready">Quote ready</span>
                  <div className="val">
                    <b>$27,520</b>
                    <span>3 lines · 4,300 pcs</span>
                  </div>
                </div>
                <Track current={2} />
              </div>

              <div className="rfqcard">
                <div className="top">
                  <span className="ref">RFQ-2026-04722</span>
                  <span className="stat review">Under review</span>
                  <div className="val">
                    <b>—</b>
                    <span>2 lines · 6,000 pcs</span>
                  </div>
                </div>
                <Track current={1} />
              </div>

              <div className="rfqcard">
                <div className="top">
                  <span className="ref">RFQ-2026-04510</span>
                  <span className="stat submitted">Submitted</span>
                  <div className="val">
                    <b>—</b>
                    <span>1 line · 1,200 pcs</span>
                  </div>
                </div>
                <Track current={0} />
              </div>

              <div className="rfqcard">
                <div className="top">
                  <span className="ref">RFQ-2026-03980</span>
                  <span className="stat closed">Converted to order</span>
                  <div className="val">
                    <b>$41,200</b>
                    <span>Order KKC-2026-15003</span>
                  </div>
                </div>
                <Track current={5} />
              </div>
            </section>

            {/* Quote detail */}
            <section className={`panel${tab === "qd" ? " on" : ""}`}>
              <button className="qd-back" type="button" onClick={() => setTab("quotes")}>
                <svg viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to quotes
              </button>
              <h2>Quote RFQ-2026-04871</h2>
              <p className="sub">Issued by KEYA sales · valid until 20 Jul 2026</p>
              <div className="valid-note">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                This quote is valid for 14 days. Accept to convert it into a confirmed order.
              </div>
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <table className="qtbl">
                  <thead>
                    <tr>
                      <th>Product &amp; spec</th>
                      <th style={{ textAlign: "right" }}>Qty</th>
                      <th style={{ textAlign: "right" }}>Unit price</th>
                      <th style={{ textAlign: "right" }}>Lead time</th>
                      <th style={{ textAlign: "right" }}>Line total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="pn">Heavyweight Crew Tee</div>
                        <div className="sp">Cotton 220 GSM · Navy, Ecru · OEKO-TEX</div>
                      </td>
                      <td className="num">2,000</td>
                      <td className="num">$6.40</td>
                      <td className="num">45 days</td>
                      <td className="num">$12,800</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pn">Brushed Pullover Hoodie</div>
                        <div className="sp">Cotton/Poly 320 GSM · Slate · Private label</div>
                      </td>
                      <td className="num">800</td>
                      <td className="num">$11.90</td>
                      <td className="num">55 days</td>
                      <td className="num">$9,520</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pn">Organic Cotton Bodysuit</div>
                        <div className="sp">GOTS 180 GSM · Cream</div>
                      </td>
                      <td className="num">1,500</td>
                      <td className="num">$3.47</td>
                      <td className="num">50 days</td>
                      <td className="num">$5,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="qd-tot">
                <div>
                  <span className="k">Total quantity</span>
                  <div className="v tnum">4,300 pcs</div>
                </div>
                <div>
                  <span className="k">Quote total (FOB)</span>
                  <div className="v tnum">$27,520</div>
                </div>
              </div>
              <div className="qd-actions">
                <button className="btn btn-buy" type="button">Accept &amp; convert to order</button>
                <button className="btn btn-quote" type="button">Request revision</button>
                <button className="btn btn-outline" type="button">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3v12M8 11l4 4 4-4M4 21h16" />
                  </svg>
                  Download PDF
                </button>
                <button className="btn btn-danger" type="button">Decline</button>
              </div>
              <div className="thread">
                <h3>Messages with KEYA sales</h3>
                <div className="msg them">
                  <div className="av">K</div>
                  <div>
                    <div className="bub">
                      Hi Anders — your quote is ready. We matched your target on the
                      tee and offered a 45-day lead time. Happy to discuss the hoodie
                      GSM if you&apos;d like a lighter option.
                    </div>
                    <div className="t">KEYA Sales · 5 Jul, 14:20</div>
                  </div>
                </div>
                <div className="msg me">
                  <div className="av">A</div>
                  <div>
                    <div className="bub">
                      Thanks! Can we get the bodysuit down to $3.30 if we raise it to
                      2,000 pcs?
                    </div>
                    <div className="t">You · 5 Jul, 16:02</div>
                  </div>
                </div>
                <div className="msg them">
                  <div className="av">K</div>
                  <div>
                    <div className="bub">
                      Yes — at 2,000 pcs we can do $3.30. I&apos;ll send a revised line
                      shortly.
                    </div>
                    <div className="t">KEYA Sales · 5 Jul, 16:40</div>
                  </div>
                </div>
                <div className="msgbox">
                  <input placeholder="Write a message…" />
                  <button className="btn btn-quote" type="button">Send</button>
                </div>
              </div>
            </section>

            {/* Addresses */}
            <section className={`panel${tab === "addresses" ? " on" : ""}`}>
              <h2>Addresses</h2>
              <p className="sub">Shipping &amp; billing destinations.</p>
              <div className="addr-grid">
                <div className="addr">
                  <div className="tag">Default shipping</div>
                  <p>
                    <b>Nordic Apparel AB</b>
                    <br />
                    Sveavägen 44
                    <br />
                    111 34 Stockholm
                    <br />
                    Sweden
                  </p>
                </div>
                <div className="addr">
                  <div className="tag">Billing</div>
                  <p>
                    <b>Nordic Apparel AB</b>
                    <br />
                    Finance Dept · Box 12
                    <br />
                    111 34 Stockholm
                    <br />
                    Sweden
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 14 }}>
                <button className="btn btn-outline" type="button">+ Add address</button>
              </div>
            </section>

            {/* Profile */}
            <section className={`panel${tab === "profile" ? " on" : ""}`}>
              <h2>
                Business profile{" "}
                <span className="vbadge" style={{ verticalAlign: "middle" }}>
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Verified
                </span>
              </h2>
              <p className="sub">
                Verification unlocks trade pricing, NET terms requests, and faster RFQ
                handling.
              </p>
              <div className="card">
                {[
                  ["Company", "Nordic Apparel AB"],
                  ["Business type", "Retailer / Importer"],
                  ["VAT / Tax ID", "SE556123456701"],
                  ["Annual volume", "50,000–100,000 pcs"],
                  ["Primary contact", "Anders Møller"],
                ].map(([k, v]) => (
                  <div className="prof-row" key={k}>
                    <span className="k">{k}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
                <div className="prof-row">
                  <span className="k">Verification status</span>
                  <span className="v" style={{ color: "var(--green-700)" }}>
                    Verified · 12 May 2026
                  </span>
                </div>
              </div>
              <button className="btn btn-outline" type="button">Edit profile</button>
            </section>

            {/* Settings */}
            <section className={`panel${tab === "settings" ? " on" : ""}`}>
              <h2>Settings</h2>
              <p className="sub">Preferences &amp; notifications.</p>
              <div className="card">
                <div className="prof-row">
                  <span className="k">Email notifications</span>
                  <span className="v" style={{ color: "var(--green-700)" }}>On</span>
                </div>
                <div className="prof-row">
                  <span className="k">Quote status alerts</span>
                  <span className="v" style={{ color: "var(--green-700)" }}>On</span>
                </div>
                <div className="prof-row">
                  <span className="k">Currency</span>
                  <span className="v">USD $</span>
                </div>
                <div className="prof-row">
                  <span className="k">Language</span>
                  <span className="v">English</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
