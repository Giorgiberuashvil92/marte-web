import {
  FaCar,
  FaBell,
  FaWrench,
  FaTruckLoading,
  FaGasPump,
  FaShieldAlt,
} from "react-icons/fa";

export interface FeatureCard {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconColor: string;
}

export const featureCards: FeatureCard[] = [
  {
    id: 1,
    icon: FaCar,
    title: "ავტორეცხვა",
    description:
      "შენი მანქანა ყოველთვის სუფთა და მბზინავი. დაჯავშნე რეცხვა რამდენიმე წამში, ნებისმიერ დროს, ნებისმიერ ადგილზე.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    icon: FaBell,
    title: "ჭკვიანი შეტყობინებები",
    description:
      "იყავი ინფორმირებული ჯარიმების, სერვისების დროისა და მნიშვნელოვანი განახლებების შესახებ. ავტომატური შეხსენებები უზრუნველყოფს კომფორტს.",
    iconColor: "bg-teal-500",
  },
  {
    id: 3,
    icon: FaWrench,
    title: "ავტონაწილების მაღაზია",
    description:
      "იპოვე ორიგინალური ნაწილები და აქსესუარები შენი მანქანისთვის. კონკურენტული ფასები და სწრაფი მიწოდება მთელი საქართველოს მასშტაბით.",
    iconColor: "bg-blue-500",
  },
  {
    id: 4,
    icon: FaTruckLoading,
    title: "გადაუდებელი დახმარება",
    description:
      "გამოიძახე ევაკუატორი და საგზაო დახმარება რამდენიმე შეხებით. ჩვენი გუნდი მზადაა დაგეხმაროს 24/7, როდესაც ყველაზე მეტად გჭირდება.",
    iconColor: "bg-purple-500",
  },
  {
    id: 5,
    icon: FaGasPump,
    title: "საწვავის ფასდაკლება",
    description:
      "დაზოგე ფული საწვავზე ექსკლუზიური ფასდაკლებებით. უბრალოდ დაასკანერე QR კოდი პარტნიორ ბენზინგასამართ სადგურებზე და ისარგებლე შეღავათით.",
    iconColor: "bg-yellow-500",
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: "უსაფრთხო და საიმედო",
    description:
      "შენი მონაცემები დაცულია ბანკის დონის უსაფრთხოებით. საიმედო სერვისი უწყვეტი მუშაობით უზრუნველყოფს მაქსიმალურ კომფორტს.",
    iconColor: "bg-pink-500",
  },
];
