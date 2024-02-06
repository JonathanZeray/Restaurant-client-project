import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Inter } from "next/font/google";

type Props = {
  params: { slug: string };
};

const inter = Inter({ subsets: ["latin"] });

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <div className="menu-page flex flex-col ml-8 mx-8">
      <h1 className="my-12 font-extrabold text-5xl">{page.title}</h1>
      <div className={inter.className}>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
