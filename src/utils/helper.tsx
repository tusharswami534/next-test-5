import {
  CalvinKleinLogo,
  FourAndHalfStart,
  FourStart,
  FullStart,
  GucciLogo,
  PradaLogo,
  ThreeStart,
  VersaceLogo,
  ZaraLogo,
} from "./icons";

interface HeaderListType {
  title: string;
  link: string;
  submenu?: { title: string; link: string }[];
}

export interface SellItemsType {
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

export const NEW_ARRIVALS_LIST: SellItemsType[] = [
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
    productPrice: 240,
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
    productPrice: 180,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "SLEEVE STRIPED T-SHIRT",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 130,
    discount: -30,
    price: 160,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];
export const TOP_SELLING_LIST: SellItemsType[] = [
  {
    product: "/assets/image/webp/vertical-striped-shirt.webp",
    productTitle: "VERTICAL STRIPED SHIRT",
    productRatingStart: <FullStart />,
    productRating: 5,
    productPrice: 212,
    discount: -20,
    price: 232,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/courage-graphic-t-shirt.webp",
    productTitle: "COURAGE GRAPHIC T-SHIRT",
    productRatingStart: <FourStart />,
    productRating: 4,
    productPrice: 145,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/loose-fit-bermuda-shorts.webp",
    productTitle: "LOOSE FIT BERMUDA SHORTS",
    productRatingStart: <ThreeStart />,
    productRating: 3,
    productPrice: 80,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/faded-skinny-jeans.webp",
    productTitle: "FADED SKINNY JEANS",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 210,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];
