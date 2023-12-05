"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";
import Message from "./Message";

const ChatBox = () => {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <div
      className={[
        "grow rounded border border-b-gray-900 border-r-gray-800 border-t-gray-600 border-l-gray-700 opacity-0 w-full flex flex-col items-center py-4 px-4 sm:px-8 max-w-[780px]",
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
