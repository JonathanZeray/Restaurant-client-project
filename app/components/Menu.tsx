import {
  getWoks,
  getCurrys,
  getNoodles,
  getTillval,
  getNoodlesTillval,
  getPopular,
  getExtraFood,
  getExtraSides,
  getHours,
} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Menu() {
  const woks = await getWoks();
  const tillval = await getTillval();
  const currys = await getCurrys();
  const noodles = await getNoodles();
  const noodlesTillval = await getNoodlesTillval();
  const popular = await getPopular();
  const extraFood = await getExtraFood();
  const extraSides = await getExtraSides();
  const openingHours = await getHours();

  return (
    <>
      <div className="w-full flex flex-col px-8 sm:px-16">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-extrabold text-6xl mb-12">Meny</h2>
          <h3 className="font-bold text-xl mb-4">Tillval för meny 1-15</h3>
          {tillval.map((till) => (
            <div
              key={till._id}
              className="flex justify-between w-full sm:w-1/3"
            >
              <h3 className="text-xl">{till.name}</h3>
              <h3 className="text-lg">
                <span className="text-red-500">{till.price}</span> kr
              </h3>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <div className=" mb-6">
            <h3 className="font-bold text-4xl">
              Wok rätter, ris ingår <br /> (Byte till nudlar: 20kr extra)
            </h3>
            <h4 className="text-red-500 flex flex-col">
              <p>*Lite stark</p>
              <p>**Medium stark</p>
              <p>***Mycket stark</p>
            </h4>
          </div>
          {woks.map((wok) => (
            <div key={wok._id} className="mb-4">
              <div className="flex items-center justify-between w-full sm:w-2/3">
                <h3 className="font-bold text-3xl text-[#F28C28]">
                  {wok.name}
                </h3>
              </div>
              <PortableText value={wok.content} />
            </div>
          ))}
        </div>
        <div className="mb-12">
          <div className="flex flex-col mb-6">
            <h3 className="font-bold text-4xl">
              Curry rätter, ris ingår <br /> (Byte till nudlar: 20kr extra)
            </h3>
            <p className="text-red-500"># All currypaste innehåller räkor</p>
            <p className="text-red-500">## Glutenfri</p>
            <p className="text-red-500">### Kan innehålla mjölk</p>
          </div>
          {currys.map((curry) => (
            <div key={curry._id} className="mb-4">
              <div className="flex items-center justify-between w-full sm:w-2/3">
                <h3 className="font-bold text-3xl text-[#F28C28]">
                  {curry.name}
                </h3>
                <h3>{curry.price ? `${curry.price} kr` : ""}</h3>
              </div>
              <PortableText value={curry.content} />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="font-bold text-xl mt-12 mb-4">
            Tillval för nudelrätter
          </h3>
          {noodlesTillval.map((nudTill) => (
            <div
              key={nudTill._id}
              className="flex justify-between w-full sm:w-1/3"
            >
              <h3 className="text-xl">{nudTill.name}</h3>
              <h3 className="text-lg">
                <span className="text-red-500">{nudTill.price}</span> kr
              </h3>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <h3 className="font-bold text-4xl mb-6">Nudelrätter</h3>
          {noodles.map((noodle) => (
            <div key={noodle._id} className="mb-4">
              <div className="flex items-center justify-between w-full sm:w-2/3">
                <h3 className="font-bold text-3xl text-[#F28C28]">
                  {noodle.name}
                </h3>
              </div>
              <PortableText value={noodle.content} />
            </div>
          ))}
        </div>
        <h3 className="font-bold text-4xl mb-6">
          Populära rätter, ris ingår <br /> (Byte till nudlar: 20kr extra)
        </h3>
        <div>
          {popular.map((pop) => (
            <div key={pop._id} className="mb-4">
              <div className="flex items-center justify-between w-full sm:w-2/3">
                <h3 className="font-bold text-3xl text-[#F28C28]">
                  {pop.name}
                </h3>
                <h3>{pop.price ? `${pop.price} kr` : ""}</h3>
              </div>
              <PortableText value={pop.content} />
            </div>
          ))}
        </div>
        <h3 className="font-bold text-2xl my-12">Tillbehör, vid sidan av</h3>
        <div>
          {extraSides.map((extra) => (
            <div key={extra._id} className="mb-4">
              <div className="flex items-center justify-between w-full sm:w-2/3">
                <h3 className="font-bold text-xl text-[#F28C28]">
                  {extra.name}
                </h3>
                <h3 className="">{extra.price ? `${extra.price} kr` : ""}</h3>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-2xl my-12 ">Extra tillägg i maten</h3>
        <div>
          {extraFood.map((food) => (
            <div key={food._id} className="mb-4">
              <div className="flex items-center justify-between w-full sm:w-2/3">
                <h3 className="font-bold text-xl text-[#F28C28]">
                  {food.name}
                </h3>
                <h3 className="">{food.price ? `${food.price} kr` : ""}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
