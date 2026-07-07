"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MiniBuy } from "@/components/MiniAdd";
import { useStore } from "@/lib/store";
import "./cart.css";

const SHIP = 9.5;
const TAXR = 0.08;

const money = (n: number) =>
  "$" +
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

interface LineItem {
  id: string;
  img: string;
  title: string;
  colour: string;
  size: string;
  sku: string;
  unit: number;
  qty: number;
  removed: boolean;
}

const INITIAL_ITEMS: LineItem[] = [
  {
    id: "tee",
    img: "/assets/product/tshirt-navy-v1.png",
    title: "Heavyweight Crew Tee",
    colour: "Navy",
    size: "L",
    sku: "SKU KKC-TEE-220",
    unit: 18.0,
    qty: 1,
    removed: false,
  },
  {
    id: "polo",
    img: "/assets/product/polo-green-v1.png",
    title: "Piqué Polo Shirt",
    colour: "Sage",
    size: "M",
    sku: "SKU KKC-POL-210",
    unit: 24.0,
    qty: 1,
    removed: false,
  },
];

const CROSS_SELL = [
  { img: "/assets/product/hoodie-slate-v1.png", title: "Brushed Pullover Hoodie", price: "$34.00" },
  { img: "/assets/product/henley-ecru-v1.png", title: "Long-Sleeve Henley", price: "$26.00" },
  { img: "/assets/product/sweatshirt-navy-v1.png", title: "Crewneck Sweatshirt", price: "$30.00" },
  { img: "/assets/product/women-rib-v1.png", title: "Ribbed Fitted Tee", price: "$20.00" },
];

export default function CartPage() {
  const { pushToast } = useStore();
  const [items, setItems] = useState<LineItem[]>(INITIAL_ITEMS);

  const setQty = (id: string, next: number) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, next) } : it)),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, removed: true } : it)));
    pushToast("buy", "Removed from cart", "Item saved — undo in account");
  };

  const { subtotal, qtyCount, tax, total } = useMemo(() => {
    let sub = 0;
    let qty = 0;
    for (const it of items) {
      if (it.removed) continue;
      sub += it.unit * it.qty;
      qty += it.qty;
    }
    const t = sub * TAXR;
    return { subtotal: sub, qtyCount: qty, tax: t, total: sub + SHIP + t };
  }, [items]);

  return (
    <div className="pg-cart">
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Home</Link> / <span>Shopping cart</span>
        </div>
        <div className="page-h">
          <h1>Your cart</h1>
          <div className="sub">2 retail items · ready to ship from stock</div>
        </div>

        {/* CT4 cart⇄quote separation banner */}
        <div className="lanebar">
          <svg viewBox="0 0 24 24">
            <path d="M6 6h15l-1.5 9h-12z" />
            <circle cx="9" cy="20" r="1.4" />
            <circle cx="18" cy="20" r="1.4" />
            <path d="M6 6L5 3H2" />
          </svg>
          <div>
            <b>This is your retail cart</b>
            <p>Buy-now items ship at listed prices. Bulk &amp; custom orders live in your separate Quote list.</p>
          </div>
          <Link href="/quote">View Quote list (3) →</Link>
        </div>

        <div className="cartwrap">
          <div>
            <div className="citems">
              <div className="ch">
                <span>Product</span>
                <span>Total</span>
              </div>
              {items.map((it) => (
                <div
                  className="cline"
                  key={it.id}
                  style={it.removed ? { opacity: 0.4 } : undefined}
                >
                  <img src={it.img} alt="" />
                  <div>
                    <div className="ttl">{it.title}</div>
                    <span className="badge stock">● In stock</span>
                    <div className="meta">
                      <span>Colour: {it.colour}</span>
                      <span>Size: {it.size}</span>
                      <span className="tnum">{it.sku}</span>
                    </div>
                    <div className="stepper2">
                      <button type="button" onClick={() => setQty(it.id, it.qty - 1)}>
                        −
                      </button>
                      <input
                        value={it.qty}
                        className="tnum"
                        onChange={(e) => {
                          const v = parseInt(e.target.value || "1", 10);
                          setQty(it.id, Number.isNaN(v) ? 1 : v);
                        }}
                      />
                      <button type="button" onClick={() => setQty(it.id, it.qty + 1)}>
                        +
                      </button>
                    </div>
                    <div className="acts">
                      <button type="button" className="rm" onClick={() => removeItem(it.id)}>
                        <svg viewBox="0 0 24 24">
                          <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
                        </svg>
                        Remove
                      </button>
                      <button type="button">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />
                        </svg>
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="price tnum">{money(it.unit * it.qty)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "16px" }}>
              <Link className="btn btn-outline" href="/catalogue">
                ← Continue shopping
              </Link>
            </div>
          </div>

          {/* CT2 summary */}
          <aside className="summary">
            <h3>Order summary</h3>
            <div className="srow">
              <span>
                Subtotal ({qtyCount} item{qtyCount !== 1 ? "s" : ""})
              </span>
              <b className="tnum">{money(subtotal)}</b>
            </div>
            <div className="srow">
              <span>Estimated shipping</span>
              <b className="tnum">{money(SHIP)}</b>
            </div>
            <div className="srow">
              <span>Estimated tax</span>
              <b className="tnum">{money(tax)}</b>
            </div>
            <div className="promo">
              <input placeholder="Promo code" />
              <button type="button">Apply</button>
            </div>
            <div className="srow total">
              <span>Estimated total</span>
              <b className="tnum">{money(total)}</b>
            </div>
            <Link
              className="btn btn-buy"
              href="/checkout"
              style={{ width: "100%", marginTop: "16px" }}
            >
              Proceed to checkout
            </Link>
            <div className="trustrow">
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                </svg>
                Secure payment
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Verified supplier
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M3 13l3-8h10l3 8" />
                </svg>
                Global shipping
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* CT3 cross-sell */}
      <div className="wrap">
        <section className="xsell">
          <h2>Frequently bought together</h2>
          <div className="xgrid">
            {CROSS_SELL.map((p) => (
              <div className="pcard" key={p.title}>
                <div className="pimg">
                  <img src={p.img} alt="" />
                </div>
                <div className="pb">
                  <h4>{p.title}</h4>
                  <div className="pp tnum">{p.price}</div>
                  <MiniBuy
                    title="Added to cart"
                    message="Retail item · ships from stock"
                    label="Add to cart"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
