import Image from "next/image";
import Logo from "@/public/img/logo.png";

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between pl-20 pr-20">
      <Image src={Logo} alt="Logo" height={90} priority></Image>
      <ul className="flex justify-around w-1/3 text-[#D8D8C7] font-semibold">
        <li>
          <a href="/#home-section">HOME</a>
        </li>
        <li>
          <a href="/#sobre-section">SOBRE</a>
        </li>
        <li>
          <a href="/#servicos-section">SERVIÇOS</a>
        </li>
        <li>
          <a href="/contato">CONTATO</a>
        </li>
      </ul>
    </header>
  );
}
