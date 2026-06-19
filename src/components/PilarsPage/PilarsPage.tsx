"use client";

export default function PilarsPage() {
  const items = [
    {
      title: "Expressão da Arte Autoral",
      description:
        "Cada projeto é encarado como uma peça única de galeria. Fugimos de fórmulas prontas para entregar arquitetura com alma própria.",
    },
    {
      title: "Rigor da Técnica Executiva",
      description:
        "Nossa autoridade vem do chão de obra. Projetamos com a confiança de quem já administrou processos reais e complexos..",
    },
    {
      title: "Exclusividade do Alto Padrão",
      description:
        "Tratamos cada cliente como a figura central de uma narrativa particular. O luxo e o respeito absoluto pelos desejos individuais.",
    },
    {
      title: "Transparência na Gestão",
      description:
        "Acreditamos que boa arquitetura exige uma relação baseada na verdade. Não há espaço para omissões em prazos ou orçamentos.",
    },
  ];

  return (
    <section className="h-screen pt-10 flex pl-20 pr-20 w-full flex-col gap-25 bg-[#F0EBE0]">
      <div>
        <h3 className="text-black font-semibold">O QUE FAZEMOS</h3>
        <h1 className="text-black text-8xl w-1/4 pt-10">Nossos serviços.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 w-full bg-black gap-px border-t-[1] border-black">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#F0EBE0] p-10 transition hover:bg-[#d1cfc6] group"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl text-black font-semibold">
                  {item.title}
                </h2>
                <p className="text-[#7C7C7C]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
