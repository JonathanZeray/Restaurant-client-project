import React from "react";
import { getImage } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function HomeImage() {
  const restaurantImage = await getImage();

  return (
    <div className="w-full flex justify-center py-6">
      {restaurantImage.map((image) => (
        <div key={image._id} className="w-full sm:w-1/2">
          <Image
            src={image.imageUrl}
            alt={image.alt}
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </div>
  );
}
