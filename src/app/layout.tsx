import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Certificados Kyndo | Emissão de Certificado Digital",
  description:
    "Emissão e renovação de certificado digital com atendimento especializado, segurança e agilidade.",
  metadataBase: new URL("https://certificadoskyndo.com.br"),
  openGraph: {
    title: "Certificados Kyndo",
    description:
      "Certificação digital para pessoas e empresas com suporte humano e processo seguro.",
    url: "https://certificadoskyndo.com.br",
    siteName: "Certificados Kyndo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificados Kyndo",
    description:
      "Certificação digital com atendimento consultivo e emissão rápida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
