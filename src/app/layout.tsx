import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Mozilla_Text } from "next/font/google";

const mozillaText = Mozilla_Text({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mozilla",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Vini Arquitetos",
  description:
    "Site desenvolvido para a empresa Vini Arquitetos, especializada em arquitetura e design de interiores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${mozillaText.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
