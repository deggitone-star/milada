"use client";

import { useSearchParams } from "next/navigation";

export default function ContactSuccess() {
  const sent = useSearchParams().get("sent");
  if (sent !== "1") return null;

  return (
    <div className="mb-6 rounded-soft border border-mint bg-mint/10 px-4 py-3 text-sm text-ink">
      Заявка отправлена. Мы свяжемся с вами в ближайшее рабочее время.
    </div>
  );
}
