"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";

export default function Home() {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <main className="flex flex-col grow w-full pt-10 px-10 lg:px-24 items-center">
      <div
        className={[
          "flex flex-col items-center mb-5 title opacity-0",
          bgIsLoaded ? "fade-in-layout" : "",
        ].join(" ")}
      >
        <h1 className="text-xxl mb-2 p-0">Aaron Gazzola</h1>
        <p className="subtitle">Full-stack TypeScript Development</p>
      </div>
      <div
        className={[
          "grow rounded border border-b-gray-900 border-r-gray-800 border-t-gray-600 border-l-gray-700 opacity-0 w-full flex flex-col items-center py-4 px-8",
          bgIsLoaded ? "expand" : "",
        ].join(" ")}
      >
        <div
          className={[
            "w-full h-full flex flex-col items-center",
            bgIsLoaded ? "fade-in-content" : "",
          ].join("")}
        >
          <div className={"w-11/12 sm:w-5/6 border self-start"}>test</div>
          <div className={"w-11/12 sm:w-5/6 border self-end text-right"}>
            test
          </div>
        </div>
      </div>
    </main>
  );
}
