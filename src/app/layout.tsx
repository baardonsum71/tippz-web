import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tippz.app"),
  title: {
    default: "Tippz — Tips med QR-kode",
    template: "%s · Tippz",
  },
  description:
    "Tippz er Norges tipsplattform for tjenesteytere. Del QR-koden din og motta tips direkte i appen.",
  openGraph: {
    title: "Tippz",
    description: "Tips med QR-kode. Enkelt for kunder, rettferdig for deg.",
    url: "https://tippz.app",
    siteName: "Tippz",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${dmSans.variable} ${syne.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
