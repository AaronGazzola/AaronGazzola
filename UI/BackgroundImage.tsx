"use client";
import { LayoutContext } from "@/context/layoutContext";
import Image from "next/image";
import { useContext } from "react";
const BackgroundImage = () => {
  const { bgIsLoaded, onBgLoad } = useContext(LayoutContext);
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className={[
          "absolute inset-0 bg-black z-10",
          bgIsLoaded ? "bg-overlay" : "",
        ].join(" ")}
      />
      <Image
        className="h-full object-cover object-center bg-image"
        src="/bg.jpg"
        alt="Background image"
        width={7319}
        height={3910}
        onLoad={onBgLoad}
      />
    </div>
  );
};

export default BackgroundImage;
