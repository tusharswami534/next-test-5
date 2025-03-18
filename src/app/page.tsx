import About from "@/components/common/About";
import Header from "@/components/common/Header";
import DressStyle from "@/components/home/DressStyle";
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
      <DressStyle />
      <About />
    </>
  );
}
