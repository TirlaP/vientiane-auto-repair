import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";

import "./globals.css";

const inter = DM_Sans({
   subsets: ["latin"],
   variable: "--body-font",
   display: "swap",
});
const orbitron = Orbitron({
   subsets: ["latin"],
   variable: "--header-font",
   display: "swap",
});

export const metadata: Metadata = {
   title: {
      template: "%s - Vientiane Auto Repair",
      default: "Vientiane Auto Repair - Small neighborhood repair shop with the customer in mind",
   },
   description: "Small neighborhood repair shop with the customer in mind. Auto repair isn't cheap but it doesn't have to break the bank. Liberty Auto Repair in Salt Lake City.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${orbitron.variable}`}>
            {children}
         </body>
      </html>
   );
}
