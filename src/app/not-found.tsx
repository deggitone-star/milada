// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-brand-50"
      style={{ paddingTop: "var(--header-h)" }}
    >
      <div className="text-center px-4">
        <p className="font-display text-[12rem] font-light text-brand-200 leading-none">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-light text-brand-950">
          Страница не найдена
        </h1>
        <p className="mt-4 text-brand-500">
          Возможно, она была удалена или вы перешли по неверной ссылке.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            На главную
          </Link>
          <Link href="/catalog" className="btn-outline">
            Каталог фасадов
          </Link>
        </div>
      </div>
    </div>
  );
}
