"use client";
import useBodyHeight from "@/hooks/useBodyHeight";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundImage from "./BackgroundImage";

const Layout = ({ children }: { children: ReactNode }) => {
  useBodyHeight();
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackgroundImage />
    </>
  );
};

export default Layout;
