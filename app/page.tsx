import { getHours } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Menu from "./components/Menu";
import OrderBtn from "./components/OrderBtn";
import OpenHours from "./components/OpenHours";

export default async function Home() {


  return (
    <>
      <OpenHours />
      <OrderBtn />
      <Menu />
      <OrderBtn />
    </>
  );
}
