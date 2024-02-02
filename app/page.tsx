import { getHours } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Menu from "./components/Menu";

export default async function Home() {
  const openingHours = await getHours();

  return (
    <>
      <div className="">
        {openingHours.map((hour) => (
          <div
            key={hour._id}
            className="flex flex-col items-center w-full sm:w-full"
          >
            <h3 className="text-6xl">{hour.name}</h3>
            <h3 className="mt-4 mb-12 text-xl">
              <PortableText value={hour.content} />
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
