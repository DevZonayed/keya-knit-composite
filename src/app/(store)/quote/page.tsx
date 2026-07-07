"use client";

import { useState } from "react";
import Link from "next/link";
import "./quote.css";

type QuoteLine = {
  id: string;
  img: string;
  name: string;
  spec: string;
  qty: string;
};

const initialLines: QuoteLine[] = [
  {
    id: "tee",
    img: "/assets/product/tshirt-navy-v1.png",
    name: "Heavyweight Crew Tee",
    spec: "Cotton 220 · Navy, Ecru",
    qty: "2,000 pcs · MOQ 500",
  },
  {
    id: "hoodie",
    img: "/assets/product/hoodie-slate-v1.png",
    name: "Brushed Pullover Hoodie",
    spec: "Cotton/Poly 320 · Slate",
    qty: "800 pcs · Private label",
  },
  {
    id: "bodysuit",
    img: "/assets/product/baby-bodysuit-v1.png",
    name: "Organic Cotton Bodysuit",
    spec: "GOTS 180 · Cream",
    qty: "1,500 pcs",
  },
];

const fabrics = [
  "100% Cotton",
  "Cotton/Poly 60/40",
  "Organic Cotton (GOTS)",
  "Recycled (GRS)",
];

const swatches = ["#0C2436", "#F1EDE4", "#137A47", "#5A6B76", "#B42318"];

export default function QuotePage() {
  const [fabric, setFabric] = useState(0);
  const [colours, setColours] = useState<boolean[]>([true, true, false, false, false]);
  const [lines, setLines] = useState<QuoteLine[]>(initialLines);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleColour = (i: number) =>
    setColours((c) => c.map((v, idx) => (idx === i ? !v : v)));

  const removeLine = (id: string) =>
    setLines((l) => l.filter((line) => line.id !== id));

  return (
    <div className="pg-quote">
      <section className="qhero">
        <img
          src="/assets/quote/banner-v1.png"
          alt="Sourcing desk with fabric swatches and spec sheet"
        />
        <div className="wrap">
          <span className="eyebrow">B2B · Request a Quote</span>
          <h1>Tell us what you need. Get a formal quote in 48 hours.</h1>
          <p>
            Configure fabric, GSM, colours, sizes and customisation for your
            whole basket. One structured RFQ — no back-and-forth email, no
            account required to start.
          </p>
          <div className="reassure">
            <div>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              48-hour response
            </div>
            <div>
              <svg viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              No sign-up wall
            </div>
            <div>
              <svg viewBox="0 0 24 24">
                <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
              </svg>
              NDA on request
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="rfq">
          {/* Builder */}
          <div>
            <div className="stepper">
              <div className="st done">
                <span className="n">✓</span>Products
              </div>
              <div className="st active">
                <span className="n">2</span>Specifications
              </div>
              <div className="st">
                <span className="n">3</span>Shipping &amp; Terms
              </div>
              <div className="st">
                <span className="n">4</span>Attachments
              </div>
              <div className="st">
                <span className="n">5</span>Review
              </div>
            </div>

            <div className="formcard">
              <h2>Specifications</h2>
              <p className="lede">
                Set fabric, colours and quantity breakdown for{" "}
                <b>Heavyweight Crew Tee</b>. Repeat per line item in your quote
                list.
              </p>

              <div className="field">
                <label>Fabric &amp; composition</label>
                <div className="opts">
                  {fabrics.map((f, i) => (
                    <span
                      key={f}
                      className={"opt" + (fabric === i ? " on" : "")}
                      onClick={() => setFabric(i)}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid2">
                <div className="field">
                  <label>
                    GSM <span className="hint">grams / m²</span>
                  </label>
                  <select className="input" defaultValue="220 GSM (standard)">
                    <option>220 GSM (standard)</option>
                    <option>180 GSM</option>
                    <option>200 GSM</option>
                    <option>240 GSM</option>
                    <option>Custom…</option>
                  </select>
                </div>
                <div className="field">
                  <label>Fit</label>
                  <select className="input" defaultValue="Regular">
                    <option>Regular</option>
                    <option>Relaxed</option>
                    <option>Slim</option>
                    <option>Oversized</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>
                  Colours required{" "}
                  <span className="hint">select all that apply</span>
                </label>
                <div className="opts">
                  {swatches.map((sw, i) => (
                    <span
                      key={sw}
                      className={"sw" + (colours[i] ? " on" : "")}
                      style={{ background: sw }}
                      onClick={() => toggleColour(i)}
                    ></span>
                  ))}
                  <span className="opt" style={{ fontSize: ".82rem" }}>
                    + Pantone match
                  </span>
                </div>
              </div>
              <div className="field">
                <label>
                  Size breakdown <span className="hint">units per size</span>
                </label>
                <div className="sizes">
                  <div className="sz">
                    <span>XS</span>
                    <input defaultValue="100" />
                  </div>
                  <div className="sz">
                    <span>S</span>
                    <input defaultValue="400" />
                  </div>
                  <div className="sz">
                    <span>M</span>
                    <input defaultValue="600" />
                  </div>
                  <div className="sz">
                    <span>L</span>
                    <input defaultValue="500" />
                  </div>
                  <div className="sz">
                    <span>XL</span>
                    <input defaultValue="300" />
                  </div>
                  <div className="sz">
                    <span>XXL</span>
                    <input defaultValue="100" />
                  </div>
                </div>
              </div>
              <div className="grid2">
                <div className="field">
                  <label>Total quantity</label>
                  <input
                    className="input tnum"
                    defaultValue="2,000"
                    readOnly
                    style={{ background: "var(--paper)" }}
                  />
                </div>
                <div className="field">
                  <label>
                    Target unit price <span className="hint">optional</span>
                  </label>
                  <input className="input" placeholder="$ per piece" />
                </div>
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <label>Certifications required</label>
                <div className="certchecks">
                  <label className="cc">
                    <input type="checkbox" defaultChecked />
                    OEKO-TEX Standard 100
                  </label>
                  <label className="cc">
                    <input type="checkbox" />
                    GOTS Organic
                  </label>
                  <label className="cc">
                    <input type="checkbox" defaultChecked />
                    WRAP
                  </label>
                  <label className="cc">
                    <input type="checkbox" />
                    GRS Recycled
                  </label>
                </div>
              </div>

              <div className="formnav">
                <button className="btn btn-outline">← Back</button>
                <button className="btn btn-quote">Continue to Shipping →</button>
              </div>
            </div>

            {/* collapsed later steps preview */}
            <div
              className="formcard"
              style={{ marginTop: 16, opacity: 0.7 }}
            >
              <h2
                style={{
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span className="st" style={{ padding: "4px 10px" }}>
                  3
                </span>
                Shipping &amp; Terms
              </h2>
              <p className="lede" style={{ margin: "8px 0 0" }}>
                Destination country &amp; port · Incoterms (FOB / CIF / DDP) ·
                target delivery date · packaging.
              </p>
            </div>
          </div>

          {/* Quote cart */}
          <aside className="qcart">
            <div className="head">
              <svg viewBox="0 0 24 24">
                <path d="M7 3h7l5 5v13H7z" />
                <path d="M13 3v6h6M12 12v5M9.5 14.5h5" />
              </svg>
              <b>Your Quote list</b>
              <span>{lines.length} items</span>
            </div>
            {lines.map((line) => (
              <div className="qline" key={line.id}>
                <img src={line.img} alt="" />
                <div>
                  <h4>{line.name}</h4>
                  <div className="qs">{line.spec}</div>
                  <div className="qq">{line.qty}</div>
                </div>
                <span className="rm" onClick={() => removeLine(line.id)}>
                  ×
                </span>
              </div>
            ))}
            <div className="totals">
              <div className="r">
                <span>Total lines</span>
                <b>{lines.length} products</b>
              </div>
              <div className="r">
                <span>Total quantity</span>
                <b className="tnum">4,300 pcs</b>
              </div>
              <div className="r">
                <span>Est. value band</span>
                <b>Quoted in 48h</b>
              </div>
            </div>
            <div className="foot">
              <button
                className="btn btn-quote"
                style={{ width: "100%" }}
                onClick={() => setShowSuccess(true)}
              >
                Submit RFQ
              </button>
              <div className="qnote">
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                No payment now · we reply with a formal quote
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Success state */}
      <div
        className={"overlay" + (showSuccess ? " on" : "")}
        onClick={(e) => {
          if (e.target === e.currentTarget) setShowSuccess(false);
        }}
      >
        <div className="success">
          <div className="ok">
            <svg viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2>RFQ submitted</h2>
          <p>
            Thanks — your request is with our sales team. We&apos;ll send a
            formal quote within 48 hours.
          </p>
          <div className="refbox">
            Reference
            <br />
            <b>RFQ-2026-04871</b>
          </div>
          <div className="upsell">
            <b>Track this quote:</b> create a free business account to follow
            status, message our team, and unlock verified-buyer pricing.
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <button
              className="btn btn-outline"
              style={{ flex: 1 }}
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
            <Link className="btn btn-buy" style={{ flex: 1 }} href="/account">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
