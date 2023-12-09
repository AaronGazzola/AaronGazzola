import type { Metadata } from "next";
import "styles/globals.css";
import Layout from "@/UI/Layout";

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
      <body className="text-gray-200 flex flex-col items-center justify-between font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
