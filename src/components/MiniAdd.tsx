"use client";

import { useStore } from "@/lib/store";
import { CartMiniIcon, QuoteMiniIcon } from "./icons";

export function MiniBuy({
  title,
  message,
  label = "Add to cart",
}: {
  title: string;
  message: string;
  label?: string;
}) {
  const { addToCart } = useStore();
  return (
    <button
      type="button"
      className="mini-btn mini-buy"
      title={label}
      aria-label={label}
      onClick={() => addToCart(title, message)}
    >
      <CartMiniIcon />
    </button>
  );
}

export function MiniQuote({
  title,
  message,
  label = "Add to quote",
}: {
  title: string;
  message: string;
  label?: string;
}) {
  const { addToQuote } = useStore();
  return (
    <button
      type="button"
      className="mini-btn mini-quote"
      title={label}
      aria-label={label}
      onClick={() => addToQuote(title, message)}
    >
      <QuoteMiniIcon />
    </button>
  );
}
