import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { MiniBuy, MiniQuote } from "@/components/MiniAdd";
import { ProcessFlow } from "@/components/ProcessFlow";
import {
  QuoteDocIcon,
  CartMiniIcon,
  ArrowRight,
  CheckIcon,
  ClockIcon,
  TruckIcon,
} from "@/components/icons";

const categories = [
  { img: "cat-men-v1.png", label: "Men's Wear", alt: "Men's wear" },
  { img: "cat-women-v1.png", label: "Women's Wear", alt: "Women's wear" },
  { img: "cat-kids-v1.png", label: "Kids Wear", alt: "Kids wear" },
  { img: "cat-baby-v1.png", label: "Babywear", alt: "Babywear" },
];

const certs = [
  ["OEKO-TEX", "Standard 100"],
  ["GOTS", "Organic textiles"],
  ["amfori", "BSCI"],
  ["WRAP", "Responsible prod."],
  ["Sedex", "SMETA"],
  ["ISO 9001", "Quality mgmt"],
  ["ISO 14001", "Environment"],
  ["Accord", "RSC structural"],
  ["GRS", "Recycled std"],
];

export default function HomePage() {
  return (
    <>
      {/* H1 Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/assets/home/hero-v3.png"
            alt="KEYA production hall — workers tending rows of circular knitting machines and rolls of knitted fabric"
          />
        </div>
        <div className="wrap">
          <div className="hero-inner">
            <span className="tagline">
              <span className="pip" />
              Vertically integrated · 20+ years · Bangladesh
            </span>
            <h1>
              From two pieces to <em>twenty&nbsp;thousand</em> — one trusted
              knitwear partner.
            </h1>
            <p className="lede">
              Buy finished garments today, or configure a bulk manufacturing
              order and get a formal quote in 48 hours. Same factory. Same
              standards. One smooth platform.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-quote" href="/quote">
                <QuoteDocIcon className="ico" />
                Request a Quote
              </Link>
              <Link className="btn btn-outline on-dark" href="/catalogue">
                Shop Products
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <b className="tnum">3.5M+</b>
                <span>Pieces / month</span>
              </div>
              <div>
                <b className="tnum">5,000+</b>
                <span>Skilled workforce</span>
              </div>
              <div>
                <b>9-step</b>
                <span>In-house production</span>
              </div>
            </div>
            <div className="hero-cap">
              <span className="chip">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
                300+ Knitting Machines
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                4,000+ Sewing Lines
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                </svg>
                Full ETP Treatment
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                FOB · CIF · DDP Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* H2 Trust bar */}
      <div className="trust">
        <div className="wrap">
          <div className="cell">
            <div className="num">
              <Counter to={20} />
              <span className="suf">+</span>
            </div>
            <div className="lab">Years of expertise</div>
          </div>
          <div className="cell">
            <div className="num">
              <Counter to={5000} k />
              <span className="suf">+</span>
            </div>
            <div className="lab">Skilled workforce</div>
          </div>
          <div className="cell">
            <div className="num">
              <Counter to={3.5} dec={1} />
              <span className="suf">M+</span>
            </div>
            <div className="lab">Pieces / month</div>
          </div>
          <div className="cell">
            <div className="num">
              <Counter to={120} />
              <span className="suf">K+</span>
            </div>
            <div className="lab">Pieces / day</div>
          </div>
        </div>
      </div>

      {/* H3 Dual-path splitter */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow">Two ways to work with us</span>
            <h2>One catalogue. Buy it or quote it.</h2>
            <p>
              Every product carries a fulfilment mode. Grab finished stock
              through a normal cart, or configure specs and request a bulk quote
              — hold both at once.
            </p>
          </Reveal>
          <div className="splitter">
            <Reveal className="lane-card buy">
              <img src="/assets/home/lane-buy-v1.png" alt="Folded finished retail garments" />
              <span className="lane-tag">Retail · Buy now</span>
              <h3>Buy finished products</h3>
              <p>
                Ready-to-ship samples and stock, listed prices, standard checkout
                — from 1 piece.
              </p>
              <Link className="btn btn-buy" href="/catalogue">
                <CartMiniIcon className="ico" />
                Shop the catalogue
              </Link>
            </Reveal>
            <Reveal className="lane-card quote">
              <img
                src="/assets/home/lane-quote-v1.png"
                alt="Fabric swatches and spec sheet for bulk sourcing"
              />
              <span className="lane-tag">Bulk · Request quote</span>
              <h3>Request a bulk quote</h3>
              <p>
                Configure fabric, GSM, colours, sizes, private label &amp; MOQ.
                One structured RFQ, a formal quote back in 48h.
              </p>
              <Link className="btn btn-quote" href="/quote">
                <QuoteDocIcon className="ico" />
                Start an RFQ
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* H4 Categories */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="prod-head">
            <div>
              <span className="eyebrow">Shop by category</span>
              <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", marginTop: 10 }}>
                Built for every wearer
              </h2>
            </div>
            <Link className="btn btn-ghost" href="/catalogue">
              All products →
            </Link>
          </Reveal>
          <div className="cat-grid">
            {categories.map((c) => (
              <Reveal as={Link} key={c.label} className="cat" href="/catalogue">
                <img src={`/assets/home/${c.img}`} alt={c.alt} />
                <div className="cap">
                  <b>{c.label}</b>
                  <ArrowRight />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* H5 Featured products */}
      <section
        className="section"
        style={{
          background: "var(--white)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="wrap">
          <Reveal className="prod-head">
            <div>
              <span className="eyebrow">Ready to ship</span>
              <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", marginTop: 10 }}>
                Sample the line, buy today
              </h2>
            </div>
            <Link className="btn btn-ghost" href="/catalogue">
              View all →
            </Link>
          </Reveal>
          <div className="prod-grid">
            <Reveal as="article" className="card">
              <Link href="/product" className="thumb">
                <span className="badge hybrid">Hybrid</span>
                <img src="/assets/product/tshirt-navy-v1.png" alt="Navy crew-neck T-shirt" />
              </Link>
              <div className="body">
                <span className="cat-tag">Men · T-Shirt</span>
                <h3>Heavyweight Crew Tee</h3>
                <div className="spec">100% Cotton · 220 GSM</div>
                <div className="price-zone">
                  <div>
                    <span className="price">
                      <span className="cur">$</span>18.00
                    </span>
                    <span className="from">or MOQ 500 · from $6.40</span>
                  </div>
                  <MiniBuy
                    title="Added to cart"
                    message="Heavyweight Crew Tee · $18.00"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="card">
              <Link href="/product" className="thumb">
                <span className="badge stock">In Stock</span>
                <img src="/assets/product/polo-green-v1.png" alt="Green pique polo" />
              </Link>
              <div className="body">
                <span className="cat-tag">Men · Polo</span>
                <h3>Classic Piqué Polo</h3>
                <div className="spec">Cotton Piqué · 200 GSM</div>
                <div className="price-zone">
                  <div>
                    <span className="price">
                      <span className="cur">$</span>24.00
                    </span>
                    <span className="from">In stock · ships in 3 days</span>
                  </div>
                  <MiniBuy
                    title="Added to cart"
                    message="Classic Piqué Polo · $24.00"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="card">
              <Link href="/product" className="thumb">
                <span className="badge mto">Made to Order</span>
                <img src="/assets/product/hoodie-slate-v1.png" alt="Slate pullover hoodie" />
              </Link>
              <div className="body">
                <span className="cat-tag">Unisex · Hoodie</span>
                <h3>Brushed Pullover Hoodie</h3>
                <div className="spec">Cotton/Poly · 320 GSM</div>
                <div className="price-zone">
                  <div>
                    <span className="moq">
                      <b>MOQ 300</b>
                    </span>
                    <span className="from">from $11.90 / pc</span>
                  </div>
                  <MiniQuote
                    title="Added to Quote list"
                    message="Brushed Pullover Hoodie"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="card">
              <Link href="/product" className="thumb">
                <span className="badge mto">Made to Order</span>
                <img src="/assets/product/baby-bodysuit-v1.png" alt="Baby bodysuit" />
              </Link>
              <div className="body">
                <span className="cat-tag">Baby · Bodysuit</span>
                <h3>Organic Cotton Bodysuit</h3>
                <div className="spec">GOTS Organic · 180 GSM</div>
                <div className="price-zone">
                  <div>
                    <span className="moq">
                      <b>MOQ 1,000</b>
                    </span>
                    <span className="from">Request quote for pricing</span>
                  </div>
                  <MiniQuote
                    title="Added to Quote list"
                    message="Organic Cotton Bodysuit"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* H6 Process */}
      <section className="process section">
        <div className="wrap">
          <div className="grid">
            <Reveal className="process-img">
              <ProcessFlow />
            </Reveal>
            <Reveal>
              <span className="eyebrow">Vertical integration</span>
              <h2 style={{ fontSize: "clamp(1.9rem,3.2vw,2.7rem)", marginTop: 12 }}>
                Nine steps, one roof.
              </h2>
              <p style={{ color: "var(--slate)", margin: "14px 0 26px" }}>
                From raw yarn to a container at the port, every stage happens
                inside KEYA — so quality, lead time and traceability stay in our
                hands.
              </p>
              <div className="steps">
                {[
                  ["Yarn & Spinning", "Sourced and spun to spec"],
                  ["Knitting", "300+ circular knitting machines"],
                  ["Dyeing & Finishing", "ETP-backed, colour-matched"],
                  ["Cutting & Sewing", "4,000+ sewing machines"],
                  ["QC · Packing · Export", "AQL inspection to FOB"],
                ].map(([b, s]) => (
                  <div className="step" key={b}>
                    <span className="n" />
                    <div>
                      <b>{b}</b>
                      <span>{s}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link className="btn btn-outline" style={{ marginTop: 26 }} href="/company">
                Explore our manufacturing
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Operational snapshot strip */}
      <div className="ops-strip">
        <div className="wrap">
          {[
            ["300", "+", "Knitting machines"],
            ["4,000", "+", "Sewing lines"],
            ["120", "K/day", "Capacity"],
            ["28", "–35", "Day lead time"],
            ["99.2", "%", "AQL pass rate"],
            ["14", "MW", "Captive power"],
          ].map(([v, u, l]) => (
            <div className="ops-stat" key={l}>
              <div className="ops-val">
                {v}
                <span className="ops-unit">{u}</span>
              </div>
              <div className="ops-lab">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* H7 Sustainability */}
      <section className="sustain section">
        <div className="sustain-bg">
          <img
            src="/assets/home/sustainability-v1.png"
            alt="Effluent treatment plant and green factory"
          />
        </div>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow on-dark">Sustainability &amp; compliance</span>
            <h2>Compliance our buyers can bank on.</h2>
            <p>
              Full effluent treatment, environmental stewardship and audited
              social compliance — the credentials brand-conscious buyers require,
              all in one place.
            </p>
            <Link className="btn btn-buy" href="/company">
              See our certifications
            </Link>
          </Reveal>
          <Reveal className="cert-grid">
            {certs.map(([b, s]) => (
              <div className="cert" key={b}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* H8 Clients */}
      <section className="clients section">
        <div className="wrap">
          <Reveal className="sec-head center" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Trusted by global brands</span>
            <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)" }}>
              We already make for the names you know
            </h2>
          </Reveal>
          <Reveal className="logo-wall">
            {["H&M", "ZARA", "Primark", "Decathlon", "Walmart", "NEXT", "Kiabi", "C&A", "OVS"].map(
              (n) => (
                <div className="logo-chip" key={n}>
                  {n}
                </div>
              ),
            )}
            <div className="logo-chip" style={{ color: "var(--green-700)" }}>
              + more
            </div>
          </Reveal>
          <Reveal as="p" className="logo-note">
            Brand names shown represent supply relationships; logos displayed
            subject to usage rights.
          </Reveal>
        </div>
      </section>

      {/* H9 Export map */}
      <section
        className="export section"
        style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <div className="grid">
            <Reveal>
              <span className="eyebrow">Global export capability</span>
              <h2 style={{ fontSize: "clamp(1.9rem,3.2vw,2.7rem)", marginTop: 12 }}>
                Shipping to five continents.
              </h2>
              <p style={{ color: "var(--slate)", marginTop: 14 }}>
                Export-ready documentation, incoterms and port handling — we
                deliver where your buyers are.
              </p>
              <ul className="market-list">
                {[
                  ["Europe", "EU / UK"],
                  ["United States", "Americas"],
                  ["Australia", "Oceania"],
                  ["Southeast Asia", "APAC"],
                  ["Middle East", "GCC"],
                ].map(([m, r]) => (
                  <li key={m}>
                    <span className="pin" />
                    {m} <span className="pct">{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="map-img">
              <img
                src="/assets/home/exportmap-v1.png"
                alt="World export map with market pins"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* H10 Final CTA */}
      <section className="finalcta-section">
        <div className="wrap">
          <Reveal className="finalcta">
            <div className="fc-bg">
              <img src="/assets/home/hero-v1.png" alt="" />
            </div>
            <div className="fc-glow" />
            <div className="fc-inner">
              <span className="fc-eyebrow">
                <span className="pip" />
                Start your order
              </span>
              <h2>
                From two sample pieces
                <br />
                to <em>twenty thousand</em>.
              </h2>
              <p>
                Send a tech pack, a reference photo, or a rough idea. Our
                merchandising team scopes it, prices it, and returns a formal
                quotation — one partner from yarn to FOB.
              </p>
              <div className="fc-cta">
                <Link className="btn btn-buy fc-primary" href="/quote">
                  <QuoteDocIcon className="ico" />
                  Request a Quote
                </Link>
                <Link className="btn fc-secondary" href="/catalogue">
                  Browse ready-to-ship →
                </Link>
              </div>
              <ul className="fc-trust">
                <li>
                  <ClockIcon />
                  48-hour quote response
                </li>
                <li>
                  <TruckIcon />
                  FOB · CIF · DDP incoterms
                </li>
                <li>
                  <CheckIcon />
                  MOQ from 500 pcs
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
