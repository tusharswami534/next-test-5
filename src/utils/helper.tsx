import {
  CalvinKleinLogo,
  FaceBookIcon,
  FourAndHalfStart,
  FourStart,
  FullStart,
  GitHubIcon,
  GucciLogo,
  InstagramIcon,
  PradaLogo,
  ThreeAndHalfStart,
  ThreeStart,
  TwitterIcon,
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

export const TAB_LIST = ["Product Details", "Rating & Reviews", "FAQs"];

export const REVIEWS_LIST = [
  {
    reviewsStart: <FourAndHalfStart />,
    userName: "Samantha D.",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    postDate: "Posted on August 14, 2023",
  },
  {
    reviewsStart: <FourStart />,
    userName: "Alex M.",
    description:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    postDate: "Posted on August 15, 2023",
  },
  {
    reviewsStart: <ThreeAndHalfStart />,
    userName: "Ethan R.",
    description:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    postDate: "Posted on August 16, 2023",
  },
  {
    reviewsStart: <FourStart />,
    userName: "Olivia P.",
    description:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    postDate: "Posted on August 17, 2023",
  },
  {
    reviewsStart: <FourStart />,
    userName: "Liam K.",
    description:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    postDate: "Posted on August 18, 2023",
  },
  {
    reviewsStart: <FourAndHalfStart />,
    userName: "Ava H.",
    description:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    postDate: "Posted on August 19, 2023",
  },
];

export const SOCAL_MEDIA_LIST = [
  {
    icon: <TwitterIcon pathClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <FaceBookIcon pathClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <InstagramIcon pathClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <GitHubIcon pathClass="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
];
