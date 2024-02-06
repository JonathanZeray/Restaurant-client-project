import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pissamai Thai Food",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 bg-[#F28C28] flex items-center justify-between sm:justify-around px-2 mb-6 pb-2 pt-3 text-lg sm:text-xl header-font">
          <Link
            href="/"
            className="flex flex-col items-center leading-5 text-xl sm:text-4xl font-extrabold header-font"
          >
            PISSAMAI <span className="text-lg sm:text-xl">THAI FOOD</span>
          </Link>
          <div className="grid grid-cols-2 gap-y-2 text-sm sm:text-lg sm:flex sm:items-center sm:gap-4">
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                key={page._id}
                className="hover:underline w-fit"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
