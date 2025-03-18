import Header from "@/components/common/Header";
import Hero from "@/components/home/Hero";
import NewArrival from "@/components/home/NewArrival";
import Partner from "@/components/home/Partner";
import TopSell from "@/components/home/TopSell";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partner />
      <NewArrival />
      <TopSell />
    </>
  );
}
