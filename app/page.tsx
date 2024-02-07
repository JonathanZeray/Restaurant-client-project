import Menu from "./components/Menu";
import OrderBtn from "./components/OrderBtn";
import OpenHours from "./components/OpenHours";
import HomeImage from "./components/HomeImage";

export default async function Home() {
  return (
    <>
      <HomeImage />
      <OpenHours />
      <OrderBtn />
      <Menu />
      <OrderBtn />
    </>
  );
}
