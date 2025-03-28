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
  productImageTwo?: string;
  productImageThree?: string;
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
    link: "#new-arrival",
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

export const HAPPY_CUSTOMERS_LIST = [
  {
    reviewsStart: <FullStart />,
    userName: "Sarah M.",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    reviewsStart: <FullStart />,
    userName: "Alex K.",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    reviewsStart: <FullStart />,
    userName: "James L.",
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    reviewsStart: <FullStart />,
    userName: "Sarah M.",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    reviewsStart: <FullStart />,
    userName: "Alex K.",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    reviewsStart: <FullStart />,
    userName: "James L.",
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export const COUNT_LIST = [
  {
    description: "International Brands",
  },
  {
    description: "High-Quality Products",
  },
  {
    description: "Happy Customers",
  },
];

export const NEW_ARRIVALS_LIST: SellItemsType[] = [
  {
    product: "/assets/image/webp/t-shirt-tape-details.webp",
    productImageTwo: "/assets/image/webp/vertical-striped-shirt.webp",
    productImageThree: "/assets/image/webp/checkered-shirt.webp",
    productTitle: "T-shirt with Tape Details",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 120,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/skinny-fit-jeans.webp",
    productImageTwo: "/assets/image/webp/loose-fit-bermuda-shorts.webp",
    productImageThree: "/assets/image/webp/faded-skinny-jeans.webp",
    productTitle: "Skinny Fit Jeans",
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
    productImageTwo: "/assets/image/webp/vertical-striped-shirt.webp",
    productImageThree: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "Checkered Shirt",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 180,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productImageTwo: "/assets/image/webp/vertical-striped-shirt.webp",
    productImageThree: "/assets/image/webp/checkered-shirt.webp",
    productTitle: "Sleeve Striped T-shirt",
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
    productImageTwo: "/assets/image/webp/checkered-shirt.webp",
    productImageThree: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "Vertical Striped Shirt",
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
    productImageTwo: "/assets/image/webp/vertical-striped-shirt.webp",
    productImageThree: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "Courage Graphic T-shirt",
    productRatingStart: <FourStart />,
    productRating: 4,
    productPrice: 145,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/loose-fit-bermuda-shorts.webp",
    productImageTwo: "/assets/image/webp/faded-skinny-jeans.webp",
    productImageThree: "/assets/image/webp/skinny-fit-jeans.webp",
    productTitle: "Loose Fit Bermuda Shorts",
    productRatingStart: <ThreeStart />,
    productRating: 3,
    productPrice: 80,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/faded-skinny-jeans.webp",
    productImageTwo: "/assets/image/webp/loose-fit-bermuda-shorts.webp",
    productImageThree: "/assets/image/webp/skinny-fit-jeans.webp",
    productTitle: "Faded Skinng Jeans",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 210,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
];

export const ALSO_LIST_LIST: SellItemsType[] = [
  {
    product: "/assets/image/webp/polo-with-contrast-trims.webp",
    productImageTwo: "/assets/image/webp/checkered-shirt.webp",
    productImageThree: "/assets/image/webp/polo-with-tipping-details.webp",
    productTitle: "Polo with Contrast Trims",
    productRatingStart: <FourStart />,
    productRating: 4,
    productPrice: 212,
    discount: -20,
    price: 222,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/gradient-graphic-t-shirt.webp",
    productImageTwo: "/assets/image/webp/vertical-striped-shirt.webp",
    productImageThree: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "Gradient Graphic T-shirt",
    productRatingStart: <ThreeAndHalfStart />,
    productRating: 3,
    productPrice: 145,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/polo-with-tipping-details.webp",
    productImageTwo: "/assets/image/webp/black-striped-t-shirt.webp",
    productImageThree: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "Polo with Tipping Details",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 180,
    productDescription:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },
  {
    product: "/assets/image/webp/black-striped-t-shirt.webp",
    productImageTwo: "/assets/image/webp/polo-with-tipping-details.webp",
    productImageThree: "/assets/image/webp/sleeve-striped-t-shirt.webp",
    productTitle: "Black Striped T-shirt",
    productRatingStart: <FourAndHalfStart />,
    productRating: 4.5,
    productPrice: 120,
    discount: -30,
    price: 150,
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

export const FOOTER_SOCAL_MEDIA_LIST = [
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

export const FOOTER_LIST = [
  {
    title: "Company",
    list: [
      { title: "About", link: "/about" },
      { title: "Features", link: "/features" },
      { title: "Works", link: "/works" },
      { title: "Career", link: "/career" },
    ],
  },
  {
    title: "Help",
    list: [
      { title: "Customer Support", link: "/customer-support" },
      { title: "Delivery-details", link: "/delivery-details" },
      { title: "Terms & Conditions", link: "/terms-conditions" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  {
    title: "FAQ",
    list: [
      { title: "Account", link: "/about" },
      { title: "Manage Deliveries", link: "/manage-deliveries" },
      { title: "Orders", link: "/orders" },
      { title: "Payments", link: "/payments" },
    ],
  },
  {
    title: "Resources",
    list: [
      { title: "Free eBooks", link: "/free-ebooks" },
      { title: "Development Tutorial", link: "/development-tutorial" },
      { title: "How to - Blog", link: "/how-to-blog" },
      { title: "Youtube Playlist", link: "/youtube-playlist" },
    ],
  },
];

export const PAYMENTS_METHOD_LIST = [
  "/assets/image/webp/visa.webp",
  "/assets/image/webp/master-card.webp",
  "/assets/image/webp/paypal.webp",
  "/assets/image/webp/apple-pay.webp",
  "/assets/image/webp/g-pay.webp",
];

export const SELECT_COLOR = ["bg-dark-brown", "bg-dark-green", "bg-dark-blue"];

export const SELECT_SIZE = ["Small", "Medium", "Large", "X-Large"];
