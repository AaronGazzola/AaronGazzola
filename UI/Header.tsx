"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";

const Header = () => {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <>
      <div
        className={[
          "flex flex-col items-center my-5 px-5 opacity-0 text-center uppercase",
          bgIsLoaded ? "fade-in-layout" : "",
        ].join(" ")}
      >
        <h1 className="text-xxl mb-2 p-0 expanded">Aaron Gazzola</h1>
        <p className="font-thin tracking-widest">
          Full-stack TypeScript Development
        </p>
      </div>
    </>
  );
};

export default Header;
