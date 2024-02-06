import { getHours } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Menu from "./components/Menu";

export default async function Home() {
  const openingHours = await getHours();

  return (
    <>
      <div className="w-full flex justify-center py-8">
        <button className="order-btn rounded-lg border-2 border-[#F28C28] p-3 text-xl font-semibold">
          <a
            href="https://www.foodbooking.com/api/fb/_wk_x_q_g"
            target="_blank"
          >
            Beställ online
          </a>
        </button>
      </div>
      <Menu />
    </>
  );
}
