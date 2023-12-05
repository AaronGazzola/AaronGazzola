import type { Metadata } from "next";
import "styles/globals.css";
import Navbar from "./UI/Navbar/Navbar";
import Footer from "./UI/Footer/Footer";
import BackgroundImage from "./UI/BackgroundImage";
import { LayoutContextProvider } from "@/context/layoutContext";

export const metadata: Metadata = {
  title: "Gazzola Development",
  description: "Aaron Gazzola's web development portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/icon.ico" />
      </head>
      <body className="text-gray-200 sans flex flex-col items-center justify-between h-screen">
        <LayoutContextProvider>
          {children}
          <Footer />
          <BackgroundImage />
        </LayoutContextProvider>
      </body>
    </html>
  );
}
