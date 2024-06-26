import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/popup.css";
import "./style/sidebar.css";
import "./style/cart-button.css";
import "./style/input.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tangerine Marketplace",
  description: "By Ting He",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
