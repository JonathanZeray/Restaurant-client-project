import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My sanity portfolio",
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
      <body className={inter.className}>
        <header className="flex items-center justify-around my-6 text-xl">
          <Link href="/" className="text-2xl font-extrabold">Home</Link>
          <div className="flex items-center gap-4 text-lg text-gray-600">
            {pages.map((page) => (
              <Link href={`/${page.slug}`} key={page._id} className="hover:underline">
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
