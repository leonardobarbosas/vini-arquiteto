"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import casa1 from "@/public/img/casa1.jpeg";
import casa2 from "@/public/img/casa2.jpeg";
import casa3 from "@/public/img/casa3.jpeg";

const projects = [
  {
    tag: "Residencial · Alto Padrão",
    name: "Casa Alphaville",
    meta: "Barueri, SP · 480m² · 2024",
    mainImg: casa1,
  },
  {
    tag: "Comercial · Corporativo",
    name: "Edifício Morumbi",
    meta: "São Paulo, SP · 1.200m² · 2023",
    mainImg: casa2,
  },
  {
    tag: "Residencial · Sustentável",
    name: "Vila Verde",
    meta: "Campinas, SP · 320m² · 2024",
    mainImg: casa3,
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState(0);
  const others = projects.map((_, i) => i).filter((i) => i !== active);

  return (
    <section className="h-screen pt-10 flex flex-col justify-between">
      <div className="pl-20 pr-20">
        <h3 className="text-[#D8D8C7] font-semibold">PORTFÓLIO</h3>
        <div className="flex items-end justify-between w-full">
          <h1 className="text-8xl w-1/4 pt-10">Obras selecionadas.</h1>
          <Link
            href="/projetos"
            className="text-[#D8D8C7] border-b border-[#D8D8C7] pb-1"
          >
            TODOS OS PROJETOS ➚
          </Link>
        </div>
      </div>

      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "58% 1fr",
          gridTemplateRows: "25vh 40vh",
        }}
      >
        <div className="relative row-span-2 overflow-hidden group shadow-xl">
          <Image
            key={active}
            src={projects[active].mainImg}
            alt={projects[active].name}
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-[#1A1916] w-full">
            <p className="text-[10px] tracking-widest uppercase text-[#D8D8C7] mb-1">
              {projects[active].tag}
            </p>
            <h2 className="text-[22px] font-normal mb-1">
              {projects[active].name}
            </h2>
            <p className="text-[11px] text-[#515151]">
              {projects[active].meta}
            </p>
          </div>
        </div>

        {others.map((index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className="relative overflow-hidden group shadow-xl"
          >
            <Image
              src={projects[index].mainImg}
              alt={projects[index].name}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
