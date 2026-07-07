import Link from "next/link";
import { LoopMarkNavy } from "./icons";

const productLinks = [
  "Men's Wear",
  "Women's Wear",
  "Kids Wear",
  "Babywear",
  "Ready to Ship",
];
const companyLinks = [
  "About KEYA",
  "Manufacturing",
  "Sustainability",
  "Infrastructure",
  "Our Partners",
];

export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="mark">
              <LoopMarkNavy className="loop" style={{ width: 24, height: 24 }} />
              KEYA
            </div>
            <p>
              Vertically integrated knitwear manufacturing from Bangladesh — from
              two pieces to twenty thousand.
            </p>
            <div className="addr">
              Keya Knit Composite, a sister concern of Keya Group
              <br />
              Gazaria, Munshiganj, Bangladesh
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              {productLinks.map((l) => (
                <li key={l}>
                  <Link href="/catalogue">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link href="/company">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get started</h4>
            <ul>
              <li><Link href="/quote">Request a Quote</Link></li>
              <li><Link href="/cart">Shopping Cart</Link></li>
              <li><Link href="/account">My Account</Link></li>
              <li><Link href="/contact">Contact Sales</Link></li>
              <li><Link href="/admin">Admin (internal)</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>
            © 2026 Keya Knit Composite. All rights reserved. ·{" "}
            <Link href="/states" style={{ color: "#7f909a", textDecoration: "underline" }}>
              UI states &amp; components
            </Link>
          </div>
          <div className="foot-certs">
            <span>OEKO-TEX</span>
            <span>GOTS</span>
            <span>WRAP</span>
            <span>ISO 9001</span>
            <span>amfori BSCI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
