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
    title: "Home",
    description: "Welcome to Cargo - Your all-in-one car management solution",
    href: "/",
    isComingSoon: false,
  },
  {
    id: "services",
    title: "Services",
    description: "Discover our comprehensive car services and solutions",
    href: "/services",
    isComingSoon: true,
  },
  {
    id: "about",
    title: "About Us",
    description: "Learn more about our mission and team",
    href: "/about",
    isComingSoon: true,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team",
    href: "/contact",
    isComingSoon: true,
  },
];
