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
    title: "Car wash",
    description:
      "Keep your car shining, anytime, anywhere. Book your wash in seconds.",
    iconColor: "bg-orange-500",
  },
  {
    id: 2,
    icon: FaBell,
    title: "Smart Notifications",
    description:
      "Stay informed about fines, car service reminders, and important updates automatically.",
    iconColor: "bg-teal-500",
  },
  {
    id: 3,
    icon: FaWrench,
    title: "Auto Parts Marketplace",
    description:
      "Find genuine parts and accessories for your vehicle with competitive prices and fast delivery.",
    iconColor: "bg-blue-500",
  },
  {
    id: 4,
    icon: FaTruckLoading,
    title: "Emergency Services",
    description:
      "Request tow truck and emergency roadside assistance with just a few taps when you need it most.",
    iconColor: "bg-purple-500",
  },
  {
    id: 5,
    icon: FaGasPump,
    title: "Fuel Discounts",
    description:
      "Save money on fuel with exclusive discounts. Simply scan QR codes at participating stations.",
    iconColor: "bg-yellow-500",
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security and reliable service uptime.",
    iconColor: "bg-pink-500",
  },
];
