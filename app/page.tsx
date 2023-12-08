"use client";
import ChatBox from "@/UI/Chat/ChatBox";
import { LexicalComposer } from "@lexical/react/LexicalComposer";

const theme = {};

function onError(error: any) {
  console.error(error);
}

const initialConfig = {
  namespace: "MyEditor",
  theme,
  onError,
};

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full px-5 sm:px-10 items-center relative">
      <LexicalComposer initialConfig={initialConfig}>
        <ChatBox />
      </LexicalComposer>
    </main>
  );
}
