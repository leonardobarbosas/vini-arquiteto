import Image from "next/image";
import HomePage from "@/components/HomePage/HomePage";
import AboutPage from "@/components/AboutPage/AboutPage";
import ServicePage from "@/components/ServicePage/ServicePage";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomePage />
      <AboutPage />
      <ServicePage />
    </main>
  );
}
