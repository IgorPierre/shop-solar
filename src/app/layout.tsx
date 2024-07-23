import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import { SearchProvider } from "./Context/SearchContext";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Shop Solar",
  description: "Seus parceiros em energia solar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-white text-gray">
      <body className={poppins.className}>
        <SearchProvider>
          <Header />
          <main className="h-full">
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
