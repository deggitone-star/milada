import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg" style={{ paddingTop: "var(--header-h)" }}>
      <div className="text-center px-4">
        <p className="text-[8rem] font-medium text-line leading-none">404</p>
        <h1 className="mt-2 h2">Страница не найдена</h1>
        <p className="mt-4 text-ink-muted">Возможно, она была удалена или адрес введён неверно.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">На главную</Link>
          <Link href="/catalog" className="btn-outline">Каталог</Link>
        </div>
      </div>
    </div>
  );
}
