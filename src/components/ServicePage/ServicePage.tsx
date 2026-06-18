"use client";
import {
  Compass,
  Gem,
  LayoutGrid,
  BadgeCheck,
  Building2,
  Scale,
} from "lucide-react";

export default function ServicePage() {
  const items = [
    {
      icon: Compass,
      title: "Rigor da Técnica Executiva",
      description:
        "Nossa autoridade vem do chão de obra. Projetamos com a confiança de quem já administrou processos reais e complexos.",
    },
    {
      icon: Gem,
      title: "Exclusividade do Alto Padrão",
      description:
        "Tratamos cada cliente como a figura central de uma narrativa particular. O luxo é o respeito absoluto pelos desejos individuais.",
    },
    {
      icon: Scale,
      title: "Transparência na Gestão",
      description:
        "Acreditamos que boa arquitetura exige uma relação baseada na verdade. Não há espaço para omissões em prazos ou orçamentos.",
    },
    {
      icon: BadgeCheck,
      title: "Precisão nos Processos",
      description:
        "Cada etapa é acompanhada com rigor técnico e atenção aos mínimos detalhes da execução.",
    },
    {
      icon: LayoutGrid,
      title: "Arquitetura Estratégica",
      description:
        "Desenvolvemos projetos pensados para unir estética, funcionalidade e valorização patrimonial.",
    },
    {
      icon: Building2,
      title: "Gestão de Alto Nível",
      description:
        "Coordenamos fornecedores, cronogramas e execução com máxima eficiência e organização.",
    },
  ];

  return (
    <section
      className="h-screen pt-10 flex pl-20 pr-20 bg-[#141412] w-full flex-col gap-25"
      id="servicos-section"
    >
      <div>
        <h3 className="text-[#D8D8C7] font-semibold">O QUE FAZEMOS</h3>
        <h1 className="text-8xl w-1/4 pt-10">Nossos serviços.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-[#514835] gap-px">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#141412] p-10 transition  hover:bg-[#1E1D1A] group"
            >
              <Icon size={40} color="#514835" strokeWidth={1.5} />
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl text-[#FFF] font-semibold">
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
