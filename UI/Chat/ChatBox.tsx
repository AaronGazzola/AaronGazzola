"use client";
import { LayoutContext } from "@/context/layoutContext";
import { useContext } from "react";
import Message, { Role } from "./Message";
import Editor from "./Editor/Editor";

const ChatBox = () => {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <div className="absolute top-0 bottom-0">
      <div
        className={[
          "grow rounded border border-b-gray-900 border-r-gray-800 border-t-gray-600 border-l-gray-700 opacity-0 w-full flex flex-col items-center pr-3 pt-4 max-w-[650px] h-full",
          bgIsLoaded ? "expand" : "",
        ].join(" ")}
      >
        <div
          className={[
            "w-full h-full flex flex-col items-left opacity-0",
            bgIsLoaded ? "fade-in-content" : "",
          ].join(" ")}
        >
          <div className="grow scrollbar scrollbar-track scrollbar-thumb overflow-y-scroll pr-7 sm:pr-10 pt-3">
            <Message role={Role.AI} />
            <Message role={Role.User} />
            <Message role={Role.Admin} />
          </div>
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
