import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { landingContent } from "@/features/landing/content";
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
  title: {
    default: "Certificados Kyndo | Certificado Digital em Goiânia e Todo Brasil",
    template: "%s | Certificados Kyndo",
  },
  description:
    "Emissão e renovação de certificado digital Soluti para e-CPF, e-CNPJ e certificado em nuvem. Atendimento em Goiânia-GO e em todo o Brasil.",
  metadataBase: new URL("https://certificadoskyndo.com.br"),
  keywords: [
    landingContent.seo.primaryKeyword,
    ...landingContent.seo.secondaryKeywords,
    "certificado digital em goias",
    "certificado digital brasil",
  ],
  alternates: {
    canonical: "/",
  },
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Certificados Kyndo | Certificado Digital em Goiânia e Todo Brasil",
    description:
      "Certificação digital Soluti para pessoas e empresas, com suporte humano e processo seguro em Goiânia-GO e atendimento nacional.",
    url: "https://certificadoskyndo.com.br",
    siteName: "Certificados Kyndo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificados Kyndo | Certificado Digital Soluti",
    description:
      "Emissão e renovação de certificado digital com atendimento em Goiânia e cobertura nacional.",
  },
  other: {
    "geo.region": "BR-GO",
    "geo.placename": "Goiânia",
    "geo.position": "-16.6869;-49.2648",
    ICBM: "-16.6869, -49.2648",
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
