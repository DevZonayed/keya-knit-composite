"use client";

import { useStore } from "@/lib/store";
import { CheckIcon, QuoteMiniIcon } from "./icons";

export default function ToastTray() {
  const { toasts } = useStore();
  return (
    <div className="toast-tray" id="toastTray">
      {toasts.map((t) => (
        <div key={t.id} className={`toast${t.kind !== "buy" ? ` ${t.kind}` : ""}`}>
          <div className="tico">
            {t.kind === "quote" ? <QuoteMiniIcon /> : <CheckIcon />}
          </div>
          <div>
            <b>{t.title}</b>
            <br />
            <span>{t.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
