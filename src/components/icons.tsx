/**
 * Shared inline SVG icons ported from the design artifact. Stroke/fill styling
 * is driven by the surrounding CSS (currentColor), so these stay presentational.
 */
import type { ReactElement, SVGProps } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export const SearchIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4-4" />
  </svg>
);

export const CartIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
    <path d="M6 6L5 3H2" />
  </svg>
);

export const QuoteIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path d="M13 3v6h6" />
    <path d="M12 12v5M9.5 14.5h5" />
  </svg>
);

export const QuoteDocIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M13 3v6h6M12 12v5M9.5 14.5h5" />
  </svg>
);

export const CartMiniIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1.2" />
    <circle cx="18" cy="20" r="1.2" />
  </svg>
);

export const QuoteMiniIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M12 12v5M9.5 14.5h5" />
  </svg>
);

export const BurgerIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CurrencyIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 1v22M5 5h9a3 3 0 010 6H7a3 3 0 000 6h10" />
  </svg>
);

export const ArrowRight: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const ClockIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const TruckIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M3 13l2-6h14l2 6M5 13h14v5H5zM8 18v2M16 18v2" />
  </svg>
);

export const LoopMark: Icon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="#0C2436" />
    <path
      d="M10 22V10h6a5 5 0 010 10h-4l6 6"
      stroke="#1E9E5C"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LoopMarkNavy: Icon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="#123A54" />
    <path
      d="M10 22V10h6a5 5 0 010 10h-4l6 6"
      stroke="#1E9E5C"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
