import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linktree - Vellaro",
  description: "A melhor pizzaria de Campinas - SP",
  icons: {
    icon: "/img/vellarofavicon.png", // favicon dentro de public/img
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
