"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up number that animates when scrolled into view, reproducing the
 * homepage/company trust-bar counters. `to` is the target; `dec` fixes decimal
 * places; `k` groups thousands with a comma (e.g. 5,000).
 */
export default function Counter({
  to,
  dec = 0,
  k = false,
}: {
  to: number;
  dec?: number;
  k?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(dec ? (0).toFixed(dec) : "0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const duration = 1100;

    const format = (val: number) =>
      k
        ? Math.round(val).toLocaleString("en-US")
        : dec
          ? val.toFixed(dec)
          : Math.round(val).toLocaleString("en-US");

    const run = () => {
      let start: number | null = null;
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(format(to * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            run();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, dec, k]);

  return (
    <span ref={ref} className="counter tnum">
      {display}
    </span>
  );
}
