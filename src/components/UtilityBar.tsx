import Link from "next/link";
import { CurrencyIcon } from "./icons";

export default function UtilityBar() {
  return (
    <div className="utilbar">
      <div className="wrap">
        <div className="u-left">
          Global knitwear manufacturing since 2003 · Gazaria, Bangladesh
        </div>
        <div className="u-right">
          <a className="util-sel" href="#">
            🌐 EN
          </a>
          <span className="util-sel">
            <CurrencyIcon />
            USD $
          </span>
          <Link href="/contact">Talk to sales</Link>
        </div>
      </div>
    </div>
  );
}
