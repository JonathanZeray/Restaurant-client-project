import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Inter } from "next/font/google";
import OrderBtn from "../components/OrderBtn";

type Props = {
  params: { slug: string };
};

const inter = Inter({ subsets: ["latin"] });

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  const renderOrderBtn = params.slug === "lunchmeny";

  return (
    <div className="flex flex-col ml-8 mx-8 mt-12">
      <h1 className="mb-12 sm:mb-4 font-extrabold text-5xl">{page.title}</h1>
      <div className="lunch-order_btn">{renderOrderBtn && <OrderBtn />}</div>
      <div className={inter.className}>
        <div className="menu-page">
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  );
}
