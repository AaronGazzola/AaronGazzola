import type { Metadata } from "next";
import "styles/globals.css";
import Navbar from "./UI/Navbar/Navbar";
import Footer from "./UI/Footer/Footer";
import BackgroundImage from "./UI/BackgroundImage";

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
      <body className="text-brand-900 sans min-h-screen flex flex-col items-center justify-between">
        <Navbar />
        {children}
        <Footer />
        <BackgroundImage />
      </body>
    </html>
  );
}
