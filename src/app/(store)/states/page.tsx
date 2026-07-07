"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import "./states.css";

type ToastKind = "" | "quote" | "info";
type Toast = { id: number; title: string; sub: string; cls: ToastKind; show: boolean };

let toastSeq = 0;

export default function StatesPage() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [chips, setChips] = useState(["Category: Men's", "Fabric: Merino", "In stock"]);
  const [signin, setSignin] = useState(false);
  const [quick, setQuick] = useState(false);

  const toast = useCallback((title: string, sub: string, cls: ToastKind) => {
    const id = ++toastSeq;
    setToasts((t) => [...t, { id, title, sub, cls, show: false }]);
    requestAnimationFrame(() =>
      setToasts((t) => t.map((x) => (x.id === id ? { ...x, show: true } : x))),
    );
    setTimeout(() => {
      setToasts((t) => t.map((x) => (x.id === id ? { ...x, show: false } : x)));
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 400);
    }, 3200);
  }, []);

  return (
    <div className="pg-states">
      <div className="pagehead">
        <div className="wrap">
          <Link className="back" href="/">
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to storefront
          </Link>
          <h1>Global states &amp; system components</h1>
          <p>
            Empty states, no-results, loading skeletons, error/404, form validation, modals, toasts and the
            two-lane cross-redirect — the connective tissue used across every page.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="grid">
          {/* empty cart */}
          <div className="demo">
            <div className="lbl">
              Empty state · Cart <span className="tag">green lane</span>
            </div>
            <div className="body">
              <div className="empty">
                <img src="/assets/global/empty-cart-v1.png" alt="Empty cart illustration" />
                <h3>Your cart is empty</h3>
                <p>Browse ready-to-ship products and add retail items to check out fast.</p>
                <div className="cta">
                  <Link className="btn btn-buy" href="/catalogue">
                    Shop products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* empty quote */}
          <div className="demo">
            <div className="lbl">
              Empty state · Quote list <span className="tag">navy lane</span>
            </div>
            <div className="body">
              <div className="empty">
                <img src="/assets/global/empty-quote-v1.png" alt="Empty quote list illustration" />
                <h3>No items in your Quote list</h3>
                <p>Add bulk or custom products to build a single structured RFQ — no account required.</p>
                <div className="cta">
                  <Link className="btn btn-quote" href="/quote">
                    Start a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* no results */}
          <div className="demo">
            <div className="lbl">No search results</div>
            <div className="body">
              <div className="noresults">
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4-4M8 11h6" />
                  </svg>
                </div>
                <h3>No products match &quot;merino zip&quot;</h3>
                <p>Try removing a filter or broadening your search.</p>
                <div className="chips">
                  {chips.map((c) => (
                    <span key={c}>
                      {c}{" "}
                      <b onClick={() => setChips((cs) => cs.filter((x) => x !== c))}>×</b>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* loading skeleton */}
          <div className="demo">
            <div className="lbl">Loading · skeleton cards</div>
            <div className="body">
              <div className="skwrap">
                {[0, 1].map((i) => (
                  <div className="skcard" key={i}>
                    <div className="sk img" />
                    <div className="sk line m" />
                    <div className="sk line s" />
                    <div style={{ height: 8 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* form validation */}
          <div className="demo">
            <div className="lbl">Form validation · inline</div>
            <div className="body">
              <div className="field">
                <label>Email</label>
                <input className="input bad" defaultValue="buyer@brand" />
                <div className="msg err">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5M12 16v.5" />
                  </svg>
                  Enter a valid email address.
                </div>
              </div>
              <div className="field">
                <label>Order quantity (MOQ 500)</label>
                <input className="input good" defaultValue="2,000" />
                <div className="msg ok">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Meets minimum order quantity.
                </div>
              </div>
              <div className="payfail">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
                <div>
                  <b>Payment declined</b>
                  <p>Your card was declined. Check details or try another payment method.</p>
                </div>
              </div>
            </div>
          </div>

          {/* cross-lane redirect */}
          <div className="demo">
            <div className="lbl">Two-lane cross-redirect</div>
            <div className="body">
              <div className="redirect">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3h7l5 5v13H7z" />
                  <path d="M13 3v6h6" />
                </svg>
                <div>
                  <b>Moved to your Quote list</b>
                  <p>
                    &quot;Brushed Pullover Hoodie&quot; is made to order (MOQ 300), so it can&apos;t be bought at
                    retail. We&apos;ve added it to your <Link href="/quote">Quote list</Link> instead.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 16 }} className="triggers">
                <button
                  type="button"
                  className="btn btn-buy"
                  onClick={() => toast("Added to cart", "Retail item · ships from stock", "")}
                >
                  Trigger cart toast
                </button>
                <button
                  type="button"
                  className="btn btn-quote"
                  onClick={() => toast("Added to Quote list", "Bulk item · request pricing", "quote")}
                >
                  Trigger quote toast
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => toast("Moved to Quote list", "Made-to-order item relocated", "info")}
                >
                  Cross-lane toast
                </button>
              </div>
            </div>
          </div>

          {/* modal demo */}
          <div className="demo">
            <div className="lbl">Modal · sign in / create account</div>
            <div className="body">
              <p style={{ color: "var(--slate)", fontSize: ".9rem", marginBottom: 16 }}>
                Sign-in and quick-view dialogs overlay any page with a blurred scrim.
              </p>
              <div className="mbtns">
                <button type="button" className="btn btn-quote" onClick={() => setSignin(true)}>
                  Open sign-in modal
                </button>
                <button type="button" className="btn btn-outline" onClick={() => setQuick(true)}>
                  Open quick-view
                </button>
              </div>
            </div>
          </div>

          {/* 404 */}
          <div className="demo full">
            <div className="lbl">Error · 404 not found</div>
            <div className="body">
              <div className="err404">
                <div className="big">
                  4<span className="z">0</span>4
                </div>
                <h3>We couldn&apos;t find that page</h3>
                <p>The link may be broken or the product may have moved. Let&apos;s get you back on track.</p>
                <div className="cta">
                  <Link className="btn btn-buy" href="/">
                    Back to home
                  </Link>
                  <Link className="btn btn-outline" href="/catalogue">
                    Browse products
                  </Link>
                  <Link className="btn btn-outline" href="/quote">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modals */}
      <div className={`overlay${signin ? " on" : ""}`} onClick={(e) => e.target === e.currentTarget && setSignin(false)}>
        <div className="modal">
          <span className="x" onClick={() => setSignin(false)}>
            ×
          </span>
          <h3>Sign in</h3>
          <p>Access your orders, quotes and verified-buyer pricing.</p>
          <div className="field">
            <label>Email</label>
            <input className="input" placeholder="you@company.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <button type="button" className="btn btn-buy" style={{ width: "100%" }}>
            Sign in
          </button>
          <p style={{ textAlign: "center", margin: "14px 0 0", fontSize: ".85rem" }}>
            New here?{" "}
            <Link href="/account" style={{ color: "var(--green-700)", fontWeight: 600 }}>
              Create a business account
            </Link>
          </p>
        </div>
      </div>

      <div className={`overlay${quick ? " on" : ""}`} onClick={(e) => e.target === e.currentTarget && setQuick(false)}>
        <div className="modal" style={{ maxWidth: 520 }}>
          <span className="x" onClick={() => setQuick(false)}>
            ×
          </span>
          <div style={{ display: "flex", gap: 18 }}>
            <img src="/assets/product/tshirt-navy-v1.png" style={{ width: 130, borderRadius: 10 }} alt="" />
            <div>
              <h3>Heavyweight Crew Tee</h3>
              <p style={{ margin: "6px 0 10px" }}>Navy · 220 GSM · In stock</p>
              <div style={{ fontWeight: 700, fontSize: "1.3rem" }} className="tnum">
                $18.00
              </div>
              <div style={{ fontSize: ".82rem", color: "var(--slate)", marginTop: 4 }}>
                Bulk from $6.40 · MOQ 500
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <Link className="btn btn-buy" href="/product">
                  View full details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-wrap">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.cls}${t.show ? " show" : ""}`}>
            <svg viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <div>
              <b>{t.title}</b>
              <br />
              <span>{t.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
