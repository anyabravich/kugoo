import { ReactNode } from "react";
import { Jost } from "next/font/google";
import { Metadata } from "next";

import Header from "@/components/Header";

import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Kugoo",
  icons: {
    icon: "/favicon.svg",
  },
};

const jost = Jost({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={jost.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
