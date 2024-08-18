import assets from "@/app/assets";

export const items = [
  {
    label: "MEN'S",
    key: "men",
    children: [
      { label: "BOOT", key: "man-boot", image: assets.images.casual },
      { label: "LOAFER", key: "man-loafer", image: assets.images.casual },
      { label: "SANDALS", key: "man-sandal", image: assets.images.casual },
      { label: "CASUAL", key: "man-casual", image: assets.images.casual },
      { label: "FORMAL", key: "man-formal", image: assets.images.casual },
      { label: "SPORTS", key: "man-sport", image: assets.images.casual },
    ],
  },
  {
    label: "WOMEN'S",
    key: "women",
    children: [
      { label: "BOOT", key: "women-boot", image: assets.images.casual },
      { label: "LOAFER", key: "women-loafer", image: assets.images.casual },
      { label: "CASUAL", key: "women-casual", image: assets.images.casual },
      { label: "SANDALS", key: "women-sandal", image: assets.images.casual },
      { label: "FORMAL", key: "women-formal", image: assets.images.casual },
      { label: "SPORTS", key: "women-sport", image: assets.images.casual },
    ],
  },
  {
    label: "KID'S",
    key: "kid",
    children: [
      { label: "CASUAL", key: "kid-casual", image: assets.images.casual },
      { label: "FORMAL", key: "kid-formal", image: assets.images.casual },
      { label: "SPORT", key: "kid-sport", image: assets.images.casual },
    ],
  },
];
