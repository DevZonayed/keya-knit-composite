"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import "./contact.css";

const INQUIRY_TYPES = [
  "Bulk sourcing",
  "Product / retail order",
  "Partnership",
  "General",
];

// QR block: `true` = filled cell, `false` = transparent (mirrors design markup).
const QR_CELLS = [
  true, true, false, true, true,
  false, true, true, false, true,
  true, false, true, false, true,
  true, true, false, true, true,
  false, true, true, true, false,
];

export default function ContactPage() {
  const { pushToast } = useStore();
  const [inquiry, setInquiry] = useState(0);

  function handleSend() {
    pushToast(
      "info",
      "Message sent",
      "We'll reply within one business day.",
    );
  }

  return (
    <div className="pg-contact">
      <section className="chero">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s talk about your next order.</h1>
          <p>
            Whether you&apos;re sourcing a bulk programme or have a question
            about a retail purchase, our team is ready. For fastest turnaround on
            pricing, start a structured Request a Quote.
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="cwrap">
          {/* CN1 form */}
          <div className="formcard">
            <h2>Send us a message</h2>
            <p className="lede">We typically reply within one business day.</p>
            <div className="field">
              <label>What&apos;s this about?</label>
              <div className="inqtype">
                {INQUIRY_TYPES.map((label, i) => (
                  <span
                    key={label}
                    className={i === inquiry ? "on" : undefined}
                    onClick={() => setInquiry(i)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid2">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" className="input" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  className="input"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div className="grid2">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  placeholder="you@company.com"
                />
              </div>
              <div className="field">
                <label htmlFor="country">Country</label>
                <input id="country" className="input" placeholder="Country" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="input"
                placeholder="Tell us about products, quantities, timelines…"
              />
            </div>
            <button
              className="btn btn-buy"
              style={{ width: "100%" }}
              onClick={handleSend}
            >
              Send message
            </button>
            <p
              style={{
                fontSize: ".78rem",
                color: "var(--slate)",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              Need pricing? A{" "}
              <Link
                href="/quote"
                style={{ color: "var(--green-700)", fontWeight: 600 }}
              >
                structured quote request
              </Link>{" "}
              gets you a formal answer in 48 hours.
            </p>
          </div>

          {/* CN2 info + map */}
          <div className="info">
            <div className="icard">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <h4>Factory &amp; head office</h4>
                <p>
                  Keya Knit Composite Ltd.
                  <br />
                  Gazaria, Munshiganj, Bangladesh
                </p>
              </div>
            </div>
            <div className="icard">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 5h16v14H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:sales@keyaknit.com">sales@keyaknit.com</a>
                <br />
                <a href="mailto:info@keyaknit.com">info@keyaknit.com</a>
              </div>
            </div>
            <div className="icard">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 5c0 9 6 15 15 15v-4l-4-2-2 2a12 12 0 01-5-5l2-2-2-4H4z" />
                </svg>
              </span>
              <div>
                <h4>Phone / WhatsApp</h4>
                <a href="#">+880 1XXX-XXXXXX</a>
                <p>Sun–Thu · 9:00–18:00 (GMT+6)</p>
              </div>
            </div>
            <div className="mapcard">
              <img
                src="/assets/contact/map-v1.png"
                alt="Map showing factory location near Munshiganj, Bangladesh"
              />
              <div className="chip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
                </svg>
                Gazaria, Munshiganj
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CN3 RFQ CTA + connect */}
      <div className="wrap">
        <section className="rfqcta">
          <div>
            <h2>Skip the back-and-forth — request a quote.</h2>
            <p>
              Configure fabric, GSM, colours, sizes and customisation for your
              whole basket in one structured RFQ. No account required to start.
            </p>
            <div className="cta">
              <Link className="btn btn-buy" href="/quote">
                Request a Quote
              </Link>
              <Link className="btn btn-ghost-l" href="/catalogue">
                Browse products
              </Link>
            </div>
          </div>
          <div className="side">
            <div className="qr">
              {QR_CELLS.map((filled, i) => (
                <i
                  key={i}
                  style={filled ? undefined : { background: "transparent" }}
                />
              ))}
            </div>
            <span>Scan to chat on WhatsApp</span>
          </div>
        </section>
      </div>
    </div>
  );
}
