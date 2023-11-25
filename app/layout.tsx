import type { Metadata } from "next";
import "styles/globals.css";
import NavBar from "./UI/Navbar/Navbar";
import Footer from "./UI/Footer/Footer";

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
      <body className="text-brand-900 sans min-h-screen flex flex-col items-center justify-center">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
