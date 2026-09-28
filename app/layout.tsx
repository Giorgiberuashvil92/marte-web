import type { Metadata } from "next";
import { Inter, Noto_Sans_Georgian, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-sans-georgian",
  subsets: ["georgian"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marte - მართე შენი მანქანა",
  description: "Marte - თანამედროვე პლატფორმა მანქანის მართვისთვის. ავტორეცხვა, ჯარიმების შემოწმება, ნაწილების ყიდვა და ბევრი სხვა ერთ ადგილას.",
  keywords: "marte, მანქანა, ავტორეცხვა, ავტონაწილები, ევაკუატორი, ჯარიმები, საწვავი",
  authors: [{ name: "Marte Team" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Marte - შენი მანქანის მართვა",
    description: "ყველა სერვისი შენი მანქანისთვის ერთ აპლიკაციაში",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body
        className={`${inter.variable} ${notoSansGeorgian.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
