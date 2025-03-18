import {
  CalvinKleinLogo,
  GucciLogo,
  PradaLogo,
  VersaceLogo,
  ZaraLogo,
} from "./icons";

export const HEADER_LIST = [
  {
    title: "Shop",
    link: "#shop",
    submenu: [
      { title: "item 1", link: "#item 1" },
      { title: "item 2", link: "#item 2" },
      { title: "item 3", link: "#item 3" },
    ],
  },
  {
    title: "On Sale",
    link: "#on-sale",
  },
  {
    title: "New Arrivals",
    link: "#new-arrivals",
  },
  {
    title: "Brands",
    link: "#brands",
  },
];

export const PARTNER_LIST = [
  <VersaceLogo logoClassName="max-sm:w-[116px]" />,
  <ZaraLogo logoClassName="max-sm:w-[64px]" />,
  <GucciLogo logoClassName="max-sm:w-[109px]" />,
  <PradaLogo logoClassName="max-sm:w-[127px]" />,
  <CalvinKleinLogo logoClassName="max-sm:w-[134px]" />,
];
