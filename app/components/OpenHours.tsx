import { getHours } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';

export default async function OpenHours() {
  const openingHours = await getHours();

  return (
    <div className="flex justify-center items-center mt-2">
    {openingHours.map((hours) => (
      <div key={hours._id} className="text-center">
        {hours.name}
        <div className="opening-hours flex flex-col md:flex-row">
          <PortableText value={hours.content} />
        </div>
      </div>
    ))}
  </div>
  )
}