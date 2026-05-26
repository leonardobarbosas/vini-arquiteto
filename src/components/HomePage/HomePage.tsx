"use client";

export default function HomePage() {
  return (
    <section className="h-[90vh] w-full pl-20 pr-20 flex flex-col justify-center gap-8">
      <p className="text-[#D8D8C7] font-semibold pl-2">
        ARQUITETURA AUTORAL • SÃO PAULO • 2026
      </p>
      <h1 className="text-8xl w-1/2">Projetos onde a vida encontra lugar.</h1>
      <div className="flex justify-between">
        <p className="text-[#D8D8C7] w-1/4 leading-7 font-semibold pl-2">
          Soluções completas em arquitetura e construção sob medida. Arte e
          técnica em cada traço - projetos únicos como galeria habitável.
        </p>
        <button className="border-2 border-[#D8D8C7] text-[#D8D8C7] font-semibold h-15 w-40">
          VER PROJETOS
        </button>
      </div>
    </section>
  );
}
