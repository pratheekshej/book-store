import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Store App",
  description: "Generated by create next app and is powered by redux",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}

export default RootLayout;
