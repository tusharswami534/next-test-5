import {
  CalvinKleinLogo,
  FourAndHalfStart,
  GucciLogo,
  PradaLogo,
  VersaceLogo,
  ZaraLogo,
} from "./icons";

interface HeaderListType {
  title: string;
  link: string;
  submenu?: { title: string; link: string }[];
}

interface NewArrivalType {
  product: string;
  productTitle: string;
  productRatingStart: any;
  productRating: number;
  productPrice: number;
  discount?: number;
  price?: number;
  productDescription: string;
}

export const HEADER_LIST: HeaderListType[] = [
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

export const PARTNER_LIST: any = [
  <VersaceLogo logoClassName="max-sm:w-[116px]" />,
  <ZaraLogo logoClassName="max-sm:w-[64px]" />,
  <GucciLogo logoClassName="max-sm:w-[109px]" />,
  <PradaLogo logoClassName="max-sm:w-[127px]" />,
  <CalvinKleinLogo logoClassName="max-sm:w-[134px]" />,
];

export const NEW_ARRIVALS_LIST: NewArrivalType[] = [
  {
    product: "/assets/image/webp/t-shirt-tape-details.webp",
    productTitle: "T-SHIRT WITH TAPE DETAILS",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 120,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/skinny-fit-jeans.webp",
    productTitle: "SKINNY FIT JEANS",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 120,
    discount: -20,
    price: 260,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/checkered-shirt.webp",
    productTitle: "CHECKERED SHIRT",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 120,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "SLEEVE STRIPED T-SHIRT",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 120,
    discount: -20,
    price: 260,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];
