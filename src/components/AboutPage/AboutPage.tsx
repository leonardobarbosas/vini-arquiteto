"use client";

export default function AboutPage() {
  return (
    <section
      className="h-screen flex pl-20 justify-around pt-10"
      id="sobre-section"
    >
      <div className="flex flex-col w-[40%] h-full  justify-evenly">
        <h3 className="text-[#D8D8C7] font-semibold">SOBRE NÓS</h3>
        <h1 className="text-8xl tracking-tight leading-none">
          Arte que se torna <span className="text-[#4D4B43]">espaço</span>.
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-[#4D4B43] font-medium">
            A trajetória da Vini Arquitetos é fundamentada na união entre o
            rigor e a arte. Nossa jornada profissional iniciou com atuação
            direta na construção civil - essa vivência prática nos deu domínio
            real sobre a administração e execução de obras no campo.
          </p>
          <p className="text-[#4D4B43] font-medium">
            A alma da marca reside na paixao pelo desenho e pelas artes visuais.
            Enxergamos na arquitetura a oportunidade de projetar capacidade
            criativa em escala habitavel - o olhar artistico traz uma atencao
            minuciosa que e rara no setor.
          </p>
        </div>
        <div className="flex justify-between border-t-2 border-[#4D4B43] pt-15">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl">12+</h2>
            <p className="font-extralight">ANOS DE EXPERIÊNCIA</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl">80+</h2>
            <p className="font-extralight">PROJETOS ENTREGUES</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl">100%</h2>
            <p className="font-extralight">SATISFAÇÃO</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full p-10">
        <div
          className="grid h-full border border-[#333] text-[#D8D8C7] text-xs font-semibold tracking-widest"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            background: "radial-gradient(circle, #51483510, #1A191620)",
          }}
        >
          <div
            className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300 cursor-pointer"
            style={{ gridRow: "1 / 3" }}
          >
            SALA DE ESTAR
          </div>

          <div
            className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300"
            style={{ gridColumn: "2 / 4" }}
          >
            COZINHA
          </div>

          <div className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300">
            DISPENSA
          </div>

          <div
            className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300"
            style={{ gridRow: "2 / 4" }}
          >
            SUÍTE
          </div>

          <div className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300">
            QUARTO 01
          </div>

          <div className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300">
            QUARTO 02
          </div>

          <div className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300">
            BANHEIRO
          </div>

          <div className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300">
            LAVANDERIA
          </div>

          <div className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300">
            VARANDA
          </div>

          <div
            className="border border-[#514835] flex items-center justify-center text-[#D8D8C7] hover:bg-[#74684f] transition-colors duration-300"
            style={{ gridColumn: "1 / 4" }}
          >
            GARAGEM
          </div>
        </div>
      </div>
    </section>
  );
}
