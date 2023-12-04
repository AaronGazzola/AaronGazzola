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
      <body className="text-gray-200 sans flex flex-col items-center justify-between min-h-screen">
        <LayoutContextProvider>
          <Navbar />
          {children}
          <Footer />
          <BackgroundImage />
        </LayoutContextProvider>
      </body>
    </html>
  );
}
