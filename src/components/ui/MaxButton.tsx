// src/components/ui/MaxButton.tsx
// Кнопка "Написать в MAX" — Client Component из-за onClick fallback
"use client";

import { messengers } from "@/lib/config";

interface Props {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export default function MaxButton({ className, showIcon = true, children }: Props) {
  // Пока канал MAX не подключён (messengers.max пуст) — кнопку не показываем,
  // чтобы не плодить мёртвые ссылки. Появится автоматически, как впишут ссылку в config.
  if (!messengers.max) return null;

  return (
    <a
      href={messengers.max}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {showIcon && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {children || "Написать в MAX"}
    </a>
  );
}
