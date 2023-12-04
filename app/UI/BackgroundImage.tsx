"use client";
import Image from "next/image";
import { useState } from "react";
const BackgroundImage = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className={[
          "absolute inset-0 bg-black z-10",
          imageIsLoaded ? "bg-overlay" : "",
        ].join(" ")}
      />
      <Image
        className="h-full object-cover object-center bg-image"
        src="/bg.jpg"
        alt="Background image"
        width={7319}
        height={3910}
        onLoadingComplete={() => setImageIsLoaded(true)}
      />
    </div>
  );
};

export default BackgroundImage;
