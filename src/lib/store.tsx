"use client";

/**
 * Client-side store for the two-lane BUY / QUOTE system.
 * Holds the header cart + quote counters and a toast queue, mirroring the
 * interactivity in the original design artifact (add-to-cart / add-to-quote
 * fire a toast and bump the matching header badge).
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ToastKind = "buy" | "quote" | "info";

export interface Toast {
  id: number;
  kind: ToastKind;
  title: string;
  message: string;
}

interface StoreValue {
  cartCount: number;
  quoteCount: number;
  toasts: Toast[];
  addToCart: (title?: string, message?: string, qty?: number) => void;
  addToQuote: (title?: string, message?: string) => void;
  pushToast: (kind: ToastKind, title: string, message: string) => void;
  dismissToast: (id: number) => void;
}

const StoreContext = createContext<StoreValue | null>(null);

let toastSeq = 0;

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(2);
  const [quoteCount, setQuoteCount] = useState(3);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const pushToast = useCallback(
    (kind: ToastKind, title: string, message: string) => {
      const id = ++toastSeq;
      setToasts((t) => [...t, { id, kind, title, message }]);
      setTimeout(() => dismissToast(id), 3600);
    },
    [dismissToast],
  );

  const addToCart = useCallback(
    (title = "Added to cart", message = "Retail item · ships from stock", qty = 1) => {
      setCartCount((c) => c + qty);
      pushToast("buy", title, message);
    },
    [pushToast],
  );

  const addToQuote = useCallback(
    (title = "Added to Quote list", message = "We'll price it in your RFQ") => {
      setQuoteCount((c) => c + 1);
      pushToast("quote", title, message);
    },
    [pushToast],
  );

  const value = useMemo<StoreValue>(
    () => ({
      cartCount,
      quoteCount,
      toasts,
      addToCart,
      addToQuote,
      pushToast,
      dismissToast,
    }),
    [cartCount, quoteCount, toasts, addToCart, addToQuote, pushToast, dismissToast],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}
