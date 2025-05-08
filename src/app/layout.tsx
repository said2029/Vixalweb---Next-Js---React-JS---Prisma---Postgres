import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aaTypo = localFont({
  src: "../../public/fonts/aa-typo.woff",
  variable: "--font-sans",
});
const almarai = localFont({
  src: "../../public/fonts/Almarai.ttf",
  variable: "--font-mono",
});
const biocats = localFont({
  src: "../../public/fonts/BIOCATS.ttf",
  variable: "--font-biocats",
});

export const metadata: Metadata = {
  title: "VIXALWEB",
  description:"VIXALWEB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar">
      <body
        className={`${aaTypo.variable} ${almarai.variable} ${biocats.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
