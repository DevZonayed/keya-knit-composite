/**
 * Vertical "nine steps, one roof" manufacturing timeline.
 * Pure CSS + inline SVG (crisp at any DPR) — replaces the old raster PNG.
 * Styling lives in globals.css under `.proc-flow`.
 */
import type { ReactElement, SVGProps } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

const YarnIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M9.5 3h5l1.4 15.2a2 2 0 01-2 2.2H10a2 2 0 01-2-2.2L9.5 3z" />
    <path d="M8.7 8.2h6.6M8.4 13.4h7.2" />
    <path d="M10.2 3.4l4 5.2M14 3.4l-3.6 5.2" />
  </svg>
);

const SpinningIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 2v20" />
    <path d="M9 5.5l3-1.8 3 1.8M9 18.5l3 1.8 3-1.8" />
    <path d="M9.5 9h5l-5 6h5" />
  </svg>
);

const KnittingIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5 8c0 3 2 4.5 2 8M5 8c2 .2 3 2 3 4M9.5 8c0 3 2 4.5 2 8M9.5 8c2 .2 3 2 3 4M14 8c0 3 2 4.5 2 8M14 8c2 .2 3 2 3 4" />
  </svg>
);

const DyeingIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 3s6 6.4 6 11a6 6 0 01-12 0c0-4.6 6-11 6-11z" />
  </svg>
);

const CuttingIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle cx="6" cy="6.5" r="2.3" />
    <circle cx="6" cy="17.5" r="2.3" />
    <path d="M8 7.7L20 17M8 16.3L20 7" />
  </svg>
);

const SewingIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5.5 19L16 8.5" />
    <circle cx="16.8" cy="7.7" r="1.2" />
    <path d="M17.8 6.7l2.4-2.4" />
    <path d="M5.5 19c-1.6.5-2.2.4-2.1-1.3.1-1.6 1.7-2 2.4-.9" />
  </svg>
);

const FinishingIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M3 16h12.5a4 4 0 004-4c0-3-3-4.2-6-4.2H8L3 16z" />
    <path d="M3 19h12.5" />
    <path d="M19.5 3.5v3M18 5h3" />
  </svg>
);

const QCIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M19.5 19.5L15 15" />
    <path d="M8 10.5l2 2 3-3.4" />
  </svg>
);

const PackingIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M4 7.5l8-4 8 4v9l-8 4-8-4v-9z" />
    <path d="M4 7.5l8 4 8-4M12 11.5v6.5" />
    <path d="M14 20.5h6M17.5 18l2.5 2.5-2.5 2.5" />
  </svg>
);

const STEPS: { label: string; Icon: Icon }[] = [
  { label: "Yarn", Icon: YarnIcon },
  { label: "Spinning", Icon: SpinningIcon },
  { label: "Knitting", Icon: KnittingIcon },
  { label: "Dyeing", Icon: DyeingIcon },
  { label: "Cutting", Icon: CuttingIcon },
  { label: "Sewing", Icon: SewingIcon },
  { label: "Finishing", Icon: FinishingIcon },
  { label: "QC", Icon: QCIcon },
  { label: "Packing & Export", Icon: PackingIcon },
];

export function ProcessFlow() {
  return (
    <div className="proc-flow" role="list" aria-label="Nine-step in-house manufacturing process">
      {STEPS.map(({ label, Icon }) => (
        <div className="prow" role="listitem" key={label}>
          <span className="node">
            <span className="dot" />
          </span>
          <span className="ic">
            <Icon />
          </span>
          <span className="plabel">{label}</span>
        </div>
      ))}
    </div>
  );
}
