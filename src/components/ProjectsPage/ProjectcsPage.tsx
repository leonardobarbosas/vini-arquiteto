"use client";

import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="h-screen pt-10 pl-20 pr-20">
      <div>
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
    </section>
  );
}
