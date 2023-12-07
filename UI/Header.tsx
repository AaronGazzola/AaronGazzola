"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";

const Header = () => {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <>
      <div
        className={[
          "flex flex-col items-center my-5 px-5 sm:mb-6 opacity-0 text-center uppercase",
          bgIsLoaded ? "fade-in-layout" : "",
        ].join(" ")}
      >
        <h1 className="text-xxl sm:text-xxxl mb-2 p-0 expanded font-semibold font-brand">
          Aaron Gazzola
        </h1>
        <p className="font-thin tracking-widest text-sm sm:text-base font-brand">
          Full-stack TypeScript Development
        </p>
      </div>
    </>
  );
};

export default Header;
