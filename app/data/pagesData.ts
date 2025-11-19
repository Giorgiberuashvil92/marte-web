export interface PageData {
  id: string;
  title: string;
  description: string;
  href: string;
  isComingSoon: boolean;
}

export const pagesData: PageData[] = [
  {
    id: "home",
    title: "მთავარი",
    description: "მოგესალმებით Marte-ში - თქვენი მანქანის მართვის ყოვლისმომცველი გადაწყვეტა",
    href: "/",
    isComingSoon: false,
  },
  {
    id: "services",
    title: "სერვისები",
    description: "აღმოაჩინე ჩვენი სრული სპექტრის ავტომობილის სერვისები და გადაწყვეტები",
    href: "/services",
    isComingSoon: false,
  },
  {
    id: "pricing",
    title: "განვადება",
    description: "გადაიხადე ჯარიმები, სერვისები და ნაწილები მოსახერხებელი განვადებით",
    href: "/pricing",
    isComingSoon: false,
  },
  {
    id: "about",
    title: "ჩვენ შესახებ",
    description: "გაიგე მეტი ჩვენი მისიისა და გუნდის შესახებ",
    href: "/about",
    isComingSoon: false,
  },
  {
    id: "contact",
    title: "კონტაქტი",
    description: "დაუკავშირდი ჩვენს გუნდს",
    href: "/contact",
    isComingSoon: false,
  },
];
