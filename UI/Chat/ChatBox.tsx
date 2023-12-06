"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";
import Message from "./Message";

const ChatBox = () => {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <div
      className={[
        "grow rounded border border-b-gray-900 border-r-gray-800 border-t-gray-600 border-l-gray-700 opacity-0 w-full flex flex-col items-center pt-6 px-7 sm:px-10 sm:pt-8 max-w-xl",
        bgIsLoaded ? "expand" : "",
      ].join(" ")}
    >
      <div
        className={[
          "w-full h-full flex flex-col items-left opacity-0",
          bgIsLoaded ? "fade-in-content" : "",
        ].join(" ")}
      >
        <Message />
      </div>
    </div>
  );
};

export default ChatBox;
