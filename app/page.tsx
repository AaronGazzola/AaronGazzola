"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";

export default function Home() {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <main className="flex flex-col grow w-full py-10 px-10 lg:px-24">
      <div
        className={[
          "grow rounded border border-b-gray-900 border-r-gray-800 border-t-gray-600 border-l-gray-700 opacity-0",
          bgIsLoaded ? "expand" : "",
        ].join(" ")}
      ></div>
    </main>
  );
}
