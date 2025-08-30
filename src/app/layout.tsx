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
      default: "Vientiane Auto Repair - Family Owned Auto Service Since 1994",
   },
   description: "Laotian family-owned auto repair in Salt Lake City since 1994. Honest service, fair pricing, and 30+ years experience. Call (801) 281-4681 for appointments.",
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
