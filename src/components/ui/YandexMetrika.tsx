// src/components/ui/YandexMetrika.tsx
// Компонент для Яндекс.Метрики — вставляется в <head>
// В production добавьте реальный ID счётчика в .env

export default function YandexMetrika() {
  const id = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "110120421";
  if (!id) return null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(${id},'init',{
  ssr:true,
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://mc.yandex.ru/watch/${id}`}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
          width="1"
          height="1"
        />
      </noscript>
    </>
  );
}
