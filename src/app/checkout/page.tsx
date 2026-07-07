"use client";

import Link from "next/link";
import { useState } from "react";
import { LoopMark, CheckIcon } from "@/components/icons";
import "./checkout.css";

const SHIP_METHODS = [
  { id: "standard", title: "Standard freight", note: "7–10 business days · tracked", price: "$9.50" },
  { id: "express", title: "Express air", note: "3–4 business days · DHL", price: "$28.00" },
  { id: "bulk", title: "Bulk / freight forwarder", note: "For large orders — arrange via Quote", price: "Quoted" },
];

const PAY_METHODS = [
  { id: "card", title: "Credit / debit card", note: "Visa · Mastercard · Amex", logos: ["VISA", "MC", "AMEX"] },
  { id: "bank", title: "Bank transfer (T/T)", note: "For verified business buyers", logos: [] },
];

export default function CheckoutPage() {
  const [done, setDone] = useState(false);
  const [ship, setShip] = useState("standard");
  const [pay, setPay] = useState("card");
  const [agree, setAgree] = useState(false);
  const [agreeErr, setAgreeErr] = useState(false);

  function place() {
    if (!agree) {
      setAgreeErr(true);
      return;
    }
    setAgreeErr(false);
    setDone(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleView() {
    setDone((d) => !d);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="pg-checkout">
      <header className="co">
        <div className="wrap bar">
          <Link className="brand" href="/">
            <span className="mark">
              <LoopMark className="loop" />
              KEYA
            </span>
            <span className="sub">Knit Composite</span>
          </Link>
          <div className="secure">
            <svg viewBox="0 0 24 24">
              <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            Secure SSL checkout
          </div>
        </div>
      </header>

      {!done && (
        <div className="wrap narrow">
          <div className="chk-steps">
            <div className="cs done">
              <span className="n">✓</span>Cart
            </div>
            <span className="arw">→</span>
            <div className="cs active">
              <span className="n">2</span>Details
            </div>
            <span className="arw">→</span>
            <div className="cs">
              <span className="n">3</span>Shipping
            </div>
            <span className="arw">→</span>
            <div className="cs">
              <span className="n">4</span>Payment
            </div>
            <span className="arw">→</span>
            <div className="cs">
              <span className="n">5</span>Confirm
            </div>
          </div>

          <div className="co-grid">
            <div>
              {/* CO1 contact */}
              <div className="card">
                <h2>
                  <span className="st">1</span>Contact
                </h2>
                <p className="desc">
                  Already have an account?{" "}
                  <Link href="/account" style={{ color: "var(--green-700)", fontWeight: 600 }}>
                    Sign in
                  </Link>{" "}
                  for faster checkout.
                </p>
                <div className="field">
                  <label>Email address</label>
                  <input className="input valid" defaultValue="buyer@brand.com" />
                  <div className="ok">
                    <CheckIcon />
                    Order updates sent here
                  </div>
                </div>
                <label className="terms" style={{ padding: 0 }}>
                  <input type="checkbox" />
                  Email me about restocks &amp; new drops
                </label>
              </div>

              {/* CO2 shipping address */}
              <div className="card">
                <h2>
                  <span className="st">2</span>Shipping address
                </h2>
                <div className="grid2">
                  <div className="field">
                    <label>First name</label>
                    <input className="input" defaultValue="Anders" />
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <input className="input" defaultValue="Møller" />
                  </div>
                </div>
                <div className="field">
                  <label>Company (optional)</label>
                  <input className="input" defaultValue="Nordic Apparel AB" />
                </div>
                <div className="field">
                  <label>Address</label>
                  <input className="input valid" defaultValue="Sveavägen 44" />
                  <div className="ok">
                    <CheckIcon />
                    Address verified
                  </div>
                </div>
                <div className="grid2">
                  <div className="field">
                    <label>City</label>
                    <input className="input" defaultValue="Stockholm" />
                  </div>
                  <div className="field">
                    <label>Postal code</label>
                    <input className="input" defaultValue="111 34" />
                  </div>
                </div>
                <div className="field">
                  <label>Country / region</label>
                  <select className="input" defaultValue="Sweden">
                    <option>Sweden</option>
                    <option>Germany</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                  </select>
                </div>
              </div>

              {/* CO3 shipping method */}
              <div className="card">
                <h2>
                  <span className="st">3</span>Shipping method
                </h2>
                <p className="desc">Zone-based rates calculated for Sweden.</p>
                <div className="opt-row">
                  {SHIP_METHODS.map((m) => (
                    <label
                      key={m.id}
                      className={`radio${ship === m.id ? " on" : ""}`}
                      onClick={() => setShip(m.id)}
                    >
                      <span className="dot" />
                      <div className="rt">
                        <b>{m.title}</b>
                        <p>{m.note}</p>
                      </div>
                      <span className="rp tnum">{m.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CO4 payment */}
              <div className="card">
                <h2>
                  <span className="st">4</span>Payment
                </h2>
                <p className="desc">
                  All transactions encrypted.{" "}
                  <span style={{ color: "var(--green-700)", fontWeight: 600 }}>PCI-DSS compliant.</span>
                </p>
                <div className="opt-row" style={{ marginBottom: 16 }}>
                  {PAY_METHODS.map((m) => (
                    <label
                      key={m.id}
                      className={`radio${pay === m.id ? " on" : ""}`}
                      onClick={() => setPay(m.id)}
                    >
                      <span className="dot" />
                      <div className="rt">
                        <b>{m.title}</b>
                        <p>{m.note}</p>
                      </div>
                      {m.logos.length > 0 && (
                        <span className="paylogos">
                          {m.logos.map((l) => (
                            <span key={l}>{l}</span>
                          ))}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
                {pay === "card" && (
                  <div className="paycard">
                    <div className="field">
                      <label>Card number</label>
                      <input className="input" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid2">
                      <div className="field">
                        <label>Expiry</label>
                        <input className="input" placeholder="MM / YY" />
                      </div>
                      <div className="field">
                        <label>CVC</label>
                        <input className="input" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CO5 order summary */}
            <aside className="osum">
              <div className="h">Order summary · 2 items</div>
              <div className="oline">
                <img src="/assets/product/tshirt-navy-v1.png" alt="" />
                <div>
                  <h4>Heavyweight Crew Tee</h4>
                  <div className="os">Navy · L · Qty 1</div>
                </div>
                <div className="op tnum">$18.00</div>
              </div>
              <div className="oline">
                <img src="/assets/product/polo-green-v1.png" alt="" />
                <div>
                  <h4>Piqué Polo Shirt</h4>
                  <div className="os">Sage · M · Qty 1</div>
                </div>
                <div className="op tnum">$24.00</div>
              </div>
              <div className="tot">
                <div className="r">
                  <span>Subtotal</span>
                  <b className="tnum">$42.00</b>
                </div>
                <div className="r">
                  <span>Shipping</span>
                  <b className="tnum">$9.50</b>
                </div>
                <div className="r">
                  <span>Tax (VAT)</span>
                  <b className="tnum">$3.36</b>
                </div>
                <div className="r g">
                  <span>Total</span>
                  <b className="tnum">$54.86</b>
                </div>
              </div>
              <label className="terms">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />I agree to the
                Terms of Sale, Privacy Policy and Shipping &amp; Returns.
              </label>
              {agreeErr && (
                <div style={{ padding: "0 22px 8px", color: "var(--danger)", fontSize: ".82rem" }}>
                  Please agree to the Terms of Sale to continue.
                </div>
              )}
              <div className="foot">
                <button type="button" className="btn btn-buy" style={{ width: "100%" }} onClick={place}>
                  Place order · $54.86
                </button>
              </div>
            </aside>
          </div>
        </div>
      )}

      {done && (
        <div className="wrap">
          <div className="confirm">
            <div className="ok">
              <CheckIcon />
            </div>
            <h1>Thank you — your order is confirmed.</h1>
            <p>
              A confirmation email is on its way. You can track fulfilment and shipping from your account.
            </p>
            <div className="ordbox">
              <div>
                <div className="k">Order number</div>
                <div className="v">KKC-2026-18342</div>
              </div>
              <div>
                <div className="k">Est. delivery</div>
                <div className="v">14–17 Jul 2026</div>
              </div>
              <div>
                <div className="k">Total paid</div>
                <div className="v">$54.86</div>
              </div>
            </div>
            <div className="cta">
              <Link className="btn btn-buy" href="/account">
                Track my order
              </Link>
              <Link className="btn btn-outline" href="/catalogue">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="toggle-view wrap">
        <button type="button" onClick={toggleView}>
          ◑ Preview toggle: checkout ⇄ confirmation state
        </button>
      </div>

      <footer className="mini">© 2026 Keya Knit Composite · Secure checkout · Privacy · Terms</footer>
    </div>
  );
}
