"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { MiniBuy, MiniQuote } from "@/components/MiniAdd";
import "./product.css";

const thumbs = [
  { src: "/assets/product/tshirt-navy-v1.png", alt: "front" },
  { src: "/assets/product/sweatshirt-navy-v1.png", alt: "detail" },
  { src: "/assets/product/henley-ecru-v1.png", alt: "ecru variant" },
  { src: "/assets/product/polo-green-v1.png", alt: "green variant" },
];

const related = [
  {
    img: "/assets/product/polo-green-v1.png",
    alt: "Polo",
    badge: "stock",
    badgeLabel: "In Stock",
    title: "Classic Piqué Polo",
    spec: "200 GSM · Cotton",
    price: "$24.00",
  },
  {
    img: "/assets/product/hoodie-slate-v1.png",
    alt: "Hoodie",
    badge: "mto",
    badgeLabel: "Made to Order",
    title: "Brushed Pullover Hoodie",
    spec: "320 GSM",
    price: "MOQ 300 · from $11.90",
  },
  {
    img: "/assets/product/sweatshirt-navy-v1.png",
    alt: "Sweatshirt",
    badge: "hybrid",
    badgeLabel: "Hybrid",
    title: "Loopback Crew Sweatshirt",
    spec: "300 GSM",
    price: "$29.00",
  },
  {
    img: "/assets/product/henley-ecru-v1.png",
    alt: "Henley",
    badge: "stock",
    badgeLabel: "In Stock",
    title: "Long-Sleeve Henley",
    spec: "180 GSM",
    price: "$22.00",
  },
];

const colours = ["#0C2436", "#F1EDE4", "#137A47", "#5A6B76"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const fabrics = ["Cotton 220", "Cotton 180", "Organic 200", "Cotton/Poly 240"];
const quoteColours = ["#0C2436", "#F1EDE4", "#137A47", "#5A6B76", "#B42318"];

export default function ProductPage() {
  const { addToCart, addToQuote } = useStore();

  const [lane, setLane] = useState<"buy" | "quote">("buy");
  const [activeThumb, setActiveThumb] = useState(0);
  const [gimg, setGimg] = useState(thumbs[0].src);
  const [colour, setColour] = useState(0);
  const [size, setSize] = useState(1);
  const [qty, setQty] = useState(1);
  const [fabric, setFabric] = useState(0);
  const [qColours, setQColours] = useState<number[]>([0, 1]);

  const qstep = (n: number) => setQty((q) => Math.max(1, q + n));
  const toggleQColour = (i: number) =>
    setQColours((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));

  const addBuy = () =>
    addToCart("Added to cart", "Heavyweight Crew Tee · Navy · $18.00");
  const addQuote = () =>
    addToQuote("Added to Quote list", "Heavyweight Crew Tee · 2,000 pcs · we'll price it");

  return (
    <div className="pg-product">
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Home</Link> / <Link href="/catalogue">Products</Link> /{" "}
          <Link href="/catalogue">Men&apos;s Wear</Link> /{" "}
          <b style={{ color: "var(--ink)" }}>Heavyweight Crew Tee</b>
        </div>

        <div className="pdp">
          {/* Gallery */}
          <div className="gallery">
            <div className="gmain">
              <span className="gbadge">Hybrid · Buy or Quote</span>
              <img id="gimg" src={gimg} alt="Heavyweight Crew Tee" />
            </div>
            <div className="gthumbs">
              {thumbs.map((t, i) => (
                <button
                  key={t.src}
                  type="button"
                  className={i === activeThumb ? "on" : undefined}
                  onClick={() => {
                    setActiveThumb(i);
                    setGimg(t.src);
                  }}
                >
                  <img src={t.src} alt={t.alt} />
                </button>
              ))}
            </div>
          </div>

          {/* Info + dual mode */}
          <div>
            <span className="p-cat">Men · T-Shirt · SKU KKC-TEE-220</span>
            <h1>Heavyweight Crew Tee</h1>
            <p className="p-sub">
              A 220 GSM combed-cotton staple built for private-label programmes and
              everyday retail alike. Sample it today, or configure a bulk run.
            </p>
            <div className="p-rate">
              <span className="stars">★★★★★</span> 4.8 · 126 retail reviews ·{" "}
              <span style={{ color: "var(--green-700)", fontWeight: 600 }}>In stock</span>
            </div>

            {/* Segmented control */}
            <div className="seg" role="tablist">
              <button
                type="button"
                className={lane === "buy" ? "on" : undefined}
                data-lane="buy"
                onClick={() => setLane("buy")}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6 6h15l-1.5 9h-12z" />
                  <circle cx="9" cy="20" r="1.4" />
                  <circle cx="18" cy="20" r="1.4" />
                </svg>
                Buy Retail
              </button>
              <button
                type="button"
                className={lane === "quote" ? "on" : undefined}
                data-lane="quote"
                onClick={() => setLane("quote")}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7 3h7l5 5v13H7z" />
                  <path d="M13 3v6h6M12 12v5M9.5 14.5h5" />
                </svg>
                Order in Bulk
              </button>
            </div>

            {/* BUY panel */}
            <div className={`panel buy${lane !== "buy" ? " hidden" : ""}`} id="panel-buy">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <span className="price-big">
                    <span className="cur">$</span>18.00
                  </span>
                  <div className="price-note">
                    <span className="dot"></span>In stock · ready to ship
                  </div>
                </div>
                <span
                  style={{
                    fontSize: ".82rem",
                    color: "var(--slate)",
                    textAlign: "right",
                  }}
                >
                  Retail price
                  <br />
                  incl. sample handling
                </span>
              </div>
              <div className="field">
                <label>
                  Colour — <b style={{ fontWeight: 600 }}>Navy</b>
                </label>
                <div className="opts">
                  {colours.map((c, i) => (
                    <span
                      key={c}
                      className={`opt sw${i === colour ? " on" : ""}`}
                      style={{ background: c }}
                      onClick={() => setColour(i)}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Size</label>
                <div className="opts">
                  {sizes.map((s, i) => (
                    <span
                      key={s}
                      className={`opt${i === size ? " on" : ""}`}
                      onClick={() => setSize(i)}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Quantity</label>
                <div className="qty">
                  <button type="button" onClick={() => qstep(-1)}>
                    −
                  </button>
                  <input
                    id="qty"
                    value={qty}
                    onChange={(e) =>
                      setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                    }
                  />
                  <button type="button" onClick={() => qstep(1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="actions">
                <button type="button" className="btn btn-buy" onClick={addBuy}>
                  <svg viewBox="0 0 24 24">
                    <path d="M6 6h15l-1.5 9h-12z" />
                    <circle cx="9" cy="20" r="1.4" />
                    <circle cx="18" cy="20" r="1.4" />
                  </svg>
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ width: "auto", whiteSpace: "nowrap" }}
                >
                  Buy Now
                </button>
              </div>
              <div className="deliver">
                <svg viewBox="0 0 24 24">
                  <path d="M3 7h13v8H3zM16 10h4l1 3v2h-5z" />
                  <circle cx="7" cy="18" r="1.6" />
                  <circle cx="18" cy="18" r="1.6" />
                </svg>
                Delivered in 5–8 business days · returns within 14 days
              </div>
              <div className="custom-note">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l2.4 5 5.6.8-4 4 1 5.5L12 20l-5 2.3 1-5.5-4-4 5.6-.8z" />
                </svg>
                <div>
                  Need <b>private label, custom colour, GSM or packaging?</b>{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setLane("quote");
                    }}
                  >
                    Switch to bulk &amp; request a quote →
                  </a>
                </div>
              </div>
            </div>

            {/* QUOTE panel */}
            <div
              className={`panel quote${lane !== "quote" ? " hidden" : ""}`}
              id="panel-quote"
            >
              <div className="moq-line">
                <div>
                  <div className="k">Minimum order</div>
                  <div className="v tnum">500 pcs</div>
                </div>
                <div>
                  <div className="k">Indicative from</div>
                  <div className="v tnum">
                    $6.40
                    <span style={{ fontSize: ".9rem", color: "var(--slate)" }}>/pc</span>
                  </div>
                </div>
                <div>
                  <div className="k">Lead time</div>
                  <div className="v">30–45d</div>
                </div>
              </div>
              <p
                style={{
                  fontSize: ".84rem",
                  color: "var(--slate)",
                  marginTop: "4px",
                }}
              >
                Final unit price depends on fabric, GSM, quantity and incoterms. Add to
                your quote list — we respond within 48 hours.
              </p>
              <div className="field">
                <label>Fabric &amp; GSM</label>
                <div className="opts">
                  {fabrics.map((f, i) => (
                    <span
                      key={f}
                      className={`opt${i === fabric ? " on" : ""}`}
                      onClick={() => setFabric(i)}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Colours required</label>
                <div className="opts">
                  {quoteColours.map((c, i) => (
                    <span
                      key={c}
                      className={`opt sw${qColours.includes(i) ? " on" : ""}`}
                      style={{ background: c }}
                      onClick={() => toggleQColour(i)}
                    ></span>
                  ))}
                  <span className="opt" style={{ fontSize: ".8rem" }}>
                    + custom
                  </span>
                </div>
              </div>
              <div className="field">
                <label>Size breakdown &amp; quantity</label>
                <div className="row2">
                  <input
                    className="input"
                    placeholder="Total quantity (min 500)"
                    defaultValue="2,000"
                  />
                  <input
                    className="input"
                    placeholder="Target unit price (optional)"
                  />
                </div>
              </div>
              <div className="addons">
                <label style={{ fontSize: ".82rem", fontWeight: 600 }}>
                  Customisation add-ons
                </label>
                <label className="addon">
                  <input type="checkbox" defaultChecked />
                  Private label / branded neck tape
                  <span className="tag">Quote item</span>
                </label>
                <label className="addon">
                  <input type="checkbox" />
                  Custom colour matching (Pantone)
                  <span className="tag">Quote item</span>
                </label>
                <label className="addon">
                  <input type="checkbox" />
                  Custom GSM<span className="tag">Quote item</span>
                </label>
                <label className="addon">
                  <input type="checkbox" />
                  Polybag + carton branding<span className="tag">Quote item</span>
                </label>
              </div>
              <div className="actions">
                <button type="button" className="btn btn-quote" onClick={addQuote}>
                  <svg viewBox="0 0 24 24">
                    <path d="M7 3h7l5 5v13H7z" />
                    <path d="M12 12v5M9.5 14.5h5" />
                  </svg>
                  Add to Quote list
                </button>
              </div>
              <div className="deliver">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                No account needed · reference number issued instantly · formal quote in 48h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="wrap">
        <div className="section">
          <h2>Specifications</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 48px",
            }}
          >
            <table className="spec-table">
              <tbody>
                <tr>
                  <td>Fabric</td>
                  <td>100% Combed Cotton</td>
                </tr>
                <tr>
                  <td>Weight (GSM)</td>
                  <td>220 GSM</td>
                </tr>
                <tr>
                  <td>Fit</td>
                  <td>Regular / Relaxed</td>
                </tr>
                <tr>
                  <td>Construction</td>
                  <td>Single jersey, side-seamed</td>
                </tr>
              </tbody>
            </table>
            <table className="spec-table">
              <tbody>
                <tr>
                  <td>Care</td>
                  <td>Machine wash 30°C</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>Made in Bangladesh</td>
                </tr>
                <tr>
                  <td>Sizes</td>
                  <td>XS – XXL</td>
                </tr>
                <tr>
                  <td>MOQ (bulk)</td>
                  <td>500 pcs / colour</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section">
          <h2>Certifications for this product</h2>
          <div className="certs">
            {["OEKO-TEX Standard 100", "WRAP", "amfori BSCI", "ISO 9001"].map((c) => (
              <span className="cert-chip" key={c}>
                <span className="tick">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {c}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <a className="dl" href="#">
              <svg viewBox="0 0 24 24">
                <path d="M7 3h7l5 5v13H7z" />
                <path d="M13 3v6h6M9 14h6M9 17h6M9 11h2" />
              </svg>
              <div>
                <b>Download tech pack &amp; spec sheet</b>
                <span>PDF · 1.2 MB · measurements, fabric, tolerances</span>
              </div>
            </a>
          </div>
        </div>

        <div className="section" style={{ borderBottom: "none" }}>
          <h2>You may also like</h2>
          <div className="prod-grid">
            {related.map((r) => (
              <Link className="card" href="/product" key={r.title}>
                <div className="thumb">
                  <span className={`badge ${r.badge}`}>{r.badgeLabel}</span>
                  <img src={r.img} alt={r.alt} />
                </div>
                <div className="body">
                  <h3>{r.title}</h3>
                  <div className="spec">{r.spec}</div>
                  <div className="pr">{r.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="sticky-cta">
        {lane === "buy" ? (
          <button type="button" className="btn btn-buy" id="s-buy" onClick={addBuy}>
            Add to Cart · $18.00
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-quote"
            id="s-quote"
            onClick={addQuote}
          >
            Add to Quote
          </button>
        )}
      </div>
    </div>
  );
}
